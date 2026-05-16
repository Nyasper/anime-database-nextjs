'use client';
import { useLanguage } from '../context/LanguageContext';

interface ClientAgeBadgeProps {
  age: string;
}

export default function ClientAgeBadge({ age }: ClientAgeBadgeProps) {
  const { lang } = useLanguage();
  const textAge = lang === 'en' ? 'Age' : 'Edad';

  return (
    <span className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold text-slate-300 uppercase tracking-widest">
      {textAge}: {age.replace(/-$/, '')}
    </span>
  );
}
