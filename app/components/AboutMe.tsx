"use client"

import { motion } from "framer-motion"

const AboutMe = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-8 text-center"
        >
          About Me
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col items-center max-w-3xl mx-auto text-center bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
        >
          <div className="w-48 h-48 mb-6">
            <img
              src="mypic.jpg"  // Replace with your actual image path
              alt="Srushti Raste"
              className="w-full h-full rounded-full object-cover shadow-lg"
            />
          </div>
          <p className="mb-6">
            Hi, I'm Srushti Raste, a passionate robotics engineer dedicated to developing innovative solutions for complex problems. I recently graduated from <strong>Boston University</strong> with a Master of Science degree in Robotics and Autonomous Systems, and I also hold a B.Tech degree in Electronics Engineering from <strong>K.J. Somaiya College of Engineering</strong>.
          </p>
          <p>
            With a strong foundation in the design and control of robotic systems, hardware integration & programming, Computer-Aided Design, and deep learning, I aim to create robots that contribute to a better future. My focus areas include advancements in surgical robotics, rehabilitation technology, and assistive robotics.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutMe
