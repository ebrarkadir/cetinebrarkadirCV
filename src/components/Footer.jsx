// src/components/Footer.jsx
import React from "react";
import { FaLaptopCode } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-gray-400 text-center py-10 px-4 border-t border-gray-800">
      <div className="max-w-4xl mx-auto">
        <p className="text-sm text-gray-400 mb-2">
          {t("footer.rights", { year: currentYear })}
        </p>

        <p className="text-sm mb-4">{t("footer.thanks")}</p>

        <div className="flex justify-center items-center gap-2 text-teal-500 text-sm">
          <span>{t("footer.builtBy")}</span>
          <FaLaptopCode className="text-xl" />
          <span>{t("footer.name")}</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
