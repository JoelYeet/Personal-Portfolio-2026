"use client";

import { useEffect, useState } from "react";

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMouse = (e: MouseEvent) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", updateMouse);

    return () => {
      window.removeEventListener("mousemove", updateMouse);
    };
  }, []);

    return (
        <div
            className="pointer-events-none fixed left-0 top-0 z-[9999]"
            style={{
                transform: `translate(${position.x}px, ${position.y}px)`,
            }}
        >
            <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="#86efac"
            >
                <path d="M2 2L18 12L10 14L12 22L8 23L6 15L2 2Z" />
            </svg>
        </div>
    );
}