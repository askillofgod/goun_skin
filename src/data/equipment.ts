// 대표 장비 데이터 — 07_CONTENT_STRATEGY #7
export interface Equipment {
  name: string;
  description: string;
  image: string;
}

export const equipment: Equipment[] = [
  {
    name: "인비덤맥스",
    description:
      "심부열 에너지를 활용해 몸의 이완과 순환 관리를 돕는 장비입니다. 통증 완화와 회복 관리에 활용됩니다.",
    image: "/images/equipment/invedum-max.png",
  },
  {
    name: "더조각 에너지 테라피",
    description:
      "얼굴 라인, 바디라인, 림프순환 관리에 활용되는 에너지 테라피 장비입니다. 피부 탄력과 체형 관리 프로그램에 함께 적용됩니다.",
    image: "/images/equipment/dearjogak.png",
  },
  {
    name: "전신돔",
    description:
      "몸을 따뜻하게 감싸 전신 순환과 이완을 돕는 관리 장비입니다. 피로감, 냉감, 순환 관리가 필요한 고객에게 추천됩니다.",
    image: "/images/equipment/fullbody-dome.png",
  },
];
