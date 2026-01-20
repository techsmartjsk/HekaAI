"use client";

import { useEffect } from "react";
import FadeInSection from "./fadeInSection";

export default function DemoSection() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <FadeInSection>
      <section className="py-20 lg:py-32 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
              Book a Demo
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              See Heka in action. Schedule a personalized demo with our team.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div
              className="calendly-inline-widget"
              data-url="https://calendly.com/connect-hekaai/30min"
              style={{ minWidth: "320px", height: "700px" }}
            />
          </div>
        </div>
      </section>
    </FadeInSection>
  );
}
