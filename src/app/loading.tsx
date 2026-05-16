'use client';
import { useLanguage } from './context/LanguageContext';

export default function Loading() {
  const { lang } = useLanguage();
  const text = lang === 'en' ? 'Loading...' : 'Cargando...';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/20 backdrop-blur-sm">
      <div className="glass p-10 rounded-3xl flex flex-col items-center gap-6 animate-in fade-in zoom-in duration-500">
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 border-4 border-sky-500/20 rounded-full"></div>
          <div className="absolute inset-0 border-4 border-sky-400 border-t-transparent rounded-full animate-spin"></div>
          <div className="absolute inset-0 blur-md border-4 border-sky-400 border-t-transparent rounded-full animate-spin opacity-50"></div>
        </div>
        <h1 className="text-2xl font-bold text-sky-400 tracking-widest animate-pulse">
          {text}
        </h1>
      </div>
    </div>
  );
}
