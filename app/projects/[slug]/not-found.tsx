import Link from "next/link";
import { SiteFooter } from "../../../components/SiteFooter";
import { SiteHeader } from "../../../components/SiteHeader";

export default function ProjectNotFound() {
  return (
    <>
      <SiteHeader />
      <main className="bg-[radial-gradient(circle_closest-corner,#1a1a1a,#181818)] text-portfolio-green">
        <div className="mx-auto flex min-h-[50vh] w-full max-w-[940px] flex-col items-center justify-center gap-6 px-5 py-16 text-center">
          <h1 className="font-monofonto text-3xl tracking-portfolio sm:text-4xl">
            project not found
          </h1>
          <p className="font-mono text-sm text-portfolio-mist/80 sm:text-base">
            This case study does not exist or may have been moved.
          </p>
          <Link
            href="/#view-projects"
            className="rounded-lg border border-portfolio-green px-5 py-4 font-mono text-sm text-portfolio-green transition-colors hover:bg-portfolio-green hover:text-portfolio-charcoal"
          >
            back to selected works
          </Link>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
