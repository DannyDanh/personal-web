import React from "react";
import homeMe from "../assets/home__me1.jpg";
import { motion } from "framer-motion";

const About = () => (
  <section id="about" className="text-center">
    

  <header class="container-fluid text-center bg-info bg-gradient text-dark py-3">
  <h1 class="display-3">Hi, it's :Danh</h1>
  <img src={homeMe} className="img-fluid rounded" alt="A picture of Danh Nguyen" width="20%" />
  <motion.h2 
        class="font-bold mb-4 mt-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <p class="text-gray">
        RU CS + Data Science, Math, Quant Finance 27'
        <br />
        Aspiring Data Scientist | Researcher | Software Developer | IT Consultant
        </p>
  </motion.h2>
  
  </header>
  <motion.div 
        className="mt-6 p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <h2 className="text-xl font-semibold text-gray-800 mb-2">🚀 About Me</h2>
        <p className="container-md text-justify">
        I am Danh Nguyen, a Computer Science student at Rutgers University-New Brunswick with minors in Data Science, Mathematics, and Quantitative Finance. Passionate about machine learning, deep learning, and software engineering, I thrive on solving complex problems through data-driven insights. Currently, I am an Undergraduate Research Assistant at AIOS (AI Agent Operating System), where I contribute to enhancing AI agent capabilities and benchmarking performance. Beyond research, I have experience in IT consulting, peer reviewing academic research, and teaching physics. I am always eager to explore new opportunities in AI, data science, and analytics engineering, and I enjoy collaborating with others to drive innovation.
        </p>
  </motion.div>
  </section>

  
);

export default About;