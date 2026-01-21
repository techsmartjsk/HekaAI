"use client";

import Header from "../components/header";
import FadeInSection from "../components/fadeInSection";
import Footer from "../components/footer";
import { RefreshCcw } from "lucide-react";

export default function CancellationRefundPolicy() {
    return (
        <div className="bg-[#fcfcff] min-h-screen flex flex-col">
            <Header />

            <main className="flex-grow pt-32 pb-20 px-6 lg:px-8">
                <FadeInSection>
                    <div className="max-w-3xl mx-auto">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center">
                                <RefreshCcw className="w-6 h-6 text-purple-600" />
                            </div>
                            <h1 className="text-4xl font-bold text-slate-900">Cancellations & Refunds</h1>
                        </div>
                        <p className="text-slate-500 mb-8">Last Updated: {new Date().toLocaleDateString()}</p>

                        <div className="prose prose-slate max-w-none text-slate-600 space-y-8">
                            <section>
                                <h2 className="text-2xl font-semibold text-slate-900 mb-4">Cancellation Policy</h2>
                                <p>
                                    You can cancel your subscription at any time through your account settings or by contacting our support team. Upon cancellation, your subscription will remain active until the end of the current billing cycle, after which you will not be charged again.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-semibold text-slate-900 mb-4">Refund Policy</h2>
                                <p>
                                    We offer a 7-day money-back guarantee for first-time subscribers. If you are not satisfied with our service, you can request a full refund within 7 days of your initial purchase.
                                </p>
                                <p className="mt-4">
                                    Please note that used AI credits are non-refundable. If you have consumed more than 10% of your allocated credits within the first 7 days, we reserve the right to provide a partial refund or deny the refund request.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-semibold text-slate-900 mb-4">How to Request a Refund</h2>
                                <p>
                                    To request a refund, please email us at <a href="mailto:support@hekaai.co" className="text-purple-600 hover:underline">support@hekaai.co</a> from your registered email address. Include your order ID and the reason for your refund request. Our team will process your request within 5-7 business days.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-semibold text-slate-900 mb-4">Exceptions</h2>
                                <p>
                                    Refunds are not available for custom enterprise plans or services that have been fully rendered. For any disputes or special circumstances, please reach out to us at <a href="tel:+919625645572" className="text-purple-600 hover:underline">+91 96256 45572</a>.
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
