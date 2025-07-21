import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-parallax-tilt';
// import profileImage from '../../assets/profile2.png';

const About = () => {
  return (
    <section
      id="about"
      className="py-8 px-[7vw] md:px-[7vw] lg:px-[15vw] font-sans bg-gradient-to-b from-[#0f0c29] via-[#302b63] to-[#24243e] text-white"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-12">
        
        {/* Left Section */}
        <div className="md:w-1/2 text-center md:text-left">
          {/* Greeting */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
            Hi, I am
          </h1>
          {/* Name */}
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-extrabold bg-gradient-to-r from-[#8245ec] to-[#a855f7] text-transparent bg-clip-text mb-4">
            Aftab Alam
          </h2>

          {/* Typing Text */}
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6">
            <span className="text-white">I am a </span>
            <ReactTypingEffect
              text={['Fullstack Developer', 'Java Developer', 'Coder']}
              speed={100}
              eraseSpeed={50}
              typingDelay={500}
              eraseDelay={2000}
              cursorRenderer={(cursor) => (
                <span className="text-[#a855f7]">{cursor}</span>
              )}
            />
          </h3>

          {/* About Paragraph */}
          <p className="text-lg text-gray-300 leading-relaxed">
            I’m a full-stack developer with 2+ years of experience in crafting scalable, efficient, and secure applications using Java, Spring Boot, React, and MySQL. I focus on clean architecture, high-performance APIs, and pixel-perfect UI for business-centric solutions.
          </p>

          {/* Download CV Button */}
          <a
            href="https://drive.google.com/file/d/111PgIg3dtNT-fMMMaxfKTegxx8bV4TLr/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-8 text-lg font-bold px-8 py-3 rounded-full transition duration-300 transform hover:scale-105"
            style={{
              background: 'linear-gradient(90deg, #8245ec, #a855f7)',
              boxShadow: '0 4px 15px rgba(130, 69, 236, 0.6)',
            }}
          >
            DOWNLOAD CV
          </a>
        </div>

        {/* Right Section - Profile Picture */}
        {/* Uncomment below and provide image */}
        {/* 
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <Tilt
            className="w-64 h-64 md:w-[22rem] md:h-[22rem] rounded-full border-4 border-purple-600 shadow-xl"
            tiltMaxAngleX={15}
            tiltMaxAngleY={15}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <img
              src={profileImage}
              alt="Aftab Alam"
              className="w-full h-full rounded-full object-cover shadow-[0_10px_30px_rgba(130,69,236,0.4)]"
            />
          </Tilt>
        </div>
        */}
      </div>
    </section>
  );
};

export default About;
