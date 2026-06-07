import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "Muzammil Tanveer | Personal Portfolio & Creative AI Developer",
  description: "Explore the portfolio of Muzammil Tanveer, a Software Engineering student, freelance AI Video Creator, Academic Research Specialist, and Full-Stack React Developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} scroll-smooth h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#030014] text-[#f3f4f6]">
        {children}
      </body>
    </html>
  );
}

