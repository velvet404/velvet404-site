"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const NAV_ITEMS = [
    { name: "TOP", href: "#hero" },
    { name: "ABOUT", href: "#about" },
    { name: "DISCOGRAPHY", href: "#discography" },
    { name: "全楽曲はこちら", href: "https://open.spotify.com/intl-ja/artist/0MrO11pDY3MNeVpQy1Nm3h?si=fcIQkN8vRhKRbUuFy06G2A" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-noir/90 backdrop-blur-md border-b border-velvet/20" : "bg-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="text-xl font-serif tracking-[0.2em] hover:text-velvet transition-colors">
                    velvet<span className="text-velvet">404</span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex space-x-8">
                    {NAV_ITEMS.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="text-sm font-mono text-silver hover:text-gold tracking-widest transition-colors relative group"
                        >
                            <span className="relative z-10">{item.name}</span>
                            <span className="absolute bottom-[-4px] left-0 w-0 h-[1px] bg-velvet group-hover:w-full transition-all duration-300" />
                        </Link>
                    ))}
                </nav>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden text-silver hover:text-gold transition-colors"
                    aria-label="Toggle Menu"
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Nav Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "100vh" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden absolute top-20 left-0 right-0 bg-noir border-t border-velvet/20 overflow-hidden"
                    >
                        <div className="flex flex-col items-center justify-center h-full space-y-8 pb-20">
                            {NAV_ITEMS.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-2xl font-serif text-silver hover:text-gold tracking-widest transition-colors"
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
