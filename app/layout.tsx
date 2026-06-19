import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });

export const metadata: Metadata = {
  metadataBase: new URL("https://maniselvaraj.com"),
  title: "Mani Selvaraj — Product & Strategy Leader | Digitizing Supply Chain Operations",
  description:
    "Product and strategy leader specializing in digitizing supply chain operations and brand protection, with a background in naval leadership and entrepreneurship.",
  openGraph: {
    title: "Mani Selvaraj — Product & Strategy Leader | Digitizing Supply Chain Operations",
    description:
      "Product and strategy leader specializing in digitizing supply chain operations and brand protection, with a background in naval leadership and entrepreneurship.",
    url: "https://maniselvaraj.com",
    siteName: "Mani Selvaraj",
    type: "website",
  },
  keywords: [
    "Manikandan Selvaraj",
    "Mani Selvaraj",
    "Product Manager",
    "Supply Chain",
    "Supply Chain Digitization",
    "Brand Protection",
    "Amazon Product Manager",
    "Indian Navy Officer",
    "Kelley MBA",
  ],
  alternates: { canonical: "https://maniselvaraj.com" },
  twitter: {
    card: "summary",
    title: "Mani Selvaraj — Product & Strategy Leader | Digitizing Supply Chain Operations",
    description:
      "Product and strategy leader specializing in digitizing supply chain operations and brand protection, with a background in naval leadership and entrepreneurship.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geist.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Manikandan Selvaraj",
              alternateName: "Mani Selvaraj",
              jobTitle: "Senior Product Manager",
              worksFor: { "@type": "Organization", name: "Amazon" },
              url: "https://maniselvaraj.com",
              sameAs: [
                "https://www.linkedin.com/in/manikandanselvaraj",
                "https://scholar.google.com/citations?user=XB6eUAIAAAAJ&hl=en",
              ],
              alumniOf: [
                "Indiana University, Kelley School of Business",
                "Indian Institute of Management Ahmedabad",
              ],
              description:
                "Product and strategy leader specializing in digitizing supply chain operations and brand protection, with a background in naval leadership and entrepreneurship.",
            }),
          }}
        />
      </head>
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
