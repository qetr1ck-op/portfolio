import dynamic from "next/dynamic";

import { Welcome } from "@/components/welcome";
import { Overview } from "@/components/overview";
import { Experience } from "@/components/experience";
import { TechStack } from "@/components/tech-stack";
import { Projects } from "@/components/projects";
import { Feedbacks } from "@/components/feedbacks";
import { StarsCanvas } from "@/components/starts-canvas";
import { SectionWrapper } from "@/components/section-wrapper";
import { ContactForm } from "@/components/contact-form";
import { CV } from "@/components/cv";
import { MetaTags } from "@/components/meta-tags";

import "../types/env-vars";

const Navigation = dynamic(() => import("@/components/navigation"), {
  ssr: false,
});

export default function RootPage() {
  return (
    <html>
      <head>
        <MetaTags />
      </head>
      <body suppressHydrationWarning={true}>
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
            <SectionWrapper id="cv">
              <CV />
            </SectionWrapper>
            <div className="relative z-0">
              <SectionWrapper id="contact">
                <ContactForm withCaptcha={false} />
              </SectionWrapper>
              <StarsCanvas />
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}
