import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  title,
  subtitle,
  className,
  align = "center",
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-12 md:mb-16",
        align === "center" && "text-center",
        className
      )}
    >
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
        {title}
        <span className="gradient-text">.</span>
      </h2>
      {subtitle && (
        <p className="mt-4 text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      <div
        className={cn(
          "mt-4 h-1 w-12 rounded-full bg-accent",
          align === "center" && "mx-auto"
        )}
      />
    </div>
  );
}
