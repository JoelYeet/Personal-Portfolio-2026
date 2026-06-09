const educationItems = [
  {
    qualification: "Bachelor of Design",
    institution: "Design University",
    period: "2020 - 2024",
  },
  {
    qualification: "Diploma in Visual Communication",
    institution: "Creative Polytechnic",
    period: "2017 - 2020",
  },
];

const experienceItems = [
  {
    role: "UX Designer",
    company: "Studio Placeholder",
    period: "2025 - Present",
  },
  {
    role: "Digital Design Intern",
    company: "Product Company",
    period: "2024 - 2025",
  },
  {
    role: "Freelance Designer",
    company: "Independent",
    period: "2022 - 2024",
  },
];

export function AboutSection() {
  return (
    <section
      id="view-about"
      aria-labelledby="about-heading"
      className="border-t border-portfolio-green/30 bg-[radial-gradient(circle_closest-corner,#1a1a1a,#181818)] text-portfolio-green"
    >
      <div className="mx-auto w-full max-w-[940px] px-5 py-16 sm:py-20 md:py-24">
        <header className="mb-10 flex flex-col gap-3 sm:mb-12 md:mb-16">
          <h2
            id="about-heading"
            className="font-monofonto text-3xl tracking-portfolio text-portfolio-green sm:text-4xl"
          >
            about
          </h2>
          <p className="max-w-xl font-mono text-sm leading-relaxed text-portfolio-mist/80 sm:text-base">
            A short profile for your background, design practice, and the kind of
            work you want to be known for.
          </p>
        </header>

        <div className="grid gap-10 md:grid-cols-[1.1fr_1fr] md:gap-12">
          <section aria-labelledby="bio-heading" className="flex flex-col gap-4">
            <h3
              id="bio-heading"
              className="font-monofonto text-2xl tracking-portfolio text-portfolio-green"
            >
              bio
            </h3>
            <div className="flex flex-col gap-4">
              <p className="font-mono text-sm leading-relaxed text-portfolio-mist/80 sm:text-base">
                Placeholder bio copy. Introduce yourself, your UX approach, and
                the design problems you enjoy working on.
              </p>
              <p className="font-mono text-sm leading-relaxed text-portfolio-mist/80 sm:text-base">
                Add a little personality here too: your point of view, your
                creative process, and what makes your portfolio feel like yours.
              </p>
            </div>
          </section>

          <div className="flex flex-col gap-10">
            <section aria-labelledby="education-heading" className="flex flex-col gap-5">
              <h3
                id="education-heading"
                className="font-monofonto text-2xl tracking-portfolio text-portfolio-green"
              >
                education
              </h3>
              <ul className="flex list-none flex-col gap-4">
                {educationItems.map((item) => (
                  <li
                    key={`${item.qualification}-${item.period}`}
                    className="border-l border-portfolio-green/40 pl-4"
                  >
                    <p className="font-mono text-xs uppercase tracking-wide text-portfolio-particle">
                      {item.period}
                    </p>
                    <p className="mt-2 font-mono text-sm text-portfolio-mist sm:text-base">
                      {item.qualification}
                    </p>
                    <p className="mt-1 font-mono text-sm text-portfolio-mist/70">
                      {item.institution}
                    </p>
                  </li>
                ))}
              </ul>
            </section>

            <section aria-labelledby="experience-heading" className="flex flex-col gap-5">
              <h3
                id="experience-heading"
                className="font-monofonto text-2xl tracking-portfolio text-portfolio-green"
              >
                experience
              </h3>
              <ul className="flex list-none flex-col gap-4">
                {experienceItems.map((item) => (
                  <li
                    key={`${item.role}-${item.period}`}
                    className="border-l border-portfolio-green/40 pl-4"
                  >
                    <p className="font-mono text-xs uppercase tracking-wide text-portfolio-particle">
                      {item.period}
                    </p>
                    <p className="mt-2 font-mono text-sm text-portfolio-mist sm:text-base">
                      {item.role}
                    </p>
                    <p className="mt-1 font-mono text-sm text-portfolio-mist/70">
                      {item.company}
                    </p>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}
