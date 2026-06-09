import type { Project } from "../../lib/projects";
import { CaseStudyHero } from "./CaseStudyHero";
import { CaseStudyMeta } from "./CaseStudyMeta";
import { CaseStudyNav } from "./CaseStudyNav";
import { CaseStudySection } from "./CaseStudySection";

type CaseStudyViewProps = {
  project: Project;
  previous?: Project;
  next?: Project;
};

export function CaseStudyView({ project, previous, next }: CaseStudyViewProps) {
  return (
    <article className="mx-auto w-full max-w-[940px] px-5 py-16 sm:py-20 md:py-24">
      <CaseStudyHero project={project} />

      <div className="mt-10 flex flex-col gap-12 sm:mt-12 sm:gap-16 md:mt-16 md:gap-20">
        <section aria-labelledby="overview-heading" className="flex flex-col gap-4">
          <h2
            id="overview-heading"
            className="font-monofonto text-2xl tracking-portfolio text-portfolio-green sm:text-3xl"
          >
            Overview
          </h2>
          <p className="max-w-3xl font-mono text-sm leading-relaxed text-portfolio-mist/80 sm:text-base">
            {project.caseStudy.overview}
          </p>
        </section>

        <CaseStudyMeta project={project} />

        {project.caseStudy.sections.map((section) => (
          <CaseStudySection key={section.id} section={section} />
        ))}

        <CaseStudyNav previous={previous} next={next} />
      </div>
    </article>
  );
}
