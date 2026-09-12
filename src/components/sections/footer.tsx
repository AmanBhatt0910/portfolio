"use client";

import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";
import { PERSONAL, SOCIAL_LINKS } from "@/lib/constants";

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
};

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border bg-surface/50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6 py-10 md:flex-row md:justify-between">
          {/* Left — Branding */}
          <div className="text-center md:text-left">
            <p className="text-sm font-semibold">
              {PERSONAL.name}
              <span className="text-accent">.</span>
            </p>
            <p className="mt-1 text-xs text-muted-foreground">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>

          {/* Center — Social Links */}
          <div className="flex items-center gap-3">
            {SOCIAL_LINKS.filter((l) => l.icon !== "phone").map((link) => {
              const Icon = iconMap[link.icon as keyof typeof iconMap];
              if (!Icon) return null;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.icon !== "mail" ? "_blank" : undefined}
                  rel={link.icon !== "mail" ? "noopener noreferrer" : undefined}
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-all duration-200 hover:bg-accent-muted hover:text-accent"
                  aria-label={link.label}
                >
                  <Icon className="h-4 w-4" />
                </a>
              );
            })}
          </div>

          {/* Right — Back to top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs font-medium text-muted-foreground transition-colors hover:text-accent cursor-pointer"
            aria-label="Scroll to top"
          >
            Back to top
            <ArrowUp className="h-3 w-3" />
          </button>
        </div>
      </div>
    </footer>
  );
}
