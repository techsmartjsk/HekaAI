"use client";

import Script from "next/script";

export default function Analytics() {
    return (
        <Script
            src="https://cdn.amplitude.com/script/dad39a73a8011b1c05f5ef2eedd9ed5c.js"
            strategy="afterInteractive"
            onLoad={() => {
                // @ts-ignore
                if (window.amplitude) {
                    // @ts-ignore
                    window.amplitude.add(window.sessionReplay.plugin({ sampleRate: 1 }));
                    // @ts-ignore
                    window.amplitude.init("dad39a73a8011b1c05f5ef2eedd9ed5c", {
                        fetchRemoteConfig: true,
                        autocapture: true,
                    });
                }
            }}
        />
    );
}
