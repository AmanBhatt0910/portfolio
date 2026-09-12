"use client";

import { useRef, useEffect, useState } from "react";
import { Trophy } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { SectionWrapper } from "@/components/motion/section-wrapper";
import { StaggerChildren, StaggerItem } from "@/components/motion/stagger-children";
import { SectionHeading } from "@/components/section-heading";
import { ACHIEVEMENTS } from "@/lib/constants";

function AnimatedMetric({ value, inView }: { value: string; inView: boolean }) {
  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    if (!inView) return;

    // Extract numeric part and suffix
    const numericMatch = value.match(/^([\d.]+)(.*)$/);
    if (!numericMatch) {
      setDisplayValue(value);
      return;
    }

    const target = parseFloat(numericMatch[1]);
    const suffix = numericMatch[2];
    const isFloat = value.includes(".");
    const duration = 1500;
    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = target * eased;

      if (isFloat) {
        setDisplayValue(current.toFixed(1) + suffix);
      } else {
        setDisplayValue(Math.floor(current) + suffix);
      }

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [inView, value]);

  return <span>{displayValue}</span>;
}

export function Achievements() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <SectionWrapper id="achievements" className="bg-surface/50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Achievements"
          subtitle="Key milestones and impact metrics"
        />

        <div ref={ref}>
          <StaggerChildren className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {ACHIEVEMENTS.map((achievement, index) => (
              <StaggerItem key={index}>
                <div className="group relative overflow-hidden rounded-xl border border-border bg-card p-6 text-center transition-all duration-300 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5">
                  {/* Background glow on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  <div className="relative">
                    <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-accent-muted text-accent">
                      <Trophy className="h-5 w-5" />
                    </div>
                    <p className="text-4xl font-bold tracking-tight text-accent sm:text-5xl">
                      <AnimatedMetric value={achievement.metric} inView={isInView} />
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </div>
    </SectionWrapper>
  );
}
