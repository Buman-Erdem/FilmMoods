
import type { Config } from "tailwindcss"
const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: { base:"#0B0F1A", surface:"rgba(17,23,37,.78)", headline:"#F3F4F6", body:"#D1D5DB", brand:"#A78BFA", brand2:"#22D3EE" },
      boxShadow: { glass:"0 12px 32px -12px rgba(0,0,0,.5)" },
      borderRadius: { xl2:"1.25rem" }
    },
  },
  plugins: [],
}
export default config
