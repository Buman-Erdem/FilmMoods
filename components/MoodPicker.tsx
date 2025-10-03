
'use client'
import React from 'react'
const labels = ['happy','calm','inspired','intense','cozy','melancholic'] as const
export default function MoodPicker({ value, onChange }:{ value:number[], onChange:(v:number[])=>void }){
  return (
    <div className="card p-6 shadow-glass">
      <div className="text-lg font-semibold">Pick your mood</div>
      <p className="mt-1 text-sm text-dim">Adjust the vibe — results update live.</p>
      <div className="mt-4 grid gap-4 md:grid-cols-2">
        {labels.map((lab, idx)=>(
          <label key={lab} className="flex items-center gap-3 text-sm">
            <div className="w-28 capitalize text-slate-200">{lab}</div>
            <input type="range" min={0} max={1} step={0.01} value={value[idx]}
              onChange={e=>{ const v=[...value]; v[idx]=Number(e.target.value); onChange(v) }} className="w-full"/>
            <div className="w-12 text-right tabular-nums">{value[idx].toFixed(2)}</div>
          </label>
        ))}
      </div>
      <div className="mt-4 flex flex-wrap gap-2 text-xs">
        <button onClick={()=>onChange([0.9,0.55,0.75,0.25,0.75,0.25])} className="badge">Feel‑good</button>
        <button onClick={()=>onChange([0.35,0.92,0.5,0.14,0.98,0.3])} className="badge">Chill & Cozy</button>
        <button onClick={()=>onChange([0.25,0.3,0.7,0.97,0.25,0.88])} className="badge">High‑octane</button>
        <button onClick={()=>onChange([0.55,0.6,0.9,0.35,0.6,0.55])} className="badge">Thought‑provoking</button>
      </div>
    </div>
  )
}
