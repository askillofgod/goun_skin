import Image from "next/image";
import Reveal from "@/components/Reveal";
import SectionTitle from "@/components/SectionTitle";
import Button from "@/components/Button";
import { gallery } from "@/data/gallery";
import { links } from "@/data/links";

export default function Gallery() {
  return (
    <section id="gallery" className="section bg-white">
      <div className="container-site">
        <SectionTitle
          eyebrow="SPACE"
          title="공간소개"
          description={
            "편안함과 프라이버시를 고려한 공간에서\n오롯이 나만을 위한 케어를 경험하세요."
          }
        />

        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
          {gallery.map((item, i) => (
            <Reveal key={item.src} delay={(i % 3) * 0.08}>
              <figure className="group relative aspect-[4/3] w-full overflow-hidden rounded-card shadow-soft">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-dark/70 to-transparent p-4 text-sm font-semibold text-white">
                  {item.label}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 text-center">
          <Button href={links.reservation} variant="primary" size="lg" ariaLabel="예약하기">
            예약하기
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
