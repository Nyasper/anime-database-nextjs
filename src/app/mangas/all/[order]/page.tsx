import { pageInfo, animeOrder, getAllAnimesQuery } from '@/app/utils/types';
import { getAllMedia } from '@/app/utils/aniListAPI';
import MediaList from '@/app/components/MediaList';
import Pagination from '@/app/components/Pagination';
import { redirect } from 'next/navigation';
import { formatOrderString } from '@/app/utils/formatters';

export default async function MangaListPage({ params }: PageProps) {
  const { order: orderRaw } = await params;
  const order: animeOrder = orderRaw.split('-')[0] as animeOrder;
  const page = parseInt(orderRaw.split('-')[1]);

  async function search(formData: FormData) {
    'use server';
    const searchValue = formData.get('search');
    redirect(`/mangas/search/${searchValue}`);
  }

  const Mangas: getAllAnimesQuery = await getAllMedia('MANGA', page, 50, order);
  const pageInfoObj = Mangas.Page.pageInfo;

  if (Mangas.Page) {
    return (
      <div className="flex flex-col items-center justify-center pb-10">
        <MediaList
          data={Mangas}
          order={order}
          title={formatOrderString(orderRaw)}
          baseRoute="/mangas"
          searchAction={search}
          fallbackImage="/media-image.jpg"
        />
        <Pagination
          currentPage={pageInfoObj.currentPage}
          lastPage={pageInfoObj.lastPage}
          perPage={pageInfoObj.perPage}
          hasNextPage={pageInfoObj.hasNextPage}
          total={pageInfoObj.total}
          order={orderRaw as animeOrder}
        />
      </div>
    );
  } else return <h1>No data Found</h1>;
}

interface PageProps {
  params: Promise<{
    order: string;
    page: pageInfo;
  }>;
}
