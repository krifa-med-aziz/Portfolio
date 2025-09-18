import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "aos/dist/aos.css";
import AOSProvider from "@/components/AOSProvider";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Med Aziz Krifa | Portfolio",
  description:
    "Portfolio of Med Aziz Krifa, my work, skills, experience and education as a Software Engineering Student.",
  keywords:
    "Mohamed Aziz Krifa, Web Developer, React, TypeScript, Next.js, Portfolio,Full Stack,Software Engineer,Student",
  openGraph: {
    title: "Med Aziz Krifa | Portfolio",
    description:
      "Portfolio of Med Aziz Krifa, my work, skills, experience and education as a Software Engineering Student.",
    url: "https://devmedazizkrifa.vercel.app/",
    siteName: "Med Aziz Krifa",
    images: [
      {
        url: "https://devmedazizkrifa.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Med Aziz Krifa Portfolio Preview",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased relative min-h-screen`}>
        <AOSProvider>{children}</AOSProvider>
      </body>
    </html>
  );
}
