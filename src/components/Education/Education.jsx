import React from "react";
import { education } from "../../constants";

const Education = () => {
  return (
    <div data-aos="fade-up" className="...">
    <section
      id="education"
      className="py-24 px-[10vw] font-sans bg-gradient-to-b from-[#0f0c29] via-[#302b63] to-[#24243e] text-white"
    >
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold">🎓 Education</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-500 mx-auto mt-4 rounded-full"></div>
        <p className="text-gray-400 mt-4 text-lg max-w-2xl mx-auto">
          My educational journey has helped shape the developer I am today. Here’s a glimpse of my academic background.
        </p>
      </div>

      {/* Timeline Container */}
      <div className="relative border-l-2 border-purple-500 ml-4 sm:ml-1 sm:border-l-0 sm:border-r-2 sm:pl-0 sm:pr-4">
        {education.map((edu, index) => (
          <div
            key={edu.id}
            className={`mb-16 relative sm:flex ${
              index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
            } items-center`}
          >
            {/* Timeline Dot */}
            <div className="absolute left-[-14px] sm:left-1/2 transform sm:-translate-x-1/2 w-7 h-7 bg-purple-600 border-4 border-white rounded-full z-10 shadow-md"></div>

            {/* Card Content */}
            <div
              className={`w-full sm:w-[45%] bg-[#1e1b36] border border-gray-700 rounded-2xl shadow-xl p-6 transition-transform transform hover:scale-105 ${
                index % 2 === 0 ? "sm:ml-8" : "sm:mr-8"
              }`}
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="w-16 h-16 bg-white rounded-md overflow-hidden flex-shrink-0">
                  <img
                    src={edu.img}
                    alt={edu.school}
                    className="w-full h-full object-contain p-2"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{edu.degree}</h3>
                  <h4 className="text-md text-gray-300">{edu.school}</h4>
                  <p className="text-sm text-gray-500 mt-1">{edu.date}</p>
                </div>
              </div>
              <p className="text-gray-400 font-bold">Grade: {edu.grade}</p>
              <p className="mt-2 text-gray-400">{edu.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
    </div>
  );
};

export default Education;
