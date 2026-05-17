import { getMediaInfoByID } from '@/app/utils/aniListAPI';
import MediaInfo from '@/app/components/MediaInfo';
import CharactersContainer from '@/app/components/CharactersContainer';
import { Suspense } from 'react';

export default async function AnimePage({ params }: PageProps) {
  const { animeID, order } = await params;

  const { Page } = await getMediaInfoByID(animeID, 1);

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
        <CharactersContainer mediaID={animeID} order={order} mediaType="animes" />
      </Suspense>
    </div>
  );
}

interface PageProps {
  params: Promise<{
    order: string;
    animeID: number;
  }>;
}
