import { author } from "@/constants";
import { ComputerCanvas } from "./computer-canvas";
import { ScrollDown } from "@/components/scroll-down";

export function Welcome() {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className="absolute top-[120px] inset-0 max-w-7xl sm:px-16 px-6 flex flex-row gap-5 items-start mx-auto">
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-violet-500"></div>
          <div className="w-1 sm:h-80 h-40 violet-gradient"></div>
        </div>
        <div>
          <h1 className="mt-5 text-white font-black lg:text-7xl sm:text-6xl text-5xl">
            Hi, I'm <span className="text-violet-500">{author.name}</span>
          </h1>
          <p className="text-white-100 mt-4 lg:text-3xl text-2xl">
            {author.about}
          </p>
        </div>
      </div>
      <ComputerCanvas />
      <ScrollDown />
    </section>
  );
}
