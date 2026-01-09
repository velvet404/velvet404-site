"use client";

import { motion } from "framer-motion";
import { Play, ExternalLink } from "lucide-react";
import { useState } from "react";

// TODO: Replace with actual YouTube Video IDs from your channel
const VIDEOS = [
    {
        id: "SCcf8JtRqJw",
        title: "Shadows Whisper Through the Vanishing Pages",
        date: "2026.01",
        isNew: true
    },
    {
        id: "W7DfRk2ZPyQ",
        title: "Because You Lit My Way",
        date: "2026.01",
        isNew: false
    },
    {
        id: "FVPqP4eIYKc",
        title: "預言なき夜に踊れ",
        date: "2025.12",
        isNew: false
    },
    {
        id: "V2x4TuxpxnA",
        title: "Dancing the tango of shadow and light",
        date: "2025.12",
        isNew: false
    },
];

export default function Discography() {
    const [activeVideo, setActiveVideo] = useState(VIDEOS[0]);

    return (
        <section id="discography" className="py-24 px-6 md:px-12 bg-zinc-900/30 min-h-screen flex flex-col justify-center">
            <div className="max-w-7xl mx-auto w-full">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12 text-center"
                >
                    <h2 className="text-4xl md:text-5xl font-serif text-white mb-4">
                        <span className="text-velvet">#</span> DISCOGRAPHY
                    </h2>
                    <div className="w-[1px] h-12 bg-gold mx-auto" />
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Main Video Player */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="lg:col-span-2 space-y-4"
                    >
                        <div className="flex items-center justify-between">
                            <h3 className="text-xl font-mono text-gold flex items-center gap-2">
                                <Play size={18} /> NOW_PLAYING
                            </h3>
                            <a
                                href="https://www.youtube.com/@velvet404-r3r"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-xs font-mono text-silver hover:text-gold flex items-center gap-1 transition-colors"
                            >
                                VISIT CHANNEL <ExternalLink size={12} />
                            </a>
                        </div>

                        <div className="aspect-video w-full bg-black border border-white/10 relative overflow-hidden shadow-2xl shadow-black/50">
                            <iframe
                                width="100%"
                                height="100%"
                                src={`https://www.youtube.com/embed/${activeVideo.id}`}
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="absolute inset-0"
                            />
                        </div>

                        <div>
                            <h4 className="text-2xl font-serif text-white">{activeVideo.title}</h4>
                            <p className="text-silver text-sm font-mono mt-1">Uploaded: {activeVideo.date}</p>
                        </div>
                    </motion.div>

                    {/* Video List */}
                    <div className="space-y-4 h-full">
                        <h3 className="text-sm font-mono text-silver/50 tracking-widest mb-4">SELECT TRACK</h3>
                        <div className="space-y-2 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
                            {VIDEOS.map((video, index) => (
                                <motion.button
                                    key={index}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    onClick={() => setActiveVideo(video)}
                                    className={`w-full text-left p-4 border transition-all group relative ${activeVideo.id === video.id
                                        ? "bg-white/10 border-gold/50"
                                        : "bg-transparent border-white/10 hover:bg-white/5 hover:border-white/30"
                                        }`}
                                >
                                    {activeVideo.id === video.id && (
                                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gold" />
                                    )}
                                    <div className="flex justify-between items-start">
                                        <span className={`font-serif text-sm md:text-base ${activeVideo.id === video.id ? "text-gold" : "text-white group-hover:text-silver"}`}>
                                            {video.title}
                                        </span>
                                        {video.isNew && (
                                            <span className="text-[10px] text-noir bg-gold px-1.5 py-0.5 font-bold ml-2">NEW</span>
                                        )}
                                    </div>
                                </motion.button>
                            ))}
                        </div>

                        <div className="mt-8">
                            <a
                                href="https://www.youtube.com/@velvet404-r3r/videos"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block p-4 border border-dashed border-silver/20 text-center hover:bg-white/5 hover:border-gold/30 transition-colors group"
                            >
                                <p className="font-mono text-xs text-silver/50 group-hover:text-gold transition-colors">
                                    &lt; MORE VIDEOS ARCHIVED &gt;
                                </p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
