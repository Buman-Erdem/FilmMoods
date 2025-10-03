'use client'
import React from 'react'
import Header from '../components/Header'
import MoodPicker from '../components/MoodPicker'
import TextPrompt from '../components/TextPrompt'
import ResultCard from '../components/ResultCard'
import catalog from '../data/catalog.json'
import { rank } from '../lib/rank'

const DEFAULT=[0.8,0.6,0.68,0.32,0.66,0.36]

export default function Page(){
  const [vec,setVec]=React.useState<number[]>(DEFAULT)
  const ranked=rank((catalog as any[]),vec)

  return (
    <main className="relative">
      <div className="absolute inset-0 -z-10 glow" />
      <Header />
      <section className="container py-10">
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2 grid gap-6">
            <MoodPicker value={vec} onChange={setVec} />
            <TextPrompt onVector={setVec} />
          </div>
          <div className="card p-6 shadow-glass">
            <div className="text-lg font-semibold">How it works</div>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-dim">
              <li>Each film has a 6‑number “mood vector” derived from its genres.</li>
              <li>Your sliders or prompt update your own mood vector.</li>
              <li>We compute cosine similarity and rank results — client‑side only.</li>
            </ul>
          </div>
        </div>

        <div className="mt-10">
          <div className="flex items-end justify-between">
            <div>
              <h2 className="text-2xl font-semibold">Top matches</h2>
              <p className="mt-1 text-sm text-dim">Tweak the vibe or prompt to adjust.</p>
            </div>
            <div className="hidden text-xs text-dim md:block">Dataset: {(catalog as any[]).length} movies</div>
          </div>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {ranked.slice(0,72).map((it:any,idx:number)=>(<ResultCard item={it} key={it.title+idx}/>))}
          </div>
        </div>
      </section>
    </main>
  )
}
