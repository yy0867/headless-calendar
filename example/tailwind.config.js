/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "../dist/**/*.{js,ts}" // 패키지의 컴파일된 파일도 포함
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}