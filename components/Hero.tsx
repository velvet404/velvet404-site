"use client";

import { motion } from "framer-motion";
import Typewriter from "@/components/ui/Typewriter";

export default function Hero() {
    return (
        <section id="hero" className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden">
            {/* Background Effect - Static Noise / Grain could go here */}
            <div className="absolute inset-0 bg-gradient-to-b from-noir via-noir/95 to-noir z-0" />

            {/* Abstract Shapes */}
            <motion.div
                animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.5, 0.3],
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/4 left-1/4 w-96 h-96 bg-velvet rounded-full blur-[128px] opacity-30 z-0"
            />
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.2, 0.4, 0.2],
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gold rounded-full blur-[100px] opacity-20 z-0"
            />

            {/* Main Content */}
            <div className="relative z-10 text-center px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="mb-6"
                >
                    <p className="text-gold font-mono text-sm md:text-base tracking-[0.3em] uppercase mb-4">
                        System Information: <span className="text-white">Online</span>
                    </p>
                    <h1 className="text-7xl md:text-9xl font-serif text-white tracking-widest leading-tight mix-blend-overlay">
                        velvet<span className="text-velvet">404</span>
                    </h1>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="h-8 md:h-10"
                >
                    <Typewriter
                        text={["THE DIGITAL JAZZ SINGER", "ERROR: SOUL_NOT_FOUND", "REBOOTING...", "velvet404"]}
                        className="text-lg md:text-2xl font-mono text-silver tracking-widest"
                        waitTime={2500}
                    />
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20"
            >
                <span className="text-xs font-mono text-silver/50 tracking-widest">SCROLL</span>
                <div className="w-[1px] h-16 bg-gradient-to-b from-velvet to-transparent" />
            </motion.div>
        </section>
    );
}
