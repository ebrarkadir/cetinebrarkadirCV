// src/components/Hero.jsx
import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { FaChevronDown, FaGithub, FaLinkedin } from "react-icons/fa";
import profileImage from "../assets/profile.jpg";

const Hero = () => {
  const { t } = useTranslation();
  const [showArrow, setShowArrow] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setShowArrow(window.scrollY < 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      id="home"
      className="relative min-h-screen bg-gradient-to-b from-black to-gray-900 text-white flex flex-col-reverse md:flex-row items-center justify-center px-6 md:px-20 py-24 gap-12"
    >
      {/* Yazı */}
      <motion.div
        className="flex-1 text-center md:text-left"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 text-orange-600">
          {t("hero_title")}
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6">
          {t("hero_description")}
        </p>

        <motion.a
          href="#projects"
          className="inline-block bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-xl text-base md:text-lg transition-all"
          whileHover={{ scale: 1.05 }}
        >
          {t("hero_button")}
        </motion.a>

        {/* Sosyal Medya Butonları */}
        <div className="flex justify-center md:justify-start mt-6 gap-6">
          <a
            href="https://github.com/ebrarkadir"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-orange-600 hover:text-orange-600 text-2xl transition-all" />
          </a>
          <a
            href="https://www.linkedin.com/in/ebrar-kadir-%C3%A7etin-1a728019b/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-orange-600 hover:text-orange-600 text-2xl transition-all" />
          </a>
        </div>
      </motion.div>

      {/* Fotoğraf */}
      <motion.div
        className="flex-1 flex justify-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
      >
        <img
          src={profileImage}
          alt="Ebrar Kadir"
          className="w-44 h-44 sm:w-56 sm:h-56 md:w-80 md:h-80 rounded-full shadow-lg object-cover border-4 border-orange-600 mt-4"
        />
      </motion.div>

      {/* Aşağı Ok */}
      {showArrow && (
        <motion.div
          className="absolute bottom-16 inset-x-0 flex justify-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: [10, 20, 10] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <FaChevronDown className="text-orange-600 text-3xl animate-bounce" />
        </motion.div>
      )}
    </div>
  );
};

export default Hero;
