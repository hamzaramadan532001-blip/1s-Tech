import LogoMarquee from "@/components/LogoMarquee/LogoMarquee";
import HomePage from "./Home/page";
import TrustedPartner from "@/components/TrustedPartner/TrustedPartner";
import ServicesSection from "@/components/ServicesSection/ServicesSection";
import ContactSection from "@/components/ContactSection/ContactSection";
import FAQSection from "@/components/FAQSection/FAQSection";

export default function Page() {
  return (
    <>
      <HomePage />
      <LogoMarquee />
      <TrustedPartner />
      <ServicesSection />
      <ContactSection />
      <FAQSection />

    </>
  );
}