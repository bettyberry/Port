"use client";

import { Badge } from "./ui/badge";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

export function AboutSection() {
  const skills = [
    { name: "React & Next.js", level: "Expert" },
    { name: "Tailwind & TypeScript", level: "Advanced" },
    { name: "Node.js", level: "Advanced" },
    { name: "Python", level: "Advanced" },
    { name: "MongoDB", level: "Advanced" },
    { name: "UI/UX Design", level: "Intermediate" },
  ];

  const achievements = [
    { number: 10, label: "Projects" },
    { number: 3, label: "Years Experience" },
    { number: 15, label: "Clients" },
    { number: 100, label: "Success Rate" },
  ];

  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [counts, setCounts] = useState(achievements.map(() => 0));

  useEffect(() => {
    if (inView) {
      achievements.forEach((ach, i) => {
        let start = 0;
        const end = ach.number;
        const duration = 2000;
        const increment = Math.ceil(end / (duration / 50));
        const counter = setInterval(() => {
          start += increment;
          if (start >= end) {
            start = end;
            clearInterval(counter);
          }
          setCounts((prev) => {
            const newCounts = [...prev];
            newCounts[i] = start;
            return newCounts;
          });
        }, 50);
      });
    }
  }, [inView]);

  return (
    <section
      id="about"
      ref={ref}
      className="py-20 px-6 md:px-10 bg-gradient-to-b from-white via-[#F7F0FF] to-[#E8DEFF]"
    >
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 tracking-tight text-[#7B1E7A]">
            About Me
          </h2>
          <div className="w-20 h-1 mx-auto rounded-full bg-gradient-to-r from-[#DE8CF0] to-[#C97DF0]"></div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-10 md:gap-14">
          {/* Story Section */}
          <div className="lg:col-span-2 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-4"
            >
              <h3 className="text-xl md:text-2xl font-semibold text-[#7B1E7A]">
                My Journey
              </h3>
              <div className="space-y-3 text-base md:text-lg leading-relaxed text-black/80">
                <p>
  I fell in love with coding for the way it blends logic with creativity. What started as curiosity quickly became a passion for crafting digital experiences that make an impact.
</p>

<p>
  Over time, I’ve worked on turning ideas into meaningful, scalable web applications using React, TypeScript, and modern backend tools—bringing both design and functionality together.
</p>

<p>
  I’m driven by clean design, accessibility, and the joy of helping others grow through code. For me, great software is as much about people as it is about technology.
</p>

              </div>
            </motion.div>

            {/* Skills Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-4"
            >
              <h3 className="text-xl md:text-2xl font-semibold text-[#7B1E7A]">
                Technical Skills
              </h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={inView ? { scale: 1, opacity: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    className="flex justify-between items-center p-3 rounded-xl shadow-sm bg-white hover:shadow-md border border-[#EADAFB]/50 transition-shadow duration-300"
                  >
                    <span className="font-medium text-sm md:text-base text-black/90">
                      {skill.name}
                    </span>
                    <Badge
                      variant="secondary"
                      className="text-[0.7rem] px-2 py-1"
                      style={{
                        backgroundColor:
                          skill.level === "Expert"
                            ? "#a606d6ff"
                            : skill.level === "Advanced"
                            ? "#a972deff"
                            : "#bd8ac9ff",
                        color: "white",
                      }}
                    >
                      {skill.level}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Stats & Philosophy */}
          <div className="space-y-6">
            {/* Stats Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="p-6 rounded-2xl text-center shadow-md bg-gradient-to-br from-[#E9D5FF] to-[#D8B4FE] text-black"
            >
              <h3 className="text-lg mb-5 font-semibold text-[#7B1E7A]">
                By the Numbers
              </h3>
              <div className="grid grid-cols-2 gap-5">
                {achievements.map((achievement, index) => (
                  <div key={index}>
                    <div className="text-2xl font-bold mb-1 text-[#7B1E7A]">
                      {counts[index]}
                      {achievement.label === "Success Rate" ? "%" : "+"}
                    </div>
                    <div className="text-sm text-black/70">
                      {achievement.label}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Philosophy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="p-6 rounded-2xl border shadow-md bg-white"
            >
              <h3 className="text-lg mb-3 font-medium text-[#7B1E7A]">
                My Philosophy
              </h3>
              <blockquote className="text-base italic leading-relaxed text-black/80">
                “Great code isn’t just functional — it’s elegant, maintainable,
                and meaningful. Every project is a chance to craft something
                beautiful.”
              </blockquote>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
