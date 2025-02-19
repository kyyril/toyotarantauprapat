"use client"; // Pastikan ini di bagian atas karena kita pakai useEffect

import type { Metadata } from "next";
import { useEffect } from "react";
import { usePathname } from "next/navigation"; // Import usePathname
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navigation } from "@/components/Navbar";
import BackToTopButton from "@/components/BackToTop";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";
import { Analytics } from "@vercel/analytics/react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// export const metadata: Metadata = {
//   title: "toyotarantauprapat",
//   description: "astra toyota auto 2000 cabang labuhanbatu rantauprapat",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname(); // Ambil URL saat ini

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll ke atas saat halaman berubah
  }, [pathname]); // Jalankan setiap kali pathname berubah

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable}  antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navigation />
          {children}
          <Analytics />
          <Toaster />
          <Footer />
          <BackToTopButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
