import Link from "next/link";
import type { Project } from "../../lib/projects";
import { CaseStudyMedia } from "./CaseStudyMedia";

type CaseStudyHeroProps = {
    project: Project;
};

export function CaseStudyHero({ project }: CaseStudyHeroProps) {
    const coverImage = project.coverImage ?? { alt: `${project.title} cover` };

    return (
        <header className="flex flex-col gap-8 sm:gap-10 md:gap-12">
            <div className="flex flex-col gap-4">
                <Link
                    href="/#view-projects"
                    className="font-mono text-sm text-portfolio-green transition-colors hover:text-portfolio-mist"
                >
                    ← back to selected works
                </Link>
                <p className="font-mono text-xs uppercase tracking-wide text-portfolio-mist/80 sm:text-sm">
                    {project.category} · {project.year}
                </p>

                <h1 className="font-monofonto text-4xl tracking-portfolio text-portfolio-green sm:text-5xl md:text-[2.75rem]">
                    {project.title}
                </h1>

                <p className="max-w-2xl font-mono text-base leading-relaxed text-portfolio-mist sm:text-lg">
                    {project.caseStudy.subtitle}
                </p>
            </div>

            <CaseStudyMedia image={coverImage} priority />
        </header>
    );
}
