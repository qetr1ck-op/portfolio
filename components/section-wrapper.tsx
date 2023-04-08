"use client";

import { motion } from "framer-motion";
import { staggerContainer } from "@/constants/motion";
import { styles } from "@/constants/styles";
import React from "react";

export const SectionWrapper: React.FC<{
  id: string;
  children: React.ReactNode;
}> = ({ id, children }) => {
  return (
    <motion.section
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
    >
      <span className="hash-span" id={id}>
        &nbsp;
      </span>

      {children}
    </motion.section>
  );
};
