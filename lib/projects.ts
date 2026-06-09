export type CaseStudyImage = {
  src?: string;
  alt: string;
  caption?: string;
};

export type CaseStudySection = {
  id: string;
  title: string;
  paragraphs: string[];
  images?: CaseStudyImage[];
};

export type Project = {
  slug: string;
  title: string;
  category: string;
  year: string;
  description: string;
  featured?: boolean;
  coverImage?: CaseStudyImage;
  caseStudy: {
    subtitle: string;
    overview: string;
    role: string;
    timeline: string;
    deliverables: string[];
    sections: CaseStudySection[];
  };
};

export const projects: Project[] = [
  {
    slug: "project-one",
    title: "Project One",
    category: "Brand Identity",
    year: "2025",
    description: "Short description of the project. Replace with your own copy.",
    featured: true,
    coverImage: { alt: "Project One cover" },
    caseStudy: {
      subtitle: "Repositioning a legacy brand for a digital-first audience.",
      overview:
        "A end-to-end identity refresh spanning strategy, visual language, and launch assets. Replace this overview with your project summary.",
      role: "Lead Designer",
      timeline: "12 weeks",
      deliverables: ["Brand strategy", "Visual identity", "Design system", "Launch kit"],
      sections: [
        {
          id: "challenge",
          title: "The challenge",
          paragraphs: [
            "The client needed a cohesive identity that felt contemporary without losing brand equity built over decades.",
            "Stakeholders across marketing, product, and leadership each had different expectations for what the refresh should achieve.",
          ],
        },
        {
          id: "process",
          title: "Process",
          paragraphs: [
            "Research began with stakeholder interviews and a competitive audit. Insights were synthesized into three strategic territories before moving into visual exploration.",
          ],
          images: [
            { alt: "Research synthesis board" },
            { alt: "Early concept explorations" },
          ],
        },
        {
          id: "solution",
          title: "Solution",
          paragraphs: [
            "The final system balances a refined mark, flexible typography, and a restrained color palette that scales from social to product UI.",
          ],
          images: [{ alt: "Final identity system overview" }],
        },
        {
          id: "outcome",
          title: "Outcome",
          paragraphs: [
            "The new identity rolled out across web, print, and campaign touchpoints. Early feedback highlighted improved clarity and stronger recognition among target users.",
          ],
        },
      ],
    },
  },
  {
    slug: "project-two",
    title: "Project Two",
    category: "Digital Product",
    year: "2024",
    description: "Short description of the project. Replace with your own copy.",
    coverImage: { alt: "Project Two cover" },
    caseStudy: {
      subtitle: "Redesigning a mobile onboarding flow to improve activation.",
      overview:
        "A UX-led product redesign focused on reducing drop-off during first-time setup. Replace with your own project context.",
      role: "Product Designer",
      timeline: "8 weeks",
      deliverables: ["User flows", "Wireframes", "Hi-fi UI", "Prototype"],
      sections: [
        {
          id: "problem",
          title: "Problem",
          paragraphs: [
            "Analytics showed that nearly half of new users abandoned onboarding before completing their first key action.",
          ],
        },
        {
          id: "research",
          title: "Research",
          paragraphs: [
            "Session replays, support tickets, and five user interviews revealed confusion around account linking and permission prompts.",
          ],
          images: [{ alt: "Journey map highlighting friction points" }],
        },
        {
          id: "design",
          title: "Design",
          paragraphs: [
            "The redesigned flow introduces progressive disclosure, clearer microcopy, and a persistent progress indicator.",
          ],
          images: [
            { alt: "Before and after onboarding screens" },
            { alt: "Mobile UI detail" },
          ],
        },
      ],
    },
  },
  {
    slug: "project-three",
    title: "Project Three",
    category: "Campaign",
    year: "2024",
    description: "Short description of the project. Replace with your own copy.",
    coverImage: { alt: "Project Three cover" },
    caseStudy: {
      subtitle: "A multi-channel campaign for a product launch.",
      overview:
        "Campaign concepting and art direction across digital, OOH, and retail environments. Replace with your own summary.",
      role: "Art Director",
      timeline: "6 weeks",
      deliverables: ["Campaign concept", "Key visuals", "Motion snippets", "Retail toolkit"],
      sections: [
        {
          id: "concept",
          title: "Concept",
          paragraphs: [
            "The campaign idea centers on everyday moments made sharper — tying product benefits to relatable visual metaphors.",
          ],
          images: [{ alt: "Campaign moodboard" }],
        },
        {
          id: "execution",
          title: "Execution",
          paragraphs: [
            "Hero visuals were adapted into a modular system for paid social, landing pages, and in-store displays.",
          ],
          images: [
            { alt: "Social ad variations" },
            { alt: "OOH mockup" },
          ],
        },
      ],
    },
  },
];

export function getAllProjects(): Project[] {
  return projects;
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getAdjacentProjects(slug: string): {
  previous?: Project;
  next?: Project;
} {
  const index = projects.findIndex((project) => project.slug === slug);

  if (index === -1) {
    return {};
  }

  return {
    previous: index > 0 ? projects[index - 1] : undefined,
    next: index < projects.length - 1 ? projects[index + 1] : undefined,
  };
}

export function getProjectHref(slug: string): string {
  return `/projects/${slug}`;
}
