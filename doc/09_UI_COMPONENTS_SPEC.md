# UI COMPONENTS SPECIFICATION

# 고운통증케어 홈페이지

Version 1.0

---

# 1. 문서 목적

본 문서는 고운통증케어 홈페이지에 사용되는 UI 컴포넌트를 정의한다.

모든 컴포넌트는 디자인 일관성과 유지보수성을 고려하여 재사용 가능한 구조로 제작한다.

---

# 2. 공통 원칙

## 디자인 방향

- 심플함
- 고급스러움
- 따뜻함
- 신뢰감

---

## UI 키워드

Premium

Healing

Wellness

Clean

Soft

---

## Radius

```css
24px
```

---

## Shadow

```css
0 10px 30px rgba(0,0,0,0.08)
```

---

## Hover

```css
translateY(-4px)
```

---

## 이미지

### 포맷

```text
WebP 우선
```

---

### 용량

```text
500KB 이하 권장
```

---

### 적용 대상

Hero 이미지

프로그램 카드 이미지

장비 이미지

갤러리 이미지

---

### 상세 규칙

`14_DEVELOPMENT_GUIDE.md` #11 이미지 관리 규칙 참조

---

# 3. Header Component

## 목적

사이트 주요 이동 제공

---

## 구성

```text
LOGO

프로그램
공간소개
예약하기
FAQ
후기
오시는길

예약하기 버튼
```

---

## Desktop

가로 메뉴

---

## Mobile

햄버거 메뉴

---

## Sticky

스크롤 시 상단 고정

```css
position: sticky
top: 0
```

---

# 4. Hero Component

## 목적

브랜드 첫인상 제공

---

## 구성

```text
Badge

Title

Description

예약하기

문의하기

대표 이미지
```

---

## 카피

`17_COPYWRITING_GUIDE.md` #3 Hero 카피 참조

---

## Layout

Desktop

```text
좌측 텍스트

우측 이미지
```

---

## Mobile

```text
텍스트

이미지
```

세로 배치

---

# 5. Section Title Component

## 목적

섹션 제목 통일

---

## 구성

```text
SUB TITLE

TITLE

DESCRIPTION
```

---

## 예시

```text
GOUN PAIN CARE

프로그램 안내

고객의 상태에 맞는 맞춤 케어 프로그램
```

---

# 6. Primary Button

## 용도

주요 CTA

---

## 사용 위치

Hero

프로그램

예약안내

오시는길

---

## 스타일

```css
background: #B59665;
color: white;
border-radius: 999px;
padding: 16px 32px;
```

---

## 문구

예약하기

---

# 7. Secondary Button

## 용도

보조 CTA

---

## 스타일

```css
background: transparent;
border: 1px solid #B59665;
```

---

## 문구

문의하기

---

# 8. Program Card

## 목적

프로그램 소개

---

## 구조

```text
이미지

프로그램명

설명

가격

예약하기
```

---

## Desktop

3열 Grid

---

## Mobile

1열

---

## 예시

```text
전신 돔 테라피

전신 순환 및 이완 관리

33,000원

예약하기
```

---

# 9. Equipment Card

## 목적

장비 소개

---

## 구조

```text
장비 이미지

장비명

설명
```

---

## 장비

인비덤맥스

더조각

전신돔

---

# 10. Benefit Card

## 목적

차별화 포인트

---

## 구조

```text
아이콘

제목

설명
```

---

## 예시

```text
1:1 맞춤 케어

고객 상태에 맞는 프로그램 제안
```

---

# 11. Gallery Card

## 목적

공간 소개

---

## 구조

```text
이미지

공간명
```

---

## 비율

```css
4:3
```

---

## 예시

상담공간

관리실

장비실

대기실

---

# 12. Step Card

## 목적

예약 절차 안내

---

## 구조

```text
STEP 번호

제목

설명
```

---

## 예시

```text
STEP 01

프로그램 확인

원하는 관리를 선택하세요.
```

---

# 13. FAQ Component

## 목적

질문 답변 제공

---

## 형태

Accordion

---

## 구조

```text
Question

↓

Answer
```

---

## 기본 상태

닫힘

---

## 클릭

열림

---

# 14. Review Card

## 목적

후기 노출

---

## 구조

```text
별점

후기 내용

고객명
```

---

## 예시

```text
★★★★★

몸이 정말 가벼워졌어요.

고객 후기
```

---

# 15. Review Slider

## 목적

후기 강조

---

## Desktop

3개 노출

---

## Tablet

2개 노출

---

## Mobile

1개 노출

---

# 16. Contact Card

## 목적

연락처 강조

---

## 구조

```text
전화번호

운영시간

예약 버튼
```

---

## 예시

```text
02-2135-8019

09:00 ~ 24:00

예약하기
```

---

# 17. Map Component

## 목적

위치 안내

---

## 구성

```text
네이버 지도

주소

전화번호

길찾기 버튼
```

---

## 버튼

네이버 지도 보기

---

# 18. Footer Component

## 구성

```text
로고

슬로건

메뉴

전화번호

주소

SNS
```

---

## 배경

```css
#45362D
```

---

## 글자

```css
#FFFFFF
```

---

# 19. Floating Menu

## 위치

우측 하단

---

## 구성

```text
TOP

전화하기

예약하기

문의하기
```

---

## 동작

항상 노출

---

## Mobile

세로 배치

---

## Desktop

세로 배치

---

# 20. Badge Component

## 목적

강조 문구

---

## 예시

```text
피부 · 통증 · 체형관리 전문센터
```

---

## 스타일

```css
background: #F5E8D6;
color: #B59665;
border-radius: 999px;
```

---

# 21. CTA Banner Component

## 목적

예약 유도

---

## 위치

프로그램 하단

후기 하단

페이지 마지막

---

## 구성

```text
지금 예약하고
몸의 균형을 되찾아보세요.

[예약하기]
```

---

# 22. Empty State

## 목적

데이터가 없을 경우

---

## 예시

```text
등록된 후기가 없습니다.
```

---

# 23. Loading State

## 목적

페이지 로딩 처리

---

## 방식

Skeleton UI

---

## 적용

이미지

후기

FAQ

---

# 24. 반응형 기준

## Mobile

0 ~ 767px

---

## Tablet

768 ~ 1023px

---

## Desktop

1024px 이상

---

# 25. 최종 UI 원칙

### 버튼은 크게

### 텍스트는 짧게

### 예약 CTA는 반복적으로

### 모바일 우선

### 프리미엄 웰니스 느낌 유지

---

# 26. 이용안내 Section

## 목적

운영 방식, 상담 절차, 전문 케어 시스템, 브랜드 소개를 한눈에 전달

---

## 구성

```text
Section Title

Guide Info Card × 4
```

---

## Section Title

```text
SUB TITLE

이용안내

고객 한 분 한 분께 집중하는 프리미엄 케어
```

---

## Guide Info Card

### 목적

이용안내 하위 항목 단위 정보 블록

---

### 구조

```text
아이콘 (선택)

제목

본문
```

---

### Desktop

2열 Grid

---

### Mobile

1열

---

## 운영 안내

```text
운영 안내

고객 한 분 한 분께 집중하기 위해
100% 예약제로 운영됩니다.

당일 예약은 최소 2시간 전 연락 주시면
안내해 드리고 있습니다.
```

---

## 상담 안내

```text
상담 안내

네이버 "고운피부통증케어" 플레이스 및 블로그를
참고하신 후 방문하시면

고객님의 현재 상태와 고민에 맞는
더 깊이 있는 상담이 가능합니다.
```

---

## 전문 케어 시스템

```text
전문 케어 시스템

2인의 전문 공동원장이 직접 케어

여성 원장 2명

원하는 테라피스트 선택 가능
```

---

## 브랜드 소개

```text
브랜드 소개

통증은 풀고

얼굴 라인은 살리는

프리미엄 에너지 테라피 전문샵
고운피부통증케어입니다.

단순한 힐링이 아닌

즉각 체감되는 통증 완화

얼굴 탄력 및 리프팅

목, 어깨, 허리 집중 케어

전신 순환 및 림프 관리

1:1 맞춤 케어를 제공합니다.
```

---

## 스타일

```css
background: #FFFFFF;
border-radius: 24px;
box-shadow: 0 10px 30px rgba(0,0,0,0.08);
padding: 32px;
```

---

# 27. 시설 안내 Section

## 목적

시설 제공·비제공 항목을 명확히 안내하여 방문 전 기대치 조율

---

## 구성

```text
Section Title

시설 테마

Facility List (제공 / 비제공)
```

---

## Section Title

```text
SUB TITLE

시설 안내

방문 전 확인하시면 더 편안한 케어가 가능합니다.
```

---

## 시설 테마

```text
제공 시설 · 비제공 시설
```

---

## Facility List

### 목적

시설 항목 목록 표시

---

### 구조

```text
제목 (제공 시설 / 비제공 시설)

항목 리스트
```

---

### Desktop

2열 (제공 | 비제공)

---

### Mobile

1열 (제공 → 비제공 순)

---

## 제공 시설

```text
커플 관리 가능

주차 가능

1인 관리실 운영

남녀 공용 상담 가능
```

---

## 비제공 시설

```text
샤워실 없음

수면실 없음

남성 전용실 없음

여성 전용실 없음

단체실 없음
```

---

## 아이콘

제공 시설

```text
✓ (체크)
```

---

비제공 시설

```text
✕ (없음 표시)
```

---

## 스타일

```css
제공 시설 색상: #B59665;
비제공 시설 색상: #999999;
border-radius: 24px;
```

---

# UI 한 줄 정의

"고급스럽지만 어렵지 않은 예약 중심 UI"