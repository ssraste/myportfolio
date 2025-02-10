"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import type { Project } from "../lib/projects"
import { projects } from "../lib/projects"
import { X } from "lucide-react"

const ProjectCard = ({ project, onClick }: { project: Project; onClick: () => void }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      className="bg-card rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-300 border border-border"
      onClick={onClick}
    >
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-primary">{project.title}</h3>
        <p className="text-muted-foreground mb-4">{project.shortDescription}</p>
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-secondary mb-2">Technologies:</h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="bg-accent text-accent-foreground px-2 py-1 rounded-full text-xs font-medium shadow-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        <button className="text-primary hover:underline text-sm font-medium">Learn More →</button>
      </div>
    </motion.div>
  )
}

const ExpandedProject = ({ project, onClose }: { project: Project; onClose: () => void }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      className="fixed inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div
        className="bg-card rounded-lg shadow-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          aria-label="Close"
        >
          <X size={24} />
        </button>
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4 text-primary">{project.title}</h2>
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-secondary mb-2">Technologies:</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium shadow-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div
            className="prose max-w-none text-foreground"
            dangerouslySetInnerHTML={{ __html: project.fullDescription }}
          />
          {project.videos && (
            <div className="mt-6">
              <h3 className="text-xl font-semibold mb-2 text-primary">Videos</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.videos.map((video, index) => (
                  <div key={index} className="aspect-w-16 aspect-h-9">
                    <iframe
                      src={video}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full rounded"
                    ></iframe>
                  </div>
                ))}
              </div>
            </div>
          )}
          {project.reportLink && (
            <div className="mt-6">
              <a
                href={project.reportLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-primary-foreground px-4 py-2 rounded-full hover:bg-primary/90 transition-colors duration-300 inline-flex items-center"
              >
                <span>Download Full Report (PDF)</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  )
}

const Projects = () => {
  const [expandedProject, setExpandedProject] = useState<Project | null>(null)

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-8 text-center text-primary"
        >
          Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} onClick={() => setExpandedProject(project)} />
            ))}
          </AnimatePresence>
        </div>
      </div>
      <AnimatePresence>
        {expandedProject && <ExpandedProject project={expandedProject} onClose={() => setExpandedProject(null)} />}
      </AnimatePresence>
    </section>
  )
}

export default Projects

