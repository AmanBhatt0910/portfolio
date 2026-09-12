"use client";

import { useState } from "react";
import { ExternalLink, Github, Calendar, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { SectionWrapper } from "@/components/motion/section-wrapper";
import { StaggerChildren, StaggerItem } from "@/components/motion/stagger-children";
import { SectionHeading } from "@/components/section-heading";
import { PROJECTS, type Project } from "@/lib/constants";

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <SectionWrapper id="projects">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Projects"
          subtitle="Production applications I've architected and built"
        />

        <StaggerChildren className="grid gap-6 md:grid-cols-2">
          {PROJECTS.map((project) => (
            <StaggerItem key={project.title}>
              <div className="group relative flex h-full flex-col rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 hover:-translate-y-1 md:p-8">
                {/* Header */}
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold transition-colors group-hover:text-accent">
                      {project.title}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {project.subtitle}
                    </p>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Calendar className="h-3 w-3" />
                    {project.date}
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <Badge key={tech} variant="accent">
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* First bullet as description */}
                <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground line-clamp-3">
                  {project.bullets[0]}
                </p>

                {/* Actions */}
                <div className="mt-6 flex items-center gap-3 border-t border-border pt-4">
                  {project.liveUrl && (
                    <Button variant="secondary" size="sm" asChild>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Live Site
                      </a>
                    </Button>
                  )}
                  {project.githubUrl && (
                    <Button variant="ghost" size="sm" asChild>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="h-4 w-4" />
                        Source
                      </a>
                    </Button>
                  )}
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="ml-auto flex items-center gap-1 text-xs font-medium text-muted-foreground transition-colors hover:text-accent cursor-pointer"
                  >
                    View Details
                    <ChevronRight className="h-3 w-3" />
                  </button>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>

        {/* Project Detail Modal */}
        <Dialog
          open={!!selectedProject}
          onOpenChange={(open) => !open && setSelectedProject(null)}
        >
          {selectedProject && (
            <DialogContent className="max-w-xl">
              <DialogHeader>
                <DialogTitle className="text-xl font-bold">
                  {selectedProject.title}
                </DialogTitle>
                <DialogDescription className="text-muted-foreground">
                  {selectedProject.subtitle} · {selectedProject.date}
                </DialogDescription>
              </DialogHeader>

              <div className="flex flex-wrap gap-2">
                {selectedProject.techStack.map((tech) => (
                  <Badge key={tech} variant="accent">
                    {tech}
                  </Badge>
                ))}
              </div>

              <ul className="space-y-3">
                {selectedProject.bullets.map((bullet, i) => (
                  <li
                    key={i}
                    className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                    {bullet}
                  </li>
                ))}
              </ul>

              <div className="flex gap-3 pt-2">
                {selectedProject.liveUrl && (
                  <Button variant="default" size="sm" asChild>
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Visit Live Site
                    </a>
                  </Button>
                )}
                {selectedProject.githubUrl && (
                  <Button variant="secondary" size="sm" asChild>
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-4 w-4" />
                      View Source
                    </a>
                  </Button>
                )}
              </div>
            </DialogContent>
          )}
        </Dialog>
      </div>
    </SectionWrapper>
  );
}
