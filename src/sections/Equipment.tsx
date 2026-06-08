import Image from "next/image";
import Reveal from "@/components/Reveal";
import SectionTitle from "@/components/SectionTitle";
import Button from "@/components/Button";
import { equipment } from "@/data/equipment";
import { links } from "@/data/links";

export default function Equipment() {
  return (
    <section id="equipment" className="section bg-white">
      <div className="container-site">
        <SectionTitle
          eyebrow="EQUIPMENT"
          title="전문 장비 케어"
          description={
            "전문 장비를 활용한 체계적인 관리로\n통증 완화 · 순환 개선 · 리프팅 · 체형 밸런스를 함께 관리합니다."
          }
        />

        <div className="grid gap-6 md:grid-cols-3">
          {equipment.map((eq, i) => (
            <Reveal key={eq.name} delay={i * 0.1}>
              <article className="group h-full overflow-hidden rounded-card border border-accent/40 bg-secondary/40">
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={eq.image}
                    alt={`${eq.name} 장비`}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-dark md:text-xl">{eq.name}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-dark/70">
                    {eq.description}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 text-center">
          <Button href={links.reservation} variant="primary" size="lg" ariaLabel="예약하기">
            지금 예약하기
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
