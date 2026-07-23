// src/components/About.jsx
import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  const translatedSkillCategories = t("skillCategories", { returnObjects: true });
  const skillCategories = Array.isArray(translatedSkillCategories)
    ? translatedSkillCategories
    : [];
  const aboutParagraphs = [
    t("aboutDescription1"),
    t("aboutDescription2"),
    t("aboutDescription3"),
    t("aboutDescription4"),
  ];

  return (
    <div
      id="about"
      className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-950 text-white pt-8 pb-12 px-4 sm:px-6 md:px-12 lg:px-16 scroll-mt-14"
    >
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-teal-500 mb-5 text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        {t("aboutTitle")}
      </motion.h2>

      <motion.div
        className="max-w-5xl mx-auto mb-9 text-sm md:text-base leading-relaxed text-gray-300"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 1 }}
      >
        <div className="mx-auto space-y-3 text-center md:text-left">
          {aboutParagraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </motion.div>

      <motion.div
        className="max-w-6xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        <h3 className="text-center text-xl md:text-2xl font-bold text-teal-400 mb-5">
          {t("skillsTitle")}
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-6 gap-4">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`group rounded-lg border border-white/[0.08] bg-white/[0.035] p-4 shadow-[0_12px_35px_rgba(0,0,0,0.16)] backdrop-blur-sm transition duration-300 hover:-translate-y-0.5 hover:border-teal-400/35 hover:bg-white/[0.055] ${
                index < 2 ? "xl:col-span-3" : "xl:col-span-2"
              }`}
            >
              <div className="mb-3 flex items-center gap-2 border-b border-white/10 pb-2.5">
                <span className="h-2 w-2 rounded-full bg-teal-400 shadow-[0_0_12px_rgba(45,212,191,0.55)]" />
                <h4 className="text-sm font-semibold tracking-wide text-teal-300">
                  {category.title}
                </h4>
              </div>
              <div className="flex flex-wrap gap-1.5 md:gap-2">
                {category.items.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md border border-white/[0.08] bg-black/20 px-2 py-1 text-[11px] font-medium leading-none text-gray-200/90 transition group-hover:border-white/15 hover:border-teal-400/45 hover:bg-teal-400/10 hover:text-teal-100"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default About;
