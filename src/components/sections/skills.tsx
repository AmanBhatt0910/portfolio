"use client";

import { SectionWrapper } from "@/components/motion/section-wrapper";
import { StaggerChildren, StaggerItem } from "@/components/motion/stagger-children";
import { SectionHeading } from "@/components/section-heading";
import { SKILL_CATEGORIES } from "@/lib/constants";

export function Skills() {
  return (
    <SectionWrapper id="skills" className="bg-surface/50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Skills"
          subtitle="Technologies and tools I work with daily"
        />

        <StaggerChildren className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {SKILL_CATEGORIES.map((category) => (
            <StaggerItem key={category.category}>
              <div className="group rounded-xl border border-border bg-card p-5 transition-all duration-300 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent-muted text-accent transition-transform duration-300 group-hover:scale-110">
                    <category.icon className="h-4 w-4" />
                  </div>
                  <h3 className="text-sm font-semibold">{category.category}</h3>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex rounded-md border border-border bg-surface px-2 py-1 text-xs text-muted-foreground transition-all duration-200 hover:border-accent/30 hover:text-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </SectionWrapper>
  );
}
