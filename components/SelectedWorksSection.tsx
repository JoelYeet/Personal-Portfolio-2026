import Image from "next/image";
import Link from "next/link";
import { getAllProjects, getProjectHref } from "../lib/projects";
import type { Project } from "../lib/projects";

const productProjectSlugs = [
  "project-research",
  "summit-ai",
  "spot-the-fake",
  "reel-it-in",
  "amazon-redesign",
  "spotify-social",
  //"one-studios",
];

const videoGameProjectSlugs = [
  "exodus-board-game",
  "line",
  "exodus-2",
  "exodus",
  "reveille",
  "pandakitori",
  "rpgame",
  "retail-assault",
  "d-day",
];

function ProjectCard({
  slug,
  title,
  category,
  year,
  description,
  coverImage,
}: Project) {
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

type ProjectSegmentProps = {
  title: string;
  projects: Project[];
};

function getSegmentHeadingId(title: string) {
  return `${title.toLowerCase().replace(/\s+/g, "-")}-heading`;
}

function ProjectSegment({ title, projects }: ProjectSegmentProps) {
  if (projects.length === 0) {
    return null;
  }

  const headingId = getSegmentHeadingId(title);

  return (
    <section aria-labelledby={headingId}>
      <header className="mb-6 flex flex-col gap-2 sm:mb-8">
        <h3
          id={headingId}
          className="font-monofonto text-2xl tracking-portfolio text-portfolio-green sm:text-3xl"
        >
          {title}
        </h3>
      </header>

      <ul className="grid list-none gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <li key={project.slug}>
            <ProjectCard {...project} />
          </li>
        ))}
      </ul>
    </section>
  );
}

export function SelectedWorksSection() {
  const projects = getAllProjects();
  const projectsBySlug = new Map(projects.map((project) => [project.slug, project]));
  const productProjects = productProjectSlugs
    .map((slug) => projectsBySlug.get(slug))
    .filter((project): project is Project => Boolean(project));
  const videoGameProjects = videoGameProjectSlugs
    .map((slug) => projectsBySlug.get(slug))
    .filter((project): project is Project => Boolean(project));

  return (
    <section
      id="view-projects"
      aria-labelledby="selected-works-heading"
      className="border-t border-portfolio-green/30 bg-[radial-gradient(circle_closest-corner,#1a1a1a,#181818)] text-portfolio-green"
    >
      <div className="mx-auto w-full max-w-[1180px] px-5 py-16 sm:py-20 md:py-24">
        <header className="mb-10 flex flex-col gap-3 sm:mb-12 md:mb-16">
          <h2
            id="selected-works-heading"
            className="font-monofonto text-4xl tracking-portfolio text-portfolio-green sm:text-4xl"
          >
            Selected works
          </h2>
        </header>

        <div className="flex flex-col gap-14 sm:gap-16 md:gap-20">
          <ProjectSegment
            title="Products and Experiences"
            projects={productProjects}
          />
          <ProjectSegment
            title="Video games"
            projects={videoGameProjects}
          />
        </div>
      </div>
    </section>
  );
}
