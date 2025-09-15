import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "aos/dist/aos.css";
import AOSProvider from "@/components/AOSProvider";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Med Aziz Krifa | Full-stack Web Developer (NextJs + TypeScript)",
  description:
    "This project is my personal portfolio showcasing my work, skills, and experience as a full-stack web developer.",
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
