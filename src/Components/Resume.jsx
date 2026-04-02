import React, { useState } from "react";
import { motion } from "framer-motion";
import resume from "../assets/resume.png"; 
const Resume = () => {
  
  return (
    <section
      id="resume"
      className="flex justify-center items-center py-20 px-6 bg-linear-to-b from-gray-900 via-black to-gray-900"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col md:flex-row bg-gray-900/60 backdrop-blur-sm border border-gray-800 rounded-2xl shadow-lg overflow-hidden max-w-5xl w-full"
      >
        {/* Left: Resume Preview Image */}
        <div className="md:w-1/2 w-full relative group">
          <img
            src={resume}
            alt="Resume Preview"
            className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-500"></div>
        </div>

        {/* Right: Description + Button */}
        <div className="md:w-1/2 w-full p-8 flex flex-col justify-center gap-6 text-center md:text-left">
          <h2 className="bg-linear-to-r from-teal-500 to-white bg-clip-text text-transparent font-bold text-3xl md:text-2xl">
            My Resume
          </h2>
          <p className="text-gray-300 text-md md:text-lg font-bold tracking-widest">
            Check out my latest resume to explore my skills, experience, and
            projects.
          </p>
          
        </div>
      </motion.div>
    </section>
  );
};

export default Resume;
