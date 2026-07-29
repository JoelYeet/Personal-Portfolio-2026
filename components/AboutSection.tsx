const educationItems = [
  {
    qualification: "Bachelor of Arts (Honours with Distinction) - User Experience and Game Design",
    institution: "DigiPen Institute of Technology Singapore",
    period: "Apr 2022 - Apr 2026",
  },
  {
    qualification: "Diploma - Business Information Technology",
    institution: "Singapore Polytechnic",
    period: "Apr 2017 - Apr 2020",
  },
];

const experienceItems = [
  {
    role: "Interactive Designer",
    company: "Central Provident Fund Board",
    period: "May 2026 - Present",
  },
  {
    role: "Service Design Intern",
    company: "Central Provident Fund Board",
    period: "September 2025 - April 2026",
  },
  {
    role: "UX and Data Science Intern",
    company: "Ministry of Defence",
    period: "June 2025 - September 2025",
  },
  {
    role: "Business Transformation and Design Intern",
    company: "OCBC",
    period: "Mar 2019 - Aug 2019",
  },
  {
    role: "Branding Intern",
    company: "Systematic Controls Pte Ltd",
    period: "Sept 2018 - Feb 2019",
  },
];

export function AboutSection() {
  return (
    <section
      id="view-about"
      aria-labelledby="about-heading"
      className="border-t border-portfolio-green/30 bg-[radial-gradient(circle_closest-corner,#1a1a1a,#181818)] text-portfolio-green"
    >
      <div className="mx-auto w-full max-w-[1180px] px-5 py-16 sm:py-20 md:py-24">
        <header className="mb-10 flex flex-col gap-3 sm:mb-12 md:mb-16">
          <h2
            id="about-heading"
            className="font-monofonto text-3xl tracking-portfolio text-portfolio-green sm:text-4xl"
          >
            About
          </h2>
          <p className="w-full font-mono text-sm leading-relaxed text-portfolio-mist/80 sm:text-base">
            Designing for Purpose, Play and Accessibility. 2026 Fresh Graduate.
          </p>
        </header>

        <div className="flex w-full flex-col gap-12 sm:gap-14 md:gap-16">
          <section aria-labelledby="bio-heading" className="flex flex-col gap-4">
            <h3
              id="bio-heading"
              className="font-monofonto text-2xl tracking-portfolio text-portfolio-green"
            >
              Bio
            </h3>
            <div className="flex flex-col gap-4">
              <p className="font-mono text-sm leading-relaxed text-portfolio-mist/80 sm:text-base">
                Hello, I'm Joel! a multidisciplinary designer specialising in
                interactive, gamified experiences and digital product design.
              </p>
              <p className="font-mono text-sm leading-relaxed text-portfolio-mist/80 sm:text-base">
                Professionally, I enjoy creating thoughtful and accessible products
                that balance user needs with clear, effective solutions. With
                experience across UX, UI and game design, I bring together
                creativity, research and technology to design experiences that are
                both engaging and purposeful.
              </p>
              <p className="font-mono text-sm leading-relaxed text-portfolio-mist/80 sm:text-base">
                Outside of work, I am an avid fan of games, particularly
                single-player experiences. I am fascinated by how video game
                environments, storytelling and role-playing mechanics can connect
                with players on a psychological and emotional level.
              </p>
            </div>
          </section>

          <div className="grid gap-12 md:grid-cols-2 md:gap-10 lg:gap-14">
            <section aria-labelledby="experience-heading" className="flex flex-col gap-5">
              <h3
                id="experience-heading"
                className="font-monofonto text-2xl tracking-portfolio text-portfolio-green"
              >
                Experience
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

            <section aria-labelledby="education-heading" className="flex flex-col gap-5">
              <h3
                id="education-heading"
                className="font-monofonto text-2xl tracking-portfolio text-portfolio-green"
              >
                Education
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
          </div>
        </div>
      </div>
    </section>
  );
}
