import React, { useState, useEffect } from "react";
import { HiMenu, HiX, HiChevronDown, HiGlobe } from "react-icons/hi";
import { motion } from "framer-motion";
import ReactCountryFlag from "react-country-flag";
import ModeForm from "./ModeForm";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState("/");

  useEffect(() => {
    setCurrentPath(window.location.pathname);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "/", label: t("nav.home") },
    { href: "/employers", label: t("nav.employers") },
    { href: "/applicants", label: t("nav.applicants") },
    { href: "/about", label: t("nav.about") },
  ];

  const languages = [
    { code: "en", name: "English", country: "US" },
    { code: "mk", name: "Македонски", country: "MK" },
    { code: "ro", name: "Română", country: "RO" },
    { code: "sr", name: "Српски", country: "RS" },
  ];

  const changeLanguage = (langCode) => {
    i18n.changeLanguage(langCode);
    setIsLangOpen(false);
    if (isMenuOpen) setIsMenuOpen(false);
  };

  const currentLanguage =
    languages.find((lang) => lang.code === i18n.language) || languages[0];

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 w-full z-50 transition-colors duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-[#F4F4F2]"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        <a href="/" className="flex items-center gap-2">
          <img
            src="/logo.png"
            alt="Logo"
            width={120}
            height={40}
            className="w-16 h-auto"
          />
        </a>

        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`font-medium transition-colors ${
                currentPath === item.href
                  ? "text-primary font-semibold"
                  : "text-gray-800 hover:text-primary"
              }`}
            >
              {item.label}
            </a>
          ))}

          <div className={`fixed inset-0 ${isOpen ? "block" : "hidden"}`}>
            <ModeForm isOpen={isOpen} setIsOpen={setIsOpen} />
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="hidden md:inline-block cursor-pointer bg-[#1599b9] text-white font-bold px-5 py-2 rounded-full hover:bg-[#12819c] transition-colors"
          >
            {t("nav.contact")}
          </button>

          <div className="relative ml-2">
            <button
              onClick={() => setIsLangOpen(!isLangOpen)}
              onBlur={() => setTimeout(() => setIsLangOpen(false), 150)}
              className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white border border-gray-200 hover:border-gray-300 transition-colors shadow-sm min-w-[120px]"
            >
              <ReactCountryFlag
                countryCode={currentLanguage.country}
                svg
                style={{
                  width: "20px",
                  height: "15px",
                }}
                title={currentLanguage.name}
              />
              <span className="text-sm font-medium text-gray-700 hidden lg:block">
                {currentLanguage.name}
              </span>
              <HiChevronDown
                className={`w-4 h-4 text-gray-500 transition-transform ${
                  isLangOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {isLangOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50"
              >
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => changeLanguage(lang.code)}
                    className={`flex items-center gap-3 w-full px-4 py-2 text-left transition-colors ${
                      i18n.language === lang.code
                        ? "bg-blue-50 text-blue-600 font-semibold"
                        : "text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    <ReactCountryFlag
                      countryCode={lang.country}
                      svg
                      style={{
                        width: "20px",
                        height: "15px",
                      }}
                      title={lang.name}
                    />
                    <span className="text-sm">{lang.name}</span>
                  </button>
                ))}
              </motion.div>
            )}
          </div>
        </nav>

        <div className="flex items-center gap-3 md:hidden">
          <div className="relative">
            <button
              onClick={() => setIsLangOpen(!isLangOpen)}
              onBlur={() => setTimeout(() => setIsLangOpen(false), 150)}
              className="flex items-center gap-1 p-2 rounded-lg bg-white border border-gray-200 shadow-sm"
            >
              <ReactCountryFlag
                countryCode={currentLanguage.country}
                svg
                style={{
                  width: "20px",
                  height: "15px",
                }}
                title={currentLanguage.name}
              />
              <HiChevronDown
                className={`w-3 h-3 text-gray-500 transition-transform ${
                  isLangOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {isLangOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50"
              >
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => changeLanguage(lang.code)}
                    className={`flex items-center gap-3 w-full px-3 py-2 text-left transition-colors ${
                      i18n.language === lang.code
                        ? "bg-blue-50 text-blue-600 font-semibold"
                        : "text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    <ReactCountryFlag
                      countryCode={lang.country}
                      svg
                      style={{
                        width: "20px",
                        height: "15px",
                      }}
                      title={lang.name}
                    />
                    <span className="text-sm">{lang.name}</span>
                  </button>
                ))}
              </motion.div>
            )}
          </div>

          <button
            className="text-2xl text-gray-800 p-1 hover:bg-gray-100 rounded-full transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white shadow-lg border-t"
        >
          <nav className="flex flex-col p-4 gap-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={`font-medium py-3 px-4 rounded-lg transition-colors ${
                  currentPath === item.href
                    ? "text-primary font-semibold bg-blue-50"
                    : "text-gray-800 hover:bg-gray-50"
                }`}
              >
                {item.label}
              </a>
            ))}
            <div className="border-t pt-4 mt-2">
              <div className="flex items-center gap-2 px-4 py-2 text-gray-700 mb-2">
                <HiGlobe className="w-5 h-5" />
                <span className="font-medium">{t("nav.language")}</span>
              </div>
              <div className="space-y-1">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => changeLanguage(lang.code)}
                    className={`flex items-center gap-3 w-full px-4 py-3 rounded-lg transition-colors ${
                      i18n.language === lang.code
                        ? "bg-blue-50 text-blue-600 font-semibold"
                        : "text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    <ReactCountryFlag
                      countryCode={lang.country}
                      svg
                      style={{
                        width: "20px",
                        height: "15px",
                      }}
                      title={lang.name}
                    />
                    <span className="text-sm">{lang.name}</span>
                  </button>
                ))}
              </div>
            </div>
            <button
              onClick={() => {
                setIsOpen(true);
                setIsMenuOpen(false);
              }}
              className="bg-[#18a4c7] text-white font-bold py-3 px-4 rounded-full text-center mt-4 hover:bg-[#1599b9] transition-colors"
            >
              {t("nav.contact")}
            </button>
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;
