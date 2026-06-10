"use client";

import Image from "next/image";
import { useState } from "react";
import { ImageLightbox } from "../ImageLightbox";
import type { LightboxImage } from "../ImageLightbox";
import type { CaseStudyImage } from "../../lib/projects";

type CaseStudyMediaProps = {
  image: CaseStudyImage;
  priority?: boolean;
};

export function CaseStudyMedia({ image, priority }: CaseStudyMediaProps) {
  const [lightboxImage, setLightboxImage] = useState<LightboxImage | null>(null);

  return (
    <>
      <figure className="group flex flex-col gap-3">
        <div className="relative aspect-[16/10] overflow-hidden rounded-lg border border-portfolio-green/30 bg-portfolio-panel">
          {image.src ? (
            <button
              type="button"
              aria-label={`Open ${image.alt} preview`}
              onClick={() =>
                setLightboxImage({
                  ...image,
                  title: image.caption ?? image.alt,
                })
              }
              className="relative block h-full w-full text-left"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                priority={priority}
                className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
              />
            </button>
          ) : (
            <div className="flex h-full items-center justify-center">
              <span className="font-mono text-xs tracking-wide text-portfolio-particle">
                {image.alt}
              </span>
            </div>
          )}
        </div>
        {image.caption ? (
          <figcaption className="font-mono text-xs leading-relaxed text-portfolio-mist/60 sm:text-sm">
            {image.caption}
          </figcaption>
        ) : null}
      </figure>

      <ImageLightbox
        image={lightboxImage}
        onClose={() => setLightboxImage(null)}
      />
    </>
  );
}

type CaseStudyMediaGridProps = {
  images: CaseStudyImage[];
};

export function CaseStudyMediaGrid({ images }: CaseStudyMediaGridProps) {
  if (images.length === 0) {
    return null;
  }

  if (images.length === 1) {
    return <CaseStudyMedia image={images[0]} />;
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 sm:gap-8">
      {images.map((image, index) => (
        <CaseStudyMedia key={`${image.alt}-${index}`} image={image} />
      ))}
    </div>
  );
}
