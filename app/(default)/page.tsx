export const metadata = {
  title: "Home - Veteran Outbound",
  description: "Veteran outbound services and support",
};

import PageIllustration from "@/components/page-illustration";
import Hero from "@/components/hero-home";
import Features from "@/components/features";
import Testimonials from "@/components/testimonials";
import ContactSection from "@/components/contact-section";

export default function Home() {
  return (
    <>
      <PageIllustration />
      <Hero />
      <Features />
      <Testimonials />
      <ContactSection />
    </>
  );
}