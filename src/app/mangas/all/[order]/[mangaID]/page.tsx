import { getMediaInfoByID } from '@/app/utils/aniListAPI';
import MediaInfo from '@/app/components/MediaInfo';
import CharactersContainer from '@/app/components/CharactersContainer';

export default async function MangaPage({ params }: PageProps) {
  const { mangaID, order } = await params;

  const { Page } = await getMediaInfoByID(mangaID, 1);

  return (
    <div className="pb-10">
      <MediaInfo Page={Page} />

      <CharactersContainer mediaID={mangaID} order={order} mediaType="mangas" />
    </div>
  );
}

interface PageProps {
  params: Promise<{
    order: string;
    mangaID: number;
  }>;
}
