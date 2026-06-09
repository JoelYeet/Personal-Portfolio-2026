import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseStudyView } from "../../../components/case-study/CaseStudyView";
import { SiteFooter } from "../../../components/SiteFooter";
import { SiteHeader } from "../../../components/SiteHeader";
import {
  getAdjacentProjects,
  getAllProjects,
  getProjectBySlug,
} from "../../../lib/projects";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllProjects().map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project not found",
    };
  }

  return {
    title: `${project.title} — Joel Yee`,
    description: project.caseStudy.subtitle,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const { previous, next } = getAdjacentProjects(slug);

  return (
    <>
      <SiteHeader />
      <main className="bg-[radial-gradient(circle_closest-corner,#1a1a1a,#181818)] text-portfolio-green">
        <CaseStudyView project={project} previous={previous} next={next} />
      </main>
      <SiteFooter />
    </>
  );
}
