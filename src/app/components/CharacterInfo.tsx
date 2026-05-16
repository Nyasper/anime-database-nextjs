'use client';
import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import Link from 'next/link';
import { title, Type } from '@/app/utils/types';

interface InfoItemProps {
  label: string;
  value: React.ReactNode;
}

const InfoItem = ({ label, value }: InfoItemProps) => {
  if (!value) return null;
  return (
    <div className="flex flex-col gap-1 py-3 border-b border-white/5 last:border-0 w-full group">
      <span className="text-sky-400 font-bold uppercase text-[10px] tracking-[0.2em] opacity-60 group-hover:opacity-100 transition-opacity">
        {label}
      </span>
      <div className="text-slate-200 font-medium leading-relaxed">
        {value}
      </div>
    </div>
  );
};

export default function CharacterInfo({ props }: CharacterInfoProps) {
  const { name, gender, age, dateOfBirth, siteUrl, description, media } = props;
  const { lang } = useLanguage();

  const t = lang === 'en' ? {
    firstName: 'First Name',
    lastName: 'Last Name',
    nativeName: 'Native Name',
    gender: 'Gender',
    age: 'Age',
    dateOfBirth: 'Date of Birth',
    anilistUrl: 'Anilist URL',
    viewOnAnilist: 'View on AniList',
    biography: 'Biography',
    appearsIn: 'Appears in'
  } : {
    firstName: 'Nombre',
    lastName: 'Apellido',
    nativeName: 'Nombre Original',
    gender: 'Género',
    age: 'Edad',
    dateOfBirth: 'Fecha de Nacimiento',
    anilistUrl: 'URL de Anilist',
    viewOnAnilist: 'Ver en AniList',
    biography: 'Biografía',
    appearsIn: 'Aparece en'
  };

  return (
    <div className="flex flex-col gap-6 w-full animate-in fade-in slide-in-from-bottom-4 duration-1000">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-2">
        <InfoItem label={t.firstName} value={name.first} />
        <InfoItem label={t.lastName} value={name.last} />
        <InfoItem label={t.nativeName} value={name.native} />
        <InfoItem label={t.gender} value={gender} />
        <InfoItem label={t.age} value={age?.replace(/-$/, '')} />
        <InfoItem
          label={t.dateOfBirth}
          value={dateOfBirth.day ? `${dateOfBirth.day}/${dateOfBirth.month}` : null}
        />
        <div className="md:col-span-2">
          <InfoItem
            label={t.anilistUrl}
            value={siteUrl ? (
              <a
                href={siteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-400 hover:text-sky-300 transition-colors flex items-center gap-2 group/link w-max"
              >
                {t.viewOnAnilist}
                <svg className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            ) : null}
          />
        </div>
      </div>

      {description && (
        <div className="mt-4 p-8 rounded-4xl bg-white/3 border border-white/10 shadow-inner">
          <span className="text-sky-400 font-bold uppercase text-[10px] tracking-[0.3em] opacity-60 mb-6 block">
            {t.biography}
          </span>
          <div
            className="text-slate-300 leading-relaxed prose prose-invert prose-sky max-w-none text-sm md:text-base font-normal character-description"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        </div>
      )}

      {media?.nodes && media.nodes.length > 0 && (
        <div className="mt-4">
          <span className="text-sky-400 font-bold uppercase text-[10px] tracking-[0.3em] opacity-60 mb-6 block">
            {t.appearsIn}
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {media.nodes.map((item) => (
              <Link
                key={item.id}
                href={`${item.type === 'ANIME' ? '/animes' : '/mangas'}/all/POPULARITY_DESC-1/${item.id}`}
                className="flex items-center gap-4 p-4 rounded-3xl bg-white/3 border border-white/5 hover:border-sky-500/30 hover:bg-white/6 transition-all duration-300 group shadow-sm"
              >
                <div className="relative w-12 h-16 shrink-0 rounded-lg overflow-hidden shadow-md">
                  <img
                    src={item.coverImage.medium}
                    alt={item.title.romaji}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-slate-200 font-bold text-sm line-clamp-1 group-hover:text-sky-400 transition-colors">
                    {item.title.romaji || item.title.english}
                  </span>
                  <span className="text-slate-400 text-[10px] font-black uppercase tracking-[0.2em] mt-1 opacity-60">
                    {item.type}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

interface CharacterInfoProps {
  props: {
    id: number;
    name: {
      first: string;
      last: string;
      full: string;
      native: string;
    };
    gender: string;
    age: string;
    image: {
      medium: string;
      large: string;
    };
    dateOfBirth: {
      day: number;
      month: number;
    };
    siteUrl: string;
    description: string;
    media?: {
      nodes: {
        id: number;
        title: title;
        type: Type;
        coverImage: {
          medium: string;
        };
      }[];
    };
  };
}
