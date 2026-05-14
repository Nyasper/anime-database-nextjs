import { pageInfo, animeOrder, getAllAnimesQuery } from "@/interfaces"
import { getAllMedia } from "@/aniListAPI"
import AnimesList from "./animesList"
import Pagination from "./pagination"
import DefaultNotFound from "./defaultNotFound"


export default async function AnimePage({ params }: PageProps) {

  const { order } = await params;
  const orderParam = order.split('-')[0] as animeOrder;
  const page = parseInt(order.split('-')[1]);

  const Animes: getAllAnimesQuery = await getAllMedia("ANIME", page, 50, orderParam);
  const pageInfo = Animes.Page.pageInfo;

  return Animes ? (
    <div className="flex flex-col items-center justify-center pb-10">
      <AnimesList
        getAllAnimes={Animes}
        order={order}
        title={`Order by: ${order}`}
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
