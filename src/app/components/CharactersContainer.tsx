'use client';

import { useEffect, useState } from 'react';
import { getMediaInfoByID } from '@/app/utils/aniListAPI';
import { getAnimeInfoByAnimeIdQuery } from '@/app/utils/types';
import CharactersList from './CharactersList';

interface Props {
  mediaID: number;
  order: string;
  mediaType: 'animes' | 'mangas';
}

export default function CharactersContainer({
  mediaID,
  order,
  mediaType,
}: Props) {
  const [pages, setPages] = useState<getAnimeInfoByAnimeIdQuery[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPages = async () => {
      try {
        const results = await Promise.all([
          getMediaInfoByID(mediaID, 1),
          getMediaInfoByID(mediaID, 2),
          getMediaInfoByID(mediaID, 3),
        ]);

        setPages(results);
      } catch (error) {
        console.error('Error loading characters:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchPages();
  }, [mediaID]);

  return loading ? (
    <div className="flex flex-col items-center justify-center py-20 gap-4">
      <div className="w-12 h-12 border-4 border-sky-400 border-t-transparent rounded-full animate-spin"></div>
      <p className="text-xl text-glow font-medium">Loading Characters...</p>
    </div>
  ) : (
    <div className="animate-in fade-in duration-700">
      {pages.map((data, index) => (
        <CharactersList
          key={`${mediaID}-page-${index + 1}`}
          Page={data.Page}
          mediaID={mediaID}
          order={order}
          characterPage={index + 1}
          mediaType={mediaType}
        />
      ))}
    </div>
  );
}
