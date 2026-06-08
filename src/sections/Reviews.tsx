"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import SectionTitle from "@/components/SectionTitle";
import Button from "@/components/Button";
import { reviews } from "@/data/reviews";
import { links } from "@/data/links";
import { cn } from "@/lib/cn";

export default function Reviews() {
  // Desktop 3 / Tablet 2 / Mobile 1 — flex-basis 로 제어
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
  });
  const [selected, setSelected] = useState(0);
  const [snaps, setSnaps] = useState<number[]>([]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelected(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setSnaps(emblaApi.scrollSnapList());
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  const scrollTo = useCallback(
    (i: number) => emblaApi && emblaApi.scrollTo(i),
    [emblaApi],
  );

  return (
    <section id="reviews" className="section bg-secondary">
      <div className="container-site">
        <SectionTitle
          eyebrow="REVIEW"
          title="고객 후기"
          description="실제 방문 고객님들의 경험을 확인해 보세요."
        />

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-6">
            {reviews.map((r, i) => (
              <div
                key={i}
                className="min-w-0 shrink-0 grow-0 basis-full md:basis-1/2 lg:basis-1/3"
              >
                <figure className="flex h-full flex-col rounded-card bg-white p-7 shadow-soft">
                  <div className="text-primary" aria-hidden>
                    {"★★★★★"}
                  </div>
                  <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-dark/80">
                    “{r.content}”
                  </blockquote>
                  <figcaption className="mt-5 text-sm font-semibold text-dark/60">
                    {r.name}
                  </figcaption>
                </figure>
              </div>
            ))}
          </div>
        </div>

        {/* 도트 */}
        <div className="mt-8 flex justify-center gap-2">
          {snaps.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`후기 ${i + 1}번으로 이동`}
              onClick={() => scrollTo(i)}
              className={cn(
                "h-2 rounded-full transition-all duration-300",
                selected === i ? "w-6 bg-primary" : "w-2 bg-primary/30",
              )}
            />
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button href={links.reservation} variant="primary" size="lg" ariaLabel="예약하기">
            예약하기
          </Button>
        </div>
      </div>
    </section>
  );
}
