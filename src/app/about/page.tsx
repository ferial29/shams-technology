
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import AboutHero from "@/components/about/AboutHero";
import AboutStory from "@/components/about/AboutStory";
import AboutApproach from "@/components/about/AboutApproach";
import AboutCTA from "@/components/about/AboutCTA";

export const metadata = {
  title: "About Us | SHAMS Technology",
  description:
    "Discover SHAMS Technology, a London-based digital studio combining thoughtful design, modern technology, and purposeful digital experiences.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-shams-background text-shams-text">
      <Header />

      <AboutHero />

      <AboutStory />

      <AboutApproach />

      <AboutCTA />

      <Footer />
    </main>
  );
}
