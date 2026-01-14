"use client";

import { useState } from "react";
import FadeInSection from "./fadeInSection";

const faqs = [
  {
    question: "Does Heka sound natural?",
    answer:
      "Yes. Heka uses advanced voice AI that handles natural interruptions, context switching, and conversational flow—so calls feel human, not robotic.",
  },
  {
    question: "Can I control the script?",
    answer:
      "Absolutely. You have full control over Heka's scripts, responses, and business rules. Customize everything from greeting messages to qualification questions to match your brand and processes.",
  },
  {
    question: "How does human handoff work?",
    answer:
      "Heka automatically identifies when a call needs human intervention—whether it's a complex issue, urgent request, or specific escalation trigger. It seamlessly transfers the call to your team with full context and conversation history.",
  },
  {
    question: "Does it support call recording?",
    answer:
      "Yes. Heka records all calls automatically and provides clear summaries for quality assurance and compliance. All recordings are securely stored and easily accessible.",
  },
  {
    question: "What CRMs and calendars are supported?",
    answer:
      "Heka integrates with popular CRMs like Salesforce, HubSpot, and Pipedrive, as well as calendar systems including Google Calendar, Outlook, and Calendly. Additional integrations can be added based on your needs.",
  },
  {
    question: "How fast can we go live?",
    answer:
      "Most customers are up and running within a day. The setup process is simple: connect your phone number and systems, configure your scripts and business rules, and you're ready to go live.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <FadeInSection>
      <section className="py-20 px-6 lg:px-8">
      <div className="max-w-4xl mx-auto rounded-[32px] bg-white/90 [backdrop-filter:blur(28px)] p-10 transition-all duration-500 ease-out">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600">Everything you need to know about Heka</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={faq.question}
              className="border border-transparent rounded-2xl overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200 cursor-pointer"
              >
                <span className="text-lg text-gray-800 pr-8">{faq.question}</span>
                <svg
                  className={`w-5 h-5 text-gray-600 flex-shrink-0 transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                className={`overflow-hidden transition-[max-height,opacity] duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                  openIndex === index
                    ? "max-h-[500px] opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-5 text-gray-600 leading-relaxed pt-2">{faq.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </FadeInSection>
  );
}
