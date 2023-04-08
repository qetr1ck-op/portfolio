import { technologies } from "@/constants";
import { BallCanvas } from "@/components/ball-canvas";
import React from "react";

export function TechStack() {
  return (
    <div className="max-w-7xl sm:px-16 px-6 mx-auto">
      <span className="hash-span"></span>
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.slice(0, 12).map((technology) => (
          <div
            className="w-28 h-28 cursor-pointer"
            key={technology.name}
            title={technology.name}
          >
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </div>
  );
}
