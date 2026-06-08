# SYSTEM ARCHITECTURE

# 고운통증케어 홈페이지

Version 1.0

---

# 1. 문서 목적

본 문서는 고운통증케어 홈페이지의

기술 구조 및 시스템 아키텍처를 정의한다.

본 프로젝트는 관리자 기능 및 데이터베이스가 없는

정적(Static) 웹사이트 기반으로 구축한다.

---

# 2. 시스템 구성도

```text
사용자

↓

Cloudflare Pages

↓

Next.js Website

↓

외부 서비스

├─ 네이버 예약
├─ 카카오톡 문의
├─ 네이버 지도
└─ 인스타그램
```

---

# 3. 전체 아키텍처

```text
GitHub Repository

↓

Cloudflare Pages

↓

고운통증케어 홈페이지

↓

예약 / 문의 / 지도
```

---

# 4. 기술 스택

## Frontend

Next.js

---

## Language

TypeScript

---

## Styling

Tailwind CSS

---

## Deployment

Cloudflare Pages

---

## Version Control

GitHub

---

## Analytics

Google Analytics (추후)

---

# 5. 프로젝트 구조

```text
goun-pain-care/

├─ public/
│
├─ src/
│   ├─ app/
│   ├─ components/
│   ├─ sections/
│   ├─ data/
│   ├─ lib/
│   └─ styles/
│
├─ package.json
├─ next.config.ts
└─ tailwind.config.ts
```

---

# 6. 폴더 구조 상세

## public

정적 리소스 저장

---

### 포함

```text
logo.svg

hero.jpg

space/

equipment/

program/

icons/
```

---

## app

라우팅 관리

---

### 페이지

```text
page.tsx

layout.tsx

not-found.tsx
```

---

## components

공통 컴포넌트

---

### 구성

```text
Header

Footer

Button

Card

SectionTitle

FloatingMenu
```

---

## sections

페이지 섹션

---

### 구성

```text
Hero

About

Program

Equipment

WhyUs

Gallery

Reservation

FAQ

Review

Location
```

---

## data

정적 데이터 관리

---

### 파일

```text
programs.ts

faq.ts

reviews.ts

site.ts
```

---

# 7. 데이터 구조

본 프로젝트는 DB를 사용하지 않는다.

---

## 프로그램 데이터

```typescript
{
  id: 1,
  title: "전신 돔 테라피",
  duration: "60분",
  price: "33,000원",
  description: "전신 순환 관리"
}
```

---

## FAQ 데이터

```typescript
{
  question: "주말 예약 가능한가요?",
  answer: "가능합니다."
}
```

---

## 후기 데이터

```typescript
{
  name: "고객",
  content: "몸이 훨씬 가벼워졌어요."
}
```

---

# 8. 외부 서비스 연동

## 네이버 예약

예약 버튼 클릭

↓

네이버 예약 링크 이동

---

### 방식

새 창 열기

---

## 카카오톡 문의

문의 버튼 클릭

↓

카카오톡 채널 이동

---

### 방식

새 창 열기

---

## 전화하기

전화 버튼 클릭

↓

통화 연결

---

### 방식

tel:

---

## 지도

네이버 지도 이동

---

### 방식

새 창 열기

---

# 9. 이미지 관리

## Hero

메인 배너 이미지

---

## Program

프로그램 이미지

---

## Equipment

장비 이미지

---

## Gallery

공간 이미지

---

### 최적화

WebP 사용

---

# 10. 반응형 구조

## Mobile

~768px

---

## Tablet

768px ~ 1024px

---

## Desktop

1024px 이상

---

# 11. 성능 최적화

## 이미지

Next Image 사용

---

## Lazy Loading

자동 적용

---

## 코드 분리

Dynamic Import 적용 가능

---

## 목표

PageSpeed 90점 이상

---

# 12. SEO 구조

## Meta Title

고운통증케어 | 피부 · 통증 · 체형관리 전문센터

---

## Meta Description

고척동 피부관리, 통증관리, 체형관리 전문센터.
전신돔, 인비덤맥스, 더조각 에너지 테라피 운영.

---

## Open Graph

지원

---

## robots.txt

생성

---

## sitemap.xml

생성

---

# 13. 보안 정책

## HTTPS

Cloudflare SSL 적용

---

## 개인정보 저장

없음

---

## 회원가입

없음

---

## 결제

없음

---

# 14. 배포 프로세스

```text
로컬 개발

↓

Git Commit

↓

GitHub Push

↓

Cloudflare Pages Build

↓

자동 배포
```

---

# 15. 장애 대응

## 예약 링크 오류

네이버 예약 URL 교체

---

## 문의 링크 오류

카카오 URL 교체

---

## 이미지 오류

public 폴더 이미지 교체

---

# 16. 유지보수 정책

## 콘텐츠 수정

정적 데이터 수정

---

## 이미지 변경

public 폴더 교체

---

## 프로그램 변경

programs.ts 수정

---

## FAQ 변경

faq.ts 수정

---

# 17. 확장 가능성

향후 추가 가능

---

## 관리자 페이지

CMS

---

## 온라인 결제

토스페이먼츠

---

## 회원 시스템

로그인

---

## 예약 시스템

자체 예약 구축

---

## 블로그

콘텐츠 마케팅

---

# 18. 시스템 특징

### 장점

- 빠른 로딩
- 유지보수 쉬움
- 서버 비용 없음
- DB 관리 없음
- 보안 위험 낮음
- Cloudflare 무료 운영 가능

---

# 19. 최종 아키텍처 요약

```text
GitHub

↓

Cloudflare Pages

↓

고운통증케어 홈페이지

↓

네이버 예약
카카오톡 문의
전화하기
네이버 지도
```