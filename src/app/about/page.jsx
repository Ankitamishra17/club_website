import HeroSection from "@/components/about/HeroSection";
import MeetOurTeam from "@/components/about/MeetOurTeam";
import OurStorySection from "@/components/about/OurStorySection";
import SecuritySection from "@/components/about/SecuritySection";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function page() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <OurStorySection />
      <SecuritySection />
      <MeetOurTeam />
      <Footer />
    </>
  );
}
