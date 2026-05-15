'use client';
import Link from 'next/link';
import { useFavorites } from '@/app/hooks/useFavorites';
import MediaList from '@/app/components/MediaList';

export default function FavoritesPage() {
  const { favorites } = useFavorites();

  return favorites.length ? (
    <MediaList 
      data={favorites} 
      title="Your Favorites" 
      className="my-28"
    />
  ) : (
    <div className="flex flex-col items-center p-12 gap-6 glass w-max mx-auto my-40 rounded-2xl border border-sky-400/20">
      <h2 className="py-2 text-4xl text-glow font-bold text-sky-400">
        No Favorites Added
      </h2>
      <p className="text-gray-300 text-center max-w-xs">
        Explore our database and add your favorite animes and mangas to this
        list!
      </p>
      <Link
        className="bg-sky-400 hover:bg-sky-300 transition-colors px-8 py-2 rounded-full text-xl text-black font-bold shadow-lg shadow-sky-400/20"
        href={'/animes/all/POPULARITY_DESC-1'}
      >
        Start Exploring
      </Link>
    </div>
  );
}
