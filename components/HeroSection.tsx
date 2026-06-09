import Image from "next/image";
import Link from "next/link";
import { LottieAnimation } from "./LottieAnimation";
import { ParticleBackground } from "./ParticleBackground";
import { TypewriterText } from "./TypewriterText";


const heroLinks = [
    { label: "about", href: "#view-about" },
    { label: "projects", href: "#view-projects" },
    { label: "resume", href: "/documents/Resume.pdf" },
];

export function HeroSection() {
    return (
        <section
            id="home-hero"
            className="relative flex min-h-[calc(100vh-4rem)] overflow-hidden bg-[radial-gradient(circle_closest-corner,#1a1a1a,#181818)] text-portfolio-green"
        >
            <ParticleBackground />

            <div className="relative z-10 flex w-full items-center justify-center px-5 py-10 sm:py-12">
                <div className="flex w-full max-w-[940px] flex-col items-center text-center">
                    {/* Logo */}
                    <div className="relative flex w-full max-w-[280px] items-center justify-center sm:max-w-[340px] md:max-w-[400px]">
                        <LottieAnimation className="w-full" />

                        {/*<Image*/}
                        {/*    src="/images/JYY-Logo.png"*/}
                        {/*    alt="JYY logo"*/}
                        {/*    width={303}*/}
                        {/*    height={303}*/}
                        {/*    priority*/}
                        {/*    className="pointer-events-none absolute w-[62%] max-w-[220px] opacity-95"*/}
                        {/*/>*/}
                    </div>

                    {/* Name + tagline — grouped with tight internal spacing */}
                    <div className="mt-8 flex flex-col items-center gap-3 sm:mt-10 sm:gap-4">
                        <TypewriterText
                            as="h1"
                            text="joel yee"
                            speed={80}
                            showCursor={true}
                            className="font-monofonto text-4xl font-normal leading-none tracking-portfolio text-portfolio-green sm:text-5xl md:text-[2.75rem]"
                        />

                        <TypewriterText
                            as="p"
                            text="digital designer based in singapore."
                            speed={35}
                            delay={900}
                            showCursor={false}
                            className="font-mono text-base leading-relaxed text-portfolio-mist sm:text-lg md:text-xl"
                        />
                    </div>

                    {/* Navigation Buttons — widest gap separates CTAs from identity block */}
                    <nav
                        aria-label="Hero navigation"
                        className="mt-12 grid w-full max-w-[640px] grid-cols-1 gap-4 sm:mt-16 sm:grid-cols-3 sm:gap-5 md:mt-20"
                    >
                        {heroLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="rounded-lg border border-portfolio-green px-5 py-4 text-center font-mono text-sm tracking-wide text-portfolio-green transition-colors hover:bg-portfolio-green hover:text-portfolio-charcoal sm:py-5 sm:text-base"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>
                </div>
            </div>
        </section>
    );
}