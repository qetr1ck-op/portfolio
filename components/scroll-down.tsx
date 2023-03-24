"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function ScrollDown() {
  return (
    <div className="absolute bottom-32 xs:bottom-10 flex justify-center items-center w-full">
      {/*TODO: Link with hash not scrolling*/}
      <a href="#about">
        <div className="w-[35px] h-[64px] border-4 border-secondary rounded-3xl flex justify-center items-start p-2">
          <motion.div
            animate={{
              y: [0, 24, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
            className="w-3 h-3 rounded-full bg-secondary mb-1"
          />
        </div>
      </a>
    </div>
  );
}
