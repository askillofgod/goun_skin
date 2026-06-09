// 외부 링크 관리 (운영자 수정 영역) — 14_DEVELOPMENT_GUIDE #19
//
// ⚠️ 아래 값은 모두 "임시(placeholder)" 주소입니다.
//    실제 채널 주소가 확정되면 각 항목을 교체한 뒤 `git push` 하면 자동 배포됩니다.
//    필요한 실제 링크 목록 / 확보 방법은 프로젝트 루트의 LINKS.md 참고.
export const links = {
  // 네이버 예약 페이지 (예: https://booking.naver.com/booking/XX/bizes/XXXXXXX)
  reservation: "https://booking.naver.com/", // TODO: 실제 네이버 예약 URL
  // 카카오톡 채널 (예: https://pf.kakao.com/_XXXXXX)
  kakao: "https://pf.kakao.com/", // TODO: 실제 카카오톡 채널 URL
  // 인스타그램 (예: https://instagram.com/goun_skin)
  instagram: "https://instagram.com/", // TODO: 실제 인스타그램 계정 URL
  // 네이버 블로그 (예: https://blog.naver.com/goun_skin)
  blog: "https://blog.naver.com/", // TODO: 실제 네이버 블로그 URL
  // 네이버 지도 (예: https://naver.me/XXXXXXXX 단축 URL 권장)
  map: "https://map.naver.com/", // TODO: 실제 매장 네이버 지도 URL
} as const;
