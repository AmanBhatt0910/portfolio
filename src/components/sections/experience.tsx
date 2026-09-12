"use client";

import { Briefcase, MapPin } from "lucide-react";
import { SectionWrapper } from "@/components/motion/section-wrapper";
import { StaggerChildren, StaggerItem } from "@/components/motion/stagger-children";
import { SectionHeading } from "@/components/section-heading";
import { EXPERIENCES } from "@/lib/constants";

export function Experience() {
  return (
    <SectionWrapper id="experience" className="bg-surface/50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Experience"
          subtitle="Where I've contributed and grown as a developer"
        />

        <StaggerChildren className="relative">
          {/* Timeline line */}
          <div className="absolute left-[22px] top-4 hidden h-[calc(100%-2rem)] w-px bg-border md:block" />

          <div className="space-y-8 md:space-y-12">
            {EXPERIENCES.map((exp, index) => (
              <StaggerItem key={`${exp.company}-${index}`}>
                <div className="group relative md:pl-16">
                  {/* Timeline dot */}
                  <div className="absolute left-3 top-6 hidden h-4 w-4 items-center justify-center md:flex">
                    <div className="h-3 w-3 rounded-full border-2 border-accent bg-background transition-all duration-300 group-hover:scale-125 group-hover:bg-accent" />
                  </div>

                  {/* Card */}
                  <div className="rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 md:p-8">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <h3 className="text-lg font-bold sm:text-xl">
                          {exp.role}
                        </h3>
                        <div className="mt-1 flex items-center gap-2 text-accent">
                          <Briefcase className="h-4 w-4" />
                          <span className="text-sm font-medium">
                            {exp.company}
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground sm:text-right">
                        <span className="rounded-md border border-border bg-surface px-2.5 py-1 font-medium">
                          {exp.period}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    <ul className="mt-4 space-y-2">
                      {exp.bullets.map((bullet, i) => (
                        <li
                          key={i}
                          className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
                        >
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </div>
        </StaggerChildren>
      </div>
    </SectionWrapper>
  );
}
