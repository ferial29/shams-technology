import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import TrustSection from "@/components/sections/TrustSection";
import FeaturedWork from "@/components/sections/FeaturedWork";
import Services from "@/components/sections/Services";
import HowWeWork from "@/components/sections/HowWeWork";
import FinalCTA from "@/components/sections/FinalCTA";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <TrustSection />
        <FeaturedWork />
        <Services />
        <HowWeWork />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}