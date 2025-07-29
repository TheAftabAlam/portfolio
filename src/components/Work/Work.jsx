import React, { useState, useEffect } from "react";
import { projects } from "../../constants";
import { motion, AnimatePresence } from "framer-motion";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => setSelectedProject(project);
  const closeModal = () => setSelectedProject(null);

  // Close modal with ESC
  useEffect(() => {
    const handleEsc = (e) => e.key === "Escape" && closeModal();
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <section
      id="work"
      className="py-16 px-6 md:px-[8vw] font-sans 
                 bg-gradient-to-b from-[#0f0c29] via-[#302b63] to-[#24243e] text-white"
    >
      {/* Section Header */}
      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-3xl md:text-4xl font-bold">📂 Projects</h2>
        <div className="w-20 md:w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-500 mx-auto mt-3 md:mt-4 rounded-full"></div>
        <p className="text-gray-400 mt-3 md:mt-4 text-base md:text-lg max-w-2xl mx-auto px-2">
          A showcase of my work, demonstrating skills across various
          technologies.
        </p>
      </div>

      {/* Project Grid */}
      <div className="grid gap-8 md:gap-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            onClick={() => openModal(project)}
            className="bg-[#1e1b36] border border-gray-700 rounded-2xl shadow-xl overflow-hidden cursor-pointer 
                       hover:shadow-purple-500/40 hover:-translate-y-2 transition-all duration-300"
          >
            <div className="overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-44 sm:h-48 object-cover transform hover:scale-110 transition duration-500"
              />
            </div>
            <div className="p-5 md:p-6">
              <h3 className="text-xl md:text-2xl font-semibold mb-2">
                {project.title}
              </h3>
              <p className="text-gray-400 mb-3 md:mb-4 line-clamp-3 text-sm md:text-base">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 
                               text-purple-300 text-xs px-3 py-1 rounded-full border border-purple-400/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 p-2 sm:p-4 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="bg-[#1e1b36] rounded-xl shadow-2xl w-full max-w-3xl h-full sm:h-auto sm:max-h-[90vh] 
                   overflow-y-auto relative"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Sticky Top Bar with Close Button */}
              <div className="sticky top-0 flex justify-end bg-[#1e1b36]/80 backdrop-blur-sm z-10 p-3">
                <button
                  onClick={closeModal}
                  className="text-3xl text-gray-400 hover:text-purple-400"
                >
                  &times;
                </button>
              </div>

              {/* Project Image */}
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full object-contain max-h-60 sm:max-h-96"
              />

              {/* Content */}
              <div className="p-5 sm:p-8">
                <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
                  {selectedProject.title}
                </h3>
                <p className="text-gray-300 mb-5 sm:mb-6 text-sm sm:text-base">
                  {selectedProject.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-5 sm:mb-6">
                  {selectedProject.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 
                           text-purple-300 text-xs px-3 py-1 rounded-full border border-purple-400/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Buttons (stack on mobile) */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:flex-1 text-center border border-purple-400/30 hover:border-purple-500 
                         text-gray-300 py-2 rounded-xl font-semibold transition"
                  >
                    View Code
                  </a>
                  <a
                    href={selectedProject.webapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:flex-1 text-center bg-purple-600 hover:bg-purple-700 
                         text-white py-2 rounded-xl font-semibold transition"
                  >
                    View Live
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Work;
