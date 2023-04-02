"use client";

import { motion } from "framer-motion";
import { textVariant } from "@/constants/motion";
import { styles } from "@/constants/styles";
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
  // @ts-ignore
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";
import { experiences } from "@/constants";
import Image from "next/image";

const ExperienceCard: React.FC<{
  experience: (typeof experiences)[number];
}> = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full rounded-full overflow-hidden">
          <Image
            src={experience.icon}
            alt={experience.company_name}
            className="object-contain"
            width={52}
            height={52}
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
        <a
          className="text-secondary text-[16px] font-semibold underline"
          style={{ margin: 0 }}
          href={experience.company_url}
          target="_blank"
        >
          {experience.company_name}
        </a>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-[14px] pl-1 tracking-wider"
            dangerouslySetInnerHTML={{ __html: point }}
          ></li>
        ))}
      </ul>
      {/*TODO: tech-stack*/}
    </VerticalTimelineElement>
  );
};

export function Experience() {
  return (
    <div className="max-w-7xl sm:px-16 px-6 mx-auto relative z-0">
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <span className="hash-span" id="work">
          &nbsp;
        </span>

        <motion.div
          variants={textVariant()}
          className="flex flex-col items-center"
        >
          <p className={styles.sectionSubText}>What I have done so far</p>
          <h2 className={styles.sectionHeadText}>Work Experience</h2>
        </motion.div>
      </motion.section>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
}
