import type { Metadata } from "next";
import "./globals.css";
import { Montserrat, Space_Grotesk } from "next/font/google";
import localFont from "next/font/local";

const clash = localFont({
    src: "/fonts/ClashGrotesk.woff2",
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
    description: "High-performance AI platform with scalable infrastructure and enterprise-grade security.",
    openGraph: {
        title: "Serendale — AI Platform",
        description: "High-performance AI platform with scalable infrastructure and enterprise-grade security.",
        type: "website",
    },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className={`${montserrat.variable} ${space.variable} ${clash.variable}`}>
        <body className="bg-black text-white antialiased">{children}</body>
        </html>
    );
}
