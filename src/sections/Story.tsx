import Image from "next/image";
import Reveal from "@/components/Reveal";

export default function Story() {
  return (
    <section id="story" className="section bg-white">
      <div className="container-site grid items-center gap-10 md:grid-cols-2 md:gap-16">
        <Reveal>
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-card shadow-card">
            <Image
              src="/images/story/story.webp"
              alt="고운통증케어 얼굴 케어 장면"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            BRAND STORY
          </p>
          <h2 className="h2">고운통증케어 이야기</h2>
          <p className="body-lg mt-4 font-medium text-dark/80">
            단순히 피부를 관리하는 공간이 아니라
            <br />
            몸의 순환과 균형을 함께 살피는 케어 공간입니다.
          </p>
          <div className="mt-6 space-y-4 text-dark/70">
            <p>
              고운피부통증케어는 단순한 피부관리 공간이 아닙니다. 통증 관리와 피부 관리,
              체형 밸런스를 함께 생각하며 고객님의 일상 회복을 돕는 프리미엄 에너지 테라피
              공간입니다.
            </p>
            <p>
              목과 어깨의 뻐근함, 허리의 불편함, 붓기와 순환 문제, 피부 탄력 고민까지
              고객 한 분 한 분의 상태에 맞춰 필요한 관리를 제안합니다.
            </p>
            <p>
              편안한 공간에서 전문 장비와 세심한 손길로 몸이 가벼워지고, 얼굴 라인이
              살아나는 변화를 경험해 보세요.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
