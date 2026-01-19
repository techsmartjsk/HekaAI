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
      "100 hours of free",
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
      <section id="pricing" className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-2 md:mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-base sm:text-lg text-gray-600 px-4">
              Choose the plan that works for your business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-8 md:mt-12">
            {plans.map((plan, index) => (
              <div
                key={plan.name}
                className={`relative rounded-2xl p-6 md:p-8 transition-all duration-300 ${
                  plan.highlight
                    ? "bg-gradient-to-br from-purple-600 to-purple-700 text-white shadow-xl md:transform md:scale-105"
                    : "bg-white text-slate-900 shadow-lg hover:shadow-xl"
                }`}
              >
                <div className="flex items-center justify-between mb-3 md:mb-4">
                  <h3 className="text-xl sm:text-2xl font-bold">{plan.name}</h3>
                  <span
                    className={`px-2.5 md:px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap ${
                      plan.highlight
                        ? "bg-white/20 text-white"
                        : plan.name === "Free"
                        ? "bg-gray-200 text-gray-700"
                        : "bg-purple-600 text-white"
                    }`}
                  >
                    {plan.label}
                  </span>
                </div>

                {plan.subtitle && (
                  <p className="text-2xl sm:text-3xl font-bold mb-4 md:mb-6">{plan.subtitle}</p>
                )}

                <div className="mb-4 md:mb-6">
                  <span className="text-3xl sm:text-4xl font-bold">{plan.price}</span>
                  <span className={`text-sm ${plan.highlight ? "text-white/80" : "text-gray-600"}`}>
                    {plan.period}
                  </span>
                </div>

                <a
                  href={plan.name === "Advanced" ? "#demo" : "https://app.hekaai.co"}
                  target={plan.name === "Advanced" ? undefined : "_blank"}
                  rel={plan.name === "Advanced" ? undefined : "noopener noreferrer"}
                  className={`block w-full py-2.5 md:py-3 px-4 md:px-6 rounded-full text-sm md:text-base font-medium text-center transition-all mb-6 md:mb-8 ${
                    plan.highlight
                      ? "bg-white text-purple-600 hover:bg-gray-100"
                      : plan.name === "Free"
                      ? "bg-white text-gray-700 border-2 border-gray-200 hover:bg-gray-50"
                      : "bg-purple-600 text-white hover:bg-purple-700"
                  } cursor-pointer`}
                >
                  {plan.cta} →
                </a>

                <ul className="space-y-3 md:space-y-4">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 md:gap-3">
                      <Check
                        className={`w-4 h-4 md:w-5 md:h-5 flex-shrink-0 mt-0.5 ${
                          plan.highlight ? "text-white" : "text-purple-600"
                        }`}
                      />
                      <span className={`text-sm md:text-base ${plan.highlight ? "text-white" : "text-gray-700"}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </FadeInSection>
  );
}
