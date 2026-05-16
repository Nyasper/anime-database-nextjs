'use client';
import Link from 'next/link';
import { useFavorites } from '@/app/hooks/useFavorites';
import MediaList from '@/app/components/MediaList';
import { useLanguage } from '../context/LanguageContext';

export default function FavoritesPage() {
  const { favorites } = useFavorites();
  const { lang } = useLanguage();

  const textTitle = lang === 'en' ? "Your Favorites" : "Tus Favoritos";
  const textNoFavorites = lang === 'en' ? "No Favorites Added" : "Aún no hay favoritos";
  const textExplore = lang === 'en'
    ? "Explore our database and add your favorite animes and mangas to this list!"
    : "¡Explora nuestra base de datos y añade tus animes y mangas favoritos a esta lista!";
  const textStart = lang === 'en' ? "Start Exploring" : "Empezar a Explorar";

  return favorites.length ? (
    <MediaList
      data={favorites}
      title={textTitle}
      className="my-28"
    />
  ) : (
    <div className="flex flex-col items-center p-12 gap-6 glass w-max mx-auto my-40 rounded-2xl border border-sky-400/20">
      <h2 className="py-2 text-4xl font-bold text-sky-400">
        {textNoFavorites}
      </h2>
      <p className="text-gray-300 text-center max-w-xs">
        {textExplore}
      </p>
      <Link
        className="bg-sky-400 hover:bg-sky-300 transition-colors px-8 py-2 rounded-full text-xl text-black font-bold shadow-lg shadow-sky-400/20"
        href={'/animes/all/POPULARITY_DESC-1'}
      >
        {textStart}
      </Link>
    </div>
  );
}
