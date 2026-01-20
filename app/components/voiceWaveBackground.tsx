"use client";

import { useEffect, useState } from "react";

export default function VoiceWaveBackground() {
    return (
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none opacity-40">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1800px] h-[1000px]">
                {/* Wave 1 - Purple */}
                <div className="absolute inset-0 border-2 border-purple-300/30 rounded-[45%] animate-[wave-1_15s_infinite_linear] blur-3xl" />

                {/* Wave 2 - Blue */}
                <div className="absolute inset-0 border-2 border-indigo-300/30 rounded-[40%] animate-[wave-2_20s_infinite_linear] blur-2xl scale-110" />

                {/* Wave 3 - Violet */}
                <div className="absolute inset-0 border-[1px] border-violet-200/40 rounded-[48%] animate-[wave-3_25s_infinite_linear] blur-xl scale-90" />

                {/* Glow Center */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-r from-purple-200/20 to-indigo-200/20 rounded-full blur-[100px] animate-pulse" />
            </div>

            {/* Decorative SVG Lines representing sound */}
            <svg className="absolute top-1/2 left-0 w-full h-96 -translate-y-1/2 opacity-30" preserveAspectRatio="none" viewBox="0 0 1440 320">
                <path
                    fill="none"
                    stroke="url(#gradient)"
                    strokeWidth="3"
                    className="animate-[dash_8s_linear_infinite]"
                    d="M0,160 C80,120 120,240 200,160 C280,80 320,220 400,140 C480,60 520,200 600,160 C680,120 720,260 800,180 C880,100 920,240 1000,160 C1080,80 1120,220 1200,140 C1280,60 1320,200 1440,160"
                />
                <path
                    fill="none"
                    stroke="url(#gradient2)"
                    strokeWidth="3"
                    className="animate-[dash_12s_linear_infinite_reverse]"
                    d="M0,160 C60,200 100,100 160,160 C220,220 260,80 320,160 C380,240 420,100 480,160 C540,220 580,80 640,160 C700,240 740,100 800,160 C860,220 900,80 960,160 C1020,240 1060,100 1120,160 C1180,220 1220,80 1280,160 C1340,240 1380,100 1440,160"
                />
                <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#9333ea" stopOpacity="0" />
                        <stop offset="50%" stopColor="#9333ea" stopOpacity="1" />
                        <stop offset="100%" stopColor="#9333ea" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#6366f1" stopOpacity="0" />
                        <stop offset="50%" stopColor="#6366f1" stopOpacity="1" />
                        <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
                    </linearGradient>
                </defs>
            </svg>

            <style jsx>{`
        @keyframes wave-1 {
          0% { transform: rotate(0deg) scale(1); }
          33% { transform: rotate(120deg) scale(1.1); }
          66% { transform: rotate(240deg) scale(0.95); }
          100% { transform: rotate(360deg) scale(1); }
        }
        @keyframes wave-2 {
           0% { transform: rotate(0deg) scale(1); }
          33% { transform: rotate(-120deg) scale(1.05); }
          66% { transform: rotate(-240deg) scale(0.9); }
          100% { transform: rotate(-360deg) scale(1); }
        }
        @keyframes wave-3 {
           0% { transform: rotate(0deg) scale(1); }
          50% { transform: rotate(180deg) scale(1.1); }
          100% { transform: rotate(360deg) scale(1); }
        }
        @keyframes dash {
          0% { stroke-dasharray: 1000; stroke-dashoffset: 1000; }
          100% { stroke-dasharray: 1000; stroke-dashoffset: 0; }
        }
      `}</style>
        </div>
    );
}
