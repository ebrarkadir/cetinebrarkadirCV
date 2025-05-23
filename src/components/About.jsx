// src/components/About.jsx
import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const skills = [
  "C#",
  ".NET",
  "ASP.NET",
  "JavaScript",
  "React",
  "Node.js",
  "Express",
  "Python",
  "Go",
  "Docker",
  "MongoDB",
  "MSSQL",
];

const About = () => {
  const { t } = useTranslation();

  return (
    <div
      id="about"
      className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-950 text-white pt-6 pb-16 px-4 sm:px-6 md:px-20 scroll-mt-14"
    >
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-orange-500 mb-6 text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        {t("aboutTitle")}
      </motion.h2>

      <motion.div
        className="max-w-5xl mx-auto text-xs sm:text-sm md:text-lg text-gray-300 mb-10 leading-relaxed text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 1 }}
      >
        <p>
          {t("aboutDescription1")}
          <br />
          <br />
          {t("aboutDescription2")}
          <br />
          <br />
          {t("aboutDescription3")}
          <br />
          <br />
          {t("aboutDescription4")}
        </p>
      </motion.div>

      <motion.div
        className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        {skills.map((skill, index) => (
          <div
            key={index}
            className="w-[22%] min-w-[70px] bg-gray-800 hover:bg-orange-700 transition rounded-xl p-2 text-center text-white text-sm font-semibold shadow-md"
          >
            {skill}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default About;
