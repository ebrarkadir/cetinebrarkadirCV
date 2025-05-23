// src/components/Resume.jsx
import React from "react";
import { motion } from "framer-motion";

const Resume = () => {
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
        Özgeçmiş (CV)
      </motion.h2>

      <motion.p
        className="text-center text-gray-300 mb-6 max-w-2xl mx-auto text-sm md:text-base"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.4 }}
      >
        Sürekli gelişen bir mühendis olarak eğitimim, tecrübem ve sertifikalarım burada.
      </motion.p>

      <motion.p
        className="text-center text-orange-500 underline hover:text-orange-700 mb-12 text-sm md:text-base"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true, amount: 0.4 }}
      >
        <a href="/ebrarkadircetincv.pdf" download>
          Detaylı CV için tıklayınız
        </a>
      </motion.p>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Eğitim */}
        <div>
          <h3 className="text-xl font-bold text-orange-500 mb-4 text-center border-b border-orange-700 pb-2">
            🎓 Eğitim
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
            🧑‍💻 Deneyim
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
            📜 Sertifikalar
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
            Belgeyi Gör
          </a>
        ) : (
          description.replace(/\[.*?\]\(.*?\)/, "")
        )}
      </p>
    </motion.div>
  );
};

const educationData = [
  {
    year: "2021 - 2025",
    title: "Bilgisayar Mühendisliği",
    place: "Süleyman Demirel Üniversitesi",
    description: "Lisans derecesi",
  },
  {
    year: "2021 - 2026",
    title: "Yönetim Bilişim Sistemleri",
    place: "Anadolu Üniversitesi",
    description: "Lisans derecesi (ikinci üniversite)",
  },
  {
    year: "2019 - 2021",
    title: "Bilgisayar Programcılığı",
    place: "Kocaeli Üniversitesi",
    description: "Ön lisans programı",
  },
  {
    year: "2014 - 2018",
    title: "Elektrik Elektronik",
    place: "Rahmiye Sare Palalı MTAL",
    description: "Mesleki ve Teknik Lise",
  },
];

const experienceData = [
  {
    year: "Tem 2024 - Eyl 2024",
    title: "Network Developer Stajyeri",
    place: "Xlog",
    description: "Ağ sistemleri geliştirme üzerine staj deneyimi.",
  },
  {
    year: "May 2023 - Eyl 2023",
    title: "Junior .NET Developer",
    place: "SDÜ Bilgi İşlem Daire Başkanlığı",
    description: ".NET tabanlı uygulamalarda geliştirme deneyimi.",
  },
  {
    year: "Eki 2021 - May 2023",
    title: "Hardware Technician",
    place: "SDÜ Bilgi İşlem Daire Başkanlığı",
    description: "Donanım destek ve sistem kurulum sorumluluğu.",
  },
  {
    year: "Haz 2016 - Tem 2016",
    title: "Elektrik Elektronik Stajyeri",
    place: "TCDD",
    description: "Elektrik sistemleri üzerine mesleki staj.",
  },
];

const certificateData = [
  {
    year: "Nis 2023",
    title: "CyberOps Associate",
    place: "Cisco",
    description:
      "[Belgeyi Gör](https://www.credly.com/badges/5cf77291-de61-4128-85e4-c2344612e538/linked_in?t=rswj3x)",
  },
  {
    year: "Şub 2023",
    title: "Pre Security Learning Path",
    place: "TryHackMe",
    description:
      "[Belge: THM-QNVOMXGZK8](https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-QNVOMXGZK8.png)",
  },
  {
    year: "Oca 2023",
    title: "CCNA: Introduction to Networks",
    place: "Cisco",
    description:
      "[Belgeyi Gör](https://www.credly.com/badges/dcf4f791-8448-4ea7-a790-9deb6d768397/linked_in_profile)",
  },
  {
    year: "Oca 2023",
    title: "Introduction To Cyber Security",
    place: "TryHackMe",
    description:
      "[Belge: THM-BGY4AKDD3T](https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-BGY4AKDD3T.png)",
  },
  {
    year: "Ara 2022",
    title: "Linux Essentials",
    place: "Cisco",
    description: "Linux temelleri üzerine giriş seviyesi eğitim.",
  },
  {
    year: "Kas 2022",
    title: "Introduction to Cybersecurity",
    place: "Cisco",
    description:
      "[Belgeyi Gör](https://www.credly.com/badges/130f0c1b-24bb-4535-ac4d-1a8f5b7b66a6/linked_in_profile)",
  },
];

export default Resume;
