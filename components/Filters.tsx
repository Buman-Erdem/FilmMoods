
'use client'
export default function Filters({ yearMin, setYearMin, yearMax, setYearMax, q, setQ }:{
  yearMin:number; setYearMin:(n:number)=>void;
  yearMax:number; setYearMax:(n:number)=>void;
  q:string; setQ:(s:string)=>void;
}){
  return (
    <div className="card p-6 shadow-soft">
      <div className="text-lg font-semibold">Filters</div>
      <div className="mt-3 grid grid-cols-1 gap-3 md:grid-cols-3">
        <div>
          <div className="text-xs text-slate-400">Year min</div>
          <input type="number" value={yearMin} onChange={e=>setYearMin(Number(e.target.value)||0)} className="mt-1 w-full rounded-xl bg-slate-800 px-3 py-2 text-sm ring-1 ring-white/10"/>
        </div>
        <div>
          <div className="text-xs text-slate-400">Year max</div>
          <input type="number" value={yearMax} onChange={e=>setYearMax(Number(e.target.value)||0)} className="mt-1 w-full rounded-xl bg-slate-800 px-3 py-2 text-sm ring-1 ring-white/10"/>
        </div>
        <div>
          <div className="text-xs text-slate-400">Search title/genre</div>
          <input value={q} onChange={e=>setQ(e.target.value)} placeholder="e.g., noir, heist, romance, war, sci‑fi…"
            className="mt-1 w-full rounded-xl bg-slate-800 px-3 py-2 text-sm ring-1 ring-white/10"/>
        </div>
      </div>
    </div>
  )
}
