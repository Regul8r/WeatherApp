import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Weather",
  description: "A simple weather app.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased animated-gradient-bg min-h-screen`}
      >
        {/* Floating particles in background */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
          <div className="particle" style={{ top: '20%', left: '10%' }}></div>
          <div className="particle" style={{ top: '60%', left: '80%' }}></div>
          <div className="particle" style={{ top: '40%', left: '60%' }}></div>
          <div className="particle" style={{ top: '80%', left: '30%' }}></div>
        </div>
        {children}
      </body>
    </html>
  );
}