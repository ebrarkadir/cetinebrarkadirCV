import React, { useState } from "react";
import { motion } from "framer-motion";

const links = [
  { name: "Anasayfa", href: "#home" },
  { name: "Hakkımda", href: "#about" },
  { name: "Projeler", href: "#projects" },
  { name: "CV", href: "#resume" },
  { name: "İletişim", href: "#contact" },
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
        <a href="#home" className="text-2xl font-bold text-green-400">
          Ebrar Kadir
        </a>

        {/* Desktop */}
        <ul className="hidden md:flex gap-8 text-lg font-medium">
          {links.map((link) => (
            <li key={link.name}>
              <a href={link.href} className="hover:text-green-400 transition">
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="text-3xl">☰</span>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black/90 px-6 pb-6 pt-2">
          <ul className="flex flex-col gap-4">
            {links.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="block text-lg text-gray-200 hover:text-green-400"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;
