"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { links } from "@/data/links";
import { trustCards } from "@/data/whyus";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-secondary">
      <div className="container-site grid min-h-[calc(100svh-4rem)] items-center gap-10 pb-12 pt-24 md:min-h-screen md:grid-cols-2 md:gap-12 md:pb-20 md:pt-28">
        {/* 좌측 텍스트 */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="order-2 text-center md:order-1 md:text-left"
        >
          <p className="mb-4 inline-flex items-center rounded-pill bg-white/70 px-4 py-1.5 text-xs font-semibold tracking-wide text-primary md:text-sm">
            고척동 피부 · 통증 · 체형관리 전문센터
          </p>
          <h1 className="h1 font-bold leading-[1.25]">
            통증은 풀고,
            <br />
            얼굴 라인은 살리는
            <br />
            <span className="text-primary">프리미엄 에너지 테라피</span>
          </h1>
          <p className="body-lg mx-auto mt-6 max-w-xl whitespace-pre-line text-dark/70 md:mx-0">
            {"피부관리와 통증관리를 함께 생각하는 프리미엄 케어 공간입니다.\n고객 한 분 한 분에게 집중하는 100% 예약제 맞춤 관리를 제공합니다."}
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row md:justify-start">
            <a
              href={links.reservation}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-pill bg-primary px-8 py-4 text-base font-semibold text-white shadow-soft transition hover:brightness-95 hover:shadow-card"
            >
              예약하기
            </a>
            <a
              href={links.kakao}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-pill border border-primary bg-transparent px-8 py-4 text-base font-semibold text-primary transition hover:bg-primary hover:text-white"
            >
              카카오톡 문의하기
            </a>
          </div>
        </motion.div>

        {/* 우측 이미지 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          className="order-1 md:order-2"
        >
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-card shadow-card md:aspect-[5/4]">
            <Image
              src="/images/hero/hero-main.webp"
              alt="고운통증케어 프리미엄 에너지 테라피 관리 장면"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </motion.div>
      </div>

      {/* 신뢰도 카드 */}
      <div className="border-t border-accent/50 bg-white/60">
        <div className="container-site grid grid-cols-2 gap-px overflow-hidden py-2 md:grid-cols-4">
          {trustCards.map((card) => (
            <div
              key={card}
              className="flex items-center justify-center gap-2 px-3 py-4 text-center text-[13px] font-semibold text-dark/80 md:text-[15px]"
            >
              <span className="text-primary">✓</span>
              {card}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
