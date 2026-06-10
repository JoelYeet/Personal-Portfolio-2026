export type CaseStudyImage = {
  src?: string;
  alt: string;
  caption?: string;
};

export type CaseStudyYoutubeVideo = {
  videoId: string;
  title: string;
  caption?: string;
};

export type CaseStudySection = {
  id: string;
  title: string;
  paragraphs: string[];
  videos?: CaseStudyYoutubeVideo[];
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
    slug: "project-research",
    title: "(Re)search",
    category: "Brand Identity / UX",
    year: "2025",
    description: "An intern project for MINDEF where i helped designed an AI-powered research assistant to help analysts gather, organise, and synthesise information more efficiently while maintaining transparency and trust in AI-generated insights..",
    featured: false,
    coverImage: { src: "/images/(Re)search Cover.jpg", alt: "Project (Re)search" },
    caseStudy: {
        subtitle: "An intern project for MINDEF where i helped designed an AI-powered research assistant to help analysts gather, organise, and synthesise information more efficiently while maintaining transparency and trust in AI-generated insights.",
      overview:
        "As the primary designer on the project during my internship, I was responsible for driving the end-to-end user experience of the platform, working closely with developers and stakeholders.",
      role: "Primary Designer",
      timeline: "16 weeks",
      deliverables: ["Brand strategy", "Visual identity", "Design system", "Wireframing"],
      sections: [
        {
          id: "challenge",
          title: "The challenge",
          paragraphs: [
            "I joined the project after it had recently evolved from a hackathon concept into a funded initiative with the goal of becoming an AI-assisted research platform for MINDEF and SAF defence analysts. The platform aimed to help users conduct research more efficiently by generating reports supported by accurate citations and verifiable sources, while operating within a secure and confidential environment.",
            "As the project transitioned from proof-of-concept to product, one of the key challenges was the absence of a cohesive user experience. The existing MVP had minimal frontend development and lacked a clear visual identity, navigation structure, and interaction patterns. Users could access the platform's underlying capabilities, but the overall experience was fragmented and difficult to navigate.",
          ],
          images: [
            { src: "/images/Old Research Branding.jpg", alt: "Existing Branding" },
            { src: "/images/Old Research UI.jpg", alt: "Existing UI" }
            ],
        },
        {
          id: "initial process",
          title: "Initial process",
          paragraphs: [
            "I started by reviewing the existing MVP, including its logo, interface, and user flows. Since the project had already been developed as a hackathon concept, it was important to understand what was working well and where users were running into difficulties.",
            "To gather insights, I conducted informal interviews and observations with existing users of the platform. Watching how they completed research tasks helped me identify pain points, confusing interactions, and areas where the experience could be improved. I also created simple journey maps to better understand the overall research workflow.",
            "Alongside user research, I referenced mainstream AI platforms such as ChatGPT and Claude. I studied how these products handled conversations, source citations, and research workflows, and used these findings to inform the design direction of the platform."
          ],
          images: [
            { alt: "Research synthesis board" },
              { alt: "Early concept explorations" },
          ],
        },
        {
          id: "revampedbranding",
          title: "Revamped branding and DLS",
          paragraphs: [
            "Since the project already had some visibility within the organisation, I wanted to build upon the existing branding rather than start from scratch. This helped maintain familiarity for existing users while giving the product a more polished and professional identity. I worked closely with stakeholders through several rounds of reviews and feedback to refine the visual direction.",
            "I also developed a design language system that brought consistency to the platform's visual style, components, and interactions. This provided a foundation for future development while ensuring a cohesive experience across the product. Throughout the design process, I conducted multiple rounds of user testing to gather feedback, validate design decisions, and identify areas for improvement before implementation.",
          ],
          images: [{ alt: "Final identity system overview" },{ alt: "Final identity system overview" }],
        },
        {
          id: "wireframinganditeration",
          title: "Wireframing and iteration",
          paragraphs: [
            "I translated research findings and user observations into a series of wireframes and mockups, gradually moving from low-fidelity concepts to higher-fidelity designs. This iterative approach allowed me to explore different solutions while validating ideas with stakeholders throughout the process.",
            "Because the product was being developed alongside the backend systems, I worked closely with engineers through regular sync sessions to ensure the design and technical implementation remained aligned. These discussions helped prevent disconnects between the intended user experience and the platform's underlying capabilities."
          ],
          images: [{ alt: "Final identity system overview" }],
        },
        {
          id: "outcome",
          title: "Outcome",
          paragraphs: [
            "The platform was launched shortly before the end of my internship, which made it especially rewarding to see the project come together after months of design.",
            "As one of my final tasks before completing my internship, my supervisor also entrusted me with creating a promotional video for the platform. It was a fun way to wrap up the project and gave me the opportunity to communicate the product's value and vision :)",
          ],
          videos: [
            {
              videoId: "O0jc2h0vwKA",
              title: "Project walkthrough video",
              caption: "A short walkthrough of the final prototype.",
            },
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
