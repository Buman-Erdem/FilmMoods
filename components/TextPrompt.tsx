'use client';
import React from 'react';

/** 6D mood vector: [happy, calm, inspired, intense, cozy, melancholic] */
const MAP: Record<string, number[]> = {
  happy:[0.9,0.5,0.75,0.25,0.7,0.2], joyful:[0.9,0.5,0.8,0.25,0.65,0.2], uplifting:[0.9,0.5,0.8,0.25,0.6,0.2],
  cozy:[0.5,0.9,0.5,0.12,0.98,0.25], chill:[0.45,0.95,0.5,0.12,0.95,0.25], relaxing:[0.45,0.95,0.5,0.12,0.95,0.25],
  romantic:[0.8,0.65,0.7,0.25,0.75,0.45], love:[0.8,0.65,0.7,0.25,0.75,0.45], romcom:[0.85,0.6,0.65,0.2,0.75,0.35],
  bittersweet:[0.55,0.55,0.6,0.3,0.6,0.85], sad:[0.35,0.45,0.5,0.35,0.45,0.9],
  intense:[0.25,0.25,0.7,0.97,0.2,0.8], action:[0.35,0.35,0.7,0.9,0.3,0.65], adrenaline:[0.3,0.3,0.65,0.98,0.25,0.7],
  suspense:[0.35,0.5,0.6,0.9,0.35,0.75], thriller:[0.35,0.5,0.6,0.9,0.35,0.75], horror:[0.25,0.35,0.5,0.92,0.25,0.92],
  noir:[0.35,0.55,0.6,0.75,0.4,0.85], crime:[0.35,0.5,0.6,0.8,0.4,0.75], heist:[0.45,0.5,0.7,0.85,0.4,0.6],
  epic:[0.6,0.55,0.85,0.7,0.5,0.45], war:[0.35,0.45,0.7,0.9,0.35,0.75], inspirational:[0.75,0.55,0.95,0.35,0.6,0.45],
  nostalgic:[0.7,0.7,0.6,0.25,0.75,0.5], wholesome:[0.85,0.7,0.6,0.2,0.85,0.35],
  surreal:[0.55,0.6,0.8,0.45,0.5,0.6], weird:[0.5,0.55,0.75,0.45,0.45,0.65],
  classic:[0.6,0.6,0.65,0.4,0.6,0.55], oscar:[0.55,0.55,0.8,0.4,0.55,0.6],
  biography:[0.55,0.6,0.7,0.35,0.55,0.6], sports:[0.7,0.55,0.8,0.5,0.6,0.45],
  scifi:[0.55,0.55,0.8,0.55,0.5,0.5], 'sci-fi':[0.55,0.55,0.8,0.55,0.5,0.5], sci:[0.55,0.55,0.8,0.55,0.5,0.5],
  'slow burn':[0.45,0.8,0.75,0.35,0.6,0.65], philosophical:[0.5,0.65,0.9,0.35,0.55,0.6], existential:[0.45,0.6,0.85,0.35,0.5,0.7],
  revenge:[0.35,0.45,0.6,0.9,0.35,0.7], funny:[0.9,0.55,0.6,0.3,0.65,0.25], comedy:[0.9,0.55,0.6,0.3,0.65,0.25]
};

function tokenize(t: string) {
  return t.toLowerCase().replace(/-/g, ' ')
    .split(/[^a-z ]+/g)
    .filter(Boolean);
}
function avg(vecs: number[][]) {
  const n = vecs.length;
  const sums = vecs[0].map((_, i) => vecs.reduce((a, v) => a + v[i], 0));
  return sums.map(x => x / n);
}

function keywordToVec(word: string): number[] | null {
  if (MAP[word]) return MAP[word];

  // special cases/aliases
  if (word === 'love') return MAP['romantic'];
  if (word === 'feelgood' || word === 'feel-good') return MAP['happy'];
  if (word === 'feel' || word === 'good') return null; // ignore split "feel good"
  if (word === 'fi') return MAP['sci-fi'];

  // prefix/fuzzy-lite match
  const key = Object.keys(MAP).find(k => k.startsWith(word));
  return key ? MAP[key] : null;
}

export default function TextPrompt({ onVector }: { onVector: (v: number[]) => void }) {
  const [text, setText] = React.useState('');
  const [msg, setMsg] = React.useState(
    'Type a vibe (e.g., "cozy romance", "noir heist", "epic war", "feelgood"). Press Enter to apply.'
  );

  function toVec(t: string) {
    const words = tokenize(t);
    const found: number[][] = [];
    for (const w of words) {
      const v = keywordToVec(w);
      if (v) found.push(v);
    }
    return found.length ? avg(found) : null;
  }

  function apply() {
    const v = toVec(text);
    if (v) {
      onVector(v);
      setMsg('Applied. Tweak sliders to refine.');
    } else {
      setMsg('No keywords recognized. Try: feelgood, cozy, romantic, action, suspense, noir, heist, epic, war, nostalgic, surreal…');
    }
  }

  return (
    <div className="card p-6 shadow-glass">
      <div className="text-lg font-semibold">Prompt</div>
      <p className="mt-1 text-sm text-dim">{msg}</p>
      <div className="mt-3 flex gap-2">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); apply(); } }}
          placeholder="e.g., cozy romance, noir heist, epic war, feelgood, nostalgic"
          className="w-full rounded-xl bg-white/5 px-3 py-2 text-sm ring-1 ring-white/10"
        />
        <button onClick={apply} className="btn btn-primary">Apply</button>
      </div>
    </div>
  );
}
