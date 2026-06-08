import type { Metadata, Viewport } from "next";
import "@/styles/globals.css";
import { site } from "@/data/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "고운통증케어 | 피부 · 통증 · 체형관리 전문센터",
    template: "%s | 고운통증케어",
  },
  description:
    "고척동 피부관리, 통증관리, 체형관리 전문센터. 통증은 풀고 얼굴 라인은 살리는 프리미엄 에너지 테라피. 100% 예약제, 주말·공휴일 예약 가능.",
  keywords: [
    "고척동 피부관리",
    "고척동 통증관리",
    "고척동 체형관리",
    "구로구 피부관리",
    "전신돔",
    "인비덤맥스",
    "더조각",
    "리프팅",
    "고운통증케어",
  ],
  authors: [{ name: site.name }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: site.url,
    siteName: site.name,
    title: "고운통증케어 | 피부 · 통증 · 체형관리 전문센터",
    description:
      "통증은 풀고 얼굴 라인은 살리는 프리미엄 에너지 테라피. 고척동 피부 · 통증 · 체형관리 전문센터.",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "고운통증케어",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "고운통증케어 | 피부 · 통증 · 체형관리 전문센터",
    description: "고척동 피부 · 통증 · 체형관리 전문센터, 100% 예약제 프리미엄 케어.",
    images: ["/images/og-image.png"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#B59665",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HealthAndBeautyBusiness",
  name: site.name,
  description: site.subtitle,
  image: `${site.url}/images/og-image.png`,
  url: site.url,
  telephone: site.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.addressLine2,
    addressLocality: "구로구",
    addressRegion: "서울특별시",
    addressCountry: "KR",
  },
  openingHours: "Mo-Su 09:00-24:00",
  priceRange: "₩₩",
  slogan: site.slogan,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
