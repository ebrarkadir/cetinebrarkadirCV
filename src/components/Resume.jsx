// src/components/Resume.jsx
import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const getMarkdownLink = (text) => text?.match(/\((.*?)\)/)?.[1];

const CompactItem = ({ year, title, place, description }) => (
  <motion.div
    initial={{ opacity: 0, y: 18 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.45 }}
    viewport={{ once: false, amount: 0.25 }}
    className="resume-card rounded-md border border-white/10 bg-white/[0.04] shadow-sm transition-all hover:border-teal-500/40 hover:bg-white/[0.06]"
  >
    <h4 className="resume-card-title font-semibold text-teal-300">
      {title}
    </h4>
    <span className="resume-meta block italic text-gray-400">
      {place} | {year}
    </span>
    <p className="resume-card-text text-gray-300">{description}</p>
  </motion.div>
);

const ExperienceItem = ({ year, title, place, description }) => (
  <motion.div
    initial={{ opacity: 0, x: 18 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.45 }}
    viewport={{ once: false, amount: 0.2 }}
    className="resume-timeline-item relative border-l border-teal-500/35"
  >
    <span className="resume-timeline-dot absolute rounded-full bg-teal-400 shadow-[0_0_0_4px_rgba(20,184,166,0.12)]" />
    <div className="resume-card resume-experience-card rounded-md border border-white/10 bg-white/[0.045] shadow-sm transition-all hover:border-teal-500/40 hover:bg-white/[0.065]">
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between">
        <h4 className="resume-card-title font-semibold text-teal-300">
          {title}
        </h4>
        <span className="resume-meta shrink-0 font-medium text-gray-400">
          {year}
        </span>
      </div>
      <span className="resume-company block font-medium text-gray-300">
        {place}
      </span>
      <p className="resume-card-text resume-experience-text text-gray-300">
        {description}
      </p>
    </div>
  </motion.div>
);

const CertificateItem = ({ year, title, place, description }) => {
  const { t } = useTranslation();
  const link = getMarkdownLink(description);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: false, amount: 0.25 }}
      className="resume-certificate flex items-center justify-between rounded-md border border-white/10 bg-white/[0.04] transition-all hover:border-teal-500/40 hover:bg-white/[0.06]"
    >
      <div className="min-w-0">
        <h4 className="resume-certificate-title truncate font-semibold text-teal-300">
          {title}
        </h4>
        <span className="resume-meta block text-gray-400">
          {place} | {year}
        </span>
      </div>
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="resume-certificate-link shrink-0 rounded-full bg-teal-600 font-medium text-white transition hover:bg-teal-700"
        >
          {t("resume.viewCertificate")}
        </a>
      )}
    </motion.div>
  );
};

const ResumeGroup = ({ title, children }) => (
  <div className="resume-group rounded-lg border border-white/10 bg-black/10 backdrop-blur-sm">
    <h3 className="resume-group-title border-b border-teal-700/60 font-bold uppercase tracking-wide text-teal-400">
      {title}
    </h3>
    {children}
  </div>
);

const Resume = () => {
  const { t } = useTranslation();
  const educationData = t("resume.educationData", { returnObjects: true });
  const experienceData = t("resume.experienceData", { returnObjects: true });
  const certificateData = t("resume.certificateData", { returnObjects: true });

  return (
    <section
      id="resume"
      className="resume-section scroll-mt-12 bg-gradient-to-b from-gray-950 to-gray-900 px-4 text-white sm:px-6 md:px-12 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          className="resume-header mx-auto max-w-3xl text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <h2 className="resume-title font-bold text-teal-500">
            {t("resume.title")}
          </h2>
          <p className="resume-description mx-auto max-w-2xl text-gray-300">
            {t("resume.description")}
          </p>
          <a
            href="/ebrarkadircetincv.pdf"
            download
            className="resume-download inline-flex rounded-full bg-teal-600 font-semibold text-white shadow-md shadow-teal-900/20 transition hover:bg-teal-700"
          >
            {t("resume.download")}
          </a>
        </motion.div>

        <div className="resume-grid grid grid-cols-1 lg:grid-cols-[0.35fr_0.65fr]">
          <div className="resume-left order-2 lg:order-1">
            <ResumeGroup title={t("resume.education")}>
              <div className="resume-stack">
                {educationData.map((item, i) => (
                  <CompactItem key={i} {...item} />
                ))}
              </div>
            </ResumeGroup>

            <ResumeGroup title={t("resume.certificates")}>
              <div className="resume-stack">
                {certificateData.map((item, i) => (
                  <CertificateItem key={i} {...item} />
                ))}
              </div>
            </ResumeGroup>
          </div>

          <div className="order-1 lg:order-2">
            <ResumeGroup title={t("resume.experience")}>
              <div className="resume-experience-stack">
                {experienceData.map((item, i) => (
                  <ExperienceItem key={i} {...item} />
                ))}
              </div>
            </ResumeGroup>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
