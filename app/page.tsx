"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import HeroSection from "./components/heroSection";
import FeaturesSection from "./components/featuresSection";
import CallTranscriptSection from "./components/callTranscriptSection";
import HowItWorksSection from "./components/howItWorksSection";
import DemoSection from "./components/demoSection";
import PricingSection from "./components/pricingSection";
import FaqSection from "./components/faqSection";
import Footer from "./components/footer";
import TalkToHekaWidget from "./components/talkToHekaWidget";
import logo from "./assets/logo.png"
import Image from "next/image";


export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    closeSidebar();
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#fcfcff] text-slate-900">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/60 backdrop-blur-3xl border-b border-white/40 transition-all duration-500 ease-out">
        <nav className="max-w-7xl mx-auto px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image src={logo} alt="Logo" width={120} height={120} />
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-black hover:text-gray-600 transition-colors cursor-pointer">Features</a>
            <a href="#pricing" className="text-black hover:text-gray-600 transition-colors cursor-pointer">Pricing</a>
            <a href="#demo" className="text-black hover:text-gray-600 transition-colors cursor-pointer">Demo</a>
            <a href="#how-it-works" className="text-black hover:text-gray-600 transition-colors cursor-pointer">How It Works</a>
            <a href="#faq" className="text-black hover:text-gray-600 transition-colors cursor-pointer">FAQ</a>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://app.hekaai.co"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-block bg-white text-purple-600 px-6 py-2.5 rounded-full font-medium border-2 border-purple-600 hover:bg-purple-50 transition-all cursor-pointer"
            >
              Get Started for Free
            </a>
            <a href="#demo" className="hidden md:inline-block bg-gradient-to-r from-purple-600 to-purple-700 text-white px-6 py-2.5 rounded-full hover:from-purple-700 hover:to-purple-800 transition-all cursor-pointer">
              Book a Demo
            </a>
            <button
              onClick={toggleSidebar}
              className="md:hidden p-2 text-gray-700 hover:text-gray-900 transition-colors cursor-pointer"
              aria-label="Toggle menu"
            >
              {isSidebarOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </nav>
      </header>

      <div
        className={`fixed inset-0 z-50 md:hidden transition-opacity duration-300 ${
          isSidebarOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={closeSidebar}
        />

        <div
          className={`absolute right-0 top-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl transform transition-transform duration-300 ease-out ${
            isSidebarOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <Image src={logo} alt="Logo" width={100} height={100} />
              <button
                onClick={closeSidebar}
                className="p-2 text-gray-700 hover:text-gray-900 transition-colors cursor-pointer"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <nav className="flex-1 overflow-y-auto p-6 space-y-1">
              <a
                href="#features"
                onClick={handleNavClick}
                className="block py-3 px-4 text-lg text-gray-700 hover:bg-purple-50 hover:text-purple-600 rounded-lg transition-colors cursor-pointer"
              >
                Features
              </a>
              <a
                href="#pricing"
                onClick={handleNavClick}
                className="block py-3 px-4 text-lg text-gray-700 hover:bg-purple-50 hover:text-purple-600 rounded-lg transition-colors cursor-pointer"
              >
                Pricing
              </a>
              <a
                href="#demo"
                onClick={handleNavClick}
                className="block py-3 px-4 text-lg text-gray-700 hover:bg-purple-50 hover:text-purple-600 rounded-lg transition-colors cursor-pointer"
              >
                Demo
              </a>
              <a
                href="#how-it-works"
                onClick={handleNavClick}
                className="block py-3 px-4 text-lg text-gray-700 hover:bg-purple-50 hover:text-purple-600 rounded-lg transition-colors cursor-pointer"
              >
                How It Works
              </a>
              <a
                href="#faq"
                onClick={handleNavClick}
                className="block py-3 px-4 text-lg text-gray-700 hover:bg-purple-50 hover:text-purple-600 rounded-lg transition-colors cursor-pointer"
              >
                FAQ
              </a>
            </nav>

            <div className="p-6 border-t border-gray-200 space-y-3">
              <a
                href="https://app.hekaai.co"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleNavClick}
                className="block w-full bg-white text-purple-600 py-3 px-6 rounded-full font-medium border-2 border-purple-600 hover:bg-purple-50 transition-all cursor-pointer text-center"
              >
                Get Started for Free
              </a>
              <a
                href="#demo"
                onClick={handleNavClick}
                className="block w-full bg-gradient-to-r from-purple-600 to-purple-700 text-white py-3 px-6 rounded-full hover:from-purple-700 hover:to-purple-800 transition-all cursor-pointer text-center"
              >
                Book a Demo
              </a>
            </div>
          </div>
        </div>
      </div>

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
