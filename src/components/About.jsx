"use client";

import { useState } from "react";
import {
  MdCode,
  MdStorage,
  MdTerminal,
} from "react-icons/md";
import {
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiHtml5,
  SiCss,
  SiJavascript,
} from "react-icons/si";

export default function About() {
  const [activeTab, setActiveTab] = useState("all");

  const skillCategories = [
    { id: "all", label: "All Tech" },
    { id: "frontend", label: "Frontend" },
    { id: "backend", label: "Backend & DB" },
  ];

  const skills = [
    { name: "React.js", category: "frontend", icon: SiReact },
    { name: "Next.js", category: "frontend", icon: SiNextdotjs },
    { name: "Tailwind CSS", category: "frontend", icon: SiTailwindcss },
    { name: "HTML5", category: "frontend", icon: SiHtml5 },
    { name: "CSS3", category: "frontend", icon: SiCss },
    { name: "JavaScript", category: "frontend", icon: SiJavascript },
    { name: "MongoDB", category: "backend", icon: SiMongodb },
    { name: "Express.js", category: "backend", icon: SiExpress },
    { name: "Node.js", category: "backend", icon: SiNodedotjs },
  ];

  const filteredSkills =
    activeTab === "all"
      ? skills
      : skills.filter((skill) => skill.category === activeTab);

  const stats = [
    { value: "15+", label: "Projects Built", detail: "Full Stack & Web Apps" },
    { value: "100%", label: "Client Focus", detail: "Dedicated & Responsive" },
    { value: "99.9%", label: "Clean Code", detail: "Scalable Architecture" },
  ];

  return (
    <section id="about" className="relative z-10 py-24 px-6 md:px-16 max-w-[1280px] mx-auto scroll-mt-20">
      {/* Background Glow Elements */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-72 h-72 bg-purple-500/10 dark:bg-purple-500/15 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute right-0 bottom-10 w-80 h-80 bg-indigo-500/10 dark:bg-indigo-500/15 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Section Header */}
      <div className="flex flex-col items-center text-center space-y-4 mb-16">
        <div className="flex items-center space-x-2 px-3.5 py-1.5 rounded-full glass-card border border-black/10 dark:border-white/10 text-xs font-mono tracking-widest text-indigo-600 dark:text-indigo-400 uppercase shadow-sm">
          <span className="w-2 h-2 rounded-full bg-indigo-500 animate-ping" />
          <span>// ABOUT_ME.SYS</span>
        </div>
        
        <h2 className="text-4xl md:text-6xl font-black tracking-tight text-gray-900 dark:text-white">
          About{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            Me
          </span>
        </h2>

        <p className="max-w-2xl text-gray-600 dark:text-gray-400 font-light text-base md:text-lg leading-relaxed">
          Passionate about building fast, intuitive, and visually stunning web applications with React, Next.js, Tailwind CSS, and the MERN stack.
        </p>
      </div>

      {/* Grid: Bio Story + Terminal Card */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
        {/* Left Column: Personal Narrative */}
        <div className="lg:col-span-7 glass-card p-8 md:p-10 rounded-2xl relative flex flex-col justify-between space-y-6">
          <div className="absolute -top-3 -left-3 w-6 h-6 border-t border-l border-black/30 dark:border-white/30" />
          <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b border-r border-black/30 dark:border-white/30" />

          <div>
            <div className="flex items-center justify-between border-b border-black/10 dark:border-white/10 pb-4 mb-6">
              <span className="text-xs font-mono text-gray-500 dark:text-gray-400 uppercase tracking-widest flex items-center gap-2">
                <MdTerminal className="text-indigo-500 text-base" /> BIOGRAPHY
              </span>
              <span className="text-[10px] font-mono bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 px-2 py-0.5 rounded">
                LOC: BANGLADESH // REMOTE
              </span>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Hi, I'm Sunan — Full-Stack Developer & Next.js Enthusiast.
            </h3>

            <p className="text-gray-600 dark:text-gray-300 leading-relaxed font-light mb-4">
              I specialize in transforming ideas into clean, elegant, and highly performant web applications. My tech stack includes React.js, Next.js, Tailwind CSS, HTML5, CSS3, MongoDB, and Express.js.
            </p>

            <p className="text-gray-600 dark:text-gray-300 leading-relaxed font-light">
              Driven by curiosity and a commitment to great user experiences, I focus on writing modular code, responsive interfaces, and seamless server APIs.
            </p>
          </div>

          <div className="pt-4 border-t border-black/10 dark:border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center justify-center items-center w-full">
            {stats.map((stat, idx) => (
              <div key={idx} className="p-3 rounded-xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5">
                <div className="text-2xl md:text-3xl font-black text-indigo-600 dark:text-indigo-400 font-mono">
                  {stat.value}
                </div>
                <div className="text-xs font-semibold text-gray-800 dark:text-gray-200 mt-1">
                  {stat.label}
                </div>
                <div className="text-[10px] text-gray-500 dark:text-gray-400 font-mono mt-0.5">
                  {stat.detail}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Code Terminal Window */}
        <div className="lg:col-span-5 glass-card rounded-2xl overflow-hidden border border-black/15 dark:border-white/15 shadow-xl flex flex-col">
          {/* Terminal Title Bar */}
          <div className="bg-black/10 dark:bg-white/10 px-4 py-3 border-b border-black/10 dark:border-white/10 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
            </div>
            <span className="text-xs font-mono text-gray-600 dark:text-gray-400 tracking-wider">
              sunan.config.js
            </span>
            <span className="text-[10px] font-mono text-gray-400">UTF-8</span>
          </div>

          {/* Terminal Body */}
          <div className="p-6 font-mono text-xs md:text-sm leading-relaxed overflow-x-auto flex-1 bg-gray-950 text-gray-200 dark:bg-black/60">
            <div>
              <span className="text-purple-400">const</span>{" "}
              <span className="text-yellow-300">developer</span> = &#123;
            </div>
            <div className="pl-4">
              <span className="text-indigo-300">name</span>:{" "}
              <span className="text-emerald-400">"Sunan"</span>,
            </div>
            <div className="pl-4">
              <span className="text-indigo-300">role</span>:{" "}
              <span className="text-emerald-400">"Full-Stack Web Developer"</span>,
            </div>
            <div className="pl-4">
              <span className="text-indigo-300">techStack</span>: [
            </div>
            <div className="pl-8 text-emerald-400">
              "React.js", "Next.js", "Tailwind CSS",
            </div>
            <div className="pl-8 text-emerald-400">
              "HTML5", "CSS3", "MongoDB", "Express.js"
            </div>
            <div className="pl-4">],</div>
            <div className="pl-4">
              <span className="text-indigo-300">location</span>:{" "}
              <span className="text-emerald-400">"Bangladesh"</span>,
            </div>
            <div className="pl-4">
              <span className="text-indigo-300">status</span>:{" "}
              <span className="text-emerald-400">"Available for Projects"</span>,
            </div>
            <div className="pl-4">
              <span className="text-indigo-300">mindset</span>:{" "}
              <span className="text-cyan-300">() =&gt;</span> &#123;
            </div>
            <div className="pl-8 text-gray-400">
              // Continuous learning & sleek design
            </div>
            <div className="pl-8 text-purple-300">
              return <span className="text-emerald-400">"Build. Optimize. Innovate."</span>;
            </div>
            <div className="pl-4">&#125;</div>
            <div>&#125;;</div>
            <div className="mt-4 pt-4 border-t border-gray-800 flex items-center gap-2 text-gray-400 text-[11px]">
              <span className="text-emerald-400 animate-pulse font-bold">&gt;</span>
              <span>Developer environment loaded... OK</span>
            </div>
          </div>
        </div>
      </div>

      {/* Tech Stack Showcase */}
      <div className="glass-card p-8 md:p-10 rounded-2xl relative">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-black/10 dark:border-white/10">
          <div>
            <h3 className="text-2xl font-extrabold text-gray-900 dark:text-white flex items-center gap-3">
              <MdCode className="text-indigo-500" /> My Tech Stack
            </h3>
            <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400 font-mono mt-1">
              Core technologies I use to build modern applications
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2">
            {skillCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-4 py-2 text-xs font-mono rounded-lg transition-all cursor-pointer border ${
                  activeTab === cat.id
                    ? "bg-indigo-600 text-white border-indigo-600 shadow-md"
                    : "glass-card text-gray-700 dark:text-gray-300 hover:bg-black/5 dark:hover:bg-white/10 border-black/10 dark:border-white/10"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {filteredSkills.map((skill, idx) => {
            const IconComponent = skill.icon;
            return (
              <div
                key={idx}
                className="group p-5 rounded-xl glass-card border border-black/10 dark:border-white/10 hover:border-indigo-500/50 dark:hover:border-indigo-400/50 transition-all hover:-translate-y-1 flex flex-col items-center text-center space-y-3 cursor-pointer shadow-sm hover:shadow-indigo-500/10"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-black/5 dark:bg-white/5 group-hover:scale-110 transition-transform">
                  <IconComponent className="text-3xl text-gray-800 dark:text-gray-100 group-hover:text-indigo-500 transition-colors" />
                </div>
                <span className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                  {skill.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}