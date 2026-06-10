"use client";

import Image from "next/image";
import { useEffect } from "react";
import type { CaseStudyImage } from "../lib/projects";

export type LightboxImage = CaseStudyImage & {
  title: string;
};

type ImageLightboxProps = {
  image: LightboxImage | null;
  onClose: () => void;
};

export function ImageLightbox({ image, onClose }: ImageLightboxProps) {
  useEffect(() => {
    if (!image) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [image, onClose]);

  if (!image?.src) {
    return null;
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${image.title} image preview`}
      className="fixed inset-0 z-[10000] flex items-center justify-center bg-portfolio-black/95 px-5 py-8 text-portfolio-green"
    >
      <button
        type="button"
        aria-label="Close image preview"
        onClick={onClose}
        className="absolute inset-0 h-full w-full"
      />

      <figure className="relative z-10 flex max-h-full w-full max-w-5xl flex-col gap-4">
        <div className="relative h-[70vh] overflow-hidden border border-portfolio-green/40 bg-portfolio-panel shadow-[0_0_32px_rgba(118,255,139,0.12)] rounded-lg">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="100vw"
            className="object-contain"
          />
        </div>

        <figcaption className="flex flex-col gap-1 font-mono sm:flex-row sm:items-start sm:justify-between sm:gap-6">
          <span className="text-sm text-portfolio-mist">{image.title}</span>
          <span className="text-xs leading-relaxed text-portfolio-mist/60 sm:text-right">
            {image.caption == image.alt}
          </span>
        </figcaption>
      </figure>

      <button
        type="button"
        aria-label="Close image preview"
        onClick={onClose}
        className="absolute right-5 top-5 z-20 border border-portfolio-green px-3 py-2 font-mono text-sm uppercase tracking-wide text-portfolio-green transition-colors hover:bg-portfolio-green hover:text-portfolio-charcoal"
      >
        x
      </button>
    </div>
  );
}
