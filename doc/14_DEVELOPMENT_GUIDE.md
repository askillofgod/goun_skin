# DEVELOPMENT GUIDE

# 고운통증케어 홈페이지

Version 1.0

---

# 1. 문서 목적

본 문서는 고운통증케어 홈페이지 개발 시 따라야 할 개발 규칙과 구현 가이드를 정의한다.

본 프로젝트는

- GitHub
- Cloudflare Pages
- Next.js
- TypeScript
- Tailwind CSS

기반으로 개발한다.

---

# 2. 프로젝트 목표

## 핵심 목표

고운통증케어의 브랜드 신뢰도 향상

---

## 최종 목표

예약 전환

---

## 전환 방식

네이버 예약

카카오 문의

전화 상담

---

# 3. 기술 스택

## Framework

Next.js 15+

---

## Language

TypeScript

---

## Styling

Tailwind CSS

---

## Animation

Framer Motion

---

## Hosting

Cloudflare Pages

---

## Repository

GitHub

---

# 4. 개발 원칙

## 원칙 1

SEO 우선

---

## 원칙 2

모바일 우선

---

## 원칙 3

정적 사이트

---

## 원칙 4

빠른 로딩

---

## 원칙 5

유지보수 용이

---

# 5. 디렉토리 구조

```text
goun/

├── public/
│
├── src/
│   ├── app/
│   ├── components/
│   ├── sections/
│   ├── data/
│   ├── hooks/
│   ├── lib/
│   └── styles/
│
├── package.json
├── tailwind.config.ts
├── next.config.ts
└── README.md
```

---

# 6. 컴포넌트 구조

## Components

```text
Header.tsx

Footer.tsx

Button.tsx

FloatingMenu.tsx

SectionTitle.tsx

Card.tsx
```

---

## Sections

```text
Hero.tsx

Story.tsx

Programs.tsx

Equipment.tsx

WhyUs.tsx

Gallery.tsx

Reservation.tsx

FAQ.tsx

Reviews.tsx

Location.tsx
```

---

# 7. 데이터 관리

DB 사용 안 함

---

## 관리 방식

정적 데이터

---

## 위치

```text
src/data/
```

---

## 파일

```text
programs.ts

faq.ts

reviews.ts

site.ts

links.ts
```

---

# 8. 프로그램 데이터 구조

```typescript
export interface Program {
  id: number
  title: string
  duration: string
  price: string
  description: string
  image: string
}
```

---

# 9. FAQ 데이터 구조

```typescript
export interface FAQ {
  question: string
  answer: string
}
```

---

# 10. 후기 데이터 구조

```typescript
export interface Review {
  name: string
  content: string
}
```

---

# 11. 이미지 관리 규칙

## 저장 위치

```text
public/
```

---

## 구조

```text
public/

hero/

programs/

equipment/

gallery/

icons/
```

---

## 형식

WebP 우선

---

## 최대 크기

500KB 이하 권장

---

# 12. Header 개발 규칙

## Sticky Header

사용

---

## 스크롤 시

배경색 추가

---

## Mobile

햄버거 메뉴

---

# 13. Hero 개발 규칙

## 레이아웃

Desktop

```text
좌측 텍스트

우측 이미지
```

---

Mobile

```text
세로 배치
```

---

## CTA

예약하기

문의하기

---

# 14. 프로그램 영역

## 카드형 UI

사용

---

## Grid

Desktop

3열

---

Tablet

2열

---

Mobile

1열

---

# 15. FAQ 개발 규칙

## 형태

Accordion

---

## 기본 상태

닫힘

---

## 애니메이션

열림/닫힘 적용

---

# 16. 후기 개발 규칙

## 형태

Slider

---

## 라이브러리

Embla Carousel

---

## 노출 수

Desktop

3개

---

Tablet

2개

---

Mobile

1개

---

# 17. 공간소개 개발 규칙

## Grid Gallery

사용

---

## 이미지 클릭

확대 가능

선택사항

---

# 18. 플로팅 메뉴

## 위치

우측 하단

---

## 버튼

TOP

전화하기

예약하기

문의하기

---

## 항상 노출

예

---

# 19. 외부 링크 관리

## 파일

```text
links.ts
```

---

## 관리 항목

```typescript
export const links = {
  reservation: "",
  kakao: "",
  instagram: "",
  blog: "",
  map: ""
}
```

---

# 20. 예약 버튼 규칙

모든 주요 섹션 하단

예약 버튼 배치

---

## 적용 위치

Hero

Programs

Equipment

Gallery

Reviews

Location

---

# 21. SEO 구현

## Metadata API

사용

---

## Title

```text
고운통증케어 | 피부 · 통증 · 체형관리 전문센터
```

---

## Description

```text
고척동 피부관리, 통증관리, 체형관리 전문센터
```

---

# 22. Open Graph

## 포함

제목

설명

대표 이미지

---

# 23. robots.txt

생성

---

# 24. sitemap.xml

생성

---

# 25. 접근성

## 이미지

alt 필수

---

## 버튼

aria-label 적용

---

## 색상 대비

WCAG AA 이상

---

# 26. 애니메이션 규칙

## 허용

Fade In

Slide Up

Scale

---

## 금지

과도한 모션

---

## Duration

```css
0.3s ~ 0.6s
```

---

# 27. 성능 목표

## Lighthouse

90점 이상

---

## CLS

0.1 이하

---

## LCP

2.5초 이하

---

# 28. Cloudflare 배포

## Branch

main

---

## Build Command

```bash
npm run build
```

---

## Output

```text
.next
```

---

# 29. Git 전략

## Branch

main

---

## Commit Convention

```text
feat:

fix:

style:

refactor:
```

---

## 예시

```bash
feat: add hero section

fix: update reservation link

style: improve spacing
```

---

# 30. 운영 정보

## 상호

고운통증케어

---

## 부제

피부 · 통증 · 체형관리 전문센터

---

## 전화번호

```text
02-2135-8019
```

---

## 대표원장

```text
박신혜 원장

민선아 원장
```

---

## 운영시간

```text
09:00 ~ 24:00
```

---

## 운영안내

```text
토요일 · 일요일 · 공휴일 예약 가능
```

---

# 31. 최종 개발 목표

고객이 홈페이지에 방문한 후

1분 이내에

예약 버튼을 누를 수 있는 구조를 구현한다.

---

# DEVELOPMENT GUIDE 한 줄 정의

"클로드코드와 개발자가 동일한 기준으로 빠르게 구현할 수 있도록 정리한 개발 규칙 문서"