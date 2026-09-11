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

export const metadata = {
  title: "Chicane Sports Bar | Sports Bar in Noida",

  description:
    "Visit Chicane Sports Bar in Noida for live sports, great food, drinks, entertainment, events, and an exciting atmosphere at Modi Mall.",

  keywords: [
    "Chicane Sports Bar",
    "Chicane Sports Bar Noida",
    "sports bar in Noida",
    "best sports bar in Noida",
    "sports bar near Modi Mall",
    "club in Noida",
    "nightlife in Noida",
    "Chicane Club Noida",
    "live sports Noida",
    "events in Noida",
  ],

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://chicaneclub.in/",
  },

  openGraph: {
    title: "Chicane Sports Bar | Sports Bar in Noida",

    description:
      "Experience live sports, food, drinks, entertainment, and exciting events at Chicane Sports Bar in Noida.",

    url: "https://chicaneclub.in/",

    siteName: "Chicane Sports Bar",

    type: "website",
  },
};

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <OurEvent />
      <OurService />
      <AboutSection />
      {/* <WatchVideo /> */}
      <GallerySection />
      <TestimonialSecton />
      <ContactSection />
      <Footer />
    </>
  );
}
