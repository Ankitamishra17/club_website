import Footer from "@/components/Footer";
import GallerySection from "@/components/gallery/GallerySection";
import HeroSection from "@/components/gallery/HeroSection";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Gallery | Chicane Sports Bar Noida",

  description:
    "Explore the Chicane Sports Bar gallery in Noida and discover our sports bar atmosphere, live events, food, entertainment, and memorable moments.",

  keywords: [
    "Chicane Sports Bar",
    "Chicane Sports Bar Noida",
    "Chicane Sports Bar gallery",
    "sports bar Noida",
    "sports bar in Noida",
    "Chicane Club photos",
    "Chicane Sports Bar photos",
    "Noida nightlife",
  ],

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://chicaneclub.in/gallery",
  },

  openGraph: {
    title: "Gallery | Chicane Sports Bar Noida",

    description:
      "View photos and moments from Chicane Sports Bar in Noida, including live events, sports, entertainment, food, and nightlife.",

    url: "https://chicaneclub.in/gallery",

    siteName: "Chicane Sports Bar",

    type: "website",
  },
};

export default function Page() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <GallerySection />
      <Footer />
    </>
  );
}
