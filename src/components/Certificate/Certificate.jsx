// Certificates.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaCertificate } from "react-icons/fa";

const certificates = [
  {
    title: "Certificate of Appreciation",
    issuer: "Hostbooks Limited",
    date: "2024",
    description: "Awarded for outstanding contribution in handling backend of POS application.",
    link: "https://drive.google.com/file/d/15qerB256LoaG5DBwB9KqQZPAaYpCAfMm/view?usp=drive_link",
  },
  {
    title: "Java Backend Development",
    issuer: "Udemy",
    date: "2022",
    description: "Completed specialization in backend development using Spring Boot & MySQL.",
    link: "https://www.udemy.com/certificate/UC-338ca492-ddea-418c-b06d-6d06f0650e8b/",
  },
  {
    title: "Java",
    issuer: "HackerRank",
    date: "2022",
    description: "Demonstrated foundational skills in Java programming.",
    link: "https://www.hackerrank.com/certificates/ebcaaeb3aba0",
  },
  {
    title: "Problem Solving",
    issuer: "HackerRank",
    date: "2022",
    description: "Certified for strong logical reasoning and problem-solving skills.",
    link: "https://www.hackerrank.com/certificates/0e54e9bd678e",
  },
  {
    title: "SQL",
    issuer: "HackerRank",
    date: "2022",
    description: "Certified in SQL fundamentals including queries, joins, and data handling.",
    link: "https://www.hackerrank.com/certificates/1d861790a3fa",
  },
];

const Certificates = () => {
  return (
    <section
      id="certificates"
      className="min-h-screen bg-[#0a0a0f] text-gray-200 py-20 px-6 sm:px-12"
    >
      {/* Section Title */}
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-14 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
        Certificates
      </h2>

      {/* Grid */}
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {certificates.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            viewport={{ once: true }}
            className="relative p-6 rounded-2xl bg-gradient-to-br from-[#1a1a24] to-[#111116] 
                       border border-purple-500/20 shadow-lg 
                       hover:shadow-[0_0_25px_rgba(168,85,247,0.4)] 
                       hover:border-purple-400/40 transform hover:-translate-y-2 
                       transition duration-300"
          >
            {/* Icon */}
            <div className="absolute -top-6 left-6 bg-purple-500/20 p-3 rounded-full">
              <FaCertificate className="text-purple-400 text-2xl" />
            </div>

            {/* Content */}
            <h3 className="text-lg sm:text-xl font-semibold text-purple-300 mt-4">
              {cert.title}
            </h3>
            <p className="text-sm text-gray-400 mt-1">
              {cert.issuer} • {cert.date}
            </p>
            <p className="mt-3 text-gray-300 leading-relaxed text-sm sm:text-base">
              {cert.description}
            </p>

            {/* Link */}
            {cert.link && (
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${cert.title}`}
                className="inline-block mt-5 text-sm font-medium 
                           text-purple-400 hover:text-pink-400 
                           hover:underline transition"
              >
                View Certificate →
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Certificates;
