export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-black/10 dark:border-white/10 py-8 px-6 md:px-16">
      <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-zinc-600 dark:text-gray-400">
        <p>© 2026 Sunan Arif. All rights reserved.</p>

        <div className="flex items-center gap-5">
          <a href="#home" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
            Home
          </a>
          <a href="#about" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
            About
          </a>
          <a href="#projects" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
            Projects
          </a>
          <a href="#contact" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
