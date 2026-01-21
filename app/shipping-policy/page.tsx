"use client";

import Header from "../components/header";
import FadeInSection from "../components/fadeInSection";
import Footer from "../components/footer";
import { Truck } from "lucide-react";
import { useEffect, useState } from "react";

export default function ShippingPolicy() {
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <div className="bg-[#fcfcff] min-h-screen flex flex-col">
            <Header />

            <main className="flex-grow pt-32 pb-20 px-6 lg:px-8">
                <FadeInSection>
                    <div className="max-w-3xl mx-auto">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center">
                                <Truck className="w-6 h-6 text-purple-600" />
                            </div>
                            <h1 className="text-4xl font-bold text-slate-900">Shipping Policy</h1>
                        </div>
                        <p className="text-slate-500 mb-8">Last Updated: {mounted ? new Date().toLocaleDateString() : ""}</p>

                        <div className="prose prose-slate max-w-none text-slate-600 space-y-8">
                            <section>
                                <h2 className="text-2xl font-semibold text-slate-900 mb-4">Digital Delivery</h2>
                                <p>
                                    Heka AI is a Software-as-a-Service (SaaS) platform. All our products and services are delivered digitally. We do not provide any physical goods, and therefore, no physical shipping is involved.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-semibold text-slate-900 mb-4">Access to Services</h2>
                                <p>
                                    Upon successful subscription or purchase of credits, access to the Heka AI platform and its features is granted immediately or within a few minutes. You will receive a confirmation email with details on how to access your account and start using the services.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-semibold text-slate-900 mb-4">Delivery Issues</h2>
                                <p>
                                    If you do not receive access to your purchased services within 24 hours of a successful transaction, please contact our support team immediately at <a href="mailto:support@hekaai.co" className="text-purple-600 hover:underline">support@hekaai.co</a> or call us at <a href="tel:+919625645572" className="text-purple-600 hover:underline">+91 96256 45572</a>.
                                </p>
                            </section>
                        </div>
                    </div>
                </FadeInSection>
            </main>

            <Footer />
        </div>
    );
}
