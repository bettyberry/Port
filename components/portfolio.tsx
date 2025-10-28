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
        "A complete e-commerce solution with elegant UI/UX, secure payments, and an admin dashboard. Built with React, Node.js, and PostgreSQL.",
      image:
        "https://images.unsplash.com/photo-1638845604906-6c87bd9ddd01?auto=format&fit=crop&w=1080&q=80",
      tags: ["React", "Node.js", ],
      featured: true,
    },
    {
      id: 2,
      title: "Analytics Dashboard",
      category: "Data Visualization",
      description:
        "An interactive analytics dashboard with dynamic charts and business insights. Built with React",
      image:
        "https://images.unsplash.com/photo-1575388902449-6bca946ad549?auto=format&fit=crop&w=1080&q=80",
      tags: ["React", "D3.js", "Python", "FastAPI"],
      featured: false,
    },
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-[#FAF5FF]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-[#7B1E7A] mb-4">
            My Projects
          </h2>
          <p className="text-lg text-[#6B7280] max-w-2xl mx-auto">
            A showcase of projects that reflect my passion for creating elegant,
            high-performance web experiences.
          </p>
          <div className="w-20 h-1 mx-auto mt-5 rounded-full bg-gradient-to-r from-[#DE8CF0] to-[#C97DF0]"></div>
        </motion.div>

        {/* Projects Grid */}
        <div className="space-y-20">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "lg:grid-flow-dense" : ""
              }`}
            >
              {/* Image Section */}
              <div
                className={`relative group ${
                  index % 2 === 1 ? "lg:col-start-2" : ""
                }`}
              >
                <div className="relative overflow-hidden rounded-2xl shadow-lg bg-white">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-80 object-cover rounded-2xl transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <button className="flex items-center gap-2 px-4 py-2 bg-white/90 text-[#7B1E7A] rounded-full font-medium shadow-sm hover:bg-white transition">
                      <ExternalLink size={16} />
                      Live Demo
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 bg-[#7B1E7A] text-white rounded-full font-medium shadow-sm hover:bg-[#6A1B6E] transition">
                      <Github size={16} />
                      Code
                    </button>
                  </div>
                </div>

              </div>

              {/* Text Section */}
              <div
                className={`space-y-6 ${
                  index % 2 === 1 ? "lg:col-start-1" : ""
                }`}
              >
                <div>
                  <div className="text-sm font-medium uppercase tracking-wide text-[#A855F7] mb-2">
                    {project.category}
                  </div>
                  <h3 className="text-3xl font-semibold text-[#7B1E7A] mb-3">
                    {project.title}
                  </h3>
                  <p className="text-[#333] leading-relaxed text-lg">
                    {project.description}
                  </p>
                </div>

                {/* Tags */}
                <div>
                  <h4 className="text-sm font-medium uppercase tracking-wide text-[#A855F7] mb-3">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-sm rounded-full bg-[#DE8CF0]/20 text-[#7B1E7A] font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex gap-4 pt-4">
                  <button className="flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-[#7B1E7A] to-[#DE8CF0] text-white font-medium hover:opacity-90 transition">
                    View Project
                    <ArrowRight size={18} />
                  </button>
                  <button className="flex items-center gap-2 px-5 py-2 rounded-full border border-[#7B1E7A] text-[#7B1E7A] font-medium hover:bg-[#7B1E7A]/10 transition">
                    <Github size={18} />
                    Source Code
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
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-20"
        >
          <button className="flex items-center gap-3 mx-auto px-8 py-3 border-2 border-[#7B1E7A] text-[#7B1E7A] rounded-full text-lg font-medium hover:bg-[#7B1E7A]/10 transition">
            View All Projects
            <ArrowRight size={22} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
