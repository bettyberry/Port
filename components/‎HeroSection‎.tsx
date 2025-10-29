"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

export default function HeroSection() {
  const [active, setActive] = useState("home");
  const sections = ["home", "about", "projects", "services", "contact"];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      for (const id of sections) {
        const section = document.getElementById(id);
        if (section) {
          const top = section.offsetTop;
          const height = section.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActive(id);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative overflow-hidden min-h-screen bg-gradient-to-br from-white via-[#F7F0FF] to-[#E8DEFF] font-poppins"
    >
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-white/70 backdrop-blur-lg shadow-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">
          <div
            className="text-2xl font-bold text-[#7B1E7A] tracking-tight cursor-pointer font-poppins"
            onClick={() => scrollToSection("home")}
          >
            <span>B</span>etty
          </div>

          <ul className="hidden md:flex gap-10 text-[1rem] font-normal">
            {sections.map((id) => (
              <li
                key={id}
                onClick={() => scrollToSection(id)}
                className={`relative cursor-pointer capitalize transition-all duration-300 ${
                  active === id ? "text-[#7B1E7A]" : "text-black hover:text-[#7B1E7A]"
                }`}
              >
                {id}
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-[#7B1E7A] transition-all duration-300 ${
                    active === id ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </li>
            ))}
          </ul>

          <div className="md:hidden">
            <motion.div whileTap={{ scale: 0.9 }} className="cursor-pointer text-[#7B1E7A]">
              ☰
            </motion.div>
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative min-h-screen py-44">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="space-y-8 order-2 lg:order-1"
          >
            <h1 className="text-5xl md:text-7xl font-poppins font-bold leading-tight text-black">
              <span>Betelhem</span>
              <br />
              <span className="text-[#7B1E7A]">Tekle</span>
            </h1>

            <p className="text-xl md:text-2xl font-poppins font-semibold text-black/80">
              Full-Stack Developer & UI/UX Enthusiast
            </p>

            <p className="text-lg leading-relaxed max-w-lg text-black/70 font-poppins font-normal">
              I transform complex ideas into elegant digital solutions.
              Specializing in React, Node.js, and modern web technologies to
              create seamless user experiences.
            </p>

            <div className="flex flex-wrap gap-4 items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 rounded-full text-base font-bold bg-[#BE29EC] text-white shadow-lg transition-all duration-300 font-poppins"
              >
                Explore My Work
              </motion.button>

              <div className="flex gap-3">
                <motion.a whileHover={{ scale: 1.1 }} href="https://github.com/bettyberry" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white shadow-md">
                  <Github className="w-5 h-5 text-black" />
                </motion.a>

                <motion.a whileHover={{ scale: 1.1 }} href="https://www.linkedin.com/in/betelhem-tekle-0717b4248/" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white shadow-md">
                  <Linkedin className="w-5 h-5 text-black" />
                </motion.a>

                <motion.a whileHover={{ scale: 1.1 }} href="mailto:betelhemtekle2021@gmail.com" className="p-3 rounded-full bg-white shadow-md">
                  <Mail className="w-5 h-5 text-black" />
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Right: Image */}
          <div className="relative order-1 lg:order-2">
            <div className="relative w-full max-w-md mx-auto">
              <div className="absolute -inset-1 bg-[#9B5DE0]/60 rotate-3 rounded-3xl z-0 shadow-md"></div>

              <motion.div
                initial={{ rotate: -6, y: 50, opacity: 0 }}
                animate={{ rotate: -3, y: 0, opacity: 1 }}
                whileHover={{ scale: 1.05, rotate: -2, transition: { duration: 0.3 } }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="relative rounded-3xl overflow-hidden shadow-2xl bg-white z-10"
              >
                <Image
                  src="/betty.jpg"
                  alt="Betty at work"
                  width={500}
                  height={500}
                  className="w-full h-96 object-cover"
                  priority
                />
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="absolute -top-4 -right-4 px-4 py-2 rounded-xl shadow-lg text-sm font-medium bg-white text-black z-20 font-poppins"
            >
              3+ Years Experience
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-[5.5rem] left-1/2 transform -translate-x-1/2 text-center"
      >
        <ArrowDown className="w-6 h-6 animate-bounce mx-auto text-[#7B1E7A]" />
        <p className="text-sm mt-1 text-black/70 font-poppins">Scroll to explore</p>
      </motion.div>
    </section>
  );
}
