import HeroSection from "@/components/contact/HeroSection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/contact/ContactForm";
import ContactSection from "@/components/contact/ContactSection";
import FaqSection from "@/components/contact/FaqSection";

export default function page() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ContactForm />
      <FaqSection />
      <ContactSection />
      <Footer />
    </>
  );
}
