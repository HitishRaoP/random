import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Work0 — Digital Agency",
    template: "%s — Work0",
  },
  description:
    "Transforming your digital presence with innovative web design, intuitive app design, and impactful branding.",
  metadataBase: new URL("https://work0.dev"),
  openGraph: {
    title: "Work0 — Digital Agency",
    description:
      "Transforming your digital presence with innovative web design, intuitive app design, and impactful branding.",
    type: "website",
    url: "https://work0.dev",
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
