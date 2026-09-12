"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, Download, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetClose,
} from "@/components/ui/sheet";
import { ThemeToggle } from "@/components/theme-toggle";
import { NAV_ITEMS, PERSONAL } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Determine active section
      const sections = NAV_ITEMS.map((item) => item.href.replace("#", ""));
      let current = "";
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) {
            current = section;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "glass border-b border-border/50 shadow-lg shadow-black/5"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="text-xl font-bold tracking-tight transition-colors hover:text-accent"
            aria-label="Home"
          >
            AB<span className="text-accent">.</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex md:items-center md:gap-1">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={cn(
                  "relative px-3 py-2 text-sm font-medium transition-colors",
                  activeSection === item.href.replace("#", "")
                    ? "text-accent"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {item.label}
                {activeSection === item.href.replace("#", "") && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute inset-x-1 -bottom-[1px] h-0.5 bg-accent rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex md:items-center md:gap-2">
            <ThemeToggle />
            <Button variant="secondary" size="sm" asChild>
              <a href={PERSONAL.resumePath} download>
                <Download className="h-4 w-4" />
                Resume
              </a>
            </Button>
          </div>

          {/* Mobile Menu */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Open menu">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-72">
                <div className="mt-8 flex flex-col gap-2">
                  {NAV_ITEMS.map((item) => (
                    <SheetClose key={item.href} asChild>
                      <a
                        href={item.href}
                        className={cn(
                          "flex items-center rounded-lg px-4 py-3 text-base font-medium transition-colors",
                          activeSection === item.href.replace("#", "")
                            ? "bg-accent-muted text-accent"
                            : "text-muted-foreground hover:bg-surface-alt hover:text-foreground"
                        )}
                      >
                        {item.label}
                      </a>
                    </SheetClose>
                  ))}
                  <div className="mt-4 border-t border-border pt-4">
                    <Button variant="secondary" className="w-full" asChild>
                      <a href={PERSONAL.resumePath} download>
                        <FileText className="h-4 w-4" />
                        Download Resume
                      </a>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </motion.header>
  );
}
