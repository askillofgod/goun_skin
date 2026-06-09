// 프로그램 데이터 (운영자 수정 영역) — 14_DEVELOPMENT_GUIDE #8
//
// 가격은 정가(originalPrice) 취소선 + 할인가(salePrice) 강조로 노출됩니다.
// 프로그램명/가격은 doc/07_CONTENT_STRATEGY.md, doc/11_CONTENT_MAP.md 와 동일하게 유지하세요.
export interface Program {
  id: number;
  no: string; // 화면 표기용 번호 ("01" ~ "09")
  title: string;
  duration: string; // 총 관리 시간
  composition?: string; // 구성(시간 배분) 한 줄 요약
  originalPrice: string; // 정가
  salePrice: string; // 할인가
  description: string;
  points?: string[]; // 핵심 포인트(있는 경우)
  image: string;
  featured?: boolean; // 시그니처/추천 강조
}

export const programs: Program[] = [
  {
    id: 1,
    no: "01",
    title: "전신 돔 테라피",
    duration: "60분",
    composition: "전신돔 60분",
    originalPrice: "66,000원",
    salePrice: "33,000원",
    description:
      "틀어진 골반과 허리 밸런스를 바로잡는 온열 및 바디라인 정돈 케어입니다.",
    points: [
      "골반 밸런스 정돈",
      "틀어진 바디를 바로잡는 케어",
      "온열 및 이온테라피 기능",
    ],
    image: "/images/programs/fullbody-dome.webp",
  },
  {
    id: 2,
    no: "02",
    title: "얼굴 리프팅 + 전신돔",
    duration: "60분",
    composition: "얼굴 리프팅 20분 + 전신돔 40분",
    originalPrice: "120,000원",
    salePrice: "55,000원",
    description:
      "고주파와 미세전류 에너지를 활용한 3D 윤곽 관리 시스템입니다.",
    image: "/images/programs/face-lifting-dome.webp",
  },
  {
    id: 3,
    no: "03",
    title: "바디 통증 집중 + 전신돔",
    duration: "60분",
    composition: "바디 통증 한 부위 20분 + 전신돔 40분",
    originalPrice: "150,000원",
    salePrice: "66,000원",
    description:
      "타깃별 통증 케어와 전신 온열 밸런스, 깊숙한 속근육 이완으로 완성되는 60분 관리입니다.",
    image: "/images/programs/body-pain-care.webp",
  },
  {
    id: 4,
    no: "04",
    title: "더조각 에너지테라피 + 전신돔",
    duration: "90분",
    composition: "얼굴·바디 기기관리 40분 + 전신돔 50분",
    originalPrice: "200,000원",
    salePrice: "99,000원",
    description:
      "얼굴·바디 기기관리 40분과 전신돔 50분, 총 90분 구성. 강력한 에너지 테라피로 노폐물과 독소 배출, 뭉친 근육 완화, 슬림한 바디라인 케어를 돕는 프리미엄 케어입니다.",
    image: "/images/programs/premium-care.webp",
  },
  {
    id: 5,
    no: "05",
    title: "더조각케어 얼굴 리프팅",
    duration: "60분",
    composition: "더조각 집중 60분",
    originalPrice: "200,000원",
    salePrice: "99,000원",
    description:
      "60분 동안 나노테라피와 리프팅 집중 케어로, 얼굴 리프팅 및 재생 관리를 돕는 얼굴 리프팅의 끝판왕 프로그램입니다.",
    image: "/images/programs/face-dearjogak.webp",
  },
  {
    id: 6,
    no: "06",
    title: "더조각 바디 림프순환",
    duration: "60분",
    composition: "기기관리 단독 60분 (전신돔 미포함)",
    originalPrice: "200,000원",
    salePrice: "99,000원",
    description:
      "꽉 막힌 바디를 풀어 통증은 잡고 라인은 조각하는 60분 집중 바디 케어. 전신돔 없이 기기관리만 1시간 집중 관리합니다.",
    image: "/images/programs/body-lymph.webp",
  },
  {
    id: 7,
    no: "07",
    title: "얼굴 + 바디 + 전신돔 풀코스",
    duration: "90분",
    composition: "얼굴·바디 기기관리 40분 + 전신돔 50분",
    originalPrice: "200,000원",
    salePrice: "99,000원",
    description:
      "얼굴·바디 기기관리 40분과 전신돔 테라피 50분, 총 90분 코스. 얼굴·바디·전신돔 풀코스 관리입니다.",
    image: "/images/programs/face-body-fullcourse.webp",
  },
  {
    id: 8,
    no: "08",
    title: "2시간 프리미엄 케어 + 전신돔",
    duration: "120분",
    composition: "얼굴·바디 기기관리 1시간 20분 + 전신돔 40분",
    originalPrice: "300,000원",
    salePrice: "149,000원",
    description:
      "2시간 동안 전신 집중 통증 케어. 얼굴·바디 기기관리 1시간 20분과 전신돔 테라피 40분으로 구성되는 프리미엄 케어입니다.",
    image: "/images/programs/premium-2h.webp",
  },
  {
    id: 9,
    no: "09",
    title: "3시간 시그니처 집중케어 + 전신돔",
    duration: "180분",
    composition: "전신 시그니처 180분",
    originalPrice: "500,000원",
    salePrice: "249,000원",
    description:
      "머리부터 발끝까지 전신 집중 통증 완화와 순환을 돕는 180분 시그니처 프로그램. 최상의 이온케어 맞춤 테라피의 조화로 회복과 이완을 돕는 프리미엄 케어입니다.",
    image: "/images/programs/signature-3h.webp",
    featured: true,
  },
];
