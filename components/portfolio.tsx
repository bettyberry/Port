"use client";

import {
  ExternalLink,
  Github,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

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
    {
      id: 3,
      title: "Portfolio Website",
      category: "Frontend Design",
      description:
        "A sleek, responsive portfolio site designed with Next.js and Tailwind CSS for smooth animations and accessibility.",
      image:
        "https://images.unsplash.com/photo-1605379399642-870262d3d051?auto=format&fit=crop&w=1080&q=80",
      tags: ["Next.js", "Tailwind", "Framer Motion"],
    },
    {
      id: 4,
      title: "Chat App",
      category: "Real-Time Communication",
      description:
        "A modern chat application with WebSocket-based real-time messaging and a responsive UI.",
      image:
        "https://images.unsplash.com/photo-1601972602248-5dbb23f6a4c0?auto=format&fit=crop&w=1080&q=80",
      tags: ["React", "Socket.io", "Express"],
    },
    {
      id: 5,
      title: "Task Management App",
      category: "Productivity",
      description:
        "A task management app with drag-and-drop features, deadlines, and user authentication.",
      image:
        "https://images.unsplash.com/photo-1584697964191-4b7b1a21203e?auto=format&fit=crop&w=1080&q=80",
      tags: ["React", "Firebase", "Tailwind"],
    },
    {
      id: 6,
      title: "Travel Booking UI",
      category: "UI/UX Design",
      description:
        "A visually appealing and functional travel booking interface designed with modern UX principles.",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1080&q=80",
      tags: ["Figma", "Next.js", "Tailwind"],
    },
  ];

  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 3;

  const nextProjects = () => {
    if (startIndex + itemsPerPage < projects.length) {
      setStartIndex(startIndex + itemsPerPage);
    }
  };

  const prevProjects = () => {
    if (startIndex - itemsPerPage >= 0) {
      setStartIndex(startIndex - itemsPerPage);
    }
  };

  return (
    <section id="projects" className="py-20 px-6 bg-[#FAF5FF] relative">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-[#7B1E7A] mb-4">
            My Projects
          </h2>
          <p className="text-base text-[#6B7280] max-w-xl mx-auto">
            A glimpse into the projects that reflect my passion for clean,
            functional, and creative development.
          </p>
          <div className="w-20 h-1 mx-auto mt-5 rounded-full bg-gradient-to-r from-[#DE8CF0] to-[#C97DF0]" />
        </motion.div>

        {/* Project Grid Wrapper */}
        <div className="relative flex items-center">
          {/* Left Arrow */}
          <button
            onClick={prevProjects}
            disabled={startIndex === 0}
            className={`absolute -left-8 md:-left-12 z-10 p-3 bg-white rounded-full shadow-lg hover:bg-[#7B1E7A]/10 transition ${
              startIndex === 0 ? "opacity-30 cursor-not-allowed" : ""
            }`}
          >
            <ChevronLeft size={28} className="text-[#7B1E7A]" />
          </button>

          {/* Grid */}
          <motion.div
            key={startIndex}
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 w-full"
          >
            {projects
              .slice(startIndex, startIndex + itemsPerPage)
              .map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
                >
                  <div className="relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-52 object-cover"
                    />
                    <div className="absolute inset-0 bg-black/30 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                      <button className="flex items-center gap-2 px-3 py-1.5 bg-white/90 text-[#7B1E7A] rounded-full text-sm font-medium hover:bg-white transition">
                        <ExternalLink size={14} /> Live
                      </button>
                      <button className="flex items-center gap-2 px-3 py-1.5 bg-[#7B1E7A] text-white rounded-full text-sm font-medium hover:bg-[#6A1B6E] transition">
                        <Github size={14} /> Code
                      </button>
                    </div>
                  </div>

                  <div className="p-5 space-y-2">
                    <p className="text-xs uppercase font-medium text-[#A855F7]">
                      {project.category}
                    </p>
                    <h3 className="text-xl font-semibold text-[#7B1E7A]">
                      {project.title}
                    </h3>
                    <p className="text-[#444] text-sm leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 text-xs rounded-full bg-[#DE8CF0]/20 text-[#7B1E7A] font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <button className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#BE29EC] text-white text-sm font-medium hover:opacity-90 transition mt-3">
                      View Project <ArrowRight size={16} />
                    </button>
                  </div>
                </motion.div>
              ))}
          </motion.div>

          {/* Right Arrow */}
          <button
            onClick={nextProjects}
            disabled={startIndex + itemsPerPage >= projects.length}
            className={`absolute -right-8 md:-right-12 z-10 p-3 bg-white rounded-full shadow-lg hover:bg-[#7B1E7A]/10 transition ${
              startIndex + itemsPerPage >= projects.length
                ? "opacity-30 cursor-not-allowed"
                : ""
            }`}
          >
            <ChevronRight size={28} className="text-[#7B1E7A]" />
          </button>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <button className="flex items-center gap-2 mx-auto px-6 py-2 border-2 border-[#7B1E7A] text-[#7B1E7A] rounded-full text-base font-medium hover:bg-[#7B1E7A]/10 transition">
            View All Projects
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
