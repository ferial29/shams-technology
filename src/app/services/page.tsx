
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import ServicesHero from "@/components/services/ServicesHero";
import ServicesList from "@/components/services/ServicesList";
import ServicesCTA from "@/components/services/ServicesCTA";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-shams-background text-shams-text">
      <Header />

      <ServicesHero />

      <div id="services-list" className="scroll-mt-20">
        <ServicesList />
      </div>

      <ServicesCTA />

      <Footer />
    </main>
  );
}
