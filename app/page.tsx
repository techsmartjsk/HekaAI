"use client";


import Header from "./components/header";
import HeroSection from "./components/heroSection";
import FeaturesSection from "./components/featuresSection";
import CallTranscriptSection from "./components/callTranscriptSection";
import HowItWorksSection from "./components/howItWorksSection";
import DemoSection from "./components/demoSection";
import PricingSection from "./components/pricingSection";
import FaqSection from "./components/faqSection";
import Footer from "./components/footer";
import TalkToHekaWidget from "./components/talkToHekaWidget";


export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#fcfcff] text-slate-900">
      <Header />

      <main className="pt-20">
        <section id="hero">
          <HeroSection />
        </section>
        <section id="features">
          <FeaturesSection />
        </section>
        <section id="call-transcript">
          <CallTranscriptSection />
        </section>
        <section id="how-it-works">
          <HowItWorksSection />
        </section>
        <section id="pricing">
          <PricingSection />
        </section>
        <section id="demo">
          <DemoSection />
        </section>
        <section id="faq">
          <FaqSection />
        </section>
      </main>
      <Footer />
      <TalkToHekaWidget />
    </div>
  );
}
