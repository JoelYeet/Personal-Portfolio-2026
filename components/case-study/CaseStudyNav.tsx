import Link from "next/link";
import type { Project } from "../../lib/projects";
import { getProjectHref } from "../../lib/projects";

type CaseStudyNavProps = {
  previous?: Project;
  next?: Project;
};

export function CaseStudyNav({ previous, next }: CaseStudyNavProps) {
  return (
    <nav
      aria-label="Case study navigation"
      className="flex flex-col gap-4 border-t border-portfolio-green/30 pt-8 sm:flex-row sm:items-center sm:justify-between sm:pt-10"
    >
      <Link
        href="/#view-projects"
        className="font-mono text-sm text-portfolio-green transition-colors hover:text-portfolio-mist"
      >
        ← back to selected works
      </Link>

      <div className="flex flex-col gap-4 sm:flex-row sm:gap-8">
        {previous ? (
          <Link
            href={getProjectHref(previous.slug)}
            className="font-mono text-sm text-portfolio-mist/80 transition-colors hover:text-portfolio-green"
          >
            ← {previous.title}
          </Link>
        ) : null}

        {next ? (
          <Link
            href={getProjectHref(next.slug)}
            className="font-mono text-sm text-portfolio-mist/80 transition-colors hover:text-portfolio-green"
          >
            {next.title} →
          </Link>
        ) : null}
      </div>
    </nav>
  );
}
