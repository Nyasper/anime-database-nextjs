import { pageInfo, animeOrder, getAllAnimesQuery } from '@/app/utils/types';
import { getAllMedia } from '@/app/utils/aniListAPI';
import MediaList from '@/app/components/MediaList';
import Pagination from '@/app/components/Pagination';
import DefaultNotFound from './defaultNotFound';
import search from './search';
import { formatOrderString } from '@/app/utils/formatters';

export default async function AnimePage({ params }: PageProps) {
  const { order } = await params;
  const orderParam = order.split('-')[0] as animeOrder;
  const page = parseInt(order.split('-')[1]);

  const Animes: getAllAnimesQuery = await getAllMedia(
    'ANIME',
    page,
    50,
    orderParam
  );
  const pageInfo = Animes.Page.pageInfo;

  return Animes ? (
    <div className="flex flex-col items-center justify-center pb-3">
      <MediaList
        data={Animes.Page.media}
        order={order}
        title={formatOrderString(order)}
        baseRoute="/animes"
        searchAction={search}
        fallbackImage="/cover-image.png"
      />
      <Pagination
        currentPage={pageInfo.currentPage}
        lastPage={pageInfo.lastPage}
        perPage={pageInfo.perPage}
        hasNextPage={pageInfo.hasNextPage}
        total={pageInfo.total}
        order={orderParam}
      />
    </div>
  ) : (
    <DefaultNotFound />
  );
}

interface PageProps {
  params: Promise<{
    order: string;
  }>;
}
