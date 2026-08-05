import { legacyProjects } from "./legacyProjects";

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
        coverImage: { src: "/images/Project Research/(Re)search Cover.jpg", alt: "Project (Re)search" },
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
                        { src: "/images/Project Research/Old Research Branding.jpg", alt: "Existing Branding" },
                        { src: "/images/Project Research/Old Research UI.jpg", alt: "Existing UI" }
                    ],
                },
                {
                    id: "initial process",
                    title: "Initial process",
                    paragraphs: [
                        "I started by reviewing the existing MVP, including its logo, interface, and user flows. Since the project had already been developed as a hackathon concept, it was important to understand what was working well and where users were running into difficulties.",
                        "To gather insights, I conducted informal interviews and observations with existing users of the platform. Watching how they completed research tasks helped me identify pain points, confusing interactions, and areas where the experience could be improved. I also created simple journey maps to better understand the overall research workflow.",
                        "Alongside user research, I referenced mainstream AI platforms such as ChatGPT and Claude. I studied how these products handled conversations, source citations, and research workflows, and used these findings to inform the design direction of the platform."
                    ]
                },
                {
                    id: "revampedbranding",
                    title: "Revamped branding and DLS",
                    paragraphs: [
                        "Since the project already had some visibility within the organisation, I wanted to build upon the existing branding rather than start from scratch. This helped maintain familiarity for existing users while giving the product a more polished and professional identity. I worked closely with stakeholders through several rounds of reviews and feedback to refine the visual direction.",
                        "I also developed a design language system that brought consistency to the platform's visual style, components, and interactions. This provided a foundation for future development while ensuring a cohesive experience across the product. Throughout the design process, I conducted multiple rounds of user testing to gather feedback, validate design decisions, and identify areas for improvement before implementation.",
                    ],
                    images: [
                        { src: "/images/Project Research/Research Branding.jpg", alt: "Existing Branding" },
                        { src: "/images/Project Research/Research DLS.jpg", alt: "Existing UI" }
                    ],
                },
                {
                    id: "wireframinganditeration",
                    title: "Wireframing and iteration",
                    paragraphs: [
                        "I translated research findings and user observations into a series of wireframes and mockups, gradually moving from low-fidelity concepts to higher-fidelity designs. This iterative approach allowed me to explore different solutions while validating ideas with stakeholders throughout the process.",
                        "Because the product was being developed alongside the backend systems, I worked closely with engineers through regular sync sessions to ensure the design and technical implementation remained aligned. These discussions helped prevent disconnects between the intended user experience and the platform's underlying capabilities."
                    ],
                    images: [
                        { src: "/images/Project Research/Wireframing.jpg", alt: "Existing Branding" }
                    ],
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
                            videoId: "DpeXMuoOncs",
                            title: "Project walkthrough video",
                            caption: "A short walkthrough of the final prototype.",
                        },
                    ],
                },
            ],
        },
    },
    {
        slug: "summit-ai",
        title: "Summit AI",
        category: "Digital Product",
        year: "2025",
        description:
            "An AI-assisted event management platform developed during a hackathon and later expanded into a freelance project for MINDEF.",
        coverImage: {
            src: "/images/Summit AI/Summit AI Cover.jpg", alt: "Summit AI event management platform",
        },
        caseStudy: {
            subtitle:
                "Simplifying complex guest and seating arrangements through AI-assisted recommendations.",
            overview:
                "Summit AI is an event management platform designed to support the planning of high-profile events involving politicians and defence diplomats. Initially developed during a hackathon and later expanded as a freelance project for MINDEF, the platform helps organisers manage guest lists, attendance and protocol-sensitive seating arrangements. Its AI-assisted replacement workflow recommends suitable delegates when seating changes occur, while allowing organisers to review suggestions, understand related changes and retain manual control.",
            role: "Product and UI/UX Designer",
            timeline: "12 weeks",
            deliverables: [
                "AI-assisted seating workflows",
                "User flows",
                "Wireframes",
                "Hi-fi UI",
                "Interactive prototype",
                "Visual identity",
                "Design system",
            ],
            sections: [
                {
                    id: "background",
                    title: "Background",
                    paragraphs: [
                        "Summit AI began as a hackathon challenge focused on simplifying the complex process of seating delegates at the Shangri-La Dialogue. Each foreign dignitary has a specific level of precedence, along with seating rules and protocol requirements that organisers must follow. The process is made even more challenging by last-minute changes, such as cancellations, replacements and changes in attendance.",
                        "The challenge was provided by the organisers of the Shangri-La Dialogue as part of an internal, interdepartmental hackathon organised by MINDEF, with participation from DSTA.",
                        "Our team was assigned this problem statement and developed a minimum viable product over the course of one week. We used Streamlit to build the initial interface and demonstrate how the proposed solution could support event organisers.",
                    ],
                    images: [
                        {
                            src: "/images/Summit AI/SummitAISMVP.jpg", alt: "Initial Summit AI hackathon prototype built using Streamlit",
                        },
                        {
                            src: "/images/Summit AI/SummitAIStreamlit.jpg", alt: "Early delegate seating workflow developed during the hackathon",
                        },
                    ],
                },
                {
                    id: "role",
                    title: "My Role",
                    paragraphs: [
                        "After the hackathon, Summit AI was approved for further development, and I was engaged as a freelance designer for three months.",
                        "As the main designer, I was responsible for transforming the early MVP into a polished, launch-ready product built with React and Material UI. This involved refining the user experience, improving the interface and developing the original proof of concept into a more complete and practical system.",
                        "I also created a distinct visual identity for Summit AI and developed a centralised design system to maintain consistency across the product and my other MINDEF projects.",
                    ]
                },
                {
                    id: "research",
                    title: "Research",
                    paragraphs: [
                        "The research process began with understanding the protocol and seating rules used at the Shangri-La Dialogue. As the platform needed to handle large amounts of guest information, we explored ways to present complex details clearly without overwhelming organisers.",
                        "We studied table management tools, wedding planning platforms and event seating applications to understand how they handled guest lists, seating layouts and last-minute changes. We also reviewed data dashboards and scheduling tools to learn how filters, search functions and expandable sections could help users find important information quickly.",
                        "These findings guided us towards a system that offered clear visualisations, flexible table management and detailed drill-down options. Organisers could view the overall seating plan at a glance while still accessing the information and rules linked to each delegate when required.",
                    ],
                    images: [
                        {
                            src: "/images/Summit AI/User Journey Map.jpg", alt: "Information architecture and key user flow exploration",
                        }
                    ],
                },
                {
                    id: "design",
                    title: "Design and Iteration",
                    paragraphs: [
                        "By creating high fidelity wireframes to explore the structure of the platform and map out its key user flows. These early designs focused on organising complex information clearly, simplifying table management and helping organisers respond quickly to changes.",
                        "The wireframes were then developed into an interactive prototype, allowing stakeholders to experience the proposed workflows and provide more detailed feedback.",
                        "Weekly discussions with the cross-functional project team helped us align on project goals, manage priorities and continuously improve the design. Feedback gathered during these sessions shaped each iteration, resulting in a more practical, intuitive and user-friendly product.",
                    ],
                    images: [
                        {
                            src: "/images/Summit AI/Style Guide.jpg", alt: "Low-fidelity Summit AI wireframes and seating workflows",
                        },
                        {
                            src: "/images/Summit AI/Prototype.jpg", alt: "Final interactive Summit AI interface after stakeholder feedback",
                        },
                    ],
                },
            ],
        },
    },
    {
        slug: "spot-the-fake",
        title: "Spot The Fake",
        category: "Interactive Experience",
        year: "2026",
        description:
            "An interactive educational game designed to help older CPF members recognise common signs of scams.",
        coverImage: {
            src: "/images/Spot The Fake/Cover.jpg", alt: "Spot The Fake project cover placeholder",
        },
        caseStudy: {
            subtitle:
                "An interactive educational game designed to help older CPF members recognise common signs of scams.",
            overview:
                "Spot the Fake is an interactive educational game designed to help older CPF members recognise common signs of scams.",
            role: "Designer and Developer",
            timeline: "4 months",
            deliverables: ["Experience design", "Interaction design", "Educational design", "Gamification design"],
            sections: [
                {
                    id: "about-the-project",
                    title: "About the project",
                    paragraphs: [
                        "I developed the project independently during my internship with CPF Board, and later continued working on it as a contractor. The game was created as part of TryLab, a learning space located within the newly renovated Jurong Service Centre.",
                        "In the game, players compare real and fake examples, identify suspicious details, and learn what to look out for when receiving messages or information. The experience was designed to be simple, approachable and easy to understand, especially for seniors who may be less familiar with digital scams.",
                        "Spot the Fake was built in Unity and runs on a Samsung Galaxy S10+ tablet. It is currently available for members of the public to play at CPF Jurong Service Centre.",
                    ],
                    videos: [
                        {
                            videoId: "yRLWYgNj1Z0",
                            title: "Spot The Fake demo video",
                            caption: "Spot the Fake Demo - Samsung Galaxy S10+",
                        },
                    ],
                    images: [
                        { src: "/images/Spot The Fake/1.jpg", alt: "Spot The Fake image 1" },
                        { src: "/images/Spot The Fake/2.jpg", alt: "Spot The Fake image 2" },
                        { src: "/images/Spot The Fake/3.jpeg", alt: "Spot The Fake image 3" },
                        { src: "/images/Spot The Fake/4.jpg", alt: "Spot The Fake image 4" },
                    ],
                },
            ],
        },
    },
    {
        slug: "reel-it-in",
        title: "Reel It In",
        category: "Interactive Experience",
        year: "2026",
        description:
            "An educational game designed for older CPF members to build digital confidence and improve awareness of phishing scams.",
        coverImage: {
            src: "/images/Reel It In/Cover.jpg", alt: "Reel It In project cover placeholder",
        },
        caseStudy: {
            subtitle:
                "An educational game designed for older CPF members to build digital confidence and improve awareness of phishing scams.",
            overview:
                "Reel It In is an educational game that I designed and developed for CPF Board as part of the TryLab initiative. Created for older CPF members, the game aims to build digital confidence and improve awareness of phishing scams in a simple and approachable way.",
            role: "Designer and Developer",
            timeline: "4 months",
            deliverables: ["Experience design", "Interaction design", "Visual design", "Gamified Experiences"],
            sections: [
                {
                    id: "about-the-project",
                    title: "About the project",
                    paragraphs: [
                        "I was responsible for the entire development process, including the game concept, visual direction, user experience, gameplay mechanics, educational content and development.",
                        "Players reel in different fish, with each catch presenting a statement that they must identify as true or false. At the end of the game, players encounter a golden fish that introduces a scenario-based question involving an attempted phishing scam.",
                        "Reel It In was built in Unity and runs on a Samsung Galaxy S10+ tablet. It is currently available for members of the public to play at CPF Jurong Service Centre.",
                    ],
                    videos: [
                        {
                            videoId: "rca6qAiQl94",
                            title: "Reel It In demo video",
                            caption: "Reel It In Demo - Samsung Galaxy S10+",
                        },
                    ],
                    images: [
                        { src: "/images/Reel It In/1.jpg", alt: "Reel It In image 1" },
                        { src: "/images/Reel It In/2.jpg", alt: "Reel It In image 2" },
                        { src: "/images/Reel It In/3.jpg", alt: "Reel It In image 3" },
                        { src: "/images/Reel It In/4.jpg", alt: "Reel It In image 4" },
                        { src: "/images/Reel It In/5.jpeg", alt: "Reel It In image 5" },
                    ],
                },
            ],
        },
    },
    ...legacyProjects,
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
