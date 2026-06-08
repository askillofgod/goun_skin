import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "dark";
type Size = "md" | "lg";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  size?: Size;
  external?: boolean;
  ariaLabel?: string;
  className?: string;
}

const base =
  "inline-flex items-center justify-center gap-2 rounded-pill font-semibold transition-all duration-300 whitespace-nowrap";

const variants: Record<Variant, string> = {
  primary: "bg-primary text-white shadow-soft hover:brightness-95 hover:shadow-card",
  secondary: "bg-transparent text-primary border border-primary hover:bg-primary hover:text-white",
  dark: "bg-dark text-white hover:bg-primary",
};

const sizes: Record<Size, string> = {
  md: "px-6 py-3 text-[15px]",
  lg: "px-8 py-4 text-base md:text-[17px]",
};

export default function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  external = true,
  ariaLabel,
  className,
}: ButtonProps) {
  const cls = cn(base, variants[variant], sizes[size], className);
  const isHash = href.startsWith("#");
  if (external && !isHash) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={ariaLabel}
        className={cls}
      >
        {children}
      </a>
    );
  }
  return (
    <a href={href} aria-label={ariaLabel} className={cls}>
      {children}
    </a>
  );
}
