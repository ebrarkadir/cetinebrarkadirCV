// src/components/Resume.jsx
import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Resume = () => {
  const { t } = useTranslation();
  const educationData = t("resume.educationData", { returnObjects: true });
  const experienceData = t("resume.experienceData", { returnObjects: true });
  const certificateData = t("resume.certificateData", { returnObjects: true });

  return (
    <section
      id="resume"
      className="scroll-mt-12 pt-10 px-6 md:px-20 bg-gradient-to-b from-gray-900 to-black text-white min-h-[120vh]"
    >
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-orange-600 mb-6 text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        {t("resume.title")}
      </motion.h2>

      <motion.p
        className="text-center text-gray-300 mb-6 max-w-2xl mx-auto text-sm md:text-base"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.4 }}
      >
        {t("resume.description")}
      </motion.p>

      <motion.p
        className="text-center text-orange-500 underline hover:text-orange-700 mb-12 text-sm md:text-base"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true, amount: 0.4 }}
      >
        <a href="/ebrarkadircetincv.pdf" download>
          {t("resume.download")}
        </a>
      </motion.p>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Eğitim */}
        <div>
          <h3 className="text-xl font-bold text-orange-500 mb-4 text-center border-b border-orange-700 pb-2">
            🎓 {t("resume.education")}
          </h3>
          <div className="space-y-4">
            {educationData.map((item, i) => (
              <ResumeItem key={i} {...item} />
            ))}
          </div>
        </div>

        {/* Deneyim */}
        <div>
          <h3 className="text-xl font-bold text-orange-500 mb-4 text-center border-b border-orange-700 pb-2">
            🧑‍💻 {t("resume.experience")}
          </h3>
          <div className="space-y-4">
            {experienceData.map((item, i) => (
              <ResumeItem key={i} {...item} />
            ))}
          </div>
        </div>

        {/* Sertifikalar */}
        <div>
          <h3 className="text-xl font-bold text-orange-500 mb-4 text-center border-b border-orange-700 pb-2">
            📜 {t("resume.certificates")}
          </h3>
          <div className="space-y-3">
            {certificateData.map((item, i) => (
              <ResumeItem key={i} {...item} isCertificate />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const ResumeItem = ({ year, title, place, description, isCertificate }) => {
  const hasLink =
    isCertificate &&
    description.includes("http") &&
    !title.includes("Linux Essentials");

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: false, amount: 0.3 }}
      className="bg-white/5 rounded-md p-3 shadow-sm hover:shadow-md transition-all text-xs"
    >
      <h4 className="font-semibold text-orange-400 mb-1 truncate">{title}</h4>
      <span className="block text-gray-400 italic mb-1">
        {place} | {year}
      </span>
      <p className="text-gray-300">
        {hasLink ? (
          <a
            href={description.match(/\((.*?)\)/)?.[1] || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-orange-600 hover:bg-orange-700 text-white px-3 py-1 rounded"
          >
            View Certificate
          </a>
        ) : (
          description.replace(/\[.*?\]\(.*?\)/, "")
        )}
      </p>
    </motion.div>
  );
};

export default Resume;
