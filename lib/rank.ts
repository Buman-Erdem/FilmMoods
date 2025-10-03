import {cosine} from './similarity';export function rank(items:any[],userVec:number[]){return items.map(it=>({...it,score:cosine(userVec,it.moodVec as number[])})).sort((a,b)=>b.score-a.score)}
