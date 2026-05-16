import MediaList from '@/app/components/MediaList';
import { getMediaBySearch } from '@/app/utils/aniListAPI';
import { redirect } from 'next/navigation';
import { formatOrderString } from '@/app/utils/formatters';

export default async function searchValue({ params }: PageProps) {
  const { searchValue } = await params;
  const decodedSearchValue = decodeURIComponent(searchValue);

  async function search(formData: FormData) {
    'use server';
    const newSearchValue = formData.get('search');
    redirect(`/mangas/search/${newSearchValue}`);
  }

  const Mangas = await getMediaBySearch(
    decodedSearchValue,
    'MANGA',
    1,
    50
  );
  return (
    <>
      <MediaList
        data={Mangas.Page.media}
        order="POPULARITY_DESC"
        title={`Search results for: ${decodedSearchValue} (${formatOrderString('POPULARITY_DESC')})`}
        baseRoute="/mangas"
        searchAction={search}
        fallbackImage="/media-image.jpg"
      />
    </>
  );
}

interface PageProps {
  params: Promise<{
    searchValue: string;
  }>;
}
