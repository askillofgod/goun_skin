import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/sections/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Design System #4 컬러 시스템
        primary: "#B59665", // 골드 브라운
        secondary: "#F7F3EC", // 크림 베이지
        accent: "#E7D8C5", // 소프트 베이지
        dark: "#45362D", // 다크 브라운
      },
      fontFamily: {
        sans: ["Pretendard", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "1200px",
        site: "1280px",
      },
      borderRadius: {
        card: "24px",
        pill: "999px",
      },
      boxShadow: {
        soft: "0 10px 30px rgba(69, 54, 45, 0.08)",
        card: "0 16px 40px rgba(69, 54, 45, 0.10)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
