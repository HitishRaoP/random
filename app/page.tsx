import { HeaderMain } from "@/modules/header/header-main";
import { HeroMain } from "@/modules/hero/hero-main";
import { PricingSection } from "@/modules/pricing/pricing-section";
import { FooterMain } from "@/modules/footer/footer-main";
import { ServicesView } from "@/modules/services/services-view";

export default function Home() {
  return (
    <div className="font-sans">
      <HeaderMain />
      <HeroMain />
      <ServicesView />
      <PricingSection />
      <FooterMain />
    </div>
  );
}
