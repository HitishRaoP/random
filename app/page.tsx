import { HeaderMain } from "@/modules/header/header-main";
import { HeroMain } from "@/modules/hero/hero-main";
import { StatsBand } from "@/modules/stats/stats-band";
import { WorksGrid } from "@/modules/works/works-grid";
import { ServicesGrid } from "@/modules/services/services-grid";
import { PartnersRow } from "@/modules/partners/partners-row";
import { TestimonialsList } from "@/modules/testimonials/testimonials-list";
import { BlogList } from "@/modules/blog/blog-list";
import { FooterMain } from "@/modules/footer/footer-main";

export default function Home() {
  return (
    <div className="font-sans">
      <HeaderMain />
      <HeroMain />
      <StatsBand />
      <WorksGrid />
      <ServicesGrid />
      <PartnersRow />
      <TestimonialsList />
      <BlogList />
      <FooterMain />
    </div>
  );
}
