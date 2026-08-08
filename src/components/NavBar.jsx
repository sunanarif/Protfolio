"use client";

import { useEffect, useState } from "react";
import {
  MdLightMode,
  MdDarkMode,
  MdChatBubbleOutline,
  MdHome,
  MdFolderOpen,
  MdPersonOutline,
} from "react-icons/md";

export default function NavBar() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    if (typeof document !== "undefined") {
      setIsDark(document.documentElement.classList.contains("dark"));
    }
  }, []);

  const toggleTheme = () => {
    if (typeof document !== "undefined") {
      const isCurrentlyDark = document.documentElement.classList.contains("dark");
      if (isCurrentlyDark) {
        document.documentElement.classList.remove("dark");
        setIsDark(false);
      } else {
        document.documentElement.classList.add("dark");
        setIsDark(true);
      }
    }
  };

  return (
    <>
      {/* Brand Header */}
      <header className="fixed top-6 left-6 md:top-10 md:left-12 z-50">
        <div className="text-xl font-extrabold tracking-[0.2em] uppercase text-zinc-950 dark:text-white glass-card px-4 py-2 rounded-lg">
          Sunan<span className="text-zinc-500 dark:text-gray-400">.</span>
        </div>
      </header>

      {/* Top Right Quick Actions */}
      <div className="fixed top-6 right-6 md:top-10 md:right-12 z-50 flex space-x-3">
        <button
          type="button"
          aria-label="Toggle theme"
          onClick={toggleTheme}
          className="w-10 h-10 flex items-center justify-center rounded-lg glass-card text-zinc-900 dark:text-white hover:bg-black/5 dark:hover:bg-white/10 transition-all border border-black/10 dark:border-white/10 cursor-pointer shadow-sm"
        >
          {isDark ? (
            <MdLightMode className="text-base text-amber-400" />
          ) : (
            <MdDarkMode className="text-base text-indigo-600" />
          )}
        </button>
        <a
          href="#contact"
          aria-label="Contact"
          className="w-10 h-10 flex items-center justify-center rounded-lg glass-card text-zinc-900 dark:text-white hover:bg-black/5 dark:hover:bg-white/10 transition-all border border-black/10 dark:border-white/10 shadow-sm"
        >
          <MdChatBubbleOutline className="text-base" />
        </a>
      </div>

      {/* Floating Dock Navigation */}
      <nav className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
        <div className="glass-card rounded-2xl px-6 py-3 flex items-center space-x-8 shadow-md">
          <a
            href="#home"
            className="text-zinc-950 dark:text-white hover:text-zinc-700 dark:hover:text-gray-300 transition-colors flex flex-col items-center group relative"
          >
            <MdHome className="text-xl mb-1 group-hover:-translate-y-1 transition-transform" />
            <span className="text-[10px] font-mono tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity absolute -top-4 font-bold text-zinc-900 dark:text-white bg-white/90 dark:bg-black/90 px-1.5 py-0.5 rounded shadow-sm">
              Home
            </span>
          </a>
          <a
            href="#projects"
            className="text-zinc-600 dark:text-gray-400 hover:text-zinc-950 dark:hover:text-white transition-colors flex flex-col items-center group relative"
          >
            <MdFolderOpen className="text-xl mb-1 group-hover:-translate-y-1 transition-transform" />
            <span className="text-[10px] font-mono tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity absolute -top-4 font-bold text-zinc-900 dark:text-white bg-white/90 dark:bg-black/90 px-1.5 py-0.5 rounded shadow-sm">
              Proj
            </span>
          </a>
          <a
            href="#about"
            className="text-zinc-600 dark:text-gray-400 hover:text-zinc-950 dark:hover:text-white transition-colors flex flex-col items-center group relative"
          >
            <MdPersonOutline className="text-xl mb-1 group-hover:-translate-y-1 transition-transform" />
            <span className="text-[10px] font-mono tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity absolute -top-4 font-bold text-zinc-900 dark:text-white bg-white/90 dark:bg-black/90 px-1.5 py-0.5 rounded shadow-sm">
              About
            </span>
          </a>
        </div>
      </nav>
    </>
  );
}
