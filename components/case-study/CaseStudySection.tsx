import type { CaseStudySection as CaseStudySectionType } from "../../lib/projects";
import { CaseStudyMediaGrid } from "./CaseStudyMedia";

type CaseStudySectionProps = {
  section: CaseStudySectionType;
};

export function CaseStudySection({ section }: CaseStudySectionProps) {
  return (
    <section aria-labelledby={section.id} className="flex flex-col gap-6 sm:gap-8">
      <h2
        id={section.id}
        className="font-monofonto text-2xl tracking-portfolio text-portfolio-green sm:text-3xl"
      >
        {section.title}
      </h2>

      <div className="flex max-w-3xl flex-col gap-4">
        {section.paragraphs.map((paragraph, index) => (
          <p
            key={`${section.id}-${index}`}
            className="font-mono text-sm leading-relaxed text-portfolio-mist/80 sm:text-base"
          >
            {paragraph}
          </p>
        ))}
      </div>

      {section.images ? <CaseStudyMediaGrid images={section.images} /> : null}
    </section>
  );
}
