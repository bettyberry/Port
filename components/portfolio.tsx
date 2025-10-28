"use client";

import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function Portfolio() {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      category: "Full-Stack Development",
      description:
        "A complete e-commerce solution with secure payments, responsive UI, and an admin dashboard. Built with React and Node.js.",
      image:
        "https://images.unsplash.com/photo-1638845604906-6c87bd9ddd01?auto=format&fit=crop&w=1080&q=80",
      tags: ["React", "Node.js"],
    },
    {
      id: 2,
      title: "Analytics Dashboard",
      category: "Data Visualization",
      description:
        "An interactive dashboard with real-time insights and visualized metrics using React and D3.js.",
      image:
        "https://images.unsplash.com/photo-1575388902449-6bca946ad549?auto=format&fit=crop&w=1080&q=80",
      tags: ["React", "D3.js", "Python", "FastAPI"],
    },
  ];

  return (
    <section id="projects" className="py-14 px-4 bg-[#FAF5FF]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-[#7B1E7A] mb-3">
            My Projects
          </h2>
          <p className="text-base text-[#6B7280] max-w-xl mx-auto">
            A glimpse into the projects that reflect my passion for clean,
            functional, and creative development.
          </p>
          <div className="w-16 h-1 mx-auto mt-4 rounded-full bg-gradient-to-r from-[#DE8CF0] to-[#C97DF0]" />
        </motion.div>

        {/* Projects Grid */}
        <div className="space-y-14">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              className={`grid lg:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? "lg:grid-flow-dense" : ""
              }`}
            >
              {/* Image Section */}
              <div
                className={`relative group ${
                  index % 2 === 1 ? "lg:col-start-2" : ""
                }`}
              >
                <div className="relative overflow-hidden rounded-xl shadow-md bg-white">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover rounded-xl transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                    <button className="flex items-center gap-2 px-3 py-1.5 bg-white/90 text-[#7B1E7A] rounded-full text-sm font-medium shadow-sm hover:bg-white transition">
                      <ExternalLink size={14} />
                      Live Demo
                    </button>
                    <button className="flex items-center gap-2 px-3 py-1.5 bg-[#7B1E7A] text-white rounded-full text-sm font-medium shadow-sm hover:bg-[#6A1B6E] transition">
                      <Github size={14} />
                      Code
                    </button>
                  </div>
                </div>
              </div>

              {/* Text Section */}
              <div
                className={`space-y-4 ${
                  index % 2 === 1 ? "lg:col-start-1" : ""
                }`}
              >
                <div>
                  <p className="text-xs font-medium uppercase tracking-wide text-[#A855F7] mb-1">
                    {project.category}
                  </p>
                  <h3 className="text-2xl font-semibold text-[#7B1E7A] mb-2">
                    {project.title}
                  </h3>
                  <p className="text-[#333] text-base leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tags */}
                <div>
                  <h4 className="text-xs font-medium uppercase tracking-wide text-[#A855F7] mb-2">
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 text-xs rounded-full bg-[#DE8CF0]/20 text-[#7B1E7A] font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex gap-3 pt-2">
                  <button className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#7B1E7A] to-[#DE8CF0] text-white text-sm font-medium hover:opacity-90 transition">
                    View Project
                    <ArrowRight size={16} />
                  </button>
                  <button className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#7B1E7A] text-[#7B1E7A] text-sm font-medium hover:bg-[#7B1E7A]/10 transition">
                    <Github size={16} />
                    Code
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-center mt-14"
        >
          <button className="flex items-center gap-2 mx-auto px-6 py-2 border-2 border-[#7B1E7A] text-[#7B1E7A] rounded-full text-base font-medium hover:bg-[#7B1E7A]/10 transition">
            View All Projects
            <ArrowRight size={18} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
