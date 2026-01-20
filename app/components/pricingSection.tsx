"use client";

import { Check } from "lucide-react";
import FadeInSection from "./fadeInSection";

const plans = [
  {
    name: "Free",
    label: "FREE",
    price: "$0",
    period: "/month",
    cta: "Start with Free",
    features: [
      "10 minutes free",
      "All analytics features",
    ],
    highlight: false,
  },
  {
    name: "Professional",
    label: "PRO",
    price: "$20",
    period: "/month",
    cta: "Start with Pro",
    features: [
      "300 minutes of free",
      "All analytics features",
      "Advanced scheduling",
      "CRM integrations",
      "Email and phone support",
    ],
    highlight: false,
  },
  {
    name: "Advanced",
    label: "ADV",
    subtitle: "Custom",
    price: "$100",
    period: "/month",
    cta: "Talk with our CS",
    features: [
      "Unlimited hours",
      "All analytics features",
      "Custom integrations",
      "Dedicated account manager",
      "Priority support",
      "Custom workflows",
    ],
    highlight: true,
  },
];

export default function PricingSection() {
  return (
    <FadeInSection>
      <section id="pricing" className="py-20 lg:py-32 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-slate-500">
              Choose the plan that works for your business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <div
                key={plan.name}
                className={`relative rounded-3xl p-8 flex flex-col transition-all duration-300 ${plan.highlight
                    ? "bg-slate-900 text-white shadow-2xl ring-1 ring-slate-900 md:-translate-y-4"
                    : "bg-white text-slate-900 shadow-sm border border-slate-200 hover:shadow-xl hover:-translate-y-1"
                  }`}
              >
                <div className="mb-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold">{plan.name}</h3>
                    {plan.highlight && (
                      <span className="bg-purple-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                        Popular
                      </span>
                    )}
                  </div>

                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold tracking-tight">{plan.price}</span>
                    <span className={`text-sm ${plan.highlight ? "text-slate-400" : "text-slate-500"}`}>{plan.period}</span>
                  </div>

                  {plan.subtitle && (
                    <p className={`mt-2 font-medium ${plan.highlight ? "text-slate-300" : "text-slate-600"}`}>{plan.subtitle}</p>
                  )}
                </div>

                <ul className="space-y-4 mb-8 flex-1">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check
                        className={`w-5 h-5 flex-shrink-0 ${plan.highlight ? "text-purple-400" : "text-purple-600"
                          }`}
                      />
                      <span className={`text-sm leading-relaxed ${plan.highlight ? "text-slate-300" : "text-slate-600"}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <a
                  href={plan.name === "Advanced" ? "#demo" : "https://app.hekaai.co"}
                  target={plan.name === "Advanced" ? undefined : "_blank"}
                  rel={plan.name === "Advanced" ? undefined : "noopener noreferrer"}
                  className={`block w-full py-4 px-6 rounded-xl text-center font-semibold transition-all shadow-sm ${plan.highlight
                      ? "bg-white text-slate-900 hover:bg-slate-100"
                      : "bg-slate-900 text-white hover:bg-slate-800"
                    } cursor-pointer`}
                >
                  {plan.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </FadeInSection>
  );
}
