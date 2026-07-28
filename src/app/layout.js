import "./globals.css";

import ScrollToTop from "@/components/ScrollToTop";
import CallNowButton from "@/components/CallNowButton";

import { Bebas_Neue } from "next/font/google";
import { Manrope } from "next/font/google";

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

export const metadata = {
  title: "CHICANE SPORTS BAR",
  description: " CHICANE SPORTS BAR WEBSITE",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${bebas.variable} ${manrope.variable}`}>
      <body className="min-h-full flex flex-col font-body">
        <ScrollToTop />
        {children}
        <CallNowButton />
      </body>
    </html>
  );
}