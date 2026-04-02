import React from 'react'
import dhruvil from "../assets/Dhruvil .jpeg"
import summaryObj from '../Objects/Summary'
import personalInfo from '../Objects/PersonalInfo'
import { motion } from "framer-motion";

const Hero = () => {
  const fadeUpVariant = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.3 }}
      variants={fadeUpVariant}
      className="flex flex-col items-center justify-center mt-10 px-4 md:px-10 text-center"
    >
      {/* Profile Image */}
      <section className="relative group" id='home'>
        <img
          className="h-[10em] w-[10em] md:h-[15em] md:w-[15em] rounded-full border-4 border-white-500 object-contain 
                     shadow-lg shadow-pink-500/30 transition-transform duration-500 group-hover:scale-105"
          src={dhruvil}
          alt="Dhruvil Patel"
        />
        <div className="absolute inset-0 rounded-full border-2 border-transparent group-hover:border-white-400/50 transition-all duration-500"></div>
      </section>

      {/* Personal Info */}
      <div className="mt-6 text-white">
        <ul className="flex flex-col gap-3 items-center">
          {personalInfo.map((perInfo) => (
            <motion.li
              key={perInfo.id}
              className="font-semibold text-2xl md:text-3xl text-purple-400 tracking-widest"
              variants={fadeUpVariant}
            >
              {perInfo.name}
            </motion.li>
          ))}

          {personalInfo.map((perDet) => (
            <motion.li
              key={perDet.id + '-designation'}
              className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 via-blue-500 to-purple-500 
                         font-extrabold text-lg md:text-2xl tracking-widest"
              variants={fadeUpVariant}
            >
              {perDet.Designation}
            </motion.li>
          ))}
        </ul>
      </div>

      {/* Summary Section */}
      <motion.div className="mt-8 max-w-4xl text-white w-full" variants={fadeUpVariant}>
        <ul className="flex flex-col gap-6 md:gap-8">
          {/* Centered Title */}
          {summaryObj.map((summaryTitle) => (
            <li
              key={summaryTitle.id}
              className="text-center bg-linear-to-b from-white to-teal-300 bg-clip-text text-transparent 
                         font-bold text-xl md:text-2xl"
            >
              {summaryTitle.title}
            </li>
          ))}

          {/* Left-aligned Descriptions */}
          {summaryObj.map((summaryDesc) => (
            <li
              key={summaryDesc.id + '-desc'}
              className="text-left text-white font-bold tracking-wider leading-relaxed bg-gray-900/30 
                         border rounded-xl p-4 hover:border-pink-400/50 transition-all duration-300"
            >
              {summaryDesc.Description}
            </li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  );
};

export default Hero;
