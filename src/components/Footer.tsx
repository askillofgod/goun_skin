import { site } from "@/data/site";
import { links } from "@/data/links";

const footerNav = [
  { label: "프로그램", href: "#programs" },
  { label: "공간소개", href: "#gallery" },
  { label: "예약하기", href: "#reservation" },
  { label: "FAQ", href: "#faq" },
  { label: "후기", href: "#reviews" },
  { label: "오시는길", href: "#location" },
];

export default function Footer() {
  return (
    <footer className="bg-dark text-white">
      <div className="container-site py-16">
        <div className="grid gap-10 md:grid-cols-3">
          {/* 브랜드 */}
          <div>
            <p className="text-xl font-bold">
              고운<span className="text-primary">통증케어</span>
            </p>
            <p className="mt-3 whitespace-pre-line text-sm leading-relaxed text-white/70">
              {site.tagline}
            </p>
            <p className="mt-4 text-sm text-white/60">{site.slogan}</p>
          </div>

          {/* 바로가기 */}
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary">
              바로가기
            </p>
            <ul className="grid grid-cols-2 gap-2">
              {footerNav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-white/75 transition hover:text-white"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 연락처 */}
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary">
              연락처
            </p>
            <ul className="space-y-2 text-sm text-white/75">
              <li>
                <a href={`tel:${site.phone}`} className="hover:text-white">
                  T. {site.phone}
                </a>
              </li>
              <li>{site.address}</li>
              <li>운영시간 {site.hours}</li>
              <li className="text-white/60">{site.hoursNote}</li>
            </ul>
            <div className="mt-4 flex gap-4 text-sm">
              <a
                href={links.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/75 transition hover:text-primary"
              >
                인스타그램
              </a>
              <a
                href={links.blog}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/75 transition hover:text-primary"
              >
                네이버 블로그
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-center text-xs text-white/50">
          © {site.name}. All rights reserved. · 대표원장 {site.directors.join(" · ")}
        </div>
      </div>
    </footer>
  );
}
