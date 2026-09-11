import HeroSection from "@/components/about/HeroSection";
import MeetOurTeam from "@/components/about/MeetOurTeam";
import OurStorySection from "@/components/about/OurStorySection";
import SecuritySection from "@/components/about/SecuritySection";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const metadata = {
title: "About Chicane Sports Bar | Noida",

  description:
    "Learn about Chicane Sports Bar in Noida, our story, team, security, and commitment to creating an unforgettable nightlife experience.",

  keywords: [
    "Chicane Club",
    "Chicane Club Noida",
    "Chicane Lounge",
    "club in Noida",
    "lounge in Noida",
    "nightlife in Noida",
  ],

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://chicaneclub.in/about",
  },

  openGraph: {
    title: "About Chicane Sports Bar | Noida",

    description:
      "Discover the story, team, security, and experience behind Chicane Club & Lounge in Noida.",

    url: "https://chicaneclub.in/about",

    siteName: "Chicane Club & Lounge",

    type: "website",
  },
};

export default function Page() {
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
