"use client";

import { useState, useEffect } from "react";
import FadeInSection from "./fadeInSection";

export default function CallTranscriptSection() {
  const [showTranscript, setShowTranscript] = useState(false);
  const [callProgress, setCallProgress] = useState(0);

  useEffect(() => {
    // Simulate call progress
    const timer = setTimeout(() => {
      setCallProgress(100);
      setTimeout(() => setShowTranscript(true), 500);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <FadeInSection>
      <section className="py-10 lg:py-20 px-4 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-4">
              From Call to Transcript in Seconds
            </h2>
            <p className="text-lg md:text-xl text-gray-600">
              Watch how Heka converts live conversations into detailed transcripts automatically
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Call Side */}
            <div className="bg-white rounded-2xl p-6 lg:p-8">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-gray-700">Live Call</span>
                </div>
                <div className="text-sm text-gray-500">
                  {callProgress < 100 ? `${Math.min(callProgress, 100)}%` : "Complete"}
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex justify-start">
                  <div className="max-w-[80%]">
                    <div className="text-xs text-gray-500 mb-1">CALLER</div>
                    <div className="bg-gray-100 rounded-2xl rounded-tl-sm px-5 py-3 text-gray-800">
                      Hi, I'm interested in scheduling a consultation for next week.
                    </div>
                  </div>
                </div>

                <div className="flex justify-end">
                  <div className="max-w-[80%]">
                    <div className="text-xs text-purple-600 mb-1 text-right">HEKA</div>
                    <div className="bg-purple-50 rounded-2xl rounded-tr-sm px-5 py-3 text-purple-700">
                      I'd be happy to help you schedule that. What day works best for you?
                    </div>
                  </div>
                </div>

                {callProgress > 30 && (
                  <div className="flex justify-start animate-fade-in">
                    <div className="max-w-[80%]">
                      <div className="text-xs text-gray-500 mb-1">CALLER</div>
                      <div className="bg-gray-100 rounded-2xl rounded-tl-sm px-5 py-3 text-gray-800">
                        How about Tuesday or Wednesday afternoon?
                      </div>
                    </div>
                  </div>
                )}

                {callProgress > 60 && (
                  <div className="flex justify-end animate-fade-in">
                    <div className="max-w-[80%]">
                      <div className="text-xs text-purple-600 mb-1 text-right">HEKA</div>
                      <div className="bg-purple-50 rounded-2xl rounded-tr-sm px-5 py-3 text-purple-700">
                        Perfect! I have Tuesday at 2 PM available. Should I send you a calendar invite?
                      </div>
                    </div>
                  </div>
                )}

                {callProgress > 90 && (
                  <div className="flex justify-start animate-fade-in">
                    <div className="max-w-[80%]">
                      <div className="text-xs text-gray-500 mb-1">CALLER</div>
                      <div className="bg-gray-100 rounded-2xl rounded-tl-sm px-5 py-3 text-gray-800">
                        Yes, that works great! Thank you.
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {callProgress < 100 && (
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-purple-600 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${callProgress}%` }}
                  ></div>
                </div>
              )}
            </div>

            {/* Transcript Side */}
            <div className="bg-white rounded-2xl p-6 lg:p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-gray-800">Generated Transcript</h3>
                {showTranscript && (
                  <span className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full">
                    Ready
                  </span>
                )}
              </div>

              {!showTranscript ? (
                <div className="space-y-3">
                  <div className="h-4 bg-gray-200 rounded w-3/4 animate-pulse"></div>
                  <div className="h-4 bg-gray-200 rounded w-full animate-pulse"></div>
                  <div className="h-4 bg-gray-200 rounded w-5/6 animate-pulse"></div>
                  <div className="h-4 bg-gray-200 rounded w-4/5 animate-pulse mt-4"></div>
                  <div className="h-4 bg-gray-200 rounded w-full animate-pulse"></div>
                </div>
              ) : (
                <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
                  <div>
                    <div className="font-semibold text-gray-900 mb-2">Call Summary</div>
                    <p>
                      Caller requested consultation scheduling for next week. Preferred Tuesday or Wednesday afternoon. 
                      Appointment confirmed for Tuesday at 2:00 PM. Calendar invite to be sent.
                    </p>
                  </div>
                  
                  <div className="border-t border-gray-200 pt-4">
                    <div className="font-semibold text-gray-900 mb-2">Full Transcript</div>
                    <div className="space-y-3">
                      <div>
                        <span className="font-medium text-purple-600">Heka:</span>{" "}
                        <span>I'd be happy to help you schedule that. What day works best for you?</span>
                      </div>
                      <div>
                        <span className="font-medium text-gray-900">Caller:</span>{" "}
                        <span>How about Tuesday or Wednesday afternoon?</span>
                      </div>
                      <div>
                        <span className="font-medium text-purple-600">Heka:</span>{" "}
                        <span>Perfect! I have Tuesday at 2 PM available. Should I send you a calendar invite?</span>
                      </div>
                      <div>
                        <span className="font-medium text-gray-900">Caller:</span>{" "}
                        <span>Yes, that works great! Thank you.</span>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 pt-4">
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0">
                          <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <div className="font-semibold text-green-900 mb-1">Call Scheduled Automatically</div>
                          <div className="text-sm text-green-700 space-y-1">
                            <div>📅 <span className="font-medium">Date:</span> Tuesday, Next Week</div>
                            <div>🕐 <span className="font-medium">Time:</span> 2:00 PM</div>
                            <div>📧 <span className="font-medium">Calendar Invite:</span> Sent to caller</div>
                            <div>✅ <span className="font-medium">Status:</span> Confirmed</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 pt-4">
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Generated in 2.3 seconds</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </FadeInSection>
  );
}
