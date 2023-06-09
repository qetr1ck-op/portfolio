"use client";

/*export function Overview() {
  return <div className="max-w-7xl sm:px-16 px-6 mx-auto">Overview</div>;
}*/
import { services } from "@/constants";
import { fadeIn, textVariant } from "@/constants/motion";
import { styles } from "@/constants/styles";
import { motion } from "framer-motion";
import React from "react";
import { Tilt } from "react-tilt";
import Image from "next/image";

const ServiceCard: React.FC<{
  index: number;
  title: string;
  icon: string;
}> = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
        <Image
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
          width="64"
          height="64"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

// TODO: rm hardcoded px values
export const Overview = () => {
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
          <p className={styles.sectionSubText}>Introduction</p>
          <h2 className={styles.sectionHeadText}>Overview</h2>
        </motion.div>

        <motion.p
          variants={fadeIn("", "spring", 0.1, 2)}
          className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Experienced JS Developer and Tech Lead with 10+ years of expertise in
          web development. Skilled in leading teams to build scalable,
          responsive web apps using modern frameworks and technologies.
          Proficient in software development life cycle, agile methodologies,
          and delivering high-quality code. Passionate about emerging
          technologies and guiding technical decisions. Seeking a challenging
          role in an innovative, collaborative, and leadership-driven
          organization.
        </motion.p>

        <div className="mt-20 flex flex-wrap gap-10">
          {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
        </div>
      </motion.section>
    </div>
  );
};
