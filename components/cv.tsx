"use client";

import { motion } from "framer-motion";
import { fadeIn, textVariant } from "@/constants/motion";
import { styles } from "@/constants/styles";
import React from "react";

const pdfFile = "/assets/cv/cv.pdf";

export function CV() {
  return (
    <div className="max-w-7xl sm:px-16 px-6 mx-auto relative z-0">
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>
            Here is the latest version of my resume
          </p>
          <h2 className={styles.sectionHeadText}>CV</h2>
        </motion.div>
        <motion.p
          variants={fadeIn("", "spring", 0.1, 2)}
          className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          <a
            href={pdfFile}
            target="_blank"
            className="hover:underline hover:text-white-100"
          >
            Preview
          </a>{" "}
          |{" "}
          <a
            href={pdfFile}
            download
            className="hover:underline hover:text-white-100"
          >
            Download
          </a>
        </motion.p>
      </motion.section>
    </div>
  );
}
