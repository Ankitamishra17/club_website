import Footer from "@/components/Footer";
import GallerySection from "@/components/gallery/GallerySection";
import HeroSection from "@/components/gallery/HeroSection";

import Navbar from "@/components/Navbar";


export default function page() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <GallerySection />
      <Footer />
    </>
  );
}
