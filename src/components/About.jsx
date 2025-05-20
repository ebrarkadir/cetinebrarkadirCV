import React from "react";
import { motion } from "framer-motion";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Node.js",
  "Express",
  "Tailwind CSS",
  "Go",
  "Python",
  "OpenWRT",
  "Firebase",
  "Linux",
];

const About = () => {
  return (
    <div
      id="about"
      className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-950 text-white py-20 px-6 md:px-20"

    >
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-green-400 mb-8 text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Hakkımda
      </motion.h2>

      <motion.div
        className="max-w-5xl mx-auto text-lg text-gray-300 mb-12 leading-relaxed text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 1 }}
      >
        <p>
          Merhaba, ben <strong className="text-white">Ebrar Kadir Çetin</strong>
          . Bilgisayar Mühendisiyim. Full Stack Web Geliştirme, Network
          Güvenliği ve Sistem Programlama konularında çalışıyorum. React, Go,
          OpenWRT, Firebase gibi teknolojilerle projeler geliştiriyor ve kendimi
          sürekli olarak güncel teknolojilerle geliştiriyorum.
        </p>
      </motion.div>

      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-gray-800 hover:bg-green-700 transition rounded-xl p-4 text-center text-white font-semibold shadow-md"
          >
            {skill}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default About;
