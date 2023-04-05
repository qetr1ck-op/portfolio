import { technologies } from "@/constants";
import { BallCanvas } from "@/components/ball-canvas";
import React from "react";

export function TechStack() {
  return (
    <div>
      <span className="hash-span"></span>
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.slice(0, 14).map((technology) => (
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
