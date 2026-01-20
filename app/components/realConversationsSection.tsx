"use client";

import { useState } from "react";

export default function RealConversationsSection() {
  const [activeTab, setActiveTab] = useState("Reception");

  return (
    <section className="py-20 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 tracking-tight max-w-3xl mx-auto">
            Real conversations, instant results.
          </h2>
          <p className="text-xl text-slate-600">See how Heka handles every call with precision.</p>
        </div>

        <div className="flex items-center justify-center gap-4 mb-12">
          {["Reception", "Sales", "Support"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all cursor-pointer border ${activeTab === tab
                  ? "bg-slate-900 text-white border-slate-900 shadow-md transform scale-105"
                  : "bg-white text-slate-600 border-slate-200 hover:border-slate-300 hover:bg-slate-50"
                }`}
              type="button"
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Audio Player Card */}
          <div className="relative w-full aspect-video bg-slate-900 rounded-3xl overflow-hidden shadow-2xl flex items-center justify-center group">
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 via-slate-900 to-slate-900"></div>
            <button className="relative w-20 h-20 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center hover:scale-110 transition-all cursor-pointer border border-white/20 group-hover:bg-white/20">
              <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>

            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-white/80 text-sm font-medium">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                Live Recording
              </div>
              <span>02:34</span>
            </div>
          </div>

          {/* Transcript Card */}
          <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden h-full min-h-[400px] flex flex-col">
            <div className="p-6 border-b border-slate-100 bg-slate-50/50 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-700 font-bold border border-purple-200">
                  AI
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-sm">Heka Assistant</h3>
                  <p className="text-xs text-slate-500 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                    Active now
                  </p>
                </div>
              </div>
              <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-semibold uppercase tracking-wider">{activeTab}</span>
            </div>

            <div className="flex-1 p-6 space-y-6 overflow-y-auto bg-white">
              <div className="flex justify-start">
                <div className="max-w-[85%]">
                  <div className="text-[10px] font-bold text-slate-400 mb-1 ml-4 uppercase tracking-wider">Caller</div>
                  <div className="bg-slate-100/80 rounded-2xl rounded-tl-none px-6 py-3.5 text-slate-700 text-[15px] leading-relaxed">
                    Hi, I'd like to schedule an appointment for next week.
                  </div>
                </div>
              </div>

              <div className="flex justify-end">
                <div className="max-w-[85%]">
                  <div className="text-[10px] font-bold text-purple-400 mb-1 mr-4 text-right uppercase tracking-wider">Heka</div>
                  <div className="bg-gradient-to-br from-purple-600 to-indigo-600 rounded-2xl rounded-tr-none px-6 py-3.5 text-white shadow-md text-[15px] leading-relaxed">
                    I can help with that! Do you have a specific day in mind?
                  </div>
                </div>
              </div>

              <div className="flex justify-start">
                <div className="max-w-[85%]">
                  <div className="text-[10px] font-bold text-slate-400 mb-1 ml-4 uppercase tracking-wider">Caller</div>
                  <div className="bg-slate-100/80 rounded-2xl rounded-tl-none px-6 py-3.5 text-slate-700 text-[15px] leading-relaxed">
                    Tuesday or Wednesday morning would be great.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
