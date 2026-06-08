// 프로그램 데이터 (운영자 수정 영역) — 14_DEVELOPMENT_GUIDE #8
export interface Program {
  id: number;
  title: string;
  duration: string;
  price: string;
  description: string;
  target: string;
  image: string;
}

export const programs: Program[] = [
  {
    id: 1,
    title: "전신 돔 테라피",
    duration: "60분",
    price: "33,000원",
    description: "전신을 따뜻하게 이완시켜 순환과 컨디션 회복을 돕는 기본 관리입니다.",
    target: "몸이 무겁거나 피로감이 쌓인 분",
    image: "/images/programs/fullbody-dome.png",
  },
  {
    id: 2,
    title: "얼굴 리프팅 + 전신돔",
    duration: "60분",
    price: "55,000원",
    description: "얼굴 탄력 관리와 전신 순환 케어를 함께 받을 수 있는 프로그램입니다.",
    target: "얼굴 탄력과 붓기 관리가 필요한 분",
    image: "/images/programs/face-lifting-dome.png",
  },
  {
    id: 3,
    title: "바디 통증 집중케어",
    duration: "60분",
    price: "66,000원",
    description: "목, 어깨, 허리 등 불편한 부위를 중심으로 관리하는 통증 집중 프로그램입니다.",
    target: "특정 부위의 뻐근함과 불편함이 있는 분",
    image: "/images/programs/body-pain-care.png",
  },
  {
    id: 4,
    title: "얼굴 리프팅 더조각케어",
    duration: "60분",
    price: "99,000원",
    description: "더조각 에너지 테라피를 활용해 얼굴 라인과 탄력 관리를 돕는 케어입니다.",
    target: "얼굴 라인, 탄력, 붓기 관리가 필요한 분",
    image: "/images/programs/face-dearjogak.png",
  },
  {
    id: 5,
    title: "더조각 바디 림프순환",
    duration: "60분",
    price: "99,000원",
    description: "림프순환과 바디라인 관리를 함께 진행하는 바디 집중 케어입니다.",
    target: "붓기, 순환, 바디라인 관리가 필요한 분",
    image: "/images/programs/body-lymph.png",
  },
  {
    id: 6,
    title: "프리미엄 케어 + 전신돔",
    duration: "120분",
    price: "149,000원",
    description: "통증, 순환, 체형관리 요소를 함께 구성한 프리미엄 관리 프로그램입니다.",
    target: "보다 깊은 전신 케어를 원하는 분",
    image: "/images/programs/premium-care.png",
  },
];
