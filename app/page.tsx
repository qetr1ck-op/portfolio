import { Navigation } from "@/components/navigation";
import { Welcome } from "@/components/welcome";
import { Overview } from "@/components/overview";
import { Experience } from "@/components/experience";

export default function RootPage() {
  return (
    <div className=" bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navigation />
        <Welcome />
      </div>
      <main>
        <Overview />
        <Experience />
      </main>
    </div>
  );
}
