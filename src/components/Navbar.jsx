// src/components/Navbar.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-scroll";

const links = [
  { name: "Anasayfa", to: "home" },
  { name: "Hakkımda", to: "about" },
  { name: "Projeler", to: "projects" },
  { name: "Özgeçmiş (CV)", to: "resume" },
  { name: "İletişim", to: "contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.nav
      className="fixed top-0 left-0 w-full z-50 bg-black/50 backdrop-blur-md text-white shadow-md"
      initial={{ y: -60 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link
          to="home"
          smooth={true}
          duration={500}
          offset={-60}
          className="text-2xl font-bold text-green-400 cursor-pointer flex items-center gap-2"
        >
          <span className="text-xl">&lt;/&gt;</span> Ebrar Kadir
        </Link>

        <ul className="hidden md:flex gap-8 text-lg font-medium">
          {links.map((link) => (
            <li key={link.name}>
              <Link
                to={link.to}
                smooth={true}
                duration={500}
                offset={-60}
                className="hover:text-green-400 transition cursor-pointer"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="text-3xl">☰</span>
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="absolute top-full left-0 w-full bg-gradient-to-b from-black via-gray-900 to-black text-white shadow-md px-6 py-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <ul className="flex flex-col gap-6">
              {links.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.to}
                    smooth={true}
                    duration={500}
                    offset={-60}
                    className="block text-lg hover:text-green-400 cursor-pointer"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
