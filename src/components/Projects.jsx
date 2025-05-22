import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import projects from "../data/projectsData";

const Projects = () => {
  const [selected, setSelected] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [slideIndex, setSlideIndex] = useState(0);

  const itemsPerPage = 5;
  const totalPages = Math.ceil(projects.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProjects = projects.slice(startIndex, startIndex + itemsPerPage);

  // Sayfa değiştiğinde otomatik yukarı kaydır
  useEffect(() => {
    const section = document.getElementById("projects");
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [currentPage]);

  const handlePrev = (imagesLength) => {
    setSlideIndex((prev) => (prev - 1 + imagesLength) % imagesLength);
  };

  const handleNext = (imagesLength) => {
    setSlideIndex((prev) => (prev + 1) % imagesLength);
  };

  return (
    <section
      id="projects"
      className="scroll-mt-12 pt-10 pb-20 bg-gradient-to-b from-gray-950 to-gray-900 text-white min-h-screen px-6"
    >
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-green-400 mb-6 text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        Projelerim
      </motion.h2>

      <motion.p
        className="text-center text-gray-300 mb-12 max-w-2xl mx-auto text-lg"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        İşte bugüne kadar geliştirdiğim, her biri kendi alanında özgün çözümler
        sunan projelerim.
      </motion.p>

      <div className="flex flex-wrap justify-center gap-6">
        {currentProjects.map((project) => (
          <motion.div
            key={project.id}
            className="w-full sm:w-[280px] md:w-[320px] bg-white/5 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden shadow-xl cursor-pointer hover:scale-[1.03] transition"
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
                alt={project.title}
                className="w-full h-48 object-cover object-top"
              />

              
              <div className="hidden md:flex absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition items-center justify-center text-green-400 font-semibold text-lg">
                Detayları Gör
              </div>

              
              <div className="md:hidden bg-[rgba(0,0,0,0.4)] text-center text-green-400 py-2 text-sm font-medium">
                Detayları görmek için dokunun
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
      </div>

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

      {/* Modal (Pop-up) */}
      {selected && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center px-4">
          <div className="bg-gray-900 rounded-lg w-full max-w-5xl max-h-[95vh] overflow-y-auto relative p-6 shadow-xl">
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 text-white text-2xl hover:text-red-500"
            >
              ✕
            </button>

            {selected.images && selected.images.length > 1 ? (
              <div className="relative">
                <img
                  src={selected.images[slideIndex]}
                  alt={selected.title}
                  className="w-full max-h-[400px] object-contain rounded mb-6"
                />
                <button
                  onClick={() => handlePrev(selected.images.length)}
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 text-green-400 text-4xl"
                >
                  ◀
                </button>
                <button
                  onClick={() => handleNext(selected.images.length)}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-green-400 text-4xl"
                >
                  ▶
                </button>
              </div>
            ) : (
              <img
                src={selected.image}
                alt={selected.title}
                className="w-full max-h-[400px] object-contain rounded mb-6"
              />
            )}

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

      {/* GitHub Bağlantısı */}
      <motion.p
        className="text-center text-gray-400 mt-16 text-sm md:text-base"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true, amount: 0.4 }}
      >
        Bu projelerin detaylarına ve daha fazlasına{" "}
        <a
          href="https://github.com/ebrarkadir"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-400 hover:underline"
        >
          GitHub profilimden
        </a>{" "}
        ulaşabilirsiniz.
      </motion.p>
    </section>
  );
};

export default Projects;
