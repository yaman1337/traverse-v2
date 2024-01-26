import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";


import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Traverse",
  description: "Your travel partner",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}       
        <Footer />
      </body>
    </html>
  );
}
