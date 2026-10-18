import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WorkHero from "@/components/work/WorkHero";
import WorkProjects from "@/components/work/WorkProjects";
import WorkCTA from "@/components/work/WorkCTA";

export default function WorkPage() {
  return (
    <>
      <Header />

      <main>
        <WorkHero />
        <WorkProjects />
        <WorkCTA />
      </main>

      <Footer />
    </>
  );
}