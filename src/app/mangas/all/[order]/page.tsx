import { pageInfo , animeOrder, getAllAnimesQuery} from "@/interfaces"
import { getAllMedia } from "@/aniListAPI"
import MangasList from "../mangasList"
import Pagination from "@/app/animes/all/[order]/pagination"

export default async function MangaListPage({params}:PageProps){

  const { order: orderRaw } = await params;
  const order:animeOrder = orderRaw.split('-')[0] as animeOrder
  const page = parseInt(orderRaw.split('-')[1])

  //el slice muesta solo 20 personajes de ese anime
  // const paginasTotales = Math.ceil(characters.length/5)
  //muestra las paginas totales para todos los personajes de ese anime

  const Mangas:getAllAnimesQuery = await getAllMedia('MANGA',page,50,order)
  const pageInfoObj = Mangas.Page.pageInfo

  if (Mangas.Page){
    return (
      <div className="flex flex-col items-center justify-center pb-10">
        <MangasList
          getAllMangas={Mangas}
          order={order}
          title={`Order by: ${order}`}
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
    )
  } else return(
    <h1>No data Found</h1>
  )
}

interface PageProps {
  params: Promise<{
    order:string,
    page:pageInfo
  }>
}