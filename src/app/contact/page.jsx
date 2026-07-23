import HeroSection from "@/components/contact/HeroSection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/contact/ContactForm";
import ContactSection from "@/components/contact/ContactSection";
import FaqSection from "@/components/contact/FaqSection";
import Map from "@/components/contact/Map";

export default function page() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ContactForm />
      <Map/>
      <FaqSection />
      <ContactSection />
      <Footer />
    </>
  );
}
