import HeroSection from "@/components/sections/HeroSection";
import StatsSection from "@/components/sections/StatsSection";
import ProjectsPreview from "@/components/sections/ProjectsPreview";
import AboutPreview from "@/components/sections/AboutPreview";
import LatestPosts from "@/components/sections/LatestPosts";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <ProjectsPreview />
      <AboutPreview />
      <LatestPosts />
    </>
  );
}
