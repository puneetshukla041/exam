"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useToast } from "./ToastProvider";

export default function PracticeBuilder() {
  const [form, setForm] = useState({ mode:'random', paper:'', subject:'', topic:'', difficulty:'', limit:25 });
  const router = useRouter();
  const toast = useToast();
  const build = async () => {
    const payload:any = { ...form, limit:Number(form.limit) };
    Object.keys(payload).forEach(k=>payload[k]==='' && delete payload[k]);
    const res = await fetch('/api/practice/build', { method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify(payload) });
    const json = await res.json();
    if (!res.ok) return toast.push(json.message || 'Could not build practice', 'error');
    const start = await fetch('/api/attempts', { method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify({ testId: json.data.test._id, mode: payload.mode }) });
    const started = await start.json();
    if (!start.ok) return toast.push('Practice built but attempt failed', 'error');
    router.push(`/attempt/${started.data.attempt._id}`);
  };
  return <div className="card max-w-3xl p-6"><p className="text-base font-medium">Practice Mode Builder</p><p className="mt-2 text-muted">Create topic-wise, weak-topic, or random quizzes from uploaded question bank.</p><div className="mt-6 grid gap-4 md:grid-cols-2"><label className="font-bold">Mode<select value={form.mode} onChange={e=>setForm({...form, mode:e.target.value})} className="mt-2 w-full rounded-xl border px-4 py-3" style={{background:'var(--panel-2)',borderColor:'var(--border)'}}><option value="random">Random Quiz</option><option value="topic">Topic-wise Practice</option><option value="weak">Weak-topic Practice</option></select></label><label className="font-bold">Paper<select value={form.paper} onChange={e=>setForm({...form, paper:e.target.value})} className="mt-2 w-full rounded-xl border px-4 py-3" style={{background:'var(--panel-2)',borderColor:'var(--border)'}}><option value="">Any</option><option value="paper1">Paper 1</option><option value="paper2">Paper 2</option></select></label><label className="font-bold">Subject<input value={form.subject} onChange={e=>setForm({...form, subject:e.target.value})} placeholder="Rajasthan GK" className="mt-2 w-full rounded-xl border px-4 py-3" style={{background:'var(--panel-2)',borderColor:'var(--border)'}}/></label><label className="font-bold">Topic<input value={form.topic} onChange={e=>setForm({...form, topic:e.target.value})} placeholder="DBMS / Lakes / OS" className="mt-2 w-full rounded-xl border px-4 py-3" style={{background:'var(--panel-2)',borderColor:'var(--border)'}}/></label><label className="font-bold">Difficulty<select value={form.difficulty} onChange={e=>setForm({...form, difficulty:e.target.value})} className="mt-2 w-full rounded-xl border px-4 py-3" style={{background:'var(--panel-2)',borderColor:'var(--border)'}}><option value="">Any</option><option value="easy">Easy</option><option value="medium">Medium</option><option value="hard">Hard</option></select></label><label className="font-bold">Question Count<input type="number" min="5" max="100" value={form.limit} onChange={e=>setForm({...form, limit:Number(e.target.value)})} className="mt-2 w-full rounded-xl border px-4 py-3" style={{background:'var(--panel-2)',borderColor:'var(--border)'}}/></label></div><button onClick={build} className="mt-6 rounded-2xl bg-blue-600 px-5 py-3 font-medium text-white">Build Practice Test</button></div>;
}
