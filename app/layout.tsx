import { Metadata } from "next";
import "./globals.css";
import { Plus_Jakarta_Sans } from 'next/font/google'
import Navbar from "@/components/layout/Header"
import { ReactNode } from "react";

const PlusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ["200", "300", "400", "500", "600", "700", "800"]
});

export const metadata: Metadata = {
  title: 'JaviGigante',
  description: "Un CV online de JaviGigante",  
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children } : RootLayoutProps ) {
  return (
    <html lang="en">
      <body className={`${PlusJakartaSans.className} antialiased text-white`}>

        <Navbar/>
        { children }
      </body>
    </html>
  );
}
