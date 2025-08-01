import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import clsx from "clsx";
import { motion, AnimatePresence } from "framer-motion";
import { menuItems } from "../../constants";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);




  // Detect scroll
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Track active section
  useEffect(() => {
    const handleActiveSection = () => {
      for (const item of menuItems) {
        const section = document.getElementById(item.id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleActiveSection);
    return () => window.removeEventListener("scroll", handleActiveSection);
  }, []);

  const handleMenuItemClick = (id) => {
    setActiveSection(id);
    setIsOpen(false);
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={clsx(
        "fixed top-0 w-full z-50 transition-all duration-300 px-4 sm:px-6 md:px-12",
        isScrolled
          ? "bg-[#050414]/70 backdrop-blur-xl shadow-lg border-b border-purple-500/20"
          : "bg-transparent"
      )}
    >
      <div className="text-white py-4 flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.08 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="text-lg sm:text-xl font-bold cursor-pointer whitespace-nowrap"
        >
          <span className="bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text drop-shadow-md">
            &lt;Aftab/Alam&gt;
          </span>
        </motion.div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 lg:space-x-10 text-gray-300 font-medium">
          {menuItems.map(({ id, label }) => (
            <li key={id}>
              <button
                className={clsx(
                  "relative group transition-all duration-200",
                  activeSection === id
                    ? "text-purple-400"
                    : "hover:text-purple-300"
                )}
                onClick={() => handleMenuItemClick(id)}
              >
                {label}
                <span
                  className={clsx(
                    "absolute -bottom-1 left-0 h-[2px] bg-gradient-to-r from-purple-400 to-pink-500 transition-all duration-300",
                    activeSection === id ? "w-full" : "w-0 group-hover:w-full"
                  )}
                />
              </button>
            </li>
          ))}
        </ul>

        {/* Social Links (Desktop) */}
        <div className="hidden md:flex space-x-5">
          <motion.a
            whileHover={{ scale: 1.2, rotate: 5 }}
            href="https://github.com/TheAftabAlam"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-purple-400 transition"
          >
            <FaGithub size={22} />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2, rotate: -5 }}
            href="https://www.linkedin.com/in/aftabalam-connect/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-purple-400 transition"
          >
            <FaLinkedin size={22} />
          </motion.a>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          {isOpen ? (
            <FiX
              className="text-3xl text-purple-400 cursor-pointer"
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <FiMenu
              className="text-3xl text-purple-400 cursor-pointer"
              onClick={() => setIsOpen(true)}
            />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="md:hidden absolute top-16 left-0 w-full px-4"
          >
            <div className="bg-[#050414]/95 border border-purple-500/20 backdrop-blur-lg rounded-2xl shadow-lg py-6">
              <ul className="flex flex-col items-center space-y-5 text-gray-200">
                {menuItems.map(({ id, label }) => (
                  <motion.li
                    key={id}
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    <button
                      className={clsx(
                        "text-lg font-medium transition",
                        activeSection === id
                          ? "text-purple-400"
                          : "hover:text-white"
                      )}
                      onClick={() => handleMenuItemClick(id)}
                    >
                      {label}
                    </button>
                  </motion.li>
                ))}
                {/* Mobile Socials */}
                <div className="flex space-x-6 pt-3">
                  <motion.a
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    href="https://github.com/TheAftabAlam"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-purple-400 transition"
                  >
                    <FaGithub size={24} />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.2, rotate: -5 }}
                    href="https://www.linkedin.com/in/aftabalam-connect/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-purple-400 transition"
                  >
                    <FaLinkedin size={24} />
                  </motion.a>
                </div>
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
