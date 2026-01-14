"use client";

import { useState } from "react";

export default function RealConversationsSection() {
  const [activeTab, setActiveTab] = useState("Reception");

  return (
    <section className="py-20 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto rounded-[32px] bg-white/90 [backdrop-filter:blur(32px)] p-10 space-y-12 transition-all duration-500 ease-out">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-800 text-center leading-tight mb-12 max-w-4xl mx-auto">
          Real conversations, instant results. Watch how Heka handles every call with precision.
        </h2>

        <div className="flex items-center justify-center gap-3 mb-12">
            {["Reception", "Sales", "Support"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 rounded-full transition-all cursor-pointer ${
                  activeTab === tab
                    ? "bg-purple-600 text-white shadow-lg shadow-purple-500/20"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
                type="button"
              >
                {tab}
              </button>
            ))}
        </div>

        <div className="flex justify-center mb-16">
            <div className="relative w-full max-w-4xl aspect-video bg-gray-900 rounded-2xl overflow-hidden flex items-center justify-center">
              <button className="w-20 h-20 md:w-24 md:h-24 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-all shadow-xl cursor-pointer">
              <svg className="w-8 h-8 md:w-10 md:h-10 text-gray-900 ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
          </div>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-2xl p-8 md:p-10">
          <div className="mb-8 pb-8 border-b border-gray-200">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-gray-700">Listening...</span>
              </div>
              <div className="flex flex-col md:flex-row gap-4 md:gap-8 text-sm">
                <div className="flex justify-between md:justify-start gap-4">
                  <span className="text-gray-500">Duration</span>
                  <span className="text-gray-800">2:34</span>
                  </div>
                <div className="flex justify-between md:justify-start gap-4">
                  <span className="text-gray-500">Type</span>
                  <span className="text-gray-800">{activeTab}</span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-6">LIVE TRANSCRIPT</h3>
            <div className="space-y-4">
              <div className="flex justify-start">
                <div className="max-w-[80%] md:max-w-[70%]">
                  <div className="text-xs text-gray-500 mb-1">CALLER</div>
                  <div className="bg-gray-100 rounded-2xl rounded-tl-sm px-5 py-3 text-gray-800">
                    Hi, I'd like to schedule an appointment.
                  </div>
                </div>
              </div>
              <div className="flex justify-end">
                <div className="max-w-[80%] md:max-w-[70%]">
                  <div className="text-xs text-purple-600 mb-1 text-right">HEKA</div>
                  <div className="bg-purple-50 rounded-2xl rounded-tr-sm px-5 py-3 text-purple-700">
                    Of course! May I have your name please?
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
