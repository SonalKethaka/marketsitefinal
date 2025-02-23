"use client";
import React, { useEffect, useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/app/lib/util";

export const FlipWords = ({ words, duration = 3000, className }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Function to cycle through words infinitely
    const startAnimation = useCallback(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, [words.length]);

    useEffect(() => {
        const timeout = setTimeout(startAnimation, duration);
        return () => clearTimeout(timeout);
    }, [currentIndex, duration, startAnimation]); // Removed `isAnimating`

    return (
        <div className="relative inline-block overflow-hidden">
            <AnimatePresence mode="wait">
                <motion.div
                    key={words[currentIndex]} // Ensures re-render on word change
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{
                        opacity: 0,
                        y: -10,
                        scale: 1,
                        filter: "blur(4px)",
                    }}
                    transition={{ type: "spring", stiffness: 100, damping: 10 }}
                    className={cn(
                        "inline-block text-neutral-900 dark:text-heroColor",
                        className
                    )}
                >
                    {words[currentIndex].split(" ").map((word, wordIndex) => (
                        <motion.span
                            key={word + wordIndex}
                            initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
                            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                            transition={{ delay: wordIndex * 0.2, duration: 0.3 }}
                            className="inline-block whitespace-nowrap"
                        >
                            {word.split("").map((letter, letterIndex) => (
                                <motion.span
                                    key={letter + letterIndex}
                                    initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
                                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                                    transition={{
                                        delay: wordIndex * 0.2 + letterIndex * 0.05,
                                        duration: 0.2,
                                    }}
                                    className="inline-block"
                                >
                                    {letter}
                                </motion.span>
                            ))}
                            <span className="inline-block">&nbsp;</span>
                        </motion.span>
                    ))}
                </motion.div>
            </AnimatePresence>
        </div>
    );
};