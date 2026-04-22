import HeroSection from "@/components/event/HeroSection";
import ContactSection from "@/components/event/ContactSection";
import UpcomingEvent from "@/components/event/UpcomingEvent";
import PastEvent from "@/components/event/PastEvent";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Testimonial from "@/components/event/Testimonial";

export default function page() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <UpcomingEvent />
      <PastEvent />
      <Testimonial />
      <ContactSection />
      <Footer />
    </>
  );
}
