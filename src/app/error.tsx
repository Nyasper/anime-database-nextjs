'use client';
import Link from 'next/link';
import { useLanguage } from './context/LanguageContext';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const { lang } = useLanguage();

  const texts = lang === 'en' ? {
    title: "Oops! Something went wrong",
    desc: "We encountered an unexpected error while loading this page.",
    btnHome: "Back to Home",
    btnRetry: "Try Again"
  } : {
    title: "¡Ups! Algo salió mal",
    desc: "Encontramos un error inesperado al cargar esta página.",
    btnHome: "Volver al Inicio",
    btnRetry: "Reintentar"
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 mt-20">
      <div className="glass p-8 md:p-12 rounded-4xl border border-red-500/20 shadow-2xl max-w-lg w-full flex flex-col items-center text-center gap-6 animate-in fade-in slide-in-from-bottom-8 duration-700">
        <div className="w-20 h-20 rounded-full bg-red-500/10 flex items-center justify-center border border-red-500/20 mb-2">
          <svg className="w-10 h-10 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        </div>

        <h1 className="text-3xl font-black text-white tracking-tight">
          {texts.title}
        </h1>

        <p className="text-slate-400 font-medium">
          {texts.desc}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mt-4 w-full">
          <button
            onClick={reset}
            className="px-8 py-3 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all font-bold text-slate-200 cursor-pointer"
          >
            {texts.btnRetry}
          </button>

          <Link
            href="/"
            className="px-8 py-3 rounded-2xl bg-sky-500 hover:bg-sky-400 text-black font-black transition-all shadow-lg shadow-sky-500/20 cursor-pointer"
          >
            {texts.btnHome}
          </Link>
        </div>
      </div>
    </div>
  );
}
