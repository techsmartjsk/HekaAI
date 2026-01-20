"use client";

import FadeInSection from "./fadeInSection";

export default function OutcomesSection() {
  const cards = [
    {
      title: "Stop losing leads",
      body: "Heka answers instantly 24/7  and captures every opportunity.",
      color: "bg-purple-600",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
    },
    {
      title: "Book more appointments",
      body: "Schedules in real time and follows up when needed.",
      color: "bg-pink-500",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: "Reduce support load",
      body: "Resolves common issues and escalates to humans instantly.",
      color: "bg-teal-500",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
        </svg>
      ),
    },
    {
      title: "Stay compliant",
      body: "Call recording + clear summaries for quality and compliance.",
      color: "bg-blue-400",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
  ];

  return (
    <FadeInSection>
      <section className="py-10 lg:py-20 px-2 lg:px-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">Outcomes that matter</h2>
            <p className="text-xl text-slate-500 max-w-2xl mx-auto">Focus on results, not features. We handle the noise so you can grow.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {cards.map((card, index) => (
              <FadeInSection key={card.title} delay={index * 0.1} className="h-full">
                <div className="group h-full bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <div className={`w-14 h-14 ${card.color.replace('bg-', 'bg-opacity-10 text-')} ${card.color.replace('bg-', 'text-')} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {/* We need to adjust the icon color logic or props since I'm changing the class usage */}
                    <div className={`${card.color} w-full h-full absolute opacity-10 rounded-xl`}></div>
                    {/* Re-using the icon but ensuring it renders correctly with new styling strategy. 
                    Actually, let's just use the original icon logic slightly modified. 
                    The original `card.icon` has `text-white` hardcoded. I should probably replace the icon SVG content or classes.
                    However, `card.icon` is a ReactNode in the array. 
                    Let's update the array definition instead to be cleaner? 
                    Or just wrap it. The original icon has `text-white`. 
                    If I want colored icons on light bg, I need to change the icon definition.
                    
                    Let's stick to the colored square for now but make it nicer.
                 */}
                    <div className={`${card.color} w-14 h-14 rounded-xl flex items-center justify-center shadow-md`}>
                      {card.icon}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3">{card.title}</h3>
                  <p className="text-slate-600 leading-relaxed text-sm">{card.body}</p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>
    </FadeInSection>
  );
}
