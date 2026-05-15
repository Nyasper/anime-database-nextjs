import MediaList from '@/app/components/MediaList';
import { getAllMedia } from '@/app/utils/aniListAPI';
import search from '../../all/[order]/search';
import { formatOrderString } from '@/app/utils/formatters';

export default async function GenrePage({ params }: PageProps) {
  const { genre } = await params;
  const genreName = decodeURIComponent(genre);
  const Animes = await getAllMedia('ANIME', 1, 50, 'POPULARITY_DESC', genreName);

  return (

    <MediaList
      data={Animes.Page.media}
      order="POPULARITY_DESC"
      title={`Genre: ${genreName} (${formatOrderString('POPULARITY_DESC')})`}
      baseRoute="/animes"
      searchAction={search}
      fallbackImage="/cover-image.png"
    />

  );
}

interface PageProps {
  params: Promise<{
    genre: string;
  }>;
}
