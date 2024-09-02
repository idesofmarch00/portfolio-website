import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import  FloatingNavHeader  from "./components/floating-nav-header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sahil Ahmed",
  description: "Portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head><link rel="icon" href="/favicon.ico" sizes="any" /></head>
      <body className={inter.className}><FloatingNavHeader/>{children}</body>
    </html>
  );
}
