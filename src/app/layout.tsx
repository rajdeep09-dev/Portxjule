import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import PageTransition from "@/components/animations/PageTransition";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Portx - Personal Portfolio & Agency",
  description: "Portx is a sleek and modern Framer template designed for creative professionals.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans bg-background text-foreground antialiased selection:bg-white selection:text-black`}>
        <div className="noise-overlay" aria-hidden="true" />
        <Navbar />
        <PageTransition>
          <main className="min-h-screen pt-24 relative overflow-hidden">
            {children}
          </main>
          <Footer />
        </PageTransition>
      </body>
    </html>
  );
}
