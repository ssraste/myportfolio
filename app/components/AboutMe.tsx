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
          className="max-w-3xl mx-auto text-center bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
        >
          <p className="mb-6">
            I'm Srushti Raste, a passionate robotics engineer with a keen interest in developing innovative solutions to
            complex problems. My expertise lies in designing and implementing robotic systems that push the boundaries
            of what's possible in automation and artificial intelligence.
          </p>
          <p>
            With a strong foundation in mechanical engineering, computer science, and electronics, I strive to create
            robots that are not only functional but also intuitive and user-friendly. My goal is to contribute to the
            advancement of robotics technology and its applications in various industries, from manufacturing to
            healthcare.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutMe

