import { HeroSection } from "../components/HeroSection";
import { SelectedWorksSection } from "../components/SelectedWorksSection";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <SelectedWorksSection />
      </main>
      <SiteFooter />
    </>
  );
}
