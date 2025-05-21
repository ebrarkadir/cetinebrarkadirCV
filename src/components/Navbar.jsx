// src/components/Navbar.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { FaTimes } from "react-icons/fa";

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

        {/* Desktop */}
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

        {/* Mobile Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setMenuOpen(true)}
        >
          <span className="text-3xl">☰</span>
        </button>
      </div>

      {/* Mobile Menu Slide-In */}
      {menuOpen && (
        <div className="fixed inset-0 z-[100] bg-black bg-opacity-90 flex items-center justify-center">
          <div className="bg-gray-900 text-white w-10/12 max-w-sm rounded-xl shadow-xl p-6 relative">
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute top-4 right-4 text-white text-2xl hover:text-red-500"
            >
              <FaTimes />
            </button>
            <ul className="flex flex-col items-center gap-6 mt-12">
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
          </div>
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;
