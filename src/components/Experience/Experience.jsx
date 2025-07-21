import React from "react";
import { experiences } from "../../constants";

const Experience = () => {
  const experience = experiences[0]; // Single experience

  return (
    <section
      id="experience"
      className="py-24 px-[10vw] font-sans bg-gradient-to-b from-[#0f0c29] via-[#302b63] to-[#24243e] text-white"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold">💼 Professional Experience</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-500 mx-auto mt-4 rounded-full"></div>
        <p className="text-gray-400 mt-4 text-lg max-w-2xl mx-auto">
          My journey in the tech world, building real products that solve real problems.
        </p>
      </div>

      {/* Experience Card */}
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="bg-[#1e1b36]/60 backdrop-blur-md border border-gray-700 rounded-3xl shadow-2xl max-w-5xl mx-auto p-10 transition-all hover:scale-[1.01]"
      >
        <div className="flex flex-col sm:flex-row items-center gap-8">
          {/* Company Logo */}
          <div className="w-24 h-24 bg-white rounded-xl overflow-hidden shadow-lg">
            <img
              src={experience.img}
              alt={experience.company}
              className="w-full h-full object-contain p-2"
            />
          </div>

          {/* Details */}
          <div className="flex-1 text-center sm:text-left">
            <h3 className="text-2xl font-bold text-white">{experience.role}</h3>
            <p className="text-purple-400 font-medium">{experience.company}</p>
            <p className="text-gray-400 text-sm mt-1 whitespace-pre-line">{experience.date}</p>

            <ul className="text-gray-300 mt-4 list-disc list-inside space-y-2 text-left">
              <li>Built scalable features for financial SaaS using Java & Spring Boot</li>
              <li>Implemented RESTful APIs for user, billing, and analytics services</li>
              <li>Managed data layers using MySQL, SQLite, and Firebase integrations</li>
              <li>Deployed and monitored services on AWS EC2 and S3</li>
              <li>Developed responsive UIs in React and TailwindCSS</li>
              <li>Followed Agile practices with regular sprint deliveries and code reviews</li>
            </ul>

            <div className="mt-6 text-left">
              <h5 className="font-semibold text-white mb-3">Tech Stack:</h5>
              <div className="flex flex-wrap gap-2">
                {experience.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="bg-purple-600/80 text-white px-3 py-1 text-xs rounded-full shadow-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
