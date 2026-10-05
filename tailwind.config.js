/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: { navy: '#0b1f3a', navy2: '#13305a', gold: '#b8975a', mute: '#5d6b7a', line: '#e3e8ee', paper: '#f6f8fb' },
      fontFamily: { sans: ['"Hiragino Kaku Gothic ProN"', '"Noto Sans JP"', '"Noto Sans SC"', '"PingFang SC"', '"Microsoft YaHei"', 'Meiryo', 'system-ui', 'sans-serif'] },
    },
  },
  plugins: [],
};
