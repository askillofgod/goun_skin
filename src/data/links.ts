// 외부 링크 관리 (운영자 수정 영역) — 14_DEVELOPMENT_GUIDE #19
//
// ⚠️ 아래 값은 모두 "임시(placeholder)" 주소입니다.
//    실제 채널 주소가 확정되면 각 항목을 교체한 뒤 `git push` 하면 자동 배포됩니다.
//    필요한 실제 링크 목록 / 확보 방법은 프로젝트 루트의 LINKS.md 참고.
export const links = {
  // 네이버 예약 페이지 (네이버 지도 플레이스 예약/티켓)
  reservation:
    "https://map.naver.com/p/search/%EA%B3%A0%EC%9A%B4%ED%94%BC%EB%B6%80%ED%86%B5%EC%A6%9D%EC%BC%80%EC%96%B4/place/2049660612?c=15.00,0,0,0,dh&placePath=/ticket?bk_query=%EA%B3%A0%EC%9A%B4%ED%94%BC%EB%B6%80%ED%86%B5%EC%A6%9D%EC%BC%80%EC%96%B4&entry=bmp&from=map&fromPanelNum=2&locale=ko&svcName=map_pcv5&searchText=%EA%B3%A0%EC%9A%B4%ED%94%BC%EB%B6%80%ED%86%B5%EC%A6%9D%EC%BC%80%EC%96%B4",
  // 카카오톡 채널 (예: https://pf.kakao.com/_XXXXXX)
  kakao: "https://pf.kakao.com/", // TODO: 실제 카카오톡 채널 URL
  // 인스타그램
  instagram: "https://www.instagram.com/goun_skin__pain_care/",
  // 네이버 블로그
  blog: "https://blog.naver.com/kby8026",
  // 네이버 지도 (매장 플레이스)
  map:
    "https://map.naver.com/p/entry/place/2049660612?c=15.00,0,0,0,dh&placePath=/home?from=map&fromPanelNum=1&additionalHeight=76&locale=ko&svcName=map_pcv5",
} as const;
