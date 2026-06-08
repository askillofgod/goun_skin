"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";
import { site } from "@/data/site";
import { links } from "@/data/links";

const navItems = [
  { label: "프로그램", href: "#programs" },
  { label: "공간소개", href: "#gallery" },
  { label: "예약하기", href: "#reservation" },
  { label: "FAQ", href: "#faq" },
  { label: "후기", href: "#reviews" },
  { label: "오시는길", href: "#location" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // 모바일 메뉴 열림 시 스크롤 잠금
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled || open
          ? "bg-white/95 shadow-soft backdrop-blur"
          : "bg-transparent",
      )}
    >
      <div className="container-site flex h-16 items-center justify-between md:h-20">
        {/* 로고 */}
        <a href="#top" className="flex items-center gap-2" aria-label={site.name}>
          <span
            className={cn(
              "text-lg font-bold tracking-tight transition-colors md:text-xl",
              scrolled || open ? "text-dark" : "text-dark",
            )}
          >
            고운<span className="text-primary">통증케어</span>
          </span>
        </a>

        {/* 데스크탑 네비 */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[15px] font-medium text-dark/80 transition-colors hover:text-primary"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={links.reservation}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-pill bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-soft transition hover:brightness-95 sm:inline-flex"
          >
            예약하기
          </a>

          {/* 모바일 햄버거 */}
          <button
            type="button"
            aria-label={open ? "메뉴 닫기" : "메뉴 열기"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
          >
            <span
              className={cn(
                "block h-0.5 w-6 bg-dark transition-all duration-300",
                open && "translate-y-2 rotate-45",
              )}
            />
            <span
              className={cn(
                "block h-0.5 w-6 bg-dark transition-all duration-300",
                open && "opacity-0",
              )}
            />
            <span
              className={cn(
                "block h-0.5 w-6 bg-dark transition-all duration-300",
                open && "-translate-y-2 -rotate-45",
              )}
            />
          </button>
        </div>
      </div>

      {/* 모바일 메뉴 패널 */}
      <div
        className={cn(
          "overflow-hidden border-t border-accent/40 bg-white transition-all duration-300 lg:hidden",
          open ? "max-h-[80vh]" : "max-h-0",
        )}
      >
        <nav className="container-site flex flex-col py-4">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="border-b border-accent/30 py-4 text-base font-medium text-dark/90 last:border-0"
            >
              {item.label}
            </a>
          ))}
          <a
            href={links.reservation}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-4 inline-flex justify-center rounded-pill bg-primary px-5 py-3 text-sm font-semibold text-white"
          >
            네이버 예약하기
          </a>
        </nav>
      </div>
    </header>
  );
}
