import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });

export const metadata: Metadata = {
  title: "Mani Selvaraj — Product Manager",
  description:
    "Senior Product Manager at Amazon with a background in naval leadership, operations, and entrepreneurship.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geist.variable} scroll-smooth`}>
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
