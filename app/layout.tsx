import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";

const inter = Inter({
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
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
