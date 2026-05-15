import MediaList from '@/app/components/MediaList';
import { getAllMedia } from '@/app/utils/aniListAPI';
import { redirect } from 'next/navigation';
import { formatOrderString } from '@/app/utils/formatters';

export default async function GenrePage({ params }: PageProps) {
  const { genre } = await params;
  const genreName = decodeURIComponent(genre);

  async function search(formData: FormData) {
    'use server';
    const newSearchValue = formData.get('search');
    redirect(`/mangas/search/${newSearchValue}`);
  }

  const Mangas = await getAllMedia('MANGA', 1, 50, 'POPULARITY_DESC', genreName);

  return (
    <>
      <MediaList
        data={Mangas.Page.media}
        order="POPULARITY_DESC"
        title={`Genre: ${genreName} (${formatOrderString('POPULARITY_DESC')})`}
        baseRoute="/mangas"
        searchAction={search}
        fallbackImage="/media-image.jpg"
      />
    </>
  );
}

interface PageProps {
  params: Promise<{
    genre: string;
  }>;
}
