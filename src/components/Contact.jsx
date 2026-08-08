import { FiArrowRight, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { MdWork } from "react-icons/md";

export default function Contact() {
  return (
    <section id="contact" className="relative z-10 py-24 px-6 md:px-16 max-w-[1280px] mx-auto scroll-mt-20">
      <div className="glass-card rounded-3xl border border-black/10 dark:border-white/10 p-8 md:p-12 shadow-xl relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 via-purple-500/5 to-transparent dark:from-indigo-500/10 dark:via-purple-500/10 dark:to-transparent" />

        <div className="relative flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card border border-black/10 dark:border-white/10 text-xs font-mono tracking-widest text-indigo-600 dark:text-indigo-400 uppercase shadow-sm mb-5">
              <MdWork className="text-sm" />
              Available for work
            </div>

            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-zinc-900 dark:text-white mb-4">
              Let’s build something great.
            </h2>

            <p className="text-base md:text-lg text-zinc-600 dark:text-gray-400 leading-relaxed max-w-xl">
              I’m focused on creating modern, responsive interfaces and reliable full-stack experiences for brands, startups, and digital products.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-3 text-sm text-zinc-700 dark:text-gray-300">
              <a
                href="mailto:kazisunan68@gmail.com"
                className="inline-flex items-center gap-2 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                <FiMail /> kazisunan68@gmail.com
              </a>
              <a
                href="https://www.linkedin.com/in/sunan-arif"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                <FiLinkedin /> LinkedIn
              </a>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://github.com/sunanarif"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 transition-colors shadow-md shadow-indigo-500/10"
            >
              GitHub <FiGithub className="text-base" />
            </a>

            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-zinc-800 border border-zinc-200 bg-white/80 hover:bg-zinc-100 transition-colors dark:text-white dark:bg-white/5 dark:border-white/10 dark:hover:bg-white/10"
            >
              View projects <FiArrowRight className="text-base" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
