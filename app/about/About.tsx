import React from "react";
import { motion } from "framer-motion";
type Props = {};
export default function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-18 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl ">
        About
      </h3>
      <motion.img
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: false }}
        className="mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:round-lg md:w-64 h-95 xl:w-[500px] xl:h-[550px]"
        src="https://media-exp1.licdn.com/dms/image/C4D03AQGu6pX_-t6uiA/profile-displayphoto-shrink_200_200/0/1662543085930?e=1669852800&v=beta&t=QAG01GadjWBxfjXR3WlD3b0NBrZ-8lT1jdM4ogndCGI"
        alt="background image"
        // src="https://twitter.com/FaotuHappy/photo"
      />
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          A Quick{" "}
          <span className="underline decoration-{#ffc0b}/40">snap </span> about
          me
        </h4>
        <h4 className="text-l text-justify">
          Hey there, I am a talented frontend developer with a keen eye for
          designing user-friendly, responsive and fast-loading web applications.
          Over the past 6years, I have built and managed e_learning
          applications, company portfolio applications and personal blogging
          applications for small brands. I have taught and trained over 1,500
          Interns, undergraduates and college students on Web and IT tools.
          ReactJS, NextJS, JavaScript, TailwindCSS and Sanity are my magical
          tools.
        </h4>
      </div>
    </motion.div>
  );
}
