import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Great_Vibes } from "next/font/google";
import { Poppins } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PageTransition from "./components/PageTransition"; // ⬅️ client wrapper
import Script from "next/script";

const poppins = Poppins({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
});
const greatVibes = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
});
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Maxnet | ISP",
  description: "Maxnet Web Created By Areeb",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} ${geistSans.variable} ${geistMono.variable}`}>
        <Script
          src="https://cdn.lordicon.com/lordicon.js"
          strategy="beforeInteractive" // loads before React runs
        />
        <Navbar />
        <PageTransition>{children}</PageTransition>
        <Footer />
      </body>
    </html>
  );
}
