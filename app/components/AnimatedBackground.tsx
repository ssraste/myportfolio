"use client"

import type React from "react"
import { motion } from "framer-motion"

const AnimatedBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-gray-100">
      <svg
        className="absolute w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <defs>
          <pattern id="circuit-pattern" width="10" height="10" patternUnits="userSpaceOnUse">
            <path
              d="M1 1h2v2H1V1zm4 0h2v2H5V1zm4 0h2v2H9V1zm0 4h2v2H9V5zM5 5h2v2H5V5zm-4 0h2v2H1V5zm0 4h2v2H1V9zm4 0h2v2H5V9z"
              fill="currentColor"
              fillOpacity="0.05"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#circuit-pattern)" />
      </svg>
      <motion.div
        className="absolute inset-0"
        animate={{
          backgroundPosition: ["0px 0px", "100px 100px"],
        }}
        transition={{
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          duration: 20,
          ease: "linear",
        }}
        style={{
          backgroundImage: "radial-gradient(circle, rgba(131,82,253,0.1) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />
    </div>
  )
}

export default AnimatedBackground

