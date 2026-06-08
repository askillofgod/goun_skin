# 고운통증케어 (goun-skin)

피부 · 통증 · 체형관리 전문센터 고운통증케어 공식 홈페이지 (원페이지 정적 사이트)

- 배포: Cloudflare Pages → `goun-skin.pages.dev`
- 스택: Next.js 15 (App Router, `output: export`) · TypeScript · Tailwind CSS · Framer Motion · Embla Carousel

## 개발

```bash
npm install
npm run dev -- --port 8081      # http://localhost:8081
```

## 빌드 (정적 export)

```bash
npm run build                   # 결과물: out/
```

## Cloudflare Pages 설정

| 항목 | 값 |
| --- | --- |
| Framework preset | None |
| Build command | `npm run build` |
| Build output directory | `out` |
| Node version | 20+ |

> Next.js 정적 export 방식이므로 `next.config.ts`에 `output: "export"`, `images.unoptimized: true`가 설정되어 있습니다. 출력 디렉토리는 `.next`가 아닌 **`out`** 입니다.

## 운영자 수정 영역 (`src/data/`)

| 파일 | 관리 항목 |
| --- | --- |
| `site.ts` | 상호 · 전화 · 주소 · 운영시간 · 대표원장 |
| `links.ts` | 네이버 예약 · 카카오톡 · 인스타그램 · 블로그 · 지도 링크 |
| `programs.ts` | 프로그램명 · 시간 · 가격 · 설명 · 이미지 |
| `equipment.ts` | 장비 소개 |
| `faq.ts` | 자주 묻는 질문 |
| `reviews.ts` | 고객 후기 |

링크 확정 시 `src/data/links.ts`의 placeholder(`https://booking.naver.com/` 등)를 실제 주소로 교체한 뒤 `git push` 하면 자동 배포됩니다.

## 이미지

`public/images/` 하위에 `hero · story · programs · equipment · gallery · logo` 폴더로 구성.
일부 공간 사진(상담실 · 파우더룸)은 실제 사진 확보 전까지 `Dummy.webp` 대체본을 사용 중입니다.
