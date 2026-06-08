# DEPLOYMENT GUIDE

# 고운통증케어 홈페이지

Version 1.0

---

# 1. 문서 목적

본 문서는 고운통증케어 홈페이지의 배포 및 운영 방법을 정의한다.

프로젝트는 GitHub와 Cloudflare Pages를 이용하여 운영하며,
별도의 서버 및 데이터베이스 없이 정적 사이트(Static Website)로 구축한다.

---

# 2. 배포 환경

## Repository

GitHub

---

## Hosting

Cloudflare Pages

---

## Framework

Next.js

---

## Domain

추후 연결 예정

예시

```text
gouncare.co.kr
```

---

# 3. 운영 구조

```text
로컬 개발

↓

GitHub Push

↓

Cloudflare Pages

↓

자동 배포

↓

실제 홈페이지 반영
```

---

# 4. GitHub 저장소

## Repository Name

```text
goun
```

또는

```text
goun-pain-care
```

---

## Branch

```text
main
```

---

# 5. Git 기본 명령어

## 상태 확인

```bash
git status
```

---

## 파일 추가

```bash
git add .
```

---

## 커밋

```bash
git commit -m "feat: update homepage"
```

---

## 업로드

```bash
git push origin main
```

---

# 6. Cloudflare Pages 설정

## Project Name

```text
goun-pain-care
```

---

## Git Provider

GitHub

---

## Production Branch

```text
main
```

---

## Framework Preset

```text
Next.js
```

---

# 7. Build 설정

## Build Command

```bash
npm run build
```

---

## Output Directory

```text
.next
```

---

## Node Version

```text
20+
```

---

# 8. 환경 변수

현재 사용 안 함

---

## 필요 시

```env
NEXT_PUBLIC_SITE_URL=
```

---

# 9. 자동 배포

GitHub에 Push

↓

Cloudflare 자동 감지

↓

자동 Build

↓

자동 배포

---

# 10. 배포 확인

## 확인 항목

### 홈페이지 접속

### 이미지 정상 출력

### 모바일 확인

### 예약 버튼 확인

### 카카오 문의 확인

### 전화 버튼 확인

---

# 11. 예약 링크 관리

## 파일

```text
src/data/links.ts
```

---

## 예시

```typescript
reservation:
"https://booking.naver.com/..."
```

---

## 수정 시

Git Push

↓

자동 배포

---

# 12. 카카오 링크 관리

## 파일

```text
src/data/links.ts
```

---

## 예시

```typescript
kakao:
"https://pf.kakao.com/..."
```

---

# 13. SNS 링크 관리

## 인스타그램

```typescript
instagram:
"https://instagram.com/..."
```

---

## 블로그

```typescript
blog:
"https://blog.naver.com/..."
```

---

# 14. 대표 정보 수정

## 파일

```text
src/data/site.ts
```

---

## 관리 항목

상호

전화번호

주소

운영시간

대표원장

---

# 15. 프로그램 수정

## 파일

```text
src/data/programs.ts
```

---

## 수정 가능

프로그램명

가격

설명

이미지

---

# 16. FAQ 수정

## 파일

```text
src/data/faq.ts
```

---

## 수정 가능

질문

답변

---

# 17. 후기 수정

## 파일

```text
src/data/reviews.ts
```

---

## 수정 가능

후기 내용

작성자

---

# 18. 이미지 교체

## 위치

```text
public/
```

---

## 폴더 구조

```text
hero/

programs/

equipment/

gallery/

logo/
```

---

## 권장 형식

```text
.webp
```

---

## 권장 용량

```text
500KB 이하
```

---

# 19. SEO 운영

## 오픈 직후

Google Search Console 등록

---

## 네이버

Search Advisor 등록

---

## 제출

```text
sitemap.xml

robots.txt
```

---

# 20. 도메인 연결

## Cloudflare

Custom Domain 추가

---

## 예시

```text
www.gouncare.co.kr
```

---

## SSL

자동 적용

---

# 21. SSL 정책

## HTTPS 강제

사용

---

## Cloudflare SSL

Full (Strict)

권장

---

# 22. 백업 정책

## GitHub Repository

자동 백업

---

## 추가 백업

월 1회 ZIP 다운로드 권장

---

# 23. 장애 대응

## 예약 링크 오류

links.ts 수정

---

## 이미지 오류

public 이미지 교체

---

## 배포 실패

Cloudflare Build Log 확인

---

## 사이트 오류

이전 Commit Rollback

---

# 24. 운영 체크리스트

## 매주

예약 링크 확인

---

전화번호 확인

---

카카오 링크 확인

---

이미지 확인

---

## 매월

후기 업데이트

---

프로그램 정보 업데이트

---

SEO 점검

---

# 25. 성능 관리

## 목표

Lighthouse 90점 이상

---

## 체크 항목

이미지 최적화

---

CLS

---

LCP

---

모바일 속도

---

# 26. 향후 확장 계획

## 1단계

현재 원페이지 운영

---

## 2단계

후기 상세 페이지

---

## 3단계

블로그 운영

---

## 4단계

자체 예약 시스템

---

# 27. 운영 담당자

## 브랜드

고운통증케어

---

## 대표원장

박신혜 원장

민선아 원장

---

## 대표번호

02-2135-8019

---

# 28. 배포 성공 기준

홈페이지 접속 가능

↓

모바일 정상

↓

예약 링크 정상

↓

카카오 문의 정상

↓

SEO 등록 완료

---

# 29. 최종 운영 목표

사용자가

검색

↓

홈페이지 방문

↓

프로그램 확인

↓

예약

까지

3분 이내에 진행할 수 있는 환경을 제공한다.

---

# 30. DEPLOYMENT GUIDE 한 줄 정의

"GitHub와 Cloudflare Pages 기반으로 안정적으로 운영하기 위한 배포 및 유지보수 매뉴얼"