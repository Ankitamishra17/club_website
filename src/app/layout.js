import { Cormorant_Garamond, Poppins } from "next/font/google";
import "./globals.css";

import ScrollToTop from "@/components/ScrollToTop";
import CallNowButton from "@/components/CallNowButton";

const carmorant = Cormorant_Garamond({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
const inter = Poppins({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata = {
  title: "CHICANE SPORTS BAR",
  description: " CHICANE SPORTS BAR WEBSITE",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${carmorant.variable} ${inter.variable}`}>
      <body className="min-h-full flex flex-col font-body">
        <ScrollToTop />
        {children}
        <CallNowButton/>
      </body>
    </html>
  );
}
