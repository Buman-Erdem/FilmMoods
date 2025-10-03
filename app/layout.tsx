import "./globals.css"
export const metadata = { title: "FilmMoods — Movies by mood", description: "Free, client‑side mood recommender for films." }
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="en"><body>{children}</body></html>)
}
