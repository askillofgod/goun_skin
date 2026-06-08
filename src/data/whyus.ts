// "왜 고운통증케어일까요?" 차별화 카드 — 07_CONTENT_STRATEGY #8
export interface WhyCard {
  icon: "balance" | "person" | "device" | "clock";
  title: string;
  description: string;
}

export const whyCards: WhyCard[] = [
  {
    icon: "balance",
    title: "피부 · 통증 · 체형 통합 관리",
    description: "피부만 보지 않고 몸의 균형과 순환까지 함께 관리합니다.",
  },
  {
    icon: "person",
    title: "1:1 맞춤 케어",
    description: "고객의 컨디션과 고민에 맞춰 필요한 프로그램을 제안합니다.",
  },
  {
    icon: "device",
    title: "전문 장비 활용",
    description: "인비덤맥스, 더조각, 전신돔 등 다양한 장비를 활용합니다.",
  },
  {
    icon: "clock",
    title: "늦은 시간 예약 가능",
    description: "오전 9시부터 밤 12시까지 운영하며, 주말과 공휴일도 예약 가능합니다.",
  },
];

// 신뢰도 카드 (Hero 하단) — 17_COPYWRITING_GUIDE #4
export const trustCards: string[] = [
  "100% 예약제 운영",
  "전문 공동원장 직접 관리",
  "주말 · 공휴일 예약 가능",
  "통증 · 피부 · 체형 통합관리",
];
