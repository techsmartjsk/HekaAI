"use client";

import Header from "../components/header";
import FadeInSection from "../components/fadeInSection";
import Footer from "../components/footer";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactUs() {
    return (
        <div className="bg-[#fcfcff] min-h-screen flex flex-col">
            <Header />

            <main className="flex-grow pt-32 pb-20 px-6 lg:px-8">
                <FadeInSection>
                    <div className="max-w-3xl mx-auto">
                        <h1 className="text-4xl font-bold text-slate-900 mb-8 text-center">Contact Us</h1>
                        <p className="text-slate-600 mb-12 text-center text-lg">
                            Have questions or need assistance? We're here to help you get the most out of Heka AI.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center">
                                <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center mb-4">
                                    <Mail className="w-6 h-6 text-purple-600" />
                                </div>
                                <h3 className="text-xl font-semibold text-slate-900 mb-2">Email Us</h3>
                                <p className="text-slate-500 mb-4">For support, cancellations, and refunds.</p>
                                <a href="mailto:support@hekaai.co" className="text-purple-600 font-medium hover:underline">
                                    support@hekaai.co
                                </a>
                            </div>

                            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center">
                                <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center mb-4">
                                    <Phone className="w-6 h-6 text-purple-600" />
                                </div>
                                <h3 className="text-xl font-semibold text-slate-900 mb-2">Call Us</h3>
                                <p className="text-slate-500 mb-4">Monday to Friday, 9am to 6pm IST.</p>
                                <a href="tel:+919625645572" className="text-purple-600 font-medium hover:underline">
                                    +91 96256 45572
                                </a>
                            </div>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center">
                            <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center mb-4">
                                <MapPin className="w-6 h-6 text-purple-600" />
                            </div>
                            <h3 className="text-xl font-semibold text-slate-900 mb-2">Our Office</h3>
                            <p className="text-slate-500">
                                New Delhi, India
                            </p>
                        </div>
                    </div>
                </FadeInSection>
            </main>

            <Footer />
        </div>
    );
}
