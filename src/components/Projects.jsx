// src/components/Projects.jsx
import React, { useState, useEffect } from "react";
import projects from "../data/projectsData";
import { motion, AnimatePresence } from "framer-motion";

const Projects = () => {
  const [selected, setSelected] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const itemsPerPage = 5;

  useEffect(() => {
    const hash = window.location.hash;
    if (hash === "#projects") {
      setShouldAnimate(true);
    }
  }, []);

  const totalPages = Math.ceil(projects.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProjects = projects.slice(startIndex, startIndex + itemsPerPage);

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-b from-gray-900 to-gray-950 text-white min-h-screen px-6"
    >
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-green-400 mb-6 text-center"
        initial={{ opacity: 0, y: 40 }}
        animate={shouldAnimate ? { opacity: 1, y: 0 } : ""}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true, amount: 0.4 }}
      >
        Projelerim
      </motion.h2>

      <motion.p
        className="text-center text-gray-300 mb-12 max-w-2xl mx-auto text-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={shouldAnimate ? { opacity: 1, y: 0 } : ""}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true, amount: 0.4 }}
      >
        İşte bugüne kadar geliştirdiğim, her biri kendi alanında özgün çözümler sunan projelerim.
      </motion.p>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentPage}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap justify-center gap-6"
        >
          {currentProjects.map((project) => (
            <motion.div
              key={project.id}
              className="w-full sm:w-[280px] md:w-[320px] bg-white/5 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden shadow-xl cursor-pointer hover:scale-[1.03] transition"
              whileHover={{ scale: 1.03 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="relative" onClick={() => setSelected(project)}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover object-top"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition flex items-center justify-center text-green-400 font-semibold text-lg">
                  Detayları Gör
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold text-green-400 mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-300">
                  {project.shortDescription}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Sayfa Geçişleri */}
      <div className="flex justify-center gap-4 mt-10">
        <button
          onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
          disabled={currentPage === 1}
          className="px-4 py-2 rounded bg-green-700 hover:bg-green-800 disabled:opacity-40"
        >
          ← Önceki
        </button>
        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={`px-4 py-2 rounded font-semibold ${
              currentPage === i + 1
                ? "bg-green-500 text-black"
                : "bg-white/10 text-white hover:bg-white/20"
            }`}
          >
            {i + 1}
          </button>
        ))}
        <button
          onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="px-4 py-2 rounded bg-green-700 hover:bg-green-800 disabled:opacity-40"
        >
          Sonraki →
        </button>
      </div>

      {/* Modal */}
      {selected && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center px-4">
          <div className="bg-gray-900 rounded-lg w-full max-w-5xl max-h-[95vh] overflow-y-auto relative p-6 shadow-xl">
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 text-white text-2xl hover:text-red-500"
            >
              ✕
            </button>
            <img
              src={selected.image}
              alt={selected.title}
              className="w-full max-h-[400px] object-contain rounded mb-6"
            />
            <h3 className="text-3xl font-bold text-green-400 mb-4">
              {selected.title}
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed text-lg">
              {selected.fullDescription}
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href={selected.github}
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded text-lg"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <a
                href={selected.demo}
                className="bg-white text-black hover:bg-gray-200 px-6 py-3 rounded text-lg"
                target="_blank"
                rel="noopener noreferrer"
              >
                Demo
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
