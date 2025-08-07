import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const font = JetBrains_Mono({
    subsets: ["latin"],
    variable: "--font-jetBrains-mono",
});

export const metadata: Metadata = {
    title: "Lishan's Portfolio",
    description: "Lishan's Portfolio",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${font.variable} antialiased`}
            >
                {children}

                <footer className="p-8 lining-tilt-background">
                    <p className="text-muted text-xs">
                        <span className="block">Some of the styles are inspired by tailwindcss.com</span>
                        <span className="font-bold">Built by Ali Lishan &bull; Copyright &copy; {new Date().getFullYear()}</span>
                    </p>
                </footer>
            </body>
        </html>
    );
}
