export function cosine(a:number[],b:number[]){const d=a.reduce((s,x,i)=>s+x*b[i],0);const na=Math.hypot(...a);const nb=Math.hypot(...b);return d/(na*nb)}
