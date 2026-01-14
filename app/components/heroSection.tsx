"use client";

import FadeInSection from "./fadeInSection";

export default function HeroSection() {
  return (
    <FadeInSection>
      <section className="py-5 lg:py-20 px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="rounded-[32px] [backdrop-filter:blur(36px)] p-2 lg:p-10 text-center transition duration-700 ease-out">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
            Never miss a lead again.
          </h1>
          <h2 className="pt-5 text-xl md:text-4xl lg:text-5xl font-semibold mb-8 bg-gradient-to-r from-purple-600 via-purple-500 to-teal-500 bg-clip-text text-transparent leading-tight">
            Every missed call becomes booked revenue.
          </h2>
          <p className="text-md md:text-xl text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed">
            Heka answers calls, qualifies the caller, books appointments automatically—then sends a transcript, summary, and CRM update in seconds.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#demo" className="w-full sm:w-auto bg-gradient-to-r from-purple-600 to-purple-700 text-white px-8 py-4 rounded-full text-lg hover:from-purple-700 hover:to-purple-800 transition-all shadow-lg shadow-purple-500/30 cursor-pointer">
              Talk to Heka
            </a>
            <a href="#demo" className="w-full sm:w-auto bg-white text-black px-8 py-4 rounded-full text-lg border-2 border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all cursor-pointer text-center inline-block">
              Book a 15-min Demo
            </a>
          </div>
        </div>
      </div>
    </section>
    </FadeInSection>
  );
}
