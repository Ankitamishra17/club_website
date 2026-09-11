import HeroSection from "@/components/event/HeroSection";
import ContactSection from "@/components/event/ContactSection";
import UpcomingEvent from "@/components/event/UpcomingEvent";
import PastEvent from "@/components/event/PastEvent";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Testimonial from "@/components/event/Testimonial";

export const metadata = {
  title: "Events at Chicane Sports Bar | Noida",

  description:
    "Discover upcoming and past events at Chicane Sports Bar in Noida. Enjoy live sports, music, entertainment, food, and memorable experiences.",

  keywords: [
    "Chicane Sports Bar",
    "Chicane Sports Bar Noida",
    "Chicane Sports Bar events",
    "sports bar in Noida",
    "events in Noida",
    "live music Noida",
    "nightlife in Noida",
  ],

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://chicaneclub.in/event",
  },

  openGraph: {
    title: "Events at Chicane Sports Bar | Noida",

    description:
      "Explore upcoming and past events, live sports, music, entertainment, and nightlife experiences at Chicane Sports Bar in Noida.",

    url: "https://chicaneclub.in/event",

    siteName: "Chicane Sports Bar",

    type: "website",
  },
};

export default function Page() {
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
