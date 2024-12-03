import type { Metadata } from "next";
import "./globals.css";
import { Plus_Jakarta_Sans } from 'next/font/google'
import Navbar from "@/components/layout/Header"

const PlusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ["200", "300", "400", "500", "600", "700", "800"]
});

export const metadata: Metadata = {
  title: 'JaviGigante',
  description: "Un CV online de JaviGigante",  
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${PlusJakartaSans.className} antialiased text-white`}>

        <Navbar/>
        { children }
      </body>
    </html>
  );
}
