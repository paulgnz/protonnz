import type { Metadata } from "next";
import SectionHeading from "@/components/ui/SectionHeading";
import ProjectCard from "@/components/ui/ProjectCard";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore all XPR Network projects by ProtonNZ — AI agents, DEX, social networks, gaming, and developer tools.",
};

export default function ProjectsPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Projects"
          title="What We're Building"
          description="A suite of blockchain applications and tools built on the XPR Network, from AI agent registries to decentralized exchanges."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}
