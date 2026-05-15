import { getMediaInfoByID } from '@/app/utils/aniListAPI';
import MediaInfo from '@/app/components/MediaInfo';
import CharactersContainer from '@/app/components/CharactersContainer';

export default async function AnimePage({ params }: PageProps) {
  const { animeID, order } = await params;

  const { Page } = await getMediaInfoByID(animeID, 1);

  return (
    <div className="pb-10">
      <MediaInfo Page={Page} />

      <CharactersContainer mediaID={animeID} order={order} mediaType="animes" />
    </div>
  );
}

interface PageProps {
  params: Promise<{
    order: string;
    animeID: number;
  }>;
}
