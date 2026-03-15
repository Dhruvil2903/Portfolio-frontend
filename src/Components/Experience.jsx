import React from 'react'
import { motion } from "framer-motion";
// Education Data
const myExperience = [
  {
    id: 1,
    companyName: "Freelance-Self employed",
    location: "Canada",
    year: "2023 - Present",
  },
  {
    id: 2,
    companyName: "Maruti Consultant",
    location: "Gujarat, India",
    year: "2019 - 2023",
  },
];

const Experience = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.3, duration: 0.8, ease: "easeOut" },
    }),
  };

  return (
    <section
      id="myExperience"
      className="flex flex-col items-center justify-center text-center py-20 px-6 bg-gradient-to-b from-gray-900 via-black to-gray-900"
    >
      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-gradient-to-b from-white to-teal-400 bg-clip-text text-transparent font-bold text-4xl md:text-2xl mb-12"
      >
        Experience
      </motion.h2>

      {/* Education Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-5xl">
        {myExperience.map((exp, i) => (
          <motion.div
            key={exp.id}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="bg-gray-900/60 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 
                       shadow-lg hover:shadow-purple-500/30 transition-all duration-500 hover:-translate-y-2"
          >
            <h3 className="text-2xl font-bold text-teal-400 mb-2">{exp.companyName}</h3>
            <p className="text-gray-400 text-sm mb-2">{exp.location}</p>
            <span className="text-gray-500 text-xs">{exp.year}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
