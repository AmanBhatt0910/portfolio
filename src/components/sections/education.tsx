"use client";

import { GraduationCap, Calendar, MapPin } from "lucide-react";
import { SectionWrapper } from "@/components/motion/section-wrapper";
import { StaggerChildren, StaggerItem } from "@/components/motion/stagger-children";
import { SectionHeading } from "@/components/section-heading";
import { EDUCATION } from "@/lib/constants";

export function Education() {
  return (
    <SectionWrapper id="education">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Education"
          subtitle="My academic journey and qualifications"
        />

        <StaggerChildren className="mx-auto max-w-3xl space-y-6">
          {EDUCATION.map((edu) => (
            <StaggerItem key={edu.institution}>
              <div className="group rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 md:p-8">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent-muted text-accent transition-transform duration-300 group-hover:scale-110">
                    <GraduationCap className="h-6 w-6" />
                  </div>
                  <div className="flex-1 space-y-1">
                    <h3 className="text-lg font-bold">{edu.institution}</h3>
                    <p className="text-sm text-muted-foreground">
                      {edu.degree}
                    </p>
                    <div className="flex flex-wrap items-center gap-3 pt-2 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {edu.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        {edu.location}
                      </span>
                    </div>
                    {edu.grade && (
                      <div className="pt-2">
                        <span className="inline-flex rounded-md border border-accent/20 bg-accent-muted px-2.5 py-1 text-xs font-semibold text-accent">
                          {edu.grade}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </SectionWrapper>
  );
}
