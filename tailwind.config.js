/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", // index.html도 포함하는 것이 좋습니다.
    "./src/**/*.{js,jsx,ts,tsx}", // src 폴더 내 모든 관련 파일
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
