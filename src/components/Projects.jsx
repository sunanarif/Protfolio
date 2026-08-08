"use client";

import Image from "next/image";
import { FiExternalLink, FiGithub } from "react-icons/fi";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Idea Vault",
      tags: ["Next.js", "Tailwind CSS", "UI/UX", "Vercel"],
      description:
        "A polished idea and note management platform designed for creative thinking, quick organization, and a clean digital workspace experience.",
      githubUrl: "https://github.com/sunanarif/ideaVault",
      liveUrl: "https://idea-vault-amber-three.vercel.app/",
      type: "image",
      images: [
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&auto=format&fit=crop&q=80",
      ],
    },
    {
      id: 2,
      title: "Keen Keeper",
      tags: ["React", "Responsive Design", "Modern Web App", "Deployment"],
      description:
        "A clean, user-focused web app experience built around organization, tracking, and practical daily task workflows with responsive interfaces.",
      githubUrl: "https://github.com/sunanarif/KeenKeeper",
      liveUrl: "https://keen-keeper-seven-beige.vercel.app/",
      type: "image",
      images: [
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&auto=format&fit=crop&q=80",
      ],
    },
    {
      id: 3,
      title: "Qurbani Haat",
      tags: ["E-commerce", "Landing Page", "Branding", "Marketplace"],
      description:
        "A marketplace-style landing experience built for product discovery, trust, and conversion, with a strong visual identity and cleaner buyer journey.",
      githubUrl: "https://github.com/sunanarif/Qurbani-Haat",
      liveUrl: "https://qurbani-haat-three.vercel.app/",
      type: "image",
      images: [
        "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=600&auto=format&fit=crop&q=80",
      ],
    },
  ];

  return (
    <section id="projects" className="relative z-10 py-24 px-6 md:px-16 max-w-[1280px] mx-auto scroll-mt-20">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-white mb-3">
          Projects
        </h2>
        {/* Accent Bar */}
        <div className="w-1 h-8 bg-gradient-to-b from-coral-500 to-transparent bg-indigo-600 rounded-full relative">
          <span className="w-2 h-2 bg-indigo-600 rounded-full absolute -bottom-1 -left-[2px] animate-ping" />
        </div>
      </div>

      {/* Projects List */}
      <div className="space-y-24">
        {projects.map((project, index) => {
          const isEven = index % 2 === 0;

          return (
            <div
              key={project.id}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-10 items-center`}
            >
              {/* Text Info */}
              <div
                className={`lg:col-span-6 flex flex-col space-y-5 ${
                  isEven ? "lg:order-1" : "lg:order-2"
                }`}
              >
                <h3 className="text-3xl font-bold text-zinc-900 dark:text-white tracking-wide">
                  {project.title}
                </h3>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2.5">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-1.5 rounded-full text-xs font-medium bg-white/80 text-zinc-700 border border-zinc-200/80 shadow-sm dark:bg-[#1a222a] dark:text-gray-300 dark:border-gray-800/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Description */}
                <p className="text-zinc-600 dark:text-gray-400 font-light text-sm md:text-base leading-relaxed max-w-xl">
                  {project.description}
                </p>

                {/* Action Buttons */}
                <div className="flex items-center gap-5 pt-2">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-6 py-2.5 rounded-md text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 transition-colors shadow-md shadow-indigo-500/10"
                    >
                      View Github
                    </a>
                  )}

                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-zinc-700 hover:text-zinc-900 transition-colors border-b-2 border-transparent hover:border-indigo-700 pb-0.5 dark:text-gray-300 dark:hover:text-white"
                  >
                    View project <FiExternalLink className="text-base" />
                  </a>
                </div>
              </div>

              {/* Visual Card (Terminal or Image Showcase) */}
              <div
                className={`lg:col-span-6 ${
                  isEven ? "lg:order-2" : "lg:order-1"
                }`}
              >
                <div className="relative group rounded-xl p-1 bg-gradient-to-br from-zinc-200/80 via-zinc-100/80 to-transparent dark:from-gray-800/50 dark:via-gray-900/40 dark:to-transparent">
                  {/* Outer Frame Effect */}
                  <div className="relative rounded-lg overflow-hidden border border-zinc-200/80 bg-white/90 p-4 md:p-6 shadow-2xl dark:border-gray-800/80 dark:bg-[#0d131a]">
                    {project.type === "terminal" ? (
                      /* Terminal Display */
                      <div className="font-mono text-xs md:text-sm leading-relaxed text-zinc-700 space-y-1 max-h-[260px] overflow-y-auto dark:text-gray-300">
                        {project.terminalContent.map((line, i) => (
                          <div
                            key={i}
                            className={
                              line.startsWith("Hit!")
                                ? "text-emerald-600 font-medium dark:text-emerald-400"
                                : line.startsWith("Miss!")
                                ? "text-rose-600 font-medium dark:text-rose-400"
                                : "text-zinc-500 dark:text-gray-400"
                            }
                          >
                            {line}
                          </div>
                        ))}
                      </div>
                    ) : (
                      /* Dual Image Showcase */
                      <div className="grid grid-cols-2 gap-3 h-[240px]">
                        {project.images.map((imgUrl, i) => (
                          <div
                            key={i}
                            className="relative w-full h-full rounded-md overflow-hidden bg-zinc-200 dark:bg-gray-900"
                          >
                            <Image
                              src={imgUrl}
                              alt={`${project.title} preview ${i + 1}`}
                              fill
                              className="object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}