'use client';
import Image from 'next/image';
import Link from 'next/link';
import FavoriteButton from '@/app/components/FavoriteButton';
import { useFavorites } from '@/app/hooks/useFavorites';

export default function FavoritesPage() {
  const { favorites } = useFavorites();

  return favorites.length ? (
    <div className="flex flex-col items-center px-8 py-4 glass w-11/12 mx-auto my-28 rounded-xl">
      <h2 className="text-4xl text-center py-2 mb-8 text-glow font-bold">
        Your Favorites
      </h2>
      <ul className="flex flex-wrap justify-center items-start gap-10 mt-8 mb-8 rounded-xl">
        {favorites.map((fav) => (
          <li
            key={fav.id}
            className="flex flex-col gap-3 items-center w-56 h-auto"
          >
            <span
              className="h-12 flex items-center justify-center overflow-hidden text-center font-medium line-clamp-2 px-2"
              title={fav.title.romaji}
            >
              {fav.title.romaji}
            </span>
            <Link
              className="w-56 h-80 relative glass-glow rounded-xl overflow-hidden group"
              href={`/${fav.type.toLowerCase().concat('s')}/all/POPULARITY_DESC/${fav.id}`}
            >
              <Image
                src={fav.coverImage.large}
                fill
                priority
                sizes="230"
                alt={`${fav.title.romaji} image`}
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </Link>
            <FavoriteButton mediaInfo={fav} />
          </li>
        ))}
      </ul>
    </div>
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
