"use client";

import { useState } from "react";
import FadeInSection from "./fadeInSection";
import TalkToHekaWidget from "./talkToHekaWidget";


export default function HeroSection() {
  const [showWidget, setShowWidget] = useState(false);

  return (
    <>
      <FadeInSection>
        <section className="pt-12 pb-20 lg:pt-20 lg:pb-32 px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="relative z-10 text-center pb-10 lg:pb-24">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 text-purple-700 text-sm font-medium mb-8 border border-purple-100 animate-fade-in">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
                </span>
                AI-Powered Receptionist for Modern Business
              </div>

              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-slate-900 leading-[1.1] tracking-tight mb-6">
                Never miss a <br className="hidden md:block" />
                <span className="bg-gradient-to-r from-purple-600 via-violet-500 to-indigo-500 bg-clip-text text-transparent">lead again.</span>
              </h1>

              <p className="text-xl md:text-2xl text-slate-600 mb-10 max-w-3xl mx-auto leading-relaxed font-light">
                Every missed call is lost revenue. Heka answers, qualifies, and books appointments 24/7 seamlessly integrated with your tools.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up">
                <button
                  onClick={() => setShowWidget(true)}
                  className="w-full sm:w-auto px-8 py-4 bg-slate-900 text-white rounded-full text-lg font-semibold hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 cursor-pointer"
                >
                  Try live demo
                </button>

                <a
                  href="#demo"
                  className="w-full sm:w-auto px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-full text-lg font-semibold hover:bg-slate-50 transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5 cursor-pointer"
                >
                  Book a meeting
                </a>
              </div>
            </div>
          </div>
        </section>
      </FadeInSection>
      {showWidget && <TalkToHekaWidget initialOpen={true} onClose={() => setShowWidget(false)} />}
    </>
  );
}
