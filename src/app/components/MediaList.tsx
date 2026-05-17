'use client';
import Image from 'next/image';
import { useLanguage } from '../context/LanguageContext';
import { formatOrderString } from '@/app/utils/formatters';
import Link from 'next/link';
import { Anime, animeOrder } from '@/app/utils/types';
import SearchFormComponent from '@/app/animes/search/searchFormComponent';
import FavoriteButton from '@/app/components/FavoriteButton';

interface Props {
  data: Anime[];
  title: string;
  order?: animeOrder | string;
  baseRoute?: string;
  searchAction?: (formData: FormData) => void;
  fallbackImage?: string;
  className?: string;
}

export default function MediaList({
  data,
  title,
  order = 'POPULARITY_DESC',
  baseRoute,
  searchAction,
  fallbackImage = '/cover-image.png',
  className = "sm:mt-12 mb-8"
}: Props) {
  const { lang } = useLanguage();

  // Si el título es el mismo que el generado por defecto en inglés a partir del order,
  // lo re-traducimos con el idioma actual. Si no, usamos el título proporcionado (ej. "Tus Favoritos").
  const isOrderTitle = order && title === formatOrderString(order, 'en');
  const displayTitle = isOrderTitle ? formatOrderString(order, lang) : title;

  return (
    <div className={`flex flex-col xl:p-8 glass w-11/12 max-xl:w-full mx-auto ${className} xl:rounded-[3rem] border border-white/10 shadow-2xl backdrop-blur-3xl bg-slate-900/60 overflow-hidden`}>
      <div className="flex flex-col sm:flex-row w-full items-center justify-between gap-6 px-6 sm:px-12 py-8 border-b border-white/5 mb-4">
        <h2 className="text-3xl sm:text-4xl text-glow font-black tracking-tighter bg-linear-to-b from-white to-slate-400 bg-clip-text">
          {displayTitle}
        </h2>
        {searchAction && (
          <div className="w-full sm:max-w-sm">
            <SearchFormComponent action={searchAction} />
          </div>
        )}
      </div>
      <ul className="flex flex-wrap justify-center items-start gap-4 sm:gap-10 p-4 sm:p-8">
        {data.map((media: Anime) => {
          const typeRoute = media.type === 'ANIME' ? '/animes' : '/mangas';
          const finalRoute = baseRoute || typeRoute;

          return (
            <li
              key={media.id}
              className="flex flex-col gap-2 sm:gap-3 items-center w-[44%] sm:w-48 lg:w-56 h-auto transition-all"
            >
              <span
                className="h-10 sm:h-12 flex items-center justify-center overflow-hidden text-center font-bold text-[10px] sm:text-sm line-clamp-2 px-1 text-slate-300 opacity-80"
                title={media.title.romaji}
              >
                {media.title.romaji}
              </span>
              <Link
                className="w-full aspect-2/3 relative glass-glow rounded-xl overflow-hidden group shadow-lg"
                href={`${finalRoute}/all/${order}/${media.id}`}
              >
                <Image
                  src={media.coverImage.large || fallbackImage}
                  fill
                  priority
                  unoptimized
                  sizes="(max-width: 640px) 45vw, 230px"
                  alt={`${media.title.romaji} image`}
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
              <div className="w-full mt-1">
                <FavoriteButton mediaInfo={media} />
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
