"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import ProjectCard from "@/components/ui/ProjectCard";
import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { getFeaturedProjects } from "@/lib/projects";
import { ArrowRight } from "lucide-react";

export default function ProjectsPreview() {
  const featured = getFeaturedProjects();

  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            label="Projects"
            title="What We're Building"
            description="Explore our suite of blockchain applications and tools built on the XPR Network."
          />
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((project, i) => (
            <ScrollReveal key={project.slug} delay={i * 100}>
              <ProjectCard project={project} />
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="mt-12 text-center">
            <Button href="/projects" variant="secondary">
              View All Projects
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
