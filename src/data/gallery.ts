// 공간소개 갤러리 — 11_CONTENT_MAP #9
export interface GalleryItem {
  src: string;
  alt: string;
  label: string;
}

export const gallery: GalleryItem[] = [
  { src: "/images/gallery/lobby.png", alt: "고운통증케어 입구 및 라운지", label: "입구 · 라운지" },
  { src: "/images/gallery/care-room.png", alt: "고운통증케어 관리실", label: "관리실" },
  { src: "/images/gallery/dome-room.png", alt: "고운통증케어 전신돔 장비실", label: "장비실" },
  { src: "/images/gallery/care-scene.png", alt: "고운통증케어 케어 장면", label: "케어 공간" },
  { src: "/images/gallery/consult-room.webp", alt: "고운통증케어 상담실", label: "상담실" },
  { src: "/images/gallery/powder-room.webp", alt: "고운통증케어 파우더룸", label: "파우더룸" },
];
