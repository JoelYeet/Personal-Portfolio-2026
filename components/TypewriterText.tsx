"use client";

import { useEffect, useState } from "react";

type TypewriterTextProps = {
    text: string;
    speed?: number;
    delay?: number;
    className?: string;
    as?: "h1" | "p" | "span";
    showCursor?: boolean;
};

export function TypewriterText({
    text,
    speed = 55,
    delay = 0,
    className = "",
    as = "span",
    showCursor = true,
}: TypewriterTextProps) {
    const [displayedText, setDisplayedText] = useState("");

    useEffect(() => {
        const startTimer = setTimeout(() => {
            let index = 0;

            const interval = setInterval(() => {
                setDisplayedText(text.slice(0, index + 1));
                index++;

                if (index >= text.length) {
                    clearInterval(interval);
                }
            }, speed);

            return () => clearInterval(interval);
        }, delay);

        return () => clearTimeout(startTimer);
    }, [text, speed, delay]);

    const Component = as;

    return (
        <Component className={className}>
            {displayedText}
            {showCursor && <span className="animate-pulse">|</span>}
        </Component>
    );
}