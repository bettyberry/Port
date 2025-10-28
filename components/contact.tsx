"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import {
  Mail,
  MapPin,
  Phone,
  Send,
  Calendar,
  Coffee,
  Linkedin,
  Twitter,
  Github,
  Mail as MailIcon,
} from "lucide-react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    budget: "",
    timeline: "",
  });

  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (result.success) {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
          budget: "",
          timeline: "",
        });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-20 px-6 bg-[#FAF5FF]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-[#7B1E7A]">
            Let's Work Together
          </h2>
          <div className="w-20 h-1 mx-auto rounded-full bg-gradient-to-r from-[#DE8CF0] to-[#C97DF0]"></div>
          <p className="text-lg mt-6 text-[#444] max-w-2xl mx-auto">
            Ready to bring your digital vision to life? I'd love to hear about your project.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="rounded-3xl p-8 shadow-md bg-white hover:shadow-xl transition-all duration-300">
              <div className="mb-8">
                <h3 className="text-2xl font-semibold mb-2 text-[#7B1E7A]">
                  Send Me a Message
                </h3>
                <p className="text-[#555]">
                  Fill out the form below and I’ll get back to you soon.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name & Email */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className="text-[#333]">
                      Full Name *
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="mt-2 border-gray-200 focus:border-[#7B1E7A] rounded-xl"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-[#333]">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="mt-2 border-gray-200 focus:border-[#7B1E7A] rounded-xl"
                      placeholder="you@email.com"
                    />
                  </div>
                </div>

                {/* Budget & Timeline */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="budget" className="text-[#333]">
                      Project Budget
                    </Label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="mt-2 w-full px-3 py-2 border border-gray-200 rounded-xl focus:border-[#7B1E7A] focus:outline-none"
                    >
                      <option value="">Select budget range</option>
                      <option value="5k-10k">$5k - $10k</option>
                      <option value="10k-25k">$10k - $25k</option>
                      <option value="25k-50k">$25k - $50k</option>
                      <option value="50k+">$50k+</option>
                    </select>
                  </div>
                  <div>
                    <Label htmlFor="timeline" className="text-[#333]">
                      Timeline
                    </Label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      className="mt-2 w-full px-3 py-2 border border-gray-200 rounded-xl focus:border-[#7B1E7A] focus:outline-none"
                    >
                      <option value="">Select timeline</option>
                      <option value="asap">ASAP</option>
                      <option value="1-2months">1–2 months</option>
                      <option value="3-6months">3–6 months</option>
                      <option value="6months+">6+ months</option>
                    </select>
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <Label htmlFor="subject" className="text-[#333]">
                    Project Subject *
                  </Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="mt-2 border-gray-200 focus:border-[#7B1E7A] rounded-xl"
                    placeholder="Brief project title"
                  />
                </div>

                {/* Message */}
                <div>
                  <Label htmlFor="message" className="text-[#333]">
                    Project Details *
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="mt-2 border-gray-200 focus:border-[#7B1E7A] rounded-xl"
                    placeholder="Tell me more about your goals and project scope..."
                  />
                </div>

                {/* Submit Button */}
                <div>
                  <Button
                    type="submit"
                    disabled={status === "sending"}
                    className="w-full py-3 rounded-xl text-white font-medium hover:opacity-90 transition-all duration-300"
                    style={{
                      background: "linear-gradient(90deg, #DE8CF0, #C97DF0)",
                    }}
                  >
                    <Send className="w-5 h-5 mr-2" />
                    {status === "sending" ? "Sending..." : "Send Message"}
                  </Button>

                  {status === "success" && (
                    <p className="text-green-600 text-sm mt-2">
                      ✅ Message sent successfully!
                    </p>
                  )}
                  {status === "error" && (
                    <p className="text-red-600 text-sm mt-2">
                      ❌ Something went wrong. Try again later.
                    </p>
                  )}
                </div>
              </form>
            </div>
          </div>

          {/* Contact Info Side */}
          <div className="space-y-8">
            <div className="rounded-3xl p-8 bg-gradient-to-br from-[#DE8CF0] to-[#C97DF0] text-white shadow-md">
              <h3 className="text-xl mb-6 font-medium">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="w-5 h-5 mr-4" />
                  <div>
                    <p className="text-sm opacity-80">Email</p>
                    <p className="font-medium">betelhemtekle2021@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 mr-4" />
                  <div>
                    <p className="text-sm opacity-80">Location</p>
                    <p>Addis Ababa, Ethiopia</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 mr-4" />
                  <div>
                    <p className="text-sm opacity-80">Phone</p>
                    <p>0901076065</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-3xl p-8 bg-white border-2 border-[#EBD5F9] shadow-sm">
              <div className="flex items-center mb-4">
                <Calendar className="w-6 h-6 mr-3 text-[#7B1E7A]" />
                <h3 className="text-lg font-medium text-[#7B1E7A]">Availability</h3>
              </div>
              <p className="text-sm mb-4 text-[#444]">
                Currently accepting new projects
              </p>
              <div className="w-full h-2 rounded-full bg-[#EBD5F9] mb-3">
                <div
                  className="h-2 rounded-full bg-[#7B1E7A]"
                  style={{ width: "75%" }}
                ></div>
              </div>
            </div>

            <div className="rounded-3xl p-8 text-center bg-[#F3E8FF] shadow-sm">
              <Coffee className="w-8 h-8 mx-auto mb-4 text-[#7B1E7A]" />
              <h3 className="text-lg mb-2 font-medium text-[#7B1E7A]">
                Prefer to Chat?
              </h3>
              <p className="text-sm mb-4 text-[#444]">
                Schedule a 15-minute discovery call to discuss your ideas.
              </p>
              <Button
                variant="outline"
                className="rounded-full border-[#7B1E7A] text-[#7B1E7A] hover:bg-[#F6E1FF]"
              >
                Schedule Call
              </Button>
            </div>
          </div>
        </div>
      </div>

      <footer className="mt-32 bg-gradient-to-b from-[#7B1E7A] to-[#56125A] text-white">
        <div className=" px-6 py-16 grid lg:grid-cols-3 gap-12">
          <div>
            <h3 className="text-3xl font-semibold mb-3 tracking-tight">
              Betelhem Tekle
            </h3>
            <p className="text-[#EBD5F9] mb-4 text-sm uppercase tracking-wide">
              Full-Stack Developer & UI/UX Enthusiast
            </p>
            <p className="text-sm text-[#F3E8FF] leading-relaxed mb-6 max-w-sm">
              Crafting elegant, functional digital experiences with clean code
              and thoughtful design. Let’s bring your next idea to life.
            </p>

            {/* Social Icons */}
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-[#F3E8FF] text-[#7B1E7A] rounded-full hover:bg-white hover:scale-110 transition transform"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-[#F3E8FF] text-[#7B1E7A] rounded-full hover:bg-white hover:scale-110 transition transform"
              >
                <Twitter size={18} />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-[#F3E8FF] text-[#7B1E7A] rounded-full hover:bg-white hover:scale-110 transition transform"
              >
                <Github size={18} />
              </a>
              <a
                href="mailto:betelhemtekle2021@gmail.com"
                className="p-2 bg-[#F3E8FF] text-[#7B1E7A] rounded-full hover:bg-white hover:scale-110 transition transform"
              >
                <MailIcon size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-[#EBD5F9]">
              <li><a href="#about" className="hover:text-white transition">About</a></li>
              <li><a href="#portfolio" className="hover:text-white transition">Portfolio</a></li>
              <li><a href="#services" className="hover:text-white transition">Services</a></li>
              <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-[#EBD5F9]">
              <li>Frontend Development</li>
              <li>Backend Development</li>
              <li>UI/UX Design</li>
              <li>Mobile Apps</li>
              <li>Consulting</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#C97DF0]/40 mt-12 pt-6 text-center text-sm text-[#F3E8FF]">
          <p>
            © 2025 <span className="font-semibold text-white">Betelhem Tekle CodeCraft</span>. Made
            with <span className="text-pink-300">♥</span> & creativity.
          </p>
          <div className="mt-4">
            <a
              href="#top"
              className="inline-block bg-[#C97DF0] text-white px-5 py-2 rounded-full text-sm hover:bg-[#B561E7] transition transform hover:scale-105"
            >
              Back to Top ↑
            </a>
          </div>
        </div>
      </footer>
    </section>
  );
}
