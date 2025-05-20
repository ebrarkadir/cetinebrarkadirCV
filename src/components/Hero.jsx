import React from "react";
import { motion } from "framer-motion";
import profileImage from "../assets/profile.jpg";

const Hero = () => {
  return (
    <div
      id="home"
      className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white flex flex-col-reverse md:flex-row items-center justify-center px-6 md:px-20 py-12 gap-12"

    >
      {/* Yazı Kısmı */}
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
          Bilgisayar Mühendisi | Full Stack Web Geliştirici | Network Güvenliği
          Meraklısı
        </p>
        <motion.a
          href="#projects"
          className="inline-block bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl text-lg transition-all"
          whileHover={{ scale: 1.05 }}
        >
          Projelerime Göz At
        </motion.a>
      </motion.div>

      {/* Fotoğraf Kısmı */}
      <motion.div
        className="flex-1 flex justify-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
      >
        <img
          src={profileImage}
          alt="Ebrar Kadir"
          className="w-64 h-64 md:w-80 md:h-80 rounded-full shadow-lg object-cover border-4 border-green-500"
        />
      </motion.div>
    </div>
  );
};

export default Hero;
