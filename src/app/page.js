import AboutSection from "@/components/home/AboutSection";
import HeroSection from "@/components/home/HeroSection";
import OurEvent from "@/components/home/OurEvent";
import OurService from "@/components/home/OurService";
import WatchVideo from "@/components/home/WatchVideo";
import GallerySection from "@/components/home/GallerySection";
import TestimonialSecton from "@/components/home/TestimonialSection";
import ContactSection from "@/components/home/ContactSction";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <OurEvent />
      <OurService />
      <AboutSection />
      <WatchVideo />
      <GallerySection />
      <TestimonialSecton />
      <ContactSection />
      <Footer />
    </>
  );
}
