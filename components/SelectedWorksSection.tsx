import Image from "next/image";
import Link from "next/link";
import { getAllProjects, getProjectHref } from "../lib/projects";
import type { Project } from "../lib/projects";

function ProjectCard({ slug, title, category, year, description, coverImage }: Project) {
  const href = getProjectHref(slug);
  const imageSrc = coverImage?.src;
  const imageAlt = coverImage?.alt ?? title;

  return (
    <Link
      href={href}
      className="group flex h-full flex-col overflow-hidden rounded-lg border border-portfolio-green/40 bg-portfolio-charcoal transition-colors hover:border-portfolio-green"
    >
      <div className="relative aspect-[4/3] overflow-hidden border-b border-portfolio-green/20 bg-portfolio-panel">
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
          />
        ) : (
          <div className="flex h-full items-center justify-center">
            <span className="font-mono text-xs tracking-wide text-portfolio-particle">
              preview
            </span>
          </div>
        )}
      </div>

      <div className="flex flex-col gap-3 p-5 sm:p-6">
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-monofonto text-xl tracking-portfolio text-portfolio-green sm:text-2xl">
            {title}
          </h3>
          <span className="shrink-0 font-mono text-xs text-portfolio-particle sm:text-sm">
            {year}
          </span>
        </div>

        <p className="font-mono text-xs uppercase tracking-wide text-portfolio-mist/80 sm:text-sm">
          {category}
        </p>

        <p className="font-mono text-sm leading-relaxed text-portfolio-mist/70">
          {description}
        </p>
      </div>
    </Link>
  );
}

export function SelectedWorksSection() {
  const projects = getAllProjects();

  return (
    <section
      id="view-projects"
      aria-labelledby="selected-works-heading"
      className="border-t border-portfolio-green/30 bg-[radial-gradient(circle_closest-corner,#1a1a1a,#181818)] text-portfolio-green"
    >
      <div className="mx-auto w-full max-w-[940px] px-5 py-16 sm:py-20 md:py-24">
        <header className="mb-10 flex flex-col gap-3 sm:mb-12 md:mb-16">
          <h2
            id="selected-works-heading"
            className="font-monofonto text-3xl tracking-portfolio text-portfolio-green sm:text-4xl"
          >
            selected works
          </h2>
          <p className="max-w-xl font-mono text-sm leading-relaxed text-portfolio-mist/80 sm:text-base">
            A curated selection of recent design projects. Replace these placeholders
            with your own work.
          </p>
        </header>

        <ul className="grid list-none gap-6 sm:grid-cols-2 sm:gap-8">
          {projects.map((project) => (
            <li key={project.slug} className={project.featured ? "sm:col-span-2" : undefined}>
              <ProjectCard {...project} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
