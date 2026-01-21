"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import logo from "../assets/logo.png";

export default function Header() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const closeSidebar = () => {
        setIsSidebarOpen(false);
    };

    const handleNavClick = () => {
        closeSidebar();
    };

    return (
        <>
            <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50 transition-all duration-300">
                <nav className="max-w-7xl mx-auto px-6 lg:px-8 h-20 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2">
                        <Image src={logo} alt="Heka" width={100} height={30} className="w-auto h-8" />
                    </Link>
                    <div className="hidden md:flex items-center gap-8">
                        <Link href="/#features" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">Features</Link>
                        <Link href="/#how-it-works" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">How It Works</Link>
                        <Link href="/#pricing" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">Pricing</Link>
                        <Link href="/#faq" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">FAQ</Link>
                        <Link href="/contact-us" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">Contact</Link>
                    </div>
                    <div className="flex items-center gap-4">
                        <a
                            href="https://app.hekaai.co"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hidden md:inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-slate-900 hover:bg-slate-50 rounded-full transition-all"
                        >
                            Log in
                        </a>
                        <Link href="/#demo" className="hidden md:inline-flex items-center justify-center px-6 py-2.5 text-sm font-semibold text-white bg-slate-900 rounded-full hover:bg-slate-800 hover:-translate-y-0.5 transition-all shadow-sm">
                            Book a Demo
                        </Link>
                        <button
                            onClick={toggleSidebar}
                            className="md:hidden p-2 text-slate-600 hover:text-slate-900 transition-colors"
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
                className={`fixed inset-0 z-50 md:hidden transition-opacity duration-300 ${isSidebarOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                    }`}
            >
                <div
                    className="absolute inset-0 bg-slate-900/20 backdrop-blur-sm"
                    onClick={closeSidebar}
                />

                <div
                    className={`absolute right-0 top-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl transform transition-transform duration-300 ease-in-out ${isSidebarOpen ? "translate-x-0" : "translate-x-full"
                        }`}
                >
                    <div className="flex flex-col h-full">
                        <div className="flex items-center justify-between p-6 border-b border-slate-100">
                            <Image src={logo} alt="Heka" width={90} height={27} className="w-auto h-7" />
                            <button
                                onClick={closeSidebar}
                                className="p-2 text-slate-400 hover:text-slate-600 transition-colors"
                                aria-label="Close menu"
                            >
                                <X className="w-6 h-6" />
                            </button>
                        </div>

                        <nav className="flex-1 overflow-y-auto p-6 space-y-2">
                            <Link
                                href="/#features"
                                onClick={handleNavClick}
                                className="block py-3 px-4 text-base font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900 rounded-xl transition-colors"
                            >
                                Features
                            </Link>
                            <Link
                                href="/#how-it-works"
                                onClick={handleNavClick}
                                className="block py-3 px-4 text-base font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900 rounded-xl transition-colors"
                            >
                                How It Works
                            </Link>
                            <Link
                                href="/#pricing"
                                onClick={handleNavClick}
                                className="block py-3 px-4 text-base font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900 rounded-xl transition-colors"
                            >
                                Pricing
                            </Link>
                            <Link
                                href="/#faq"
                                onClick={handleNavClick}
                                className="block py-3 px-4 text-base font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900 rounded-xl transition-colors"
                            >
                                FAQ
                            </Link>
                            <Link
                                href="/contact-us"
                                onClick={handleNavClick}
                                className="block py-3 px-4 text-base font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900 rounded-xl transition-colors"
                            >
                                Contact
                            </Link>
                        </nav>

                        <div className="p-6 border-t border-slate-100 space-y-3">
                            <a
                                href="https://app.hekaai.co"
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={handleNavClick}
                                className="block w-full py-3 px-6 text-center font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-xl transition-all"
                            >
                                Log in
                            </a>
                            <Link
                                href="/#demo"
                                onClick={handleNavClick}
                                className="block w-full bg-slate-900 text-white py-3.5 px-6 rounded-xl font-semibold hover:bg-slate-800 transition-all text-center shadow-lg hover:shadow-xl"
                            >
                                Book a Demo
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
