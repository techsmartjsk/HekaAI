import HeroSection from "./components/heroSection";
import FeaturesSection from "./components/featuresSection";
import HowItWorksSection from "./components/howItWorksSection";
import DemoSection from "./components/demoSection";
import FaqSection from "./components/faqSection";
import Footer from "./components/footer";
import logo from "./assets/logo.png"
import Image from "next/image";


export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#fcfcff] text-slate-900">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/60 backdrop-blur-3xl border-b border-white/40 transition-all duration-500 ease-out">
        <nav className="max-w-7xl mx-auto px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image src={logo} alt="Logo" width={120} height={120} />
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-black hover:text-gray-600 transition-colors cursor-pointer">Features</a>
            <a href="#demo" className="text-black hover:text-gray-600 transition-colors cursor-pointer">Demo</a>
            <a href="#how-it-works" className="text-black hover:text-gray-600 transition-colors cursor-pointer">How It Works</a>
            <a href="#faq" className="text-black hover:text-gray-600 transition-colors cursor-pointer">FAQ</a>
          </div>
          <div className="flex items-center gap-6">
            <a href="#demo" className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-6 py-2.5 rounded-full hover:from-purple-700 hover:to-purple-800 transition-all shadow-lg shadow-purple-500/20 cursor-pointer">
              Book a Demo
            </a>
          </div>
        </nav>
      </header>

      <main className="pt-20">
        <section id="hero">
          <HeroSection />
        </section>
        <section id="features">
          <FeaturesSection />
        </section>
        <section id="how-it-works">
          <HowItWorksSection />
        </section>
        <section id="demo">
          <DemoSection />
        </section>
        <section id="faq">
          <FaqSection />
        </section>
      </main>
      <Footer />
    </div>
  );
}
