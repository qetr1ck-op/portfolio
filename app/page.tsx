import { Navigation } from "@/components/navigation";
import { Welcome } from "@/components/welcome";
import { Overview } from "@/components/overview";
import { Experience } from "@/components/experience";
import { TechStack } from "@/components/tech-stack";
import { Projects } from "@/components/projects";
import { Feedbacks } from "@/components/feedbacks";

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
      </main>
    </div>
  );
}
