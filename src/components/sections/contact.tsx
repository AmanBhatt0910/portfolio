"use client";

import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Send,
  CheckCircle2,
} from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { SectionWrapper } from "@/components/motion/section-wrapper";
import { SectionHeading } from "@/components/section-heading";
import { PERSONAL, SOCIAL_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
  phone: Phone,
};

const contactInfo = [
  { icon: Mail, label: "Email", value: PERSONAL.email, href: `mailto:${PERSONAL.email}` },
  { icon: Phone, label: "Phone", value: PERSONAL.phone, href: `tel:${PERSONAL.phone}` },
  { icon: MapPin, label: "Location", value: PERSONAL.location, href: undefined },
];

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${PERSONAL.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <SectionWrapper id="contact">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Get in Touch"
          subtitle="Have a project in mind or want to collaborate? Let's connect."
        />

        <div className="grid gap-10 lg:grid-cols-5 lg:gap-16">
          {/* Contact Info */}
          <div className="space-y-6 lg:col-span-2">
            <div className="space-y-4">
              {contactInfo.map((item) => (
                <div key={item.label} className="group flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-muted text-accent transition-transform group-hover:scale-110">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-sm font-medium text-foreground transition-colors hover:text-accent"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm font-medium">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social links */}
            <div className="border-t border-border pt-6">
              <p className="mb-3 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Follow me
              </p>
              <div className="flex gap-3">
                {SOCIAL_LINKS.filter(l => l.icon !== "phone").map((link) => {
                  const Icon = iconMap[link.icon];
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target={link.icon !== "mail" ? "_blank" : undefined}
                      rel={link.icon !== "mail" ? "noopener noreferrer" : undefined}
                      className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-surface text-muted-foreground transition-all duration-200 hover:border-accent/30 hover:bg-accent-muted hover:text-accent hover:scale-110"
                      aria-label={link.label}
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="rounded-xl border border-border bg-card p-6 md:p-8"
            >
              <div className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="mb-2 block text-xs font-medium uppercase tracking-wider text-muted-foreground"
                    >
                      Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData((prev) => ({ ...prev, name: e.target.value }))
                      }
                      className="w-full rounded-lg border border-border bg-surface px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 transition-colors focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="mb-2 block text-xs font-medium uppercase tracking-wider text-muted-foreground"
                    >
                      Email
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData((prev) => ({ ...prev, email: e.target.value }))
                      }
                      className="w-full rounded-lg border border-border bg-surface px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 transition-colors focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="contact-message"
                    className="mb-2 block text-xs font-medium uppercase tracking-wider text-muted-foreground"
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, message: e.target.value }))
                    }
                    className="w-full resize-none rounded-lg border border-border bg-surface px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 transition-colors focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                    placeholder="Tell me about your project or opportunity..."
                  />
                </div>
                <Button type="submit" size="lg" className="w-full" disabled={submitted}>
                  {submitted ? (
                    <>
                      <CheckCircle2 className="h-5 w-5" />
                      Opening Mail Client...
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      Send Message
                    </>
                  )}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
