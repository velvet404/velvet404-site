"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function FanClub() {
    return (
        <section id="fanclub" className="py-24 px-6 md:px-12 min-h-[60vh] flex items-center justify-center">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="max-w-4xl w-full bg-gradient-to-br from-velvet/20 to-noir border border-gold/30 p-8 md:p-16 text-center relative overflow-hidden"
            >
                {/* Background Character Sheet */}
                <div className="absolute inset-0 opacity-10 mix-blend-overlay pointer-events-none">
                    <Image
                        src="/images/velvet_sheet.png"
                        alt="Character Sheet"
                        fill
                        className="object-cover"
                    />
                </div>

                <div className="absolute top-0 left-0 w-20 h-20 border-t border-l border-gold/50" />
                <div className="absolute bottom-0 right-0 w-20 h-20 border-b border-r border-gold/50" />

                <h2 className="text-3xl md:text-5xl font-serif text-white mb-6 tracking-widest relative z-10">
                    THE VELVET ROOM
                </h2>
                <p className="text-silver font-mono text-sm md:text-base mb-12 max-w-2xl mx-auto leading-relaxed relative z-10">
                    真実を知る者だけが入場を許される、秘密の社交場。<br />
                    未公開音源、バックステージログ、そして彼女の秘密へのアクセス権を。
                </p>

                <button className="group relative inline-flex items-center gap-3 px-8 py-4 bg-transparent border border-gold text-gold hover:bg-gold hover:text-noir transition-all duration-300 font-serif tracking-widest z-10">
                    <span>JOIN THE CLUB</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <p className="mt-8 text-xs text-velvet font-mono opacity-70 relative z-10">
                    [ ACCESS_LEVEL: RESTRICTED ]
                </p>
            </motion.div>
        </section>
    );
}
