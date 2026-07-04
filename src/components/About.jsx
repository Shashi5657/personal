import React from "react";
import secondImg from "../images/pc-setup.jpeg";
import LeftSocialBar from "./LeftSocialbar";
import CV from "../images/SHASHIDHAR_SANGEPU_2YRExp_MERN.pdf";

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
         Full Stack Developer with 2+ years of experience building scalable, production-ready web applications using Next.js, React.js,
Node.js, Express.js, PostgreSQL, Sequelize & Typescript. Experienced in architecting secure REST APIs, implementing
authentication & authorization using AWS Cognito, integrating complex payment workflows with Stripe, and building real-time
applications using Socket.IO & Amazon Chime SDK. Hands-on experience deploying & managing cloud infrastructure on AWS,
including EC2, RDS, VPC, ALB, PM2 and IAM with a strong knowledge of scalable application architecture, state management
using Redux and modern frontend development practices. Passionate about building reliable, high-performance software while
continuously learning emerging technologies such as React Native and cloud-native development
        </p>
        <div className="flex gap-4 w-full justify-center md:justify-start mt-6">
          <div className="p-4 rounded-lg shadow-lg bg-gray-800 text-white w-28 text-center">
            <h3 className="text-l font-semibold">Experience</h3>
            <p className="text-gray-400">2+ Years</p>
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
