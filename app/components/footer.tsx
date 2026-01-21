import Image from "next/image";
import logo from "../assets/logo.png";

export default function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-12 mb-16">
          <div className="flex flex-col items-center md:items-start max-w-sm text-center md:text-left">
            <Image src={logo} alt="Heka AI" width={120} height={40} className="mb-6" />
            <p className="text-slate-500 leading-relaxed">
              Your always-on AI receptionist. Never miss a call, never miss a lead.
            </p>
          </div>

          <div className="grid grid-cols-2 md:flex gap-x-12 gap-y-4 text-center md:text-left">
            <div className="flex flex-col gap-4">
              <h4 className="font-bold text-slate-900">Product</h4>
              <a href="#features" className="text-slate-600 hover:text-purple-600 transition-colors text-sm">Features</a>
              <a href="#how-it-works" className="text-slate-600 hover:text-purple-600 transition-colors text-sm">How it Works</a>
              <a href="#pricing" className="text-slate-600 hover:text-purple-600 transition-colors text-sm">Pricing</a>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="font-bold text-slate-900">Company</h4>
              <a href="#faq" className="text-slate-600 hover:text-purple-600 transition-colors text-sm">FAQ</a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-sm">
              © {new Date().getFullYear()} Heka AI Inc. All rights reserved.
            </p>
            <div className="flex flex-wrap items-center gap-6">
              <a
                href="/contact-us"
                className="text-slate-500 hover:text-purple-600 text-sm transition-colors cursor-pointer"
              >
                Contact Us
              </a>
              <a
                href="/shipping-policy"
                className="text-slate-500 hover:text-purple-600 text-sm transition-colors cursor-pointer"
              >
                Shipping Policy
              </a>
              <a
                href="/cancellation-and-refund"
                className="text-slate-500 hover:text-purple-600 text-sm transition-colors cursor-pointer"
              >
                Cancellations & Refunds
              </a>
              <a
                href="/privacy-policy"
                className="text-slate-500 hover:text-purple-600 text-sm transition-colors cursor-pointer"
              >
                Privacy Policy
              </a>
              <a
                href="/terms-of-service"
                className="text-slate-500 hover:text-purple-600 text-sm transition-colors cursor-pointer"
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
