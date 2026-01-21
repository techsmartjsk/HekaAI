"use client";

import Header from "../components/header";
import FadeInSection from "../components/fadeInSection";
import Footer from "../components/footer";
import { useEffect, useState } from "react";

export default function PrivacyPolicy() {
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
                        <h1 className="text-4xl font-bold text-slate-900 mb-8">Privacy Policy</h1>
                        <p className="text-slate-500 mb-8">Last Updated: {mounted ? new Date().toLocaleDateString() : ""}</p>

                        <div className="prose prose-slate max-w-none text-slate-600 space-y-8">
                            <section>
                                <h2 className="text-2xl font-semibold text-slate-900 mb-4">1. Introduction</h2>
                                <p>
                                    Welcome to Heka AI ("we," "our," or "us"). We are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our AI receptionist services and visit our website.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-semibold text-slate-900 mb-4">2. Information We Collect</h2>
                                <p className="mb-4">We collect information that you provide directly to us, including:</p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li><strong>Account Information:</strong> Name, email address, phone number, and business details when you register.</li>
                                    <li><strong>Voice Data:</strong> Audio recordings of calls processed by our AI receptionist services (solely for the purpose of providing service).</li>
                                    <li><strong>Contact Lists:</strong> Information about your leads and customers required to perform receptionist duties.</li>
                                    <li><strong>Payment Information:</strong> Billing details processed by our secure payment providers.</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl font-semibold text-slate-900 mb-4">3. How We Use Your Information</h2>
                                <p>We use the collected information to:</p>
                                <ul className="list-disc pl-6 space-y-2 mt-4">
                                    <li>Provide, operate, and maintain our AI services.</li>
                                    <li>Process and transcribe calls automatically.</li>
                                    <li>Send you transcripts, summaries, and appointment notifications.</li>
                                    <li>Improve our AI models and user experience (using anonymized data only).</li>
                                    <li>Communicate with you about updates, security alerts, and support.</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl font-semibold text-slate-900 mb-4">4. Data Security</h2>
                                <p>
                                    We implement industry-standard security measures to protect your data, including encryption in transit and at rest. Access to voice recordings and transcripts is strictly limited to authorized automated systems and personnel required for maintenance.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-semibold text-slate-900 mb-4">5. Third-Party Sharing</h2>
                                <p>
                                    We do not sell your personal data. We may share information with trusted service providers (e.g., cloud hosting, payment processors) strictly for the purpose of operating our business.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-semibold text-slate-900 mb-4">6. Contact Us</h2>
                                <p>
                                    If you have any questions about this Privacy Policy, please contact us at support@hekaai.co.
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
