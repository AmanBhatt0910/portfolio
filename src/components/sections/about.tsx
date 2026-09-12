"use client";

import Image from "next/image";
import { MapPin, Briefcase, GraduationCap, Code2 } from "lucide-react";
import { SectionWrapper } from "@/components/motion/section-wrapper";
import { StaggerChildren, StaggerItem } from "@/components/motion/stagger-children";
import { SectionHeading } from "@/components/section-heading";
import { PERSONAL } from "@/lib/constants";

const highlights = [
  { icon: Briefcase, label: "Experience", value: "3 Internships" },
  { icon: Code2, label: "Projects", value: "4+ Production Apps" },
  { icon: GraduationCap, label: "Education", value: "B.Tech CSE" },
  { icon: MapPin, label: "Location", value: "Uttarakhand, India" },
];

export function About() {
  return (
    <SectionWrapper id="about">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="About Me"
          subtitle="A passionate developer building impactful solutions"
        />

        <div className="grid gap-12 lg:grid-cols-5 lg:gap-16 items-center">
          {/* Image */}
          <div className="lg:col-span-2 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-accent/20 to-accent/5 blur-lg" />
              <div className="relative h-64 w-64 overflow-hidden rounded-2xl border border-border sm:h-80 sm:w-80">
                <Image
                  src="/profile-pic.jpg"
                  alt="Aman Bhatt — Full Stack Engineer"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 256px, 320px"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-3 space-y-6">
            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
              {PERSONAL.bio}
            </p>

            {/* Highlights Grid */}
            <StaggerChildren className="grid grid-cols-2 gap-4 pt-2">
              {highlights.map((item) => (
                <StaggerItem key={item.label}>
                  <div className="group flex items-start gap-3 rounded-xl border border-border bg-surface p-4 transition-all duration-300 hover:border-accent/30 hover:bg-surface-alt">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent-muted text-accent transition-transform group-hover:scale-110">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                        {item.label}
                      </p>
                      <p className="text-sm font-semibold">{item.value}</p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerChildren>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
