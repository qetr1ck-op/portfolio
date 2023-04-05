"use client";

import { motion } from "framer-motion";
import { fadeIn, textVariant } from "@/constants/motion";
import { styles } from "@/constants/styles";
import { profileLinks } from "@/constants/index";
import React from "react";

export function Projects() {
  return (
    <div className="max-w-7xl sm:px-16 px-6 mx-auto relative z-0">
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <span className="hash-span" id="about">
          &nbsp;
        </span>

        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>my work</p>
          <h2 className={styles.sectionHeadText}>Projects</h2>
        </motion.div>

        <motion.p
          variants={fadeIn("", "spring", 0.1, 2)}
          className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          I have had the opportunity to work on a multitude of software
          development projects, ranging from small agile team-based projects to
          enterprise-level solutions. While the majority of these projects are
          currently under non-disclosure agreements, please feel free to contact
          me directly to discuss my experience in further detail. Additionally,
          my{" "}
          <a
            href={profileLinks.linkedin}
            target="_blank"
            className="text-white-100 hover:underline"
          >
            LinkedIn profile
          </a>{" "}
          provides further insights into my professional background, including
          my education and previous work experience. Furthermore, my open-source
          activities and contributions can be viewed on my{" "}
          <a
            href={profileLinks.github}
            target="_blank"
            className="text-white-100 hover:underline"
          >
            GitHub account
          </a>
          .
        </motion.p>
      </motion.section>
    </div>
  );
}
