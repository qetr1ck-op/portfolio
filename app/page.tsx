import { Navigation } from "@/components/navigation";
import { Welcome } from "@/components/welcome";
import { Overview } from "@/components/overview";
import { Experience } from "@/components/experience";
import { TechStack } from "@/components/tech-stack";
import { Projects } from "@/components/projects";
import { Feedbacks } from "@/components/feedbacks";
import { StarsCanvas } from "@/components/starts-canvas";
import { SectionWrapper } from "@/components/section-wrapper";
import { ContactForm } from "@/components/contact-form";

export default function RootPage() {
  return (
    <div className="bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navigation />
        <Welcome />
      </div>
      <main>
        <Overview />
        <Experience />
        <TechStack />
        <Projects />
        <Feedbacks />
        <div className="relative z-0">
          <SectionWrapper id="contact">
            <ContactForm />
          </SectionWrapper>
          <StarsCanvas />
        </div>
      </main>
    </div>
  );
}
