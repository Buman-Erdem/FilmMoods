
export default function ResultCard({ item }:{ item:any }){
  return (
    <div className="card p-4 transition hover:-translate-y-[2px] hover:ring-indigo-400/40 ring-1 ring-white/10">
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="text-base font-semibold text-white">{item.title} <span className="text-xs text-slate-300">({item.year})</span></div>
          <div className="text-xs text-slate-200">{item.genres.join(', ')}</div>
        </div>
        <div className="rounded bg-white/8 px-2 py-1 text-xs text-white/90 ring-1 ring-white/15">Match {(item.score*100).toFixed(0)}%</div>
      </div>
    </div>
  )
}
