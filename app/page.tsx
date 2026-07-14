import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AboutSection } from "@/components/AboutSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { TechStack } from "@/app/components/TechStack";
import { JourneySection } from "./components/JourneySection";

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container px-4 md:px-6">
        <AboutSection />
        <JourneySection />
        <ProjectsSection />
        <TechStack />
      </main>
      <Footer />
    </div>
  );
}
