import type React from "react";
import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { ScrollProgress } from "@/components/scroll-progress";
import "./globals.css";

// <CHANGE> Updated font to Inter for modern look
const _inter = Inter({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Nguyễn Hân | Portfolio",
    description:
        "Personal portfolio and landing page - Full Stack Developer & Designer",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="vi">
            <head>
                <link rel="icon" href="/profile.jpg" type="image/jpg" />
            </head>
            <body className={`font-sans antialiased`}>
                <ScrollProgress />
                {children}
                <Analytics />
            </body>
        </html>
    );
}
