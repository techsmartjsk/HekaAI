"use client";

import FadeInSection from "./fadeInSection";

export default function HowItWorksSection() {
  return (
    <FadeInSection>
      <section className="py-5 lg:py-20 px-4 lg:px-8">
      <div className="max-w-7xl mx-auto rounded-[32px] [backdrop-filter:blur(28px)] p-12 transition-all duration-500 ease-out">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-4">
            How It Works
          </h2>
          <p className="text-lg md:text-xl text-gray-600">
            Get started in three simple steps.
          </p>
        </div>

        <div className="relative flex flex-col md:flex-row items-start justify-center gap-6 md:gap-10">
          {[
            {
              title: "Connect",
              body: "Link your phone number, calendar, and CRM in minutes.",
              icon: (
                <svg className="w-12 h-12 md:w-14 md:h-14 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
              ),
            },
            {
              title: "Configure",
              body: "Set up scripts, FAQs, business rules, and SOPs.",
              icon: (
                <svg className="w-12 h-12 md:w-14 md:h-14 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              ),
            },
            {
              title: "Go Live",
              body: "Heka handles calls, logs everything, and escalates when needed.",
              icon: (
                <svg className="w-12 h-12 md:w-14 md:h-14 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              ),
            },
          ].map((step, index) => (
            <FadeInSection key={step.title} delay={index * 0.15}>
              <div
                className="flex-1 flex flex-col items-center text-center relative z-10 pb-8 md:pb-0 transition-transform duration-300"
              >
              <div className="relative mb-6">
                <div className="w-24 h-24 md:w-28 md:h-28 bg-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                  {step.icon}
                </div>
                <span className="absolute -top-2 -right-2 text-2xl font-light text-gray-400">{index + 1}</span>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-3">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed px-4">{step.body}</p>
              {index < 2 && <div className="hidden md:block absolute top-12 left-[calc(50%+60px)] right-0 h-0.5 bg-gray-200"></div>}
            </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
    </FadeInSection>
  );
}
