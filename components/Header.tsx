// components/Header.tsx
export default function Header(){
  return (
    <header className="container pt-10">
      <div className="flex items-center justify-between">
        <div className="text-xl font-extrabold tracking-tight">FilmMoods</div>
        {/* Change this line: */}
        <a
          className="text-sm text-slate-300 hover:text-white"
          href="https://github.com/Buman-Erdem/FilmMoods"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
      </div>
      {/* ... */}
    </header>
  );
}
