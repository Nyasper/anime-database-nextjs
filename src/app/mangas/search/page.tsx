export default async function mangaPages() {
  const linksOrders: LinkOrder[] = [
    {
      textContent: 'name',
      href: '/mangas/all/TITLE_ROMAJI-1',
    },
    {
      textContent: 'popularity',
      href: '/mangas/all/POPULARITY_DESC-1',
    },
    {
      textContent: 'numbers of chapters',
      href: '/mangas/all/EPISODES_DESC-1',
    },
  ];

  return (
    <div className="flex flex-col px-8 py-4 glass w-max mx-auto md:my-28 rounded-xl max-sm:w-full">
      <h1 className="text-2xl p-1 mb-4">Search Manga:</h1>
      <SearchFormComponent action={searchM} />
      <h2 className="text-lg mt-5">List manga by:</h2>
      <ul className="p-1 text-sky-400 text-lg">
        {linksOrders.map((link) => (
          <li key={link.href} className="px-1">
            <Link href={link.href} className="w-max">
              {link.textContent}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

interface LinkOrder {
  textContent: string;
  href: `${string}/${animeOrder}-1`;
}

import SearchFormComponent from '@/app/animes/search/searchFormComponent';
import searchM from './searchM';
import Link from 'next/link';
import { animeOrder } from '@/app/utils/types';
