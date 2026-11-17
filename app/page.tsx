import LogoMarquee from "@/components/LogoMarquee/LogoMarquee";
import HomePage from "./Home/page";
import TrustedPartner from "@/components/TrustedPartner/TrustedPartner";
import ServicesSection from "@/components/ServicesSection/ServicesSection";
import ContactSection from "@/components/ContactSection/ContactSection";
import FAQSection from "@/components/FAQSection/FAQSection";
import { ProjectsSection } from "@/components/CompanySections/CompanySections";

export default function Page() {
  return (
    <>
      <HomePage />
      <LogoMarquee />
      <TrustedPartner />
      <ServicesSection />
      <ProjectsSection />
      <ContactSection />
      <FAQSection />
    </>
  );
}
