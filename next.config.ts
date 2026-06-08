import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Cloudflare Pages 정적 배포: out 디렉토리로 export
  output: "export",
  trailingSlash: true,
  images: {
    // 정적 export 환경에서는 Next 이미지 최적화 서버가 없으므로 비활성화
    unoptimized: true,
  },
};

export default nextConfig;
