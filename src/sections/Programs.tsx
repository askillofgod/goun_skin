import Image from "next/image";
import Reveal from "@/components/Reveal";
import SectionTitle from "@/components/SectionTitle";
import Button from "@/components/Button";
import { programs } from "@/data/programs";
import { links } from "@/data/links";

export default function Programs() {
  return (
    <section id="programs" className="section bg-secondary">
      <div className="container-site">
        <SectionTitle
          eyebrow="PROGRAM"
          title="프로그램 안내"
          description="고객님의 상태와 고민에 맞춰 다양한 맞춤 프로그램을 제공합니다."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map((p, i) => (
            <Reveal key={p.id} delay={(i % 3) * 0.1}>
              <article className="flex h-full flex-col overflow-hidden rounded-card bg-white shadow-soft transition-shadow duration-300 hover:shadow-card">
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-lg font-bold text-dark md:text-xl">{p.title}</h3>
                  <div className="mt-2 flex items-center gap-2 text-sm text-dark/60">
                    <span>{p.duration}</span>
                    <span className="h-1 w-1 rounded-full bg-primary/60" />
                    <span className="font-bold text-primary">{p.price}</span>
                  </div>
                  <p className="mt-3 flex-1 text-[15px] leading-relaxed text-dark/70">
                    {p.description}
                  </p>
                  <p className="mt-3 rounded-xl bg-secondary px-3 py-2 text-[13px] text-dark/70">
                    <span className="font-semibold text-primary">추천 </span>
                    {p.target}
                  </p>
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
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-dark/50">
          ※ 모든 프로그램은 개인 상태에 따라 효과의 개인차가 있을 수 있습니다.
        </p>
      </div>
    </section>
  );
}
