import {
  Code2,
  Layout,
  Server,
  Database,
  GitBranch,
  Cloud,
  Bot,
  Brain,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

/* ============================================
   TYPE DEFINITIONS
   ============================================ */

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  bullets: string[];
}

export interface Project {
  title: string;
  subtitle: string;
  techStack: string[];
  date: string;
  bullets: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export interface SkillCategory {
  category: string;
  icon: LucideIcon;
  skills: string[];
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  location: string;
  grade?: string;
}

export interface Achievement {
  metric: string;
  description: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: "github" | "linkedin" | "mail" | "phone";
}

/* ============================================
   PERSONAL INFO
   ============================================ */

export const PERSONAL = {
  name: "Aman Bhatt",
  title: "Full Stack Engineer",
  tagline: "Building robust, scalable web applications with modern technologies",
  email: "amanbhatt0910@gmail.com",
  phone: "+91 9045411893",
  location: "Uttarakhand, India",
  resumePath: "/resume.pdf",
  bio: `I'm a Full Stack Engineer with hands-on experience building production-ready applications across the entire stack. From crafting pixel-perfect frontends with React and Next.js to engineering secure, scalable backends with Spring Boot and Node.js, I bring ideas to life through clean code and thoughtful architecture. Currently pursuing my B.Tech in Computer Science at Graphic Era Hill University, I've contributed to real-world deployments at companies like GemAI and GreenFuel Energy, working on everything from AI-powered Chrome extensions to multi-tenant SaaS platforms.`,
} as const;

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/AmanBhatt0910",
    icon: "github",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/amanbhatt0910/",
    icon: "linkedin",
  },
  {
    label: "Email",
    href: "mailto:amanbhatt0910@gmail.com",
    icon: "mail",
  },
  {
    label: "Phone",
    href: "tel:+919045411893",
    icon: "phone",
  },
];

export const NAV_ITEMS = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

/* ============================================
   EXPERIENCE
   ============================================ */

export const EXPERIENCES: Experience[] = [
  {
    company: "GemAI Pvt. Ltd.",
    role: "Full Stack Engineering Intern",
    period: "April 2026 – July 2026",
    location: "Remote",
    bullets: [
      "Built the Sylus LinkedIn Chrome extension using JavaScript, enabling AI-powered LinkedIn engagement through automated comment replies and content generation",
      "Delivered UI enhancements and a drag-and-drop Kanban board (Agency Tasks) for Sylus AI, an AI-powered social media automation platform, built with Next.js, React, and dnd-kit",
      "Implemented the Team Chats and AI Consultant modules across frontend and backend with Supabase and OpenAI APIs, supporting real-time messaging and AI-driven consultation",
    ],
  },
  {
    company: "GreenFuel Energy",
    role: "Full Stack Web Developer Intern",
    period: "February 2025 – July 2025",
    location: "Remote",
    bullets: [
      "Built an Asset Management system and a budget management application with multi-tier approvals in Next.js and Tailwind CSS, streamlining workflows by 30%",
      "Engineered RBAC and validation workflows across Budget Requester, Approver, and Admin roles, supporting 200+ active users",
      "Managed deployment on Windows Server with NGINX configuration, achieving 99.9% uptime",
    ],
  },
  {
    company: "Go Hackathon",
    role: "Software Development Intern",
    period: "December 2023 – May 2024",
    location: "Remote",
    bullets: [
      "Led development of responsive UIs for 2+ client projects with React.js, Next.js, and Tailwind CSS, increasing user engagement by 20%",
      "Collaborated with UX/UI teams to architect reusable component libraries in ShadCN and delivered WordPress solutions for 5+ clients",
      "Supervised a 10-member development team, ensuring zero project delays and reducing code defects by 15%",
    ],
  },
];

/* ============================================
   PROJECTS
   ============================================ */

export const PROJECTS: Project[] = [
  {
    title: "Procurexio",
    subtitle: "Procurement Management Platform",
    techStack: ["Next.js", "MySQL", "JWT", "Google OAuth"],
    date: "April 2026",
    bullets: [
      "Architected a multi-tenant SaaS procurement platform to manage RFQs, vendor bids, contract awarding, and procurement workflows with organization-level data isolation",
      "Integrated JWT authentication, Google OAuth, RBAC for 5 user roles, audit logging, automated email notifications, and bid evaluation workflows",
    ],
    liveUrl: "https://procurexio.com/",
  },
  {
    title: "ConnectNow",
    subtitle: "Real-Time Chat Application",
    techStack: ["Next.js", "NextAuth", "Pusher", "MongoDB"],
    date: "May 2024",
    bullets: [
      "Built a real-time chat application enabling one-to-one and group conversations with instant message delivery",
      "Integrated NextAuth.js, Pusher, and Cloudinary for secure authentication, WebSocket-based messaging, and media sharing",
    ],
  },
];

/* ============================================
   SKILLS
   ============================================ */

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: "Programming Languages",
    icon: Code2,
    skills: ["Java", "C", "C++", "JavaScript", "TypeScript", "Python", "SQL"],
  },
  {
    category: "Frontend",
    icon: Layout,
    skills: [
      "HTML",
      "CSS",
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "ShadCN UI",
      "WordPress",
      "Figma",
      "Responsive Design",
    ],
  },
  {
    category: "Backend",
    icon: Server,
    skills: [
      "Spring Boot",
      "Spring Security",
      "Spring Data JPA",
      "Hibernate",
      "RESTful APIs",
      "Node.js",
      "Express.js",
    ],
  },
  {
    category: "Databases",
    icon: Database,
    skills: ["MySQL", "MongoDB", "H2 Database", "PostgreSQL", "Supabase"],
  },
  {
    category: "DevOps & Tools",
    icon: GitBranch,
    skills: ["Git/GitHub", "Maven", "NGINX", "Postman", "VS Code", "IntelliJ IDEA"],
  },
  {
    category: "Cloud & Auth",
    icon: Cloud,
    skills: ["Cloudinary", "Pusher", "NextAuth", "JWT", "Vercel"],
  },
  {
    category: "AI & Automation",
    icon: Bot,
    skills: ["OpenAI API", "Chrome Extension Development"],
  },
  {
    category: "Core Competencies",
    icon: Brain,
    skills: [
      "Data Structures",
      "Algorithms",
      "OOP",
      "Database Management",
      "Computer Networks",
      "Operating Systems",
    ],
  },
];

/* ============================================
   EDUCATION
   ============================================ */

export const EDUCATION: Education[] = [
  {
    institution: "Graphic Era Hill University",
    degree: "B.Tech, Computer Science and Engineering",
    period: "Oct 2022 – June 2026",
    location: "Uttarakhand, India",
    grade: "CGPA: 8.53 / 10.0",
  },
  {
    institution: "BLM Academy",
    degree: "CBSE Board — Class X (72.5%) | Class XII",
    period: "March 2020 – June 2022",
    location: "Uttarakhand, India",
  },
];

/* ============================================
   ACHIEVEMENTS
   ============================================ */

export const ACHIEVEMENTS: Achievement[] = [
  {
    metric: "4+",
    description: "Production-ready applications delivered, contributing to real-world deployments across full-stack systems",
  },
  {
    metric: "25+",
    description: "RESTful APIs optimized and secured using RBAC, JWT, and OAuth, improving system reliability and maintainability",
  },
  {
    metric: "200+",
    description: "Active users supported across enterprise applications with role-based access control",
  },
  {
    metric: "99.9%",
    description: "Uptime achieved through optimized NGINX deployment and server configuration",
  },
];
