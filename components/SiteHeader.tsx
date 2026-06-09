import Image from "next/image";
import Link from "next/link";

const navItems = [
  { label: "Projects", href: "#view-projects" },
  { label: "About", href: "#view-about" },
  { label: "Resume", href: "/documents/Resume.pdf" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-portfolio-green bg-portfolio-charcoal font-monofonto tracking-portfolio">
      <div className="flex min-h-16 w-full items-center justify-between px-5">
        <div className="flex items-center gap-4">
          <Link href="#home-hero" aria-label="Back to hero">
            <Image src="/images/JYY-Logo.png" alt="JYY logo" width={31} height={31} />
          </Link>
          <a
            href="https://www.linkedin.com/in/joel-yee-358596142/"
            target="_blank"
            rel="noreferrer"
            aria-label="Joel Yee on LinkedIn"
            className="hidden sm:block"
          >
            <Image src="/images/LinkedinIcon.png" alt="" width={31} height={31} />
          </a>
        </div>

        <nav aria-label="Main navigation" className="flex items-center">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-3 py-5 text-sm leading-none text-portfolio-green transition-colors hover:bg-portfolio-green hover:text-portfolio-charcoal sm:px-5"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
