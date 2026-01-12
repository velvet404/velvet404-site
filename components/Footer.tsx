import { Youtube, StickyNote } from "lucide-react";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-noir border-t border-white/10 py-12 px-6">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-center md:text-left">
                    <h2 className="text-xl font-serif text-white tracking-widest mb-2">
                        velvet<span className="text-velvet">404</span>
                    </h2>
                    <p className="text-silver/50 text-xs font-mono">
                        © 2026 velvet404. All rights reserved.
                    </p>
                </div>

                <div className="flex items-center gap-6">
                    <Link href="https://note.com/pure_ram712" className="text-silver hover:text-gold transition-colors" aria-label="Note">
                        <StickyNote size={20} />
                    </Link>
                    <Link href="https://music.youtube.com/channel/UCdsjbL072hROZWWm9WZTdFQ?si=V9rrSXTunfZwQCvm" className="text-silver hover:text-gold transition-colors" aria-label="YouTube Music">
                        <Youtube size={20} />
                    </Link>
                </div>
            </div>
        </footer>
    );
}
