import type { NextConfig } from "next";

// GitHub Pages(하위 경로 배포)에서는 NEXT_PUBLIC_BASE_PATH=/goun_skin 로 빌드.
// Cloudflare Pages(루트 도메인) 및 로컬에서는 미설정 → 루트("")로 동작.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = {
  // Cloudflare Pages / GitHub Pages 정적 배포: out 디렉토리로 export
  output: "export",
  trailingSlash: true,
  basePath,
  images: {
    // 정적 export 환경에서는 Next 이미지 최적화 서버가 없으므로 비활성화
    unoptimized: true,
  },
};

export default nextConfig;
