import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aman Bhatt — Full Stack Engineer",
  description:
    "Full Stack Engineer building robust, scalable web applications with React, Next.js, Spring Boot, and modern technologies. Explore my projects, experience, and skills.",
  keywords: [
    "Aman Bhatt",
    "Full Stack Engineer",
    "Web Developer",
    "React",
    "Next.js",
    "Spring Boot",
    "TypeScript",
    "Portfolio",
  ],
  authors: [{ name: "Aman Bhatt" }],
  creator: "Aman Bhatt",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://amanbhatt.dev",
    title: "Aman Bhatt — Full Stack Engineer",
    description:
      "Full Stack Engineer building robust, scalable web applications with modern technologies.",
    siteName: "Aman Bhatt Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aman Bhatt — Full Stack Engineer",
    description:
      "Full Stack Engineer building robust, scalable web applications with modern technologies.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
