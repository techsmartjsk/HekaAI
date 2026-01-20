"use client";

import { useState, useEffect, useRef } from "react";
import { Mic, MicOff, Loader2, X, MessageSquare, NotebookPen } from "lucide-react";
import toast from "react-hot-toast";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "https://backend.hekaai.co/api/v1";

interface TalkToHekaWidgetProps {
  onClose?: () => void;
  initialOpen?: boolean;
}

interface Message {
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

export default function TalkToHekaWidget({ onClose, initialOpen = false }: TalkToHekaWidgetProps = {}) {
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(initialOpen);
  const [isConnected, setIsConnected] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [voiceGender, setVoiceGender] = useState<"male" | "female">("male");
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showTranscript, setShowTranscript] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);

  const wsRef = useRef<WebSocket | null>(null);
  const recognitionRef = useRef<any>(null);
  const audioQueueRef = useRef<HTMLAudioElement[]>([]);
  const audioChunksRef = useRef<string[]>([]);
  const isPlayingRef = useRef<boolean>(false);
  const audioTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const currentAudioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    setMounted(true);
    return () => {
      if (wsRef.current) {
        wsRef.current.close();
      }
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
    };
  }, []);

  useEffect(() => {
    if (initialOpen && !isConnected && !isLoading) {
      setIsOpen(true);
      const timer = setTimeout(async () => {
        if (!wsRef.current || wsRef.current.readyState !== WebSocket.OPEN) {
          setIsLoading(true);
          await connectWebSocket();
        }
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [initialOpen]);

  const connectWebSocket = async () => {
    if (wsRef.current?.readyState === WebSocket.OPEN) {
      return;
    }

    try {
      const voiceId = voiceGender === "female" ? "EXAVITQu4vr4xnSDxMaL" : "21m00Tcm4TlvDq8ikWAM";
      let wsUrl = API_URL.replace("http://", "ws://").replace("https://", "wss://");
      const wsPath = `${wsUrl}/public/ws/chat?voice_id=${voiceId}`;
      const ws = new WebSocket(wsPath);

      ws.onopen = () => {
        setIsConnected(true);
        setIsLoading(false);

        setTimeout(() => {
          startRecording();
        }, 1000);
      };

      ws.onmessage = async (event) => {
        const data = JSON.parse(event.data);

        if (data.type === "message") {
          setMessages(prev => [...prev, {
            role: data.role,
            content: data.content,
            timestamp: new Date()
          }]);
          audioChunksRef.current = [];
          isPlayingRef.current = false;
        } else if (data.type === "audio") {
          audioChunksRef.current.push(data.data);

          if (audioTimeoutRef.current) {
            clearTimeout(audioTimeoutRef.current);
          }

          audioTimeoutRef.current = setTimeout(() => {
            if (!isPlayingRef.current && audioChunksRef.current.length > 0) {
              playAccumulatedAudio();
            }
          }, 500);
        } else if (data.type === "transcript") {
          setMessages(prev => [...prev, {
            role: "user",
            content: data.content,
            timestamp: new Date()
          }]);
        } else if (data.type === "error") {
          toast.error(data.message || "An error occurred");
        }
      };

      ws.onerror = (error) => {
        toast.error("Connection error. Please try again.");
        setIsConnected(false);
        setIsLoading(false);
      };

      ws.onclose = () => {
        setIsConnected(false);
        setIsLoading(false);
      };

      wsRef.current = ws;
    } catch (error) {
      toast.error("Failed to connect. Please try again.");
      setIsLoading(false);
    }
  };

  const playAccumulatedAudio = async () => {
    if (isPlayingRef.current || audioChunksRef.current.length === 0) {
      return;
    }

    if (currentAudioRef.current) {
      try {
        currentAudioRef.current.pause();
        currentAudioRef.current.currentTime = 0;
      } catch (e) {
      }
    }

    isPlayingRef.current = true;

    try {
      const audioDataArrays: Uint8Array[] = [];
      let totalLength = 0;

      for (const base64Chunk of audioChunksRef.current) {
        try {
          const chunkData = Uint8Array.from(atob(base64Chunk), c => c.charCodeAt(0));
          audioDataArrays.push(chunkData);
          totalLength += chunkData.length;
        } catch (e) {
        }
      }

      const combinedAudioData = new Uint8Array(totalLength);
      let offset = 0;
      for (const chunk of audioDataArrays) {
        combinedAudioData.set(chunk, offset);
        offset += chunk.length;
      }

      const blob = new Blob([combinedAudioData], { type: "audio/mpeg" });
      const audioUrl = URL.createObjectURL(blob);
      const audio = new Audio(audioUrl);
      currentAudioRef.current = audio;

      audio.onplay = () => {
        setIsSpeaking(true);
      };

      audio.onended = () => {
        setIsSpeaking(false);
        URL.revokeObjectURL(audioUrl);
        isPlayingRef.current = false;
        audioChunksRef.current = [];
        currentAudioRef.current = null;
      };

      audio.onerror = (e) => {
        toast.error("Failed to play audio");
        URL.revokeObjectURL(audioUrl);
        setIsSpeaking(false);
        isPlayingRef.current = false;
        currentAudioRef.current = null;
      };

      audio.onloadedmetadata = () => {
      };

      try {
        await audio.play();
      } catch (playError) {
        toast.error("Click anywhere to enable audio playback");
        isPlayingRef.current = false;
        currentAudioRef.current = null;
      }
    } catch (error) {
      toast.error("Failed to process audio");
      isPlayingRef.current = false;
      currentAudioRef.current = null;
    }
  };

  const playAudioChunk = async (base64Audio: string) => {
    try {
      const audioData = Uint8Array.from(atob(base64Audio), c => c.charCodeAt(0));

      const blob = new Blob([audioData], { type: "audio/mpeg" });
      const audioUrl = URL.createObjectURL(blob);
      const audio = new Audio(audioUrl);

      audioQueueRef.current.push(audio);

      audio.onplay = () => {
        setIsSpeaking(true);
      };

      audio.onended = () => {
        setIsSpeaking(false);
        URL.revokeObjectURL(audioUrl);
        audioQueueRef.current = audioQueueRef.current.filter(a => a !== audio);
      };

      audio.onerror = (e) => {
        toast.error("Failed to play audio");
        URL.revokeObjectURL(audioUrl);
        audioQueueRef.current = audioQueueRef.current.filter(a => a !== audio);
      };

      audio.onloadedmetadata = () => {
      };

      if (audioQueueRef.current.length === 1) {
        try {
          await audio.play();
        } catch (playError) {
          toast.error("Click anywhere to enable audio playback");
        }
      } else {
        const prevAudio = audioQueueRef.current[audioQueueRef.current.length - 2];
        prevAudio.onended = async () => {
          URL.revokeObjectURL(audioUrl);
          try {
            await audio.play();
          } catch (playError) {
          }
        };
      }
    } catch (error) {
      toast.error("Failed to process audio");
    }
  };

  const startRecording = () => {
    try {
      const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

      if (!SpeechRecognition) {
        toast.error("Speech recognition not supported in this browser. Please use Chrome or Edge.");
        return;
      }

      const recognition = new SpeechRecognition();
      recognition.continuous = true;
      recognition.interimResults = true;
      recognition.lang = "en-US";

      recognition.onresult = (event: any) => {
        let finalTranscript = "";

        for (let i = event.resultIndex; i < event.results.length; i++) {
          const transcript = event.results[i][0].transcript;
          if (event.results[i].isFinal) {
            finalTranscript += transcript + " ";
          }
        }

        if (finalTranscript.trim() && wsRef.current?.readyState === WebSocket.OPEN) {
          const userMessage = finalTranscript.trim();

          setMessages(prev => [...prev, {
            role: "user",
            content: userMessage,
            timestamp: new Date()
          }]);

          wsRef.current.send(JSON.stringify({
            type: "text",
            content: userMessage
          }));
        }
      };

      recognition.onerror = (event: any) => {
        if (event.error === "no-speech") {
          return;
        }
        if (event.error !== "aborted") {
          toast.error(`Speech recognition error: ${event.error}`);
        }
        setIsRecording(false);
      };

      recognition.onend = () => {
        if (isRecording) {
          try {
            recognition.start();
          } catch (e) {
            setIsRecording(false);
          }
        }
      };

      recognition.start();
      recognitionRef.current = recognition;
      setIsRecording(true);
    } catch (error) {
      toast.error("Failed to start speech recognition. Please allow microphone access.");
      setIsRecording(false);
    }
  };

  const stopRecording = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
      recognitionRef.current = null;
      setIsRecording(false);
    }
  };

  const handleStartChat = async () => {
    setIsLoading(true);
    await connectWebSocket();
  };

  const handleClose = () => {
    if (wsRef.current) {
      wsRef.current.close();
    }
    if (recognitionRef.current) {
      stopRecording();
    }
    if (currentAudioRef.current) {
      currentAudioRef.current.pause();
      currentAudioRef.current = null;
    }
    if (audioTimeoutRef.current) {
      clearTimeout(audioTimeoutRef.current);
    }
    setIsOpen(false);
    setMessages([]);
    setIsConnected(false);
    setIsSpeaking(false);
    if (onClose) onClose();
  };

  const handleVoiceChange = (gender: "male" | "female") => {
    if (isConnected) {
      toast("Please disconnect and reconnect to change voice");
      return;
    }
    setVoiceGender(gender);
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md transition-all duration-300">
          <div className="bg-white rounded-3xl p-8 max-w-2xl w-full relative shadow-2xl max-h-[90vh] flex flex-col border border-slate-200 animate-fade-in-up">
            <button
              onClick={handleClose}
              className="absolute top-6 right-6 text-slate-400 hover:text-slate-600 transition-colors cursor-pointer bg-slate-50 p-2 rounded-full hover:bg-slate-100"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-purple-100/50 mb-4 text-purple-600">
                <Mic className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mb-2 tracking-tight">
                Talk to Heka AI
              </h2>
              <p className="text-base text-slate-500 max-w-sm mx-auto">
                Experience real-time voice AI. Ask questions, book appointments, or just chat.
              </p>
            </div>

            {!isConnected && isLoading ? (
              <div className="flex flex-col items-center justify-center py-16">
                <div className="relative">
                  <div className="w-16 h-16 border-4 border-purple-100 border-t-purple-600 rounded-full animate-spin"></div>
                  <div className="absolute inset-0 flex items-center justify-center text-purple-600 font-bold text-xs">AI</div>
                </div>
                <p className="text-slate-900 font-medium mt-6">Connecting to Neural Engine...</p>
                <p className="text-sm text-slate-500 mt-1">Establishing secure voice channel</p>
              </div>
            ) : isConnected ? (
              <div className="flex-1 flex flex-col min-h-0">
                <div className="flex-1 flex flex-col items-center justify-center p-4 py-8">
                  <div className="mb-10 relative">
                    {isSpeaking ? (
                      <div className="relative">
                        <div className="w-32 h-32 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full flex items-center justify-center animate-pulse shadow-xl shadow-purple-200">
                          <MessageSquare className="w-14 h-14 text-white" />
                        </div>
                        <div className="absolute inset-0 w-32 h-32 bg-purple-400 rounded-full animate-ping opacity-20 duration-1000"></div>
                        <div className="absolute -inset-4 w-40 h-40 bg-purple-200 rounded-full animate-pulse opacity-20 delay-100 -z-10"></div>
                      </div>
                    ) : (
                      <div className="w-32 h-32 bg-slate-100 rounded-full flex items-center justify-center shadow-inner border border-slate-200">
                        <MessageSquare className="w-14 h-14 text-slate-400" />
                      </div>
                    )}
                  </div>

                  <p className="text-xl font-medium text-slate-900 mb-8 text-center min-h-[2rem]">
                    {isSpeaking ?
                      <span className="animate-pulse">Speaking...</span> :
                      isRecording ?
                        <span className="text-red-500 flex items-center gap-2 justify-center"><span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span> Listening to you...</span> :
                        "Tap the microphone to start"
                    }
                  </p>

                  <div className="flex items-center gap-6">
                    <button
                      onClick={isRecording ? stopRecording : startRecording}
                      className={`h-20 w-20 flex items-center justify-center rounded-full transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 transform active:scale-95 ${isRecording
                        ? "bg-red-500 hover:bg-red-600 text-white ring-4 ring-red-100"
                        : "bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white ring-4 ring-purple-100"
                        } cursor-pointer`}
                      title={isRecording ? "Stop recording" : "Start recording"}
                    >
                      {isRecording ? (
                        <MicOff className="w-8 h-8" />
                      ) : (
                        <Mic className="w-8 h-8" />
                      )}
                    </button>

                    <button
                      onClick={() => setShowTranscript(!showTranscript)}
                      className={`h-14 w-14 flex items-center justify-center rounded-full border-2 transition-all cursor-pointer shadow-sm hover:shadow-md ${showTranscript
                          ? "bg-slate-900 border-slate-900 text-white"
                          : "bg-white border-slate-200 text-slate-600 hover:border-slate-300"
                        }`}
                      title={showTranscript ? "Hide transcript" : "Show transcript"}
                    >
                      <NotebookPen className="w-6 h-6" />
                    </button>
                  </div>

                  <div className="mt-12 w-full pt-8 border-t border-slate-100 text-center">
                    <p className="text-sm text-slate-500 mb-4">
                      Ready to deploy this for your business?
                    </p>
                    <a
                      href="https://app.hekaai.co"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block w-full bg-slate-900 text-white py-3.5 px-6 rounded-xl hover:bg-slate-800 transition-all font-semibold cursor-pointer shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                    >
                      Get Started Free
                    </a>
                  </div>
                </div>

                {showTranscript && (
                  <div className="border-t border-slate-100 bg-slate-50/50 p-6 max-h-72 overflow-y-auto rounded-b-3xl">
                    <div className="flex items-center justify-between mb-4 sticky top-0 bg-slate-50/95 backdrop-blur-sm py-2 z-10">
                      <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">Live Transcript</h3>
                      <button
                        onClick={() => setShowTranscript(false)}
                        className="text-slate-400 hover:text-slate-600 cursor-pointer text-xs font-medium"
                      >
                        CLOSE
                      </button>
                    </div>
                    <div className="space-y-4">
                      {messages.length === 0 ? (
                        <div className="text-center py-8">
                          <p className="text-sm text-slate-400 italic">Conversation will appear here...</p>
                        </div>
                      ) : (
                        messages.map((msg, idx) => (
                          <div
                            key={idx}
                            className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                          >
                            <div
                              className={`max-w-[85%] rounded-2xl p-3.5 text-sm leading-relaxed shadow-sm ${msg.role === "user"
                                ? "bg-purple-600 text-white rounded-tr-sm"
                                : "bg-white text-slate-800 border border-slate-200 rounded-tl-sm"
                                }`}
                            >
                              <p>{msg.content}</p>
                            </div>
                          </div>
                        ))
                      )}
                    </div>
                  </div>
                )}
              </div>
            ) : null}
          </div>
        </div>
      )}
    </>
  );
}
