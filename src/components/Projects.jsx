// src/components/Projects.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import projects from "../data/projectsData";

const Projects = () => {
  const { i18n, t } = useTranslation();
  const [selected, setSelected] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [slideIndex, setSlideIndex] = useState(0);
  const [fullscreenImage, setFullscreenImage] = useState(null);

  const itemsPerPage = 4;
  const totalPages = Math.ceil(projects.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProjects = projects.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    const section = document.getElementById("projects");
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handlePrev = (imagesLength) => {
    setSlideIndex((prev) => (prev - 1 + imagesLength) % imagesLength);
  };

  const handleNext = (imagesLength) => {
    setSlideIndex((prev) => (prev + 1) % imagesLength);
  };

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-b from-gray-950 to-gray-900 text-white min-h-screen px-6"
    >
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-teal-500 mb-6 text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        {t("projects.title")}
      </motion.h2>

      <motion.p
        className="text-center text-gray-300 mb-12 max-w-2xl mx-auto text-lg"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        {t("projects.description")}
      </motion.p>

      <div className="flex flex-wrap justify-center gap-4 md:gap-6">
        {currentProjects.map((project) => {
          const lang = i18n.language;
          const tData = project.translations[lang];
          return (
            <motion.div
              key={project.id}
              className="w-full sm:w-[45%] md:w-[22%] bg-white/5 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden shadow-xl cursor-pointer hover:scale-[1.03] transition"
              whileHover={{ scale: 1.03 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: false, amount: 0.2 }}
            >
              <div
                className="relative"
                onClick={() => {
                  setSelected(project);
                  setSlideIndex(0);
                }}
              >
                <img
                  src={project.images ? project.images[0] : project.image}
                  alt={tData.title}
                  className="w-full h-48 object-cover object-top"
                />
                <div className="hidden md:flex absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition items-center justify-center text-teal-400 font-semibold text-lg">
                  {t("projects.seeDetails")}
                </div>
                <div className="md:hidden bg-[rgba(0,0,0,0.4)] text-center text-teal-400 py-2 text-sm font-medium">
                  {t("projects.tapToView")}
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold text-teal-400 mb-2">
                  {tData.title}
                </h3>
                <p className="text-sm text-gray-300">{tData.shortDescription}</p>
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="flex justify-center gap-4 mt-10">
        <button
          onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
          disabled={currentPage === 1}
          className="px-4 py-2 rounded bg-teal-700 hover:bg-teal-800 disabled:opacity-40"
        >
          {t("projects.previous")}
        </button>
        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            onClick={() => handlePageChange(i + 1)}
            className={`px-4 py-2 rounded font-semibold ${
              currentPage === i + 1
                ? "bg-teal-500 text-black"
                : "bg-white/10 text-white hover:bg-white/20"
            }`}
          >
            {i + 1}
          </button>
        ))}
        <button
          onClick={() => handlePageChange(Math.min(currentPage + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="px-4 py-2 rounded bg-teal-700 hover:bg-teal-800 disabled:opacity-40"
        >
          {t("projects.next")}
        </button>
      </div>

      {selected && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center px-4">
          <div className="bg-gray-900 rounded-lg w-full max-w-5xl max-h-[95vh] overflow-y-auto relative p-6 shadow-xl">
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 text-red-500 text-2xl hover:text-red-600 z-50"
            >
              ✕
            </button>
            {selected.images && selected.images.length > 1 ? (
              <div className="relative">
                <img
                  src={selected.images[slideIndex]}
                  alt={selected.translations[i18n.language].title}
                  onClick={() => setFullscreenImage(selected.images[slideIndex])}
                  className="w-full max-h-[400px] object-contain rounded mb-6 cursor-zoom-in"
                />
                <button
                  onClick={() => handlePrev(selected.images.length)}
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500 text-4xl"
                >
                  ◀
                </button>
                <button
                  onClick={() => handleNext(selected.images.length)}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 text-4xl"
                >
                  ▶
                </button>
              </div>
            ) : (
              <img
                src={selected.image}
                alt={selected.translations[i18n.language].title}
                onClick={() => setFullscreenImage(selected.image)}
                className="w-full max-h-[400px] object-contain rounded mb-6 cursor-zoom-in"
              />
            )}
            <h3 className="text-3xl font-bold text-teal-400 mb-4">
              {selected.translations[i18n.language].title}
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed text-sm sm:text-base md:text-lg">
              {selected.translations[i18n.language].fullDescription}
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href={selected.github}
                className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded text-lg"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              
            </div>
          </div>
        </div>
      )}

      {fullscreenImage && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center"
          onClick={() => setFullscreenImage(null)}
        >
          <button
            onClick={() => setFullscreenImage(null)}
            className="absolute top-4 right-4 text-red-500 text-3xl z-50 hover:text-red-600"
          >
            ✕
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              const project = projects.find((p) => p.images?.includes(fullscreenImage));
              if (project && project.images) {
                const currentIndex = project.images.indexOf(fullscreenImage);
                const newIndex = (currentIndex - 1 + project.images.length) % project.images.length;
                setFullscreenImage(project.images[newIndex]);
              }
            }}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 text-4xl"
          >
            ◀
          </button>
          <img
            src={fullscreenImage}
            alt="Fullscreen"
            className="max-w-full max-h-full object-contain cursor-zoom-out"
          />
          <button
            onClick={(e) => {
              e.stopPropagation();
              const project = projects.find((p) => p.images?.includes(fullscreenImage));
              if (project && project.images) {
                const currentIndex = project.images.indexOf(fullscreenImage);
                const newIndex = (currentIndex + 1) % project.images.length;
                setFullscreenImage(project.images[newIndex]);
              }
            }}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 text-4xl"
          >
            ▶
          </button>
        </div>
      )}

      <motion.p
        className="text-center text-gray-400 mt-16 text-sm md:text-base"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true, amount: 0.4 }}
      >
        {t("projects.githubNote")}
        <a
          href="https://github.com/ebrarkadir"
          target="_blank"
          rel="noopener noreferrer"
          className="text-teal-400 hover:underline"
        >
          {t("projects.githubLink")}
        </a>
        {t("projects.githubSuffix")}
      </motion.p>
    </section>
  );
};

export default Projects;
