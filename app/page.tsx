import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AboutSection } from "@/components/AboutSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ContactSection } from "@/components/ContactSection";
import { TechStack } from "@/app/components/TechStack";
import { EducationSection } from "./components/EducationSection";
import { WorkExperienceSection } from "./components/WorkExperienceSection";

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container px-4 md:px-6">
        <AboutSection />
        <EducationSection />
        <WorkExperienceSection />
        <ProjectsSection />
        <TechStack />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
