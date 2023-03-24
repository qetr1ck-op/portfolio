import { Navigation } from "@/components/navigation";
import { Welcome } from "@/components/welcome";

export default function RootPage() {
  return (
    <div className=" bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navigation />
        <Welcome />
      </div>
      <main></main>
    </div>
  );
}
