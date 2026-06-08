import Reveal from "@/components/Reveal";
import { cn } from "@/lib/cn";

interface SectionTitleProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  light?: boolean; // 어두운 배경 위에 사용 시
}

export default function SectionTitle({
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
}: SectionTitleProps) {
  return (
    <Reveal
      className={cn(
        "mb-12 md:mb-16",
        align === "center" ? "mx-auto max-w-2xl text-center" : "text-left",
      )}
    >
      {eyebrow && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
          {eyebrow}
        </p>
      )}
      <h2 className={cn("h2", light && "text-white")}>{title}</h2>
      {description && (
        <p
          className={cn(
            "body-lg mt-4 whitespace-pre-line",
            light ? "text-white/80" : "text-dark/70",
          )}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}
