// src/components/Footer.jsx
import React from "react";
import { FaLaptopCode } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 text-center py-10 px-4 border-t border-gray-800">
      <div className="max-w-4xl mx-auto">
        <p className="text-sm text-gray-400 mb-2">
          Tüm Haklar Saklıdır © {new Date().getFullYear()} Ebrar Kadir Çetin
        </p>

        <p className="text-sm mb-4">
          Ziyaretiniz için teşekkür ederim. Görüşmek üzere!
        </p>
        <div className="flex justify-center items-center gap-2 text-orange-500 text-sm">
          <span>Hazırlayan:</span>
          <FaLaptopCode className="text-xl" />
          <span>Ebrar Kadir</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
