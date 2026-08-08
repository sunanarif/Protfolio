import Image from "next/image";
import { MdDownload } from "react-icons/md";

export default function Hero() {
    return (
        <>
            {/* HUD Elements */}
            <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0">
                <div className="hud-line top-10 left-0 w-full h-[1px]" />
                <div className="hud-line top-0 left-10 w-[1px] h-full" />
                <div className="hud-line bottom-10 left-0 w-full h-[1px]" />
                <div className="hud-line top-0 right-10 w-[1px] h-full" />
                <div className="absolute top-12 left-12 text-[10px] text-gray-500 dark:text-gray-400 font-mono tracking-widest">

                </div>
                <div className="absolute bottom-12 right-12 text-[10px] text-gray-500 dark:text-gray-400 font-mono tracking-widest">

                </div>
            </div>

            {/* Main Hero Content */}
            <main id="home" className="max-w-[1280px] mx-auto px-6 md:px-16 pt-32 pb-32 md:pt-40 flex flex-col md:flex-row items-center justify-center min-h-screen relative z-10 scroll-mt-20">
                {/* Left Column - Card Content */}
                <div className="w-full md:w-1/2 flex flex-col space-y-6 md:space-y-8 text-center md:text-left glass-card p-8 md:p-12 rounded-2xl relative">
                    <div className="absolute -top-3 -left-3 w-6 h-6 border-t border-l border-black/30 dark:border-white/30" />
                    <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b border-r border-black/30 dark:border-white/30" />

                    <div className="flex items-center justify-center md:justify-start space-x-3 text-sm md:text-base font-mono tracking-widest text-gray-600 dark:text-gray-400 uppercase">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        <span>Status: Online</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl lg:text-[80px] font-black tracking-[-0.04em] leading-[1.05] text-gray-900 dark:text-white">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-500 dark:from-gray-100 dark:to-gray-500">
                         MERN    
                        </span>
                        Stack
                        <br />
                        Developer
                    </h1>

                    <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-lg mx-auto md:mx-0 font-light tracking-wide">
                        I'm a MERN Stack developer,interested in Frontend Development and Next.js Enthusiast.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-6 pt-6">
                        <a
                            href="#contact"
                            className="w-full sm:w-auto px-8 py-4 bg-gray-900 dark:bg-white/10 text-white font-medium rounded-lg hover:bg-gray-800 dark:hover:bg-white/20 transition-all border border-transparent dark:border-white/20 text-center tracking-widest uppercase text-sm backdrop-blur-sm shadow-md flex gap-2 items-center"
                        >
                            Download Resume
                            <MdDownload className="text-base" />
                        </a>
                       
                    </div>
                </div>

                {/* Right Column - Orbital Image */}
                <div className="w-full md:w-1/2 flex justify-center mt-20 md:mt-0 relative">
                    <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-[400px] md:h-[400px]">
                        {/* Ambient glow backdrop */}
                        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-indigo-500/30 via-purple-500/20 to-cyan-500/30 blur-3xl scale-[1.15]" />

                        {/* Orbital rings */}
                        <div className="absolute inset-0 rounded-full border border-black/10 dark:border-white/5 scale-[1.15] animate-[spin_20s_linear_infinite]" />
                        <div className="absolute inset-0 rounded-full border border-dashed border-black/20 dark:border-white/10 scale-[1.3] animate-[spin_30s_linear_infinite_reverse]" />

                        <div className="relative w-full h-full rounded-full overflow-hidden glass-card aura-glow p-2 bg-gradient-to-b from-white/30 via-white/10 to-transparent dark:from-white/10 dark:to-transparent">
                            <Image
                                src="/sunan.jpg"
                                alt="Profile of Sunan"
                                width={400}
                                height={400}
                                priority
                                className="w-full h-full object-cover rounded-full transition-all duration-500 hover:scale-105"
                            />
                        </div>

                        {/* HUD Data points on image */}
                        <div className="absolute top-1/4 -right-4 flex items-center space-x-2">
                            <div className="w-8 h-[1px] bg-black/30 dark:bg-white/30" />
                            <span className="text-[10px] font-mono text-gray-600 dark:text-gray-400">TGT_ACQ</span>
                        </div>
                        <div className="absolute bottom-1/3 -left-8 flex items-center space-x-2">
                            <span className="text-[10px] font-mono text-gray-600 dark:text-gray-400">LVL_99</span>
                            <div className="w-12 h-[1px] bg-black/30 dark:bg-white/30" />
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
