import Image from "next/image";
import { ExternalLink } from "lucide-react";
import type { Project } from "@/lib/projects";

const statusColors = {
  live: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  beta: "bg-amber-500/10 text-amber-400 border-amber-500/20",
  development: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  demo: "bg-purple-500/10 text-purple-400 border-purple-500/20",
};

export default function ProjectCard({ project }: { project: Project }) {
  const isExternal = project.url.startsWith("http");

  return (
    <a
      href={project.url}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className="group block rounded-xl glass hover-lift overflow-hidden"
    >
      {/* Visual banner */}
      <div
        className={`relative h-40 bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden`}
      >
        {project.image ? (
          <Image
            src={project.image}
            alt={`${project.title} preview`}
            fill
            className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <>
            {/* Grid pattern */}
            <div
              className="absolute inset-0 opacity-[0.06]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
                backgroundSize: "32px 32px",
              }}
            />
            {/* Decorative circles */}
            <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-white/5" />
            <div className="absolute -bottom-6 -left-6 w-24 h-24 rounded-full bg-white/5" />
            {/* Icon */}
            <span className="text-5xl opacity-80 group-hover:scale-110 transition-transform duration-300">
              {project.icon}
            </span>
          </>
        )}
        {/* Status badge overlay */}
        <div className="absolute top-3 right-3">
          <span
            className={`text-xs px-2 py-0.5 rounded-full border backdrop-blur-sm ${statusColors[project.status]}`}
          >
            {project.status}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-lg font-semibold text-foreground group-hover:text-brand-purple-light transition-colors">
            {project.title}
          </h3>
          {isExternal && (
            <ExternalLink className="w-4 h-4 text-zinc-500 group-hover:text-brand-purple-light transition-colors shrink-0 mt-1" />
          )}
        </div>

        <p className="text-sm text-zinc-400 mb-4 line-clamp-2">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-0.5 rounded-md bg-surface-light/50 text-zinc-400"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
}
