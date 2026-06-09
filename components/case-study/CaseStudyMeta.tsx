import type { Project } from "../../lib/projects";

type CaseStudyMetaProps = {
  project: Project;
};

const metaItems = [
  { label: "Role", key: "role" as const },
  { label: "Timeline", key: "timeline" as const },
];

export function CaseStudyMeta({ project }: CaseStudyMetaProps) {
  const { caseStudy } = project;

  return (
    <aside className="grid gap-8 border-y border-portfolio-green/30 py-8 sm:grid-cols-3 sm:gap-6 sm:py-10">
      {metaItems.map(({ label, key }) => (
        <div key={key} className="flex flex-col gap-2">
          <p className="font-mono text-xs uppercase tracking-wide text-portfolio-particle">
            {label}
          </p>
          <p className="font-mono text-sm text-portfolio-mist sm:text-base">
            {caseStudy[key]}
          </p>
        </div>
      ))}

      <div className="flex flex-col gap-2 sm:col-span-1">
        <p className="font-mono text-xs uppercase tracking-wide text-portfolio-particle">
          Deliverables
        </p>
        <ul className="flex flex-col gap-1">
          {caseStudy.deliverables.map((item) => (
            <li
              key={item}
              className="font-mono text-sm text-portfolio-mist sm:text-base"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
