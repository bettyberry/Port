import { Code2, Palette, Cloud, Smartphone, Zap, Users } from "lucide-react";

export function MyServices() {
  const services = [
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "Frontend Development",
      description:
        "Crafting beautiful, responsive interfaces using React, Next.js, and modern UI frameworks.",
      features: ["React & Next.js", "TypeScript", "Responsive Design", "Performance Optimization"],
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "UI/UX Design",
      description:
        "Designing intuitive, user-centered experiences that are elegant and delightful to use.",
      features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Backend Development",
      description:
        "Building scalable, secure server-side solutions with Node.js and MongoDB.",
      features: ["Node.js", "MongoDB", "RESTful APIs"],
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Performance Optimization",
      description:
        "Enhancing app performance, SEO, and UX through optimization best practices.",
      features: ["Core Web Vitals", "SEO Optimization", "Caching Strategies"],
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Technical Consulting",
      description:
        "Helping teams plan architectures, conduct reviews, and build better digital products.",
      features: ["Architecture Planning", "Code Reviews", "Team Mentorship"],
    },
  ];

  return (
    <section id="services" className="py-20 px-6 bg-[#FAF5FF]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-[#7B1E7A]">
            My Services
          </h2>
          <div className="w-20 h-1 mx-auto rounded-full bg-gradient-to-r from-[#DE8CF0] to-[#C97DF0]"></div>
          <p className="text-lg mt-6 text-[#444] max-w-2xl mx-auto">
            I combine design, development, and innovation to create beautiful digital experiences.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative group bg-white rounded-2xl p-8 shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
            >
              {/* Accent gradient border */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500"
                style={{
                  background: "linear-gradient(135deg, #DE8CF0, #C97DF0)",
                  zIndex: 0,
                }}
              ></div>

              <div className="relative z-10 space-y-4">
                <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-[#F3E8FF] text-[#7B1E7A] mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-[#7B1E7A]">{service.title}</h3>
                <p className="text-sm text-[#333] leading-relaxed">{service.description}</p>
                <ul className="space-y-2 mt-4">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm text-[#555]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#DE8CF0] mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
<div className="mt-44 text-center">
  <h3 className="text-2xl md:text-3xl font-semibold text-[#7B1E7A] mb-2">
    My Process
  </h3>
  <p className="text-[#555] mb-12">
    How I turn your ideas into reality
  </p>

  <div className="relative max-w-5xl  px-4 ml-auto mr-auto ">
    <div className="absolute top-[2.25rem] left-0 right-0 mx-auto h-0.5 bg-[#C8A6CC]"></div>

    <div className="grid md:grid-cols-4 gap-10 relative z-10">
      {[
        { step: "01", title: "Discovery", desc: "Understanding your goals and requirements" },
        { step: "02", title: "Design", desc: "Creating wireframes and visual designs" },
        { step: "03", title: "Development", desc: "Building with clean, scalable code" },
        { step: "04", title: "Delivery", desc: "Testing, deployment, and ongoing support" },
      ].map((phase, index) => (
        <div key={index} className="text-center space-y-3 relative">
          <div className="relative w-12 h-12 mx-auto rounded-full flex items-center justify-center text-white text-sm font-bold bg-[#6B1E6B] border-4 border-[#F7F3FA] z-10">
            {phase.step}
          </div>
          <h4 className="text-lg font-semibold text-[#6B1E6B]">{phase.title}</h4>
          <p className="text-sm text-[#555]">{phase.desc}</p>
        </div>
      ))}
    </div>
  </div>
</div>

      </div>
    </section>
  );
}
