import Image from 'next/image';
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
  className = "mt-28 mb-8"
}: Props) {
  return (
    <div className={`flex flex-col flex-wrap xl:p-8 glass w-11/12 max-xl:w-full mx-auto max-lg:px-4 ${className} xl:rounded-xl max-sm:p-0 max-sm:rounded-none overflow-hidden`}>
      <div className="flex w-full min-w-full max-md:text-sm justify-between px-12 max-lg:flex-col max-lg:py-1">
        <h2 className="mt-5 text-4xl xl:text-center text-glow font-bold tracking-wide">
          {title}
        </h2>
        {searchAction && <SearchFormComponent action={searchAction} />}
      </div>
      <ul className="flex flex-wrap lg:justify-center lg:items-start gap-10 mt-8 mb-8 xl:rounded-xl max-xl:grid max-xl:place-items-center max-xl:m-0 max-xl:p-0 max-xl:grid-cols-4 max-lg:grid-cols-4 max-sm:grid-cols-2 max-lg:place-items-center max-lg:w-full">
        {data.map((media: Anime) => {
          const typeRoute = media.type === 'ANIME' ? '/animes' : '/mangas';
          const finalRoute = baseRoute || typeRoute;
          
          return (
            <li
              key={media.id}
              className="flex flex-col gap-3 items-center w-56 h-auto max-lg:w-40"
            >
              <span
                className="h-12 flex items-center justify-center overflow-hidden text-center font-medium line-clamp-2 px-2 overflow-visible"
                title={media.title.romaji}
              >
                {media.title.romaji}
              </span>
              <Link
                className="w-56 h-80 relative max-lg:w-40 max-lg:h-72 glass-glow rounded-xl overflow-hidden group"
                href={`${finalRoute}/all/${order}/${media.id}`}
              >
                <Image
                  src={media.coverImage.large || fallbackImage}
                  fill
                  priority
                  sizes="230"
                  alt={`${media.title.romaji} image`}
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </Link>
              <FavoriteButton mediaInfo={media} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
