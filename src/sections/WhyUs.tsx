import Reveal from "@/components/Reveal";
import SectionTitle from "@/components/SectionTitle";
import { whyCards, type WhyCard } from "@/data/whyus";

function Icon({ name }: { name: WhyCard["icon"] }) {
  const common = {
    width: 32,
    height: 32,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };
  switch (name) {
    case "balance":
      return (
        <svg {...common}>
          <path d="M12 3v18M6 7h12M6 7l-3 6a3 3 0 006 0L6 7zM18 7l-3 6a3 3 0 006 0l-3-6zM8 21h8" />
        </svg>
      );
    case "person":
      return (
        <svg {...common}>
          <circle cx="12" cy="8" r="4" />
          <path d="M4 21a8 8 0 0116 0" />
        </svg>
      );
    case "device":
      return (
        <svg {...common}>
          <rect x="3" y="4" width="18" height="12" rx="2" />
          <path d="M8 20h8M12 16v4" />
        </svg>
      );
    case "clock":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3 2" />
        </svg>
      );
  }
}

export default function WhyUs() {
  return (
    <section id="whyus" className="section bg-accent/30">
      <div className="container-site">
        <SectionTitle
          eyebrow="WHY GOUN"
          title="왜 고운통증케어일까요?"
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {whyCards.map((card, i) => (
            <Reveal key={card.title} delay={(i % 4) * 0.08}>
              <div className="flex h-full flex-col items-center rounded-card bg-white p-8 text-center shadow-soft">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-secondary text-primary">
                  <Icon name={card.icon} />
                </div>
                <h3 className="mt-5 text-lg font-bold leading-snug text-dark">
                  {card.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-dark/70">
                  {card.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
