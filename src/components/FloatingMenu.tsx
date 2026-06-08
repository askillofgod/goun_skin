"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";
import { site } from "@/data/site";
import { links } from "@/data/links";

export default function FloatingMenu() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div className="fixed bottom-5 right-4 z-40 flex flex-col items-center gap-2.5 md:bottom-8 md:right-6">
      {/* TOP */}
      <button
        type="button"
        onClick={scrollTop}
        aria-label="페이지 최상단으로 이동"
        className={cn(
          "flex h-12 w-12 items-center justify-center rounded-full border border-accent bg-white text-dark shadow-soft transition-all duration-300 hover:bg-accent",
          showTop ? "opacity-100" : "pointer-events-none translate-y-2 opacity-0",
        )}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M12 19V5M12 5l-6 6M12 5l6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {/* 전화하기 */}
      <a
        href={`tel:${site.phone}`}
        aria-label="전화하기"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-dark text-white shadow-soft transition hover:bg-primary"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M6.6 10.8a14 14 0 006.6 6.6l2.2-2.2a1 1 0 011-.24 11 11 0 003.5.56 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.3a1 1 0 011 1 11 11 0 00.56 3.5 1 1 0 01-.24 1L6.6 10.8z" fill="currentColor" />
        </svg>
      </a>

      {/* 문의하기 (카카오톡) */}
      <a
        href={links.kakao}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="카카오톡 문의하기"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FEE500] text-[#3C1E1E] shadow-soft transition hover:brightness-95"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M12 4C7 4 3 7.2 3 11.1c0 2.5 1.7 4.7 4.2 6l-1 3.6 4-2.4c.6.1 1.2.1 1.8.1 5 0 9-3.2 9-7.1S17 4 12 4z" fill="currentColor" />
        </svg>
      </a>

      {/* 예약하기 */}
      <a
        href={links.reservation}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="네이버 예약하기"
        className="flex h-14 w-14 flex-col items-center justify-center rounded-full bg-primary text-white shadow-card transition hover:brightness-95"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M7 3v3M17 3v3M4 8h16M5 6h14a1 1 0 011 1v12a1 1 0 01-1 1H5a1 1 0 01-1-1V7a1 1 0 011-1z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span className="mt-0.5 text-[10px] font-bold">예약</span>
      </a>
    </div>
  );
}
