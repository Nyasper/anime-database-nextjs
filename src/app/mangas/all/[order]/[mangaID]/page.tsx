import { getMediaInfoByID } from '@/app/utils/aniListAPI';
import MediaInfo from '@/app/components/MediaInfo';
import CharactersContainer from '@/app/components/CharactersContainer';
import { Suspense } from 'react';

export default async function MangaPage({ params }: PageProps) {
  const { mangaID, order } = await params;

  const { Page } = await getMediaInfoByID(mangaID, 1);

  return (
    <div className="pb-10">
      <MediaInfo Page={Page} />

      <Suspense
        fallback={
          <div className="flex flex-col items-center justify-center py-20">
            <div className="w-12 h-12 border-4 border-sky-500/20 border-t-sky-400 rounded-full animate-spin"></div>
          </div>
        }
      >
        <CharactersContainer mediaID={mangaID} order={order} mediaType="mangas" />
      </Suspense>
    </div>
  );
}

interface PageProps {
  params: Promise<{
    order: string;
    mangaID: number;
  }>;
}
