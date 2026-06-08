// FAQ 데이터 (운영자 수정 영역) — 14_DEVELOPMENT_GUIDE #9
export interface FAQ {
  question: string;
  answer: string;
}

export const faqs: FAQ[] = [
  {
    question: "예약 없이 방문 가능한가요?",
    answer:
      "예약 우선제로 운영됩니다. 방문 전 네이버 예약 또는 카카오톡 문의를 권장드립니다.",
  },
  {
    question: "주말에도 예약 가능한가요?",
    answer: "네, 토요일과 일요일도 예약 가능합니다.",
  },
  {
    question: "공휴일에도 운영하나요?",
    answer: "네, 공휴일도 예약 가능합니다.",
  },
  {
    question: "운영시간은 어떻게 되나요?",
    answer: "오전 9시부터 밤 12시까지 운영합니다.",
  },
  {
    question: "어떤 프로그램을 선택해야 할지 모르겠어요.",
    answer:
      "카카오톡 문의 또는 방문 상담을 통해 현재 상태에 맞는 프로그램을 안내받으실 수 있습니다.",
  },
  {
    question: "남성도 이용 가능한가요?",
    answer: "방문 가능 여부는 예약 전 문의를 권장드립니다.",
  },
];
