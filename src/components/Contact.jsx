// src/components/Contact.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaPhone,
  FaInstagram,
  FaTelegramPlane,
} from "react-icons/fa";

const Contact = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    await fetch("https://formsubmit.co/cetinebrarkadir@gmail.com", {
      method: "POST",
      body: formData,
    });

    setShowPopup(true);
    e.target.reset();
  };

  return (
    <section
      id="contact"
      className="pt-10 pb-20 px-6 md:px-20 bg-gradient-to-b from-black via-gray-900 to-black text-white min-h-screen scroll-mt-16"

    >
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-orange-500 mb-6 text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        İletişim
      </motion.h2>

      <motion.p
        className="text-center text-gray-300 mb-12 max-w-2xl mx-auto text-sm md:text-base"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Birlikte çalışmak, proje önermek ya da sadece selam vermek istersen,
        aşağıdaki formu doldurabilir veya doğrudan bana ulaşabilirsin.
      </motion.p>

      {/* Mail Formu */}
      <motion.form
        onSubmit={handleSubmit}
        className="max-w-3xl mx-auto space-y-6 mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <input type="hidden" name="_captcha" value="false" />
        <input
          type="text"
          name="name"
          required
          placeholder="Adınız"
          className="w-full p-3 rounded bg-white/10 text-white placeholder-gray-400 focus:outline-none"
        />
        <input
          type="email"
          name="email"
          required
          placeholder="E-posta adresiniz"
          className="w-full p-3 rounded bg-white/10 text-white placeholder-gray-400 focus:outline-none"
        />
        <textarea
          name="message"
          rows="5"
          required
          placeholder="Mesajınız"
          className="w-full p-3 rounded bg-white/10 text-white placeholder-gray-400 focus:outline-none"
        ></textarea>
        <button
          type="submit"
          className="bg-orange-600 hover:bg-orange-700 transition px-6 py-3 rounded text-white font-medium"
        >
          Gönder
        </button>
      </motion.form>

      {/* Popup */}
      {showPopup && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center px-4">
          <div className="bg-gray-900 rounded-lg p-6 text-center max-w-md w-full shadow-xl">
            <p className="text-lg text-orange-400 font-semibold mb-4">
              Mesajınız gönderildi!
            </p>
            <p className="text-gray-300 mb-6">
              En kısa sürede sizinle iletişime geçeceğim. Teşekkür ederim 🙌
            </p>
            <button
              onClick={() => setShowPopup(false)}
              className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded"
            >
              Kapat
            </button>
          </div>
        </div>
      )}

      {/* İletişim Bilgileri */}
      <motion.div
        className="flex flex-col md:flex-row justify-center items-center gap-6 text-sm md:text-base flex-wrap"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <ContactItem
          icon={<FaEnvelope className="text-orange-400 text-xl" />}
          text="cetinebrarkadir@gmail.com"
          href="mailto:cetinebrarkadir@gmail.com"
        />
        <ContactItem
          icon={<FaPhone className="text-orange-400 text-xl" />}
          text="+90 554 690 0088"
          href="tel:+905546900088"
        />
        <ContactItem
          icon={<FaLinkedin className="text-orange-400 text-xl" />}
          text="LinkedIn"
          href="https://www.linkedin.com/in/ebrar-kadir-%C3%A7etin-1a728019b/"
        />
        <ContactItem
          icon={<FaGithub className="text-orange-400 text-xl" />}
          text="GitHub"
          href="https://github.com/ebrarkadir"
        />
        <ContactItem
          icon={<FaInstagram className="text-orange-400 text-xl" />}
          text="Instagram"
          href="https://instagram.com/ebrarkadircetnn"
        />
        <ContactItem
          icon={<FaTelegramPlane className="text-orange-400 text-xl" />}
          text="Telegram"
          href="https://t.me/Ekdrc"
        />
      </motion.div>
    </section>
  );
};

const ContactItem = ({ icon, text, href }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 text-gray-300 hover:text-orange-400 transition"
  >
    {icon}
    {text}
  </a>
);

export default Contact;
