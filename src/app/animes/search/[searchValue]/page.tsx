import MediaList from '@/app/components/MediaList';
import { getMediaBySearch } from '@/app/utils/aniListAPI';
import search from '../../all/[order]/search';
import { formatOrderString } from '@/app/utils/formatters';

export default async function searchValue({ params }: PageProps) {
  const { searchValue } = await params;
  const decodedSearchValue = decodeURIComponent(searchValue);
  const Animes = await getMediaBySearch(
    decodedSearchValue,
    'ANIME',
    1,
    50
  );
  return (
    <>
      <MediaList
        data={Animes.Page.media}
        order="POPULARITY_DESC"
        title={`Search results for: ${decodedSearchValue} (${formatOrderString('POPULARITY_DESC')})`}
        baseRoute="/animes"
        searchAction={search}
        fallbackImage="/cover-image.png"
      />
    </>
  );
}

interface PageProps {
  params: Promise<{
    searchValue: string;
  }>;
}
