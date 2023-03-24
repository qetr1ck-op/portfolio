import { Navigation } from "@/components/navigation";
import { Welcome } from "@/components/welcome";
import { Overview } from "@/components/overview";

export default function RootPage() {
  return (
    <div className=" bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navigation />
        <Welcome />
      </div>
      <main>
        <Overview />
      </main>
    </div>
  );
}
