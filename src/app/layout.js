import { Cormorant_Garamond, Poppins } from "next/font/google";
import "./globals.css";



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
  title: "Club X",
  description: "Night club website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${carmorant.variable} ${inter.variable}`}>
      <body className="min-h-full flex flex-col font-body">{children}</body>
    </html>
  );
}
