"use client";

import Header from "../components/header";
import FadeInSection from "../components/fadeInSection";
import Footer from "../components/footer";

export default function TermsOfService() {
    return (
        <div className="bg-[#fcfcff] min-h-screen flex flex-col">
            <Header />

            <main className="flex-grow pt-32 pb-20 px-6 lg:px-8">
                <FadeInSection>
                    <div className="max-w-3xl mx-auto">
                        <h1 className="text-4xl font-bold text-slate-900 mb-8">Terms of Service</h1>
                        <p className="text-slate-500 mb-8">Last Updated: {new Date().toLocaleDateString()}</p>

                        <div className="prose prose-slate max-w-none text-slate-600 space-y-8">
                            <section>
                                <h2 className="text-2xl font-semibold text-slate-900 mb-4">1. Acceptance of Terms</h2>
                                <p>
                                    By accessing or using the Heka AI website and services ("Service"), you agree to be bound by these Terms of Service. If you do not agree to these terms, you may not use the Service.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-semibold text-slate-900 mb-4">2. Description of Service</h2>
                                <p>
                                    Heka AI provides an automated AI receptionist service that handles incoming calls, books appointments, and qualifies leads for businesses. We reserve the right to modify or discontinue the Service at any time.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-semibold text-slate-900 mb-4">3. User Responsibilities</h2>
                                <p>You agree to:</p>
                                <ul className="list-disc pl-6 space-y-2 mt-4">
                                    <li>Provide accurate and complete information when registering.</li>
                                    <li>Maintain the security of your account credentials.</li>
                                    <li>Use the Service in compliance with all applicable laws, including call recording laws (e.g., obtaining necessary consent from callers).</li>
                                    <li>Not misuse or attempt to disrupt the Service.</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl font-semibold text-slate-900 mb-4">4. Payment and Subscription</h2>
                                <p>
                                    Some aspects of the Service are billed on a subscription basis. You agree to pay all fees associated with your selected plan. Payments are non-refundable unless otherwise stated by law.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-semibold text-slate-900 mb-4">5. Intellectual Property</h2>
                                <p>
                                    All content, trademarks, and technology associated with the Service are the property of Heka AI. You retain ownership of your customer data and call transcripts.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-semibold text-slate-900 mb-4">6. Limitation of Liability</h2>
                                <p>
                                    Heka AI shall not be liable for any indirect, incidental, special, or consequential damages resulting from the use or inability to use the Service, including lost profits or business interruption.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-semibold text-slate-900 mb-4">7. Termination</h2>
                                <p>
                                    We may terminate or suspend your account immediately if you breach these Terms. Upon termination, your right to use the Service will cease immediately.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-semibold text-slate-900 mb-4">8. Contact</h2>
                                <p>
                                    Questions about the Terms of Service should be sent to us at support@hekaai.co.
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
