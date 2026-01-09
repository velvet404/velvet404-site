"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";

interface TypewriterProps {
    text: string | string[];
    speed?: number;
    className?: string;
    cursorColor?: string;
    waitTime?: number;
}

export default function Typewriter({
    text,
    speed = 0.05,
    className = "",
    cursorColor = "#d4af37", // Gold
    waitTime = 2000,
}: TypewriterProps) {
    const textIndex = useMotionValue(0);
    const baseText = useMotionValue("");
    const count = useMotionValue(0);
    const rounded = useTransform(count, (latest) => Math.round(latest));
    const displayText = useTransform(rounded, (latest) =>
        baseText.get().slice(0, latest)
    );

    useEffect(() => {
        const texts = Array.isArray(text) ? text : [text];

        const controls = animate(count, 0, {
            type: "tween",
            duration: 0,
            ease: "linear",
            repeat: Infinity,
            repeatType: "loop",
            onUpdate: (latest) => {
                // This is a bit of a hack to handle the sequencing loop manually
                // for better control over wait times and text switching
            }
        });

        // Stop the manual empty animation
        controls.stop();

        let isCancelled = false;

        const runAnimation = async () => {
            let i = 0;
            while (!isCancelled) {
                const currentText = texts[i % texts.length];
                baseText.set(currentText);
                count.set(0);

                // Typing
                await animate(count, currentText.length, {
                    type: "tween",
                    duration: currentText.length * speed,
                    ease: "linear",
                });

                // Waiting
                await new Promise((resolve) => setTimeout(resolve, waitTime));

                // Deleting (optional - if multiple texts)
                if (texts.length > 1) {
                    await animate(count, 0, {
                        type: "tween",
                        duration: currentText.length * (speed / 2),
                        ease: "easeOut",
                    });
                } else {
                    // Just blink cursor or pause if single text
                    // For single text we usually just stay there, but let's restart for loop effect if desired?
                    // Actually for single text, usually we just want it to type once.
                    // But the loop here implies infinite.
                    // Let's just break if single text to avoid re-typing annoyance unless requested.
                    break;
                }

                i++;
            }
        };

        runAnimation();
        return () => { isCancelled = true; };
    }, [text, speed, waitTime, baseText, count]);

    return (
        <span className={className}>
            <motion.span>{displayText}</motion.span>
            <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                style={{ color: cursorColor }}
                className="inline-block ml-1"
            >
                |
            </motion.span>
        </span>
    );
}
