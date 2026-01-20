"use client";

import { useState, useEffect } from "react";
import FadeInSection from "./fadeInSection";

export default function CallTranscriptSection() {
  const [showTranscript, setShowTranscript] = useState(false);
  const [callProgress, setCallProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCallProgress(100);
      setTimeout(() => setShowTranscript(true), 500);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <FadeInSection>
      <section className="py-20 lg:py-32 px-4 lg:px-8 bg-slate-50/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
              From Call to Transcript in Seconds
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              See how Heka instantly converts voice to structured data, ready for your CRM.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Live Call Simulator */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-100 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gray-100">
                <div
                  className="h-full bg-purple-600 transition-all duration-300 ease-linear"
                  style={{ width: `${callProgress}%` }}
                ></div>
              </div>
              <div className="flex items-center justify-between mb-8 mt-2">
                <div className="flex items-center gap-3">
                  <div className="relative flex items-center justify-center w-8 h-8 rounded-full bg-red-50 text-red-500">
                    <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                  </div>
                  <span className="font-semibold text-slate-900">Live Call Recording</span>
                </div>
                <div className="text-xs font-mono text-slate-500 bg-slate-100 px-2 py-1 rounded">
                  {callProgress < 100 ? "RECORDING" : "COMPLETE"}
                </div>
              </div>

              <div className="space-y-6 mb-8 relative min-h-[300px]">
                {/* Chat Bubbles */}
                <div className="flex justify-start">
                  <div className="max-w-[85%]">
                    <div className="text-[10px] uppercase font-bold text-slate-400 mb-1 ml-4 tracking-wider">Caller</div>
                    <div className="bg-slate-100/80 rounded-2xl rounded-tl-sm px-6 py-4 text-slate-700 leading-relaxed shadow-sm">
                      Hi, I'm interested in scheduling a consultation for next week.
                    </div>
                  </div>
                </div>

                <div className="flex justify-end">
                  <div className="max-w-[85%]">
                    <div className="text-[10px] uppercase font-bold text-purple-400 mb-1 mr-4 text-right tracking-wider">Heka</div>
                    <div className="bg-purple-600 rounded-2xl rounded-tr-sm px-6 py-4 text-white leading-relaxed shadow-md">
                      I'd be happy to help you schedule that. What day works best for you?
                    </div>
                  </div>
                </div>

                {callProgress > 30 && (
                  <div className="flex justify-start animate-fade-in-up">
                    <div className="max-w-[85%]">
                      <div className="text-[10px] uppercase font-bold text-slate-400 mb-1 ml-4 tracking-wider">Caller</div>
                      <div className="bg-slate-100/80 rounded-2xl rounded-tl-sm px-6 py-4 text-slate-700 leading-relaxed shadow-sm">
                        How about Tuesday or Wednesday afternoon?
                      </div>
                    </div>
                  </div>
                )}

                {callProgress > 60 && (
                  <div className="flex justify-end animate-fade-in-up">
                    <div className="max-w-[85%]">
                      <div className="text-[10px] uppercase font-bold text-purple-400 mb-1 mr-4 text-right tracking-wider">Heka</div>
                      <div className="bg-purple-600 rounded-2xl rounded-tr-sm px-6 py-4 text-white leading-relaxed shadow-md">
                        Perfect! I have Tuesday at 2 PM available. Should I send you a calendar invite?
                      </div>
                    </div>
                  </div>
                )}

                {callProgress > 90 && (
                  <div className="flex justify-start animate-fade-in-up">
                    <div className="max-w-[85%]">
                      <div className="text-[10px] uppercase font-bold text-slate-400 mb-1 ml-4 tracking-wider">Caller</div>
                      <div className="bg-slate-100/80 rounded-2xl rounded-tl-sm px-6 py-4 text-slate-700 leading-relaxed shadow-sm">
                        Yes, that works great! Thank you.
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Structured Output */}
            <div className={`bg-white rounded-3xl p-8 shadow-xl border border-slate-100 transition-all duration-500 ${showTranscript ? 'opacity-100 translate-y-0' : 'opacity-50 translate-y-4'}`}>
              <div className="flex items-center justify-between mb-8 border-b border-slate-100 pb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center text-purple-600">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">Post-Call Action</h3>
                    <p className="text-xs text-slate-500">Automated Processing</p>
                  </div>
                </div>
                {showTranscript && (
                  <span className="text-xs font-bold bg-green-50 text-green-600 px-3 py-1 rounded-full border border-green-100 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                    PROCESSED
                  </span>
                )}
              </div>

              {!showTranscript ? (
                <div className="space-y-4 py-8">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-slate-50 animate-pulse"></div>
                    <div className="space-y-2 flex-1">
                      <div className="h-4 bg-slate-50 rounded w-1/3 animate-pulse"></div>
                      <div className="h-3 bg-slate-50 rounded w-1/4 animate-pulse"></div>
                    </div>
                  </div>
                  <div className="h-32 bg-slate-50 rounded-2xl w-full animate-pulse"></div>
                </div>
              ) : (
                <div className="space-y-6 animate-fade-in-up">
                  <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Executive Summary</div>
                    <p className="text-slate-700 leading-relaxed text-sm">
                      Caller scheduled a consultation for <span className="font-semibold text-slate-900 bg-yellow-50 px-1 rounded">Tuesday at 2:00 PM</span>. Calendar invite was automatically sent and confirmed.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 rounded-2xl border border-slate-100 bg-white shadow-sm">
                      <div className="text-xs text-slate-500 mb-1">Intent</div>
                      <div className="font-semibold text-slate-900">Book Appointment</div>
                    </div>
                    <div className="p-4 rounded-2xl border border-slate-100 bg-white shadow-sm">
                      <div className="text-xs text-slate-500 mb-1">Sentiment</div>
                      <div className="font-semibold text-green-600 flex items-center gap-1">
                        Positive
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      </div>
                    </div>
                  </div>

                  <div className="border border-green-100 bg-green-50/50 rounded-2xl p-5">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 mt-0.5">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      </div>
                      <div className="flex-1">
                        <div className="font-bold text-green-900 mb-1">CRM Updated</div>
                        <div className="text-xs text-green-700 grid grid-cols-2 gap-2 mt-2">
                          <div className="bg-white/50 px-2 py-1.5 rounded border border-green-100/50">User: New Lead</div>
                          <div className="bg-white/50 px-2 py-1.5 rounded border border-green-100/50">Deal Stage: Meeting Booked</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-xs text-slate-400 pt-2">
                    <span>ID: #98234-AX</span>
                    <span>Processed via Heka Engine</span>
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
