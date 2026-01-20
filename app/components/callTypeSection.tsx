"use client";

import FadeInSection from "./fadeInSection";

export default function CallTypeSection() {
  const cards = [
    {
      title: "Reception / Inbound Calls",
      body: "Answer, qualify, and book instantly.",
      color: "from-purple-600 to-purple-700",
      iconPath: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z",
    },
    {
      title: "Sales / Outbound Calling",
      body: "Personalized outreach from CRM, script controlled.",
      color: "from-pink-500 to-pink-600",
      iconPath: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
    },
    {
      title: "Customer Support",
      body: "Resolve issues fast + human handoff + ticket creation.",
      color: "from-teal-500 to-teal-600",
      iconPath: "M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3",
    },
  ];

  return (
    <FadeInSection>
      <section className="py-5 lg:py-20 px-4 lg:px-8">
        <div className="max-w-7xl mx-auto rounded-[32px] p-12 transition-all duration-500 ease-out">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 tracking-tight">Built for Every Call Type</h2>
            <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">From reception to sales to support—Heka handles it all</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {cards.map((card, index) => (
              <FadeInSection key={card.title} delay={index * 0.1} className="h-full">
                <div className="group bg-white rounded-2xl p-8 h-full border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <div className={`w-14 h-14 bg-gradient-to-br ${card.color} rounded-xl flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d={card.iconPath} />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-3">{card.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{card.body}</p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>
    </FadeInSection>
  );
}
