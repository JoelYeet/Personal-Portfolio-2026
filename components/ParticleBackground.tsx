"use client";

import { useEffect, useId } from "react";
import { particlesConfig } from "../lib/particlesConfig";

declare global {
  interface Window {
    particlesJS?: (elementId: string, config: typeof particlesConfig) => void;
    pJSDom?: Array<{ pJS: { fn: { vendors: { destroypJS: () => void } } } }>;
  }
}

export function ParticleBackground() {
  const reactId = useId();
  const elementId = `particles-${reactId.replace(/:/g, "")}`;

  useEffect(() => {
    let isMounted = true;

    import("particles.js").then(() => {
      if (!isMounted || !window.particlesJS) {
        return;
      }

      window.particlesJS(elementId, particlesConfig);
    });

    return () => {
      isMounted = false;
      window.pJSDom?.forEach((instance) => {
        instance.pJS.fn.vendors.destroypJS();
      });
      window.pJSDom = [];
    };
  }, [elementId]);

  return (
    <div
      id={elementId}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
    />
  );
}
