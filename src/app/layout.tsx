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
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var isTouch = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || (window.screen.width < 1024);
                if (isTouch) {
                  document.documentElement.classList.add('is-touch');
                }
                // Detect desktop-site mode: touch device but viewport rendered at desktop width.
                // Chrome "Request Desktop Site" sets viewport to ~980px while physical screen stays ~360px.
                function checkDesktopSite() {
                  if (isTouch && window.innerWidth >= 980) {
                    document.documentElement.classList.add('is-desktop-site-on-mobile');
                  }
                }
                if (document.readyState !== 'loading') {
                  checkDesktopSite();
                } else {
                  document.addEventListener('DOMContentLoaded', checkDesktopSite);
                }
                // Also re-check on resize (user might toggle desktop site mode)
                window.addEventListener('resize', function() {
                  if (isTouch && window.innerWidth >= 980) {
                    document.documentElement.classList.add('is-desktop-site-on-mobile');
                  } else if (isTouch) {
                    document.documentElement.classList.remove('is-desktop-site-on-mobile');
                  }
                });
              })();
            `
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#030014] text-[#f3f4f6]">
        {children}
      </body>
    </html>
  );
}

