import Image from "next/image";
import Reveal from "@/components/Reveal";
import SectionTitle from "@/components/SectionTitle";
import Button from "@/components/Button";
import { programs } from "@/data/programs";
import { links } from "@/data/links";

// "66,000원" → 66000
function toNumber(price: string): number {
  return Number(price.replace(/[^0-9]/g, ""));
}

// 정가 대비 할인율(%) 계산
function discountRate(original: string, sale: string): number {
  const o = toNumber(original);
  const s = toNumber(sale);
  if (!o || o <= s) return 0;
  return Math.round(((o - s) / o) * 100);
}

export default function Programs() {
  return (
    <section id="programs" className="section bg-secondary">
      <div className="container-site">
        <SectionTitle
          eyebrow="PROGRAM"
          title="프로그램 안내"
          description="고객님의 상태와 고민에 맞춰 선택할 수 있는 프리미엄 케어 프로그램입니다. 지금 오픈 이벤트가로 만나보세요."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map((p, i) => {
            const rate = discountRate(p.originalPrice, p.salePrice);
            return (
              <Reveal key={p.id} delay={(i % 3) * 0.1}>
                <article className="group flex h-full flex-col overflow-hidden rounded-card bg-white shadow-soft ring-1 ring-accent/40 transition-shadow duration-300 hover:shadow-card">
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* 프로그램 번호 */}
                    <span className="absolute left-4 top-4 inline-flex h-9 min-w-9 items-center justify-center rounded-pill bg-dark/85 px-3 text-sm font-bold tracking-wider text-white backdrop-blur-sm">
                      {p.no}
                    </span>
                    {/* 할인율 배지 */}
                    {rate > 0 && (
                      <span className="absolute right-4 top-4 inline-flex items-center rounded-pill bg-primary px-3 py-1 text-sm font-bold text-white shadow-soft">
                        {rate}% OFF
                      </span>
                    )}
                    {p.featured && (
                      <span className="absolute bottom-4 left-4 inline-flex items-center rounded-pill bg-white/90 px-3 py-1 text-xs font-semibold text-primary shadow-soft">
                        SIGNATURE
                      </span>
                    )}
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="text-lg font-bold text-dark md:text-xl">{p.title}</h3>

                    <div className="mt-2 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-dark/60">
                      <span className="font-semibold text-dark/75">{p.duration}</span>
                      {p.composition && (
                        <>
                          <span className="h-1 w-1 rounded-full bg-primary/60" />
                          <span>{p.composition}</span>
                        </>
                      )}
                    </div>

                    <p className="mt-3 flex-1 text-[15px] leading-relaxed text-dark/70">
                      {p.description}
                    </p>

                    {p.points && p.points.length > 0 && (
                      <ul className="mt-3 space-y-1.5">
                        {p.points.map((point) => (
                          <li
                            key={point}
                            className="flex items-start gap-2 text-[14px] text-dark/70"
                          >
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                            {point}
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* 가격: 정가 취소선 + 할인가 강조 */}
                    <div className="mt-5 rounded-2xl bg-secondary px-4 py-3">
                      <div className="flex items-center justify-between">
                        <span className="text-[13px] text-dark/45 line-through">
                          {p.originalPrice}
                        </span>
                        {rate > 0 && (
                          <span className="text-[12px] font-semibold text-primary">
                            {rate}% 할인
                          </span>
                        )}
                      </div>
                      <div className="mt-0.5 flex items-baseline gap-1">
                        <span className="text-2xl font-extrabold text-primary md:text-[26px]">
                          {p.salePrice}
                        </span>
                      </div>
                    </div>

                    <Button
                      href={links.reservation}
                      variant="primary"
                      className="mt-5 w-full"
                      ariaLabel={`${p.title} 예약하기`}
                    >
                      예약하기
                    </Button>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        <p className="mt-8 text-center text-sm text-dark/50">
          ※ 표기된 할인가는 오픈 이벤트가이며, 모든 프로그램은 개인 상태에 따라 효과의 개인차가 있을 수 있습니다.
        </p>
      </div>
    </section>
  );
}
