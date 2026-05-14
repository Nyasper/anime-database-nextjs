import { pageInfo, animeOrder, getAllAnimesQuery } from "@/interfaces"
import { getAllMedia } from "@/aniListAPI"
import MediaList from "@/app/components/MediaList"
import Pagination from "@/app/components/Pagination"
import DefaultNotFound from "./defaultNotFound"
import search from "./search"

export default async function AnimePage({ params }: PageProps) {

  const { order } = await params;
  const orderParam = order.split('-')[0] as animeOrder;
  const page = parseInt(order.split('-')[1]);

  const Animes: getAllAnimesQuery = await getAllMedia("ANIME", page, 50, orderParam);
  const pageInfo = Animes.Page.pageInfo;

  return Animes ? (
    <div className="flex flex-col items-center justify-center pb-10">
      <MediaList
        data={Animes}
        order={order}
        title={`Order by: ${order}`}
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
        order={order}
      />
    </div>
  ) : (
    <DefaultNotFound />
  )
}

interface PageProps {
  params: Promise<{
    order: animeOrder,
    page: pageInfo
  }>



}
