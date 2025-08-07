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

                <footer className="p-8">
                    <p className="text-muted text-xs">
                        <span className="font-bold">Ali Lishan</span>
                        <br />
                        <span className="font-bold">MSc IT Management, BSc (Hons) Software Engineering.</span>
                        <br />
                        <span className="font-bold">62, Jalan PJU 7/30, Mutiara Damansara, Petaling Jaya, 47800 Selangor. Malaysia.</span>
                    </p>
                </footer>
            </body>
        </html>
    );
}
