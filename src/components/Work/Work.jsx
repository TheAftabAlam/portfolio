import React, { useState } from "react";
import { projects } from "../../constants";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const openModal = (p) => setSelectedProject(p);
  const closeModal = () => setSelectedProject(null);

  return (
    <section
      id="work"
      className="py-24 px-[10vw] font-sans bg-gradient-to-b from-[#0f0c29] via-[#302b63] to-[#24243e] text-white"
    >
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold">📂 Projects</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-500 mx-auto mt-4 rounded-full"></div>
        <p className="text-gray-400 mt-4 text-lg max-w-2xl mx-auto">
          A showcase of my work, demonstrating skills across various technologies.
        </p>
      </div>

      {/* Project Grid */}
      <div className="grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div
            key={project.id}
            data-aos="fade-up"
            data-aos-delay={index * 100}
            onClick={() => openModal(project)}
            className="bg-[#1e1b36] border border-gray-700 rounded-2xl shadow-xl overflow-hidden cursor-pointer transform transition hover:-translate-y-2 hover:shadow-purple-500/50"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-400 mb-4 line-clamp-3 text-sm">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-[#251f38] text-purple-400 text-xs px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-90 p-4 z-50">
          <div className="bg-[#1e1b36] rounded-xl shadow-2xl w-full max-w-3xl overflow-hidden relative">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-3xl text-gray-400 hover:text-purple-400"
            >
              &times;
            </button>

            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="w-full object-contain max-h-96"
            />

            <div className="p-8">
              <h3 className="text-3xl font-bold mb-4">{selectedProject.title}</h3>
              <p className="text-gray-300 mb-6">{selectedProject.description}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-[#251f38] text-purple-400 text-xs px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center bg-gray-800 hover:bg-purple-800 text-gray-300 py-2 rounded-xl font-semibold transition"
                >
                  View Code
                </a>
                <a
                  href={selectedProject.webapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center bg-purple-600 hover:bg-purple-800 text-white py-2 rounded-xl font-semibold transition"
                >
                  View Live
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Work;
