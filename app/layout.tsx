import type { Metadata } from "next";
import { Urbanist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Urbanist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Nava Studio — Digital Agency",
    template: "%s — Nava Studio",
  },
  description:
    "Transforming your digital presence with innovative web design, intuitive app design, and impactful branding.",
  metadataBase: new URL("https://nava-studio.webflow.io"),
  openGraph: {
    title: "Nava Studio — Digital Agency",
    description:
      "Transforming your digital presence with innovative web design, intuitive app design, and impactful branding.",
    type: "website",
    url: "https://nava-studio.webflow.io",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
