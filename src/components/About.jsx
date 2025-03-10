import React from "react";
import secondImg from "../images/pc-setup.jpeg";
import LeftSocialBar from "./LeftSocialbar";
import CV from "../images/Shashi_Frontend_Resume.pdf";

const About = () => {
  return (
    <section
      id="about"
      className="flex flex-col md:flex-row items-center justify-center min-h-screen w-full px-6 md:px-16 py-12 gap-10"
    >
      {/* Left Social Bar */}
      <LeftSocialBar />

      {/* Profile Image - Adjusted to 5:7 Aspect Ratio */}
      <div className="relative w-[250px] h-[350px] md:w-[300px] md:h-[420px] rounded-lg overflow-hidden border-4 border-cyan-400 shadow-xl hover:scale-105 transform transition duration-500">
        <img
          src={secondImg}
          alt="Profile"
          className="w-full h-full object-cover"
        />
      </div>

      {/* About Content */}
      <div className="text-center w-full md:text-left md:ml-12 max-w-2xl">
        <h1 className="text-4xl md:text-5xl py-4 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
          Want to Know More?
        </h1>
        <p className="text-gray-300 mt-4 text-lg leading-relaxed w-full">
          Certified Frontend Developer who is expertise in crafting dynamic and
          responsive user interfaces using a robust MERN stack - React.js,
          MongoDB, Express.js, and Node.js. Proficient in JavaScript and
          TypeScript, with a focus on API design and optimization. Skilled in
          implementing Redux for efficient state management, achieving a 25%
          reduction in application size. Specialized in React.js, contributing
          to a 15% boost in development productivity. Well-versed in Git for
          version control and experienced in utilizing build tools like Parcel
          and Vite. Ready to bring my front-end development skills, strong
          problem-solving acumen, and a passion for innovation to drive
          impactful solutions for your organization.
        </p>
        <div className="flex gap-4 w-full justify-center md:justify-start mt-6">
          <div className="p-4 rounded-lg shadow-lg bg-gray-800 text-white w-28 text-center">
            <h3 className="text-l font-semibold">Experience</h3>
            <p className="text-gray-400">1+ Years</p>
          </div>
          <div className="p-4 rounded-lg shadow-lg bg-gray-800 text-white w-28 text-center">
            <h3 className="text-l font-semibold">Completed</h3>
            <p className="text-gray-400">3+ Projects</p>
          </div>
          <div className="p-4 rounded-lg shadow-lg bg-gray-800 text-white w-28 text-center">
            <h3 className="text-l font-semibold">Support</h3>
            <p className="text-gray-400">Online 24/7</p>
          </div>
        </div>
        <div className="mt-6">
          <a
            href={CV}
            download
            className="inline-block px-8 py-3 text-lg font-semibold text-white bg-gray-700 rounded-full shadow-lg hover:bg-gray-600 transition-transform transform hover:-translate-y-1"
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
