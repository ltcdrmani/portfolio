import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });

export const metadata: Metadata = {
  metadataBase: new URL("https://maniselvaraj.com"),
  title: "Mani Selvaraj — Product Manager",
  description:
    "Senior Product Manager at Amazon with a background in naval leadership, operations, and entrepreneurship.",
  openGraph: {
    title: "Mani Selvaraj — Product Manager",
    description:
      "Senior Product Manager at Amazon with a background in naval leadership, operations, and entrepreneurship.",
    url: "https://maniselvaraj.com",
    siteName: "Mani Selvaraj",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Mani Selvaraj — Product Manager",
    description:
      "Senior Product Manager at Amazon with a background in naval leadership, operations, and entrepreneurship.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geist.variable} scroll-smooth`}>
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
