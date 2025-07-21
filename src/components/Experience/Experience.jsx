import React from "react";
import { experiences } from "../../constants";

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 px-[10vw] font-sans bg-gradient-to-b from-[#0f0c29] via-[#302b63] to-[#24243e] text-white"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold">💼 Experience</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-500 mx-auto mt-4 rounded-full"></div>
        <p className="text-gray-400 mt-4 text-lg max-w-2xl mx-auto">
          Here's a glimpse of my professional journey and the roles I've played in various organizations.
        </p>
      </div>

      {/* Experience Timeline */}
      <div className="relative border-l-2 border-purple-500 ml-4 sm:ml-1 sm:border-l-0 sm:border-r-2 sm:pl-0 sm:pr-4">
        {experiences.map((experience, index) => (
          <div
            key={experience.id}
            data-aos="fade-up"
            data-aos-delay={index * 100}
            className={`mb-16 relative sm:flex ${
              index % 2 === 0 ? "sm:flex-row-reverse" : "sm:flex-row"
            } items-center`}
          >
            {/* Timeline Dot */}
            <div className="absolute left-[-14px] sm:left-1/2 transform sm:-translate-x-1/2 w-7 h-7 bg-purple-600 border-4 border-white rounded-full z-10 shadow-md"></div>

            {/* Experience Card */}
            <div
              className={`w-full sm:w-[45%] bg-[#1e1b36] border border-gray-700 rounded-2xl shadow-xl p-6 transition-transform transform hover:scale-105 ${
                index % 2 === 0 ? "sm:mr-8" : "sm:ml-8"
              }`}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-white rounded-md overflow-hidden">
                  <img
                    src={experience.img}
                    alt={experience.company}
                    className="w-full h-full object-contain p-2"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{experience.role}</h3>
                  <p className="text-sm text-gray-400">{experience.company}</p>
                  <p className="text-xs text-gray-500 mt-1">{experience.date}</p>
                </div>
              </div>

              <p className="text-gray-300">{experience.desc}</p>

              <div className="mt-4">
                <h5 className="font-medium text-white mb-2">Skills Used:</h5>
                <ul className="flex flex-wrap">
                  {experience.skills.map((skill, idx) => (
                    <li
                      key={idx}
                      className="bg-[#8245ec] text-white px-3 py-1 text-xs rounded-full mr-2 mb-2 shadow-md"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
