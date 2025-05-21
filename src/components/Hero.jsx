// src/components/Hero.jsx
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaChevronDown, FaGithub, FaLinkedin } from "react-icons/fa";
import profileImage from "../assets/profile.jpg";

const Hero = () => {
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
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-green-400">
          Merhaba, ben Ebrar Kadir Çetin
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-6">
          Bilgisayar Mühendisi | Full Stack Web Geliştirici | Network
          Geliştirici | Siber Güvenlik Meraklısı
        </p>

        <motion.a
          href="#projects"
          className="inline-block bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl text-lg transition-all"
          whileHover={{ scale: 1.05 }}
        >
          Projelerime Göz At
        </motion.a>

        {/* Sosyal Medya Butonları */}
        <div className="flex justify-center md:justify-start mt-6 gap-6">
          <a
            href="https://github.com/ebrarkadir"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-green-400 hover:text-green-300 text-2xl transition-all" />
          </a>
          <a
            href="https://www.linkedin.com/in/ebrar-kadir-%C3%A7etin-1a728019b/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-green-400 hover:text-green-300 text-2xl transition-all" />
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
          className="w-64 h-64 md:w-80 md:h-80 rounded-full shadow-lg object-cover border-4 border-green-500 mt-4"
        />
      </motion.div>

      {showArrow && (
        <motion.div
          className="absolute bottom-24 left-1/2 transform -translate-x-1/2 mt-6"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: [10, 20, 10] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <FaChevronDown className="text-green-400 text-2xl animate-bounce" />
        </motion.div>
      )}
    </div>
  );
};

export default Hero;
