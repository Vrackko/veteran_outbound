export const metadata = {
  title: "Veteran Outbound - Cold Email Marketing Agency for Business Growth",
  description: "We help businesses generate qualified leads through strategic cold email campaigns that convert prospects into paying customers.",
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