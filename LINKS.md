# 외부 링크 체크리스트 (운영자용)

사이트의 모든 외부 링크(예약·문의·SNS·지도)는 **`src/data/links.ts` 한 파일**에서 관리합니다.
현재는 모두 **임시 주소(placeholder)** 이며, 실제 주소로 교체 후 `git push` 하면 Cloudflare Pages가 자동 재배포합니다.

## 교체가 필요한 링크 목록

| 키 | 용도 | 현재(임시) 값 | 실제 주소 확보 방법 | 사이트 내 사용 위치 |
| --- | --- | --- | --- | --- |
| `reservation` | 네이버 예약 | ✅ 네이버 지도 플레이스 예약(place/2049660612) (확정) | 네이버 스마트플레이스 → 예약 설정 후 발급되는 예약 페이지 URL | 헤더 · 히어로 · 각 섹션 "예약하기" 버튼 · 플로팅 메뉴 |
| `kakao` | 카카오톡 채널 문의 | `https://pf.kakao.com/` | 카카오톡 채널 관리자센터 → 채널 홈 URL (`https://pf.kakao.com/_XXXXXX`) | 히어로 "카카오톡 문의" · 플로팅 메뉴 |
| `instagram` | 인스타그램 | ✅ `https://www.instagram.com/goun_skin__pain_care/` (확정) | 매장 인스타그램 계정 프로필 URL | 푸터 |
| `blog` | 네이버 블로그 | ✅ `https://blog.naver.com/kby8026` (확정) | 매장 네이버 블로그 URL | 푸터 |
| `map` | 네이버 지도 | ✅ 네이버 지도 플레이스(place/2049660612) (확정) | 네이버 지도에서 매장 검색 → 공유 → 단축 URL(`https://naver.me/...`) 권장 | 오시는 길(Location) "네이버 지도" 버튼 |

## 교체 방법

1. `src/data/links.ts` 열기
2. 각 항목의 `"https://..."` 값을 실제 주소로 교체 (주석의 `TODO` 제거)
3. 저장 후:
   ```bash
   git add src/data/links.ts
   git commit -m "chore: update external links to real URLs"
   git push
   ```
4. Cloudflare Pages가 `main` 푸시를 감지해 자동 빌드·배포 (약 1~2분)

## 참고

- 전화번호·주소·운영시간 등 대표 정보는 `src/data/site.ts` 에서 별도 관리합니다.
- 링크는 모두 `target="_blank"`(새 탭) + `rel="noopener noreferrer"` 로 열리도록 컴포넌트에서 처리됩니다.
