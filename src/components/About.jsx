import React from "react";
import { motion } from "framer-motion";

const skills = [
  "C#",
  ".NET",
  "ASP.NET",
  "JavaScript",
  "React",
  "Node.js",
  "Express",
  "Python",
  "Go",
  "Docker",
  "MongoDB",
  "MSSQL",
];

const About = () => {
  return (
    <div
      id="about"
      className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-950 text-white pt-6 pb-16 px-4 sm:px-6 md:px-20 scroll-mt-14"


    >
      <motion.h2
        className="text-3xl sm:text-4xl md:text-5xl font-bold text-green-400 mb-6 text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Hakkımda
      </motion.h2>

      <motion.div
        className="max-w-5xl mx-auto text-xs sm:text-sm md:text-lg text-gray-300 mb-10 leading-relaxed text-center"

        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 1 }}
      >
        <p>
          Merhaba, ben <strong className="text-white">Ebrar Kadir Çetin</strong>
          . Yazılım geliştirme, siber güvenlik ve ağ teknolojileri alanlarına
          tutkuyla bağlı bir bilgisayar mühendisiyim. Full stack web geliştirme,
          ağ sistemleri tasarımı ve güvenlik testleri gibi farklı disiplinlerde
          aktif olarak çalışmalar yürütüyorum.
          <br />
          <br />
          Hem frontend hem backend tarafında kapsamlı projeler geliştirdim; aynı
          zamanda sistem güvenliği ve ağ yapılandırmaları konusunda da deneyim
          sahibiyim. Linux tabanlı sistemler, FreeBSD ve OpenWRT gibi özel
          altyapılar üzerinde çalıştım.
          <br />
          <br />
          Web güvenliği alanında uygulamalı çalışmalar yaptım; özellikle Burp
          Suite kullanarak SQL Injection, DOM temelli zafiyetler ve diğer
          zayıflık analizleri üzerine testler gerçekleştirdim.
          <br />
          <br />
          Kendimi, sadece kod yazmakla kalmayıp altyapı ve güvenlik
          perspektifiyle de düşünebilen bir geliştirici olarak
          konumlandırıyorum. Sürekli öğrenen, çözüm odaklı ve sistematik bir
          yaklaşım benimseyerek yazılım dünyasında kalıcı değerler üretmeyi
          hedefliyorum.
        </p>
      </motion.div>

      <motion.div
        className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        {skills.map((skill, index) => (
          <div
            key={index}
            className="w-[22%] min-w-[70px] bg-gray-800 hover:bg-green-700 transition rounded-xl p-2 text-center text-white text-sm font-semibold shadow-md"
          >
            {skill}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default About;
