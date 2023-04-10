"use client";

import React from "react";
import { motion } from "framer-motion";
import { slideIn } from "@/constants/motion";
import { styles } from "@/constants/styles";
import { EarthCanvas } from "@/components/earth-canvas";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  ContactFormSchema,
  contactFormSchema,
} from "@/services/form-schemas.service";

export const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset: resetForm,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormSchema>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit: SubmitHandler<ContactFormSchema> = async (data) => {
    try {
      await fetch("/api/contact-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      alert("Thank you. I will get back to you as soon as possible.");
      resetForm();
    } catch {
      alert("Ahh, something went wrong. Please try again.");
    }
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact</h3>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-6 flex flex-col gap-4"
        >
          <input
            type="text"
            id="name"
            placeholder="What's your name?"
            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            {...register("name")}
          />
          {errors.name && (
            <div className="text-red-800 px-6">{errors.name?.message}</div>
          )}

          <input
            type="text"
            id="email"
            placeholder="What's your web address?"
            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            {...register("email")}
          />
          {errors.email && (
            <div className="text-red-800 px-6">{errors.email?.message}</div>
          )}

          <textarea
            rows={7}
            id="message"
            placeholder="What you want to say?"
            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            {...register("message")}
          />
          {errors.message && (
            <div className="text-red-800 px-6">{errors.message?.message}</div>
          )}

          <button
            type="submit"
            className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};
