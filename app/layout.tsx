import type { Metadata } from "next";
import "./globals.css";
import { Montserrat, Space_Grotesk } from "next/font/google";
import localFont from "next/font/local";
import { withBasePath } from "@/lib/asset";

const clash = localFont({
    src: "./fonts/ClashGrotesk.woff2",
    variable: "--font-clash",
});

const montserrat = Montserrat({
    subsets: ["latin", "cyrillic"],
    variable: "--font-montserrat",
    weight: ["400", "500", "600"],
});

const space = Space_Grotesk({
    subsets: ["latin"],
    variable: "--font-space",
    weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
    title: "Serendale — AI Platform",
    description:
        "High-performance AI platform with scalable infrastructure and enterprise-grade security.",
    openGraph: {
        title: "Serendale — AI Platform",
        description:
            "High-performance AI platform with scalable infrastructure and enterprise-grade security.",
        type: "website",
        url: "https://alikhantortay.github.io/serendale.ai",
    },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className={`${montserrat.variable} ${space.variable} ${clash.variable}`}>
        <head>
            <link
                rel="preload"
                as="image"
                href={withBasePath("/images/hero-mobile.webp")}
                media="(max-width: 640px)"
            />
            <link
                rel="preload"
                as="image"
                href={withBasePath("/images/hero.webp")}
                media="(min-width: 641px)"
            />
        </head>
        <body className="bg-black text-white antialiased">{children}</body>
        </html>
    );
}
