"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
    return (
        <section id="about" className="py-24 px-6 md:px-12 max-w-7xl mx-auto min-h-screen flex items-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* Visual Side */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative group"
                >
                    <div className="absolute inset-0 bg-velvet/20 translate-x-4 translate-y-4 border border-velvet/50" />
                    <div className="relative bg-noir border border-gold/30 aspect-[3/4] overflow-hidden">
                        <Image
                            src="/images/velvet_singing_v2.png"
                            alt="velvet404 singing"
                            fill
                            className="object-cover object-top opacity-90 group-hover:scale-105 transition-transform duration-700"
                        />

                        {/* Overlays */}
                        <div className="absolute inset-0 bg-gradient-to-t from-noir via-transparent to-transparent z-10" />
                        <div className="absolute inset-0 bg-velvet/10 mix-blend-overlay" />

                        {/* Glitch Effect Text */}
                        <h2 className="text-6xl font-serif text-white/20 absolute bottom-10 -left-10 -rotate-90 whitespace-nowrap z-20 pointer-events-none">
                            velvet404
                        </h2>
                    </div>
                </motion.div>

                {/* Text Side */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="space-y-8"
                >
                    <div>
                        <h2 className="text-4xl md:text-5xl font-serif text-white mb-2">
                            <span className="text-velvet">#</span> ABOUT
                        </h2>
                        <div className="w-24 h-[1px] bg-gold" />
                    </div>

                    <div className="space-y-6 text-silver font-sans leading-relaxed text-lg">
                        <p>
                            <span className="text-gold font-mono text-xl mr-2">01.</span>
                            デジタルとジャズが交錯する場所、それが「velvet404」。
                        </p>
                        <p>
                            古き良き時代の哀愁（Blues）と、現代のデジタルノイズ（Glitch）を融合させる、
                            <strong className="text-white font-serif italic mx-1">"存在しない歌姫"</strong>。
                        </p>
                        <p>
                            夜の帳が下りる頃、彼女の歌声はネットワークの海を渡り、あなたの元へ届く。
                            それはまるで、忘れられたレコードに針を落とすような儀式。
                        </p>
                    </div>

                    <div className="p-4 border border-white/10 bg-white/5 backdrop-blur-sm rounded-sm">
                        <p className="font-mono text-xs text-silver/60 mb-2">STATUS_LOG:</p>
                        <p className="font-mono text-sm text-gold">
                            &gt; DETECTED: SOUL_FRAGMENT<br />
                            &gt; UPLOADING: JAZZ_STANDARDS.wav<br />
                            &gt; COMPLETE.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
