import HeroSection from "@/components/contact/HeroSection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/contact/ContactForm";
import ContactSection from "@/components/contact/ContactSection";
import FaqSection from "@/components/contact/FaqSection";
import Map from "@/components/contact/Map";

export const metadata = {
 title: "Contact Chicane Sports Bar | Noida",

  description:
    "Contact Chicane Sports Bar in Noida for reservations, event enquiries, venue information, and other questions. Get in touch with our team today.",

  keywords: [
    "Contact Chicane Club",
    "Chicane Club Noida contact",
    "Chicane Club reservations",
    "Chicane Club booking",
    "Chicane Lounge Noida",
    "club booking in Noida",
  ],

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://chicaneclub.in/contact",
  },

  openGraph: {
    title: "Contact Chicane Sports Bar | Noida",

    description:
      "Get in touch with Chicane Club & Lounge in Noida for reservations, events, venue information, and enquiries.",

    url: "https://chicaneclub.in/contact",

    siteName: "Chicane Club & Lounge",

    type: "website",
  },
};

export default function Page() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ContactForm />
      <Map />
      <FaqSection />
      <ContactSection />
      <Footer />
    </>
  );
}
