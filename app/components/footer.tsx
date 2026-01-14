import Image from "next/image";
import logo from "../assets/logo.png";

export default function Footer() {
  return (
    <footer className="bg-white/60 backdrop-blur-3xl border-t border-gray-200/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 mb-8">
          <div className="flex flex-col items-center md:items-start">
            <Image src={logo} alt="Logo" width={120} height={120} />
          </div>

          <div className="flex flex-wrap justify-center md:justify-end gap-6 md:gap-8">
            <a href="#features" className="text-gray-600 hover:text-gray-900 text-sm transition-colors cursor-pointer">
              Features
            </a>
            <a href="#demo" className="text-gray-600 hover:text-gray-900 text-sm transition-colors cursor-pointer">
              Demo
            </a>
            <a href="#how-it-works" className="text-gray-600 hover:text-gray-900 text-sm transition-colors cursor-pointer">
              How It Works
            </a>
            <a href="#faq" className="text-gray-600 hover:text-gray-900 text-sm transition-colors cursor-pointer">
              FAQ
            </a>
            <a href="#demo" className="text-gray-600 hover:text-gray-900 text-sm transition-colors cursor-pointer">
              Book a Demo
            </a>
          </div>
        </div>

        <div className="border-t border-gray-200/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 text-sm">
              © {new Date().getFullYear()} Heka. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a
                href="#privacy"
                className="text-gray-600 hover:text-gray-900 text-sm transition-colors cursor-pointer"
              >
                Privacy Policy
              </a>
              <a
                href="#terms"
                className="text-gray-600 hover:text-gray-900 text-sm transition-colors cursor-pointer"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
