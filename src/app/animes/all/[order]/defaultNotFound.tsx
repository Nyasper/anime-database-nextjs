'use client';
import Link from 'next/link';
import { useLanguage } from '@/app/context/LanguageContext';

export default function DefaultNotFound() {
  const { lang } = useLanguage();

  const texts = lang === 'en' ? {
    title: "No Data Found",
    desc: "We couldn't find any results matching your request.",
    btn: "Go Back"
  } : {
    title: "Sin resultados",
    desc: "No pudimos encontrar datos que coincidan con tu búsqueda.",
    btn: "Volver"
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] px-4 mt-20">
      <div className="glass p-8 md:p-12 rounded-4xl border border-white/10 shadow-2xl max-w-lg w-full flex flex-col items-center text-center gap-6 animate-in fade-in zoom-in duration-700">
        <div className="w-20 h-20 rounded-full bg-sky-500/10 flex items-center justify-center border border-sky-500/20 mb-2">
          <svg className="w-10 h-10 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>

        <h1 className="text-4xl font-black text-white tracking-tighter">
          {texts.title}
        </h1>

        <p className="text-slate-400 font-medium leading-relaxed">
          {texts.desc}
        </p>

        <Link
          href="/"
          className="mt-4 px-10 py-3 rounded-2xl bg-sky-500 hover:bg-sky-400 text-black font-black transition-all shadow-lg shadow-sky-500/20 hover:scale-105 cursor-pointer"
        >
          {texts.btn}
        </Link>
      </div>
    </div>
  );
}
