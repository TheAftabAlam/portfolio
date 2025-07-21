import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const navLinks = [
  { name: "About", id: "about" },
  { name: "Skills", id: "skills" },
  { name: "Experience", id: "experience" },
  { name: "Projects", id: "projects" },
  { name: "Education", id: "education" },
];

const socialLinks = [
  { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/aftabalam-connect/", label: "LinkedIn" },
  { icon: <FaGithub />, link: "https://github.com/theAftabAlam", label: "GitHub" },
];

const Footer = () => {
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="text-white py-8 px-[12vw] md:px-[7vw] lg:px-[20vw]">
      <div className="text-center">
        {/* Logo */}
        <h2 className="text-xl font-semibold text-purple-500">Aftab Alam</h2>

        {/* Navigation */}
        <nav className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-4">
          {navLinks.map(({ name, id }) => (
            <button
              key={id}
              onClick={() => handleScroll(id)}
              className="text-sm sm:text-base hover:text-purple-500 transition-colors"
            >
              {name}
            </button>
          ))}
        </nav>

        {/* Social Icons */}
        <div className="flex justify-center gap-4 mt-6">
          {socialLinks.map(({ icon, link, label }, index) => (
            <a
              key={index}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-xl hover:text-purple-500 transition-transform transform hover:scale-110"
            >
              {icon}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-400 mt-6">
          © 2025 Aftab Alam. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
