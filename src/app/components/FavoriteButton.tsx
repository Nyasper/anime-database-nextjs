'use client';
import { Anime } from '@/app/utils/types';
import { useFavorites } from '@/app/hooks/useFavorites';
import { useLanguage } from '../context/LanguageContext';

export default function FavoriteButton(props: Props) {
  const { isFavorite, toggleFavorite } = useFavorites(props.mediaInfo);
  const { lang } = useLanguage();

  const textRemove = lang === 'en' ? 'Remove' : 'Quitar';
  const textAdd = lang === 'en' ? 'Add Favorite' : 'Añadir a Favoritos';

  return (
    <button
      className={`block mx-auto text-xs sm:text-sm px-3 py-1 rounded-lg transition-all duration-300 font-medium cursor-pointer hover:outline-2 ${isFavorite
          ? 'bg-red-600/20 text-red-400 border-red-500/30 hover:bg-red-600/40'
          : 'bg-sky-400 text-black hover:bg-sky-600 shadow-md shadow-sky-400/20'
        }`}
      onClick={() => toggleFavorite(props.mediaInfo)}
    >
      {isFavorite ? textRemove : textAdd}
    </button>
  );
}

interface Props {
  mediaInfo: Anime;
}
