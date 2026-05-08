import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";

const saans = localFont({
    src: [
        {
            path: "./fonts/SaansLight.woff2",
            weight: "300",
            style: "normal",
        },
        {
            path: "./fonts/SaansRegular.woff2",
            weight: "400",
            style: "normal",
        },
        {
            path: "./fonts/SaansMedium.woff2",
            weight: "500",
            style: "normal",
        },
        {
            path: "./fonts/SaansSemiBold.woff2",
            weight: "600",
            style: "normal",
        },
        {
            path: "./fonts/SaansBold.woff2",
            weight: "700",
            style: "normal",
        },
    ],
    variable: "--font-saans",
});

export const metadata: Metadata = {
    title: "Rise at Seven | Award Winning Search-First Content Marketing Agency",
    description: "Organic media planners creating, distributing & optimising search-first content for SEO, Social, PR, AI and LLM search.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className={`${saans.variable} antialiased`}>
            <body className="min-h-screen flex flex-col">{children}</body>
        </html>
    );
}