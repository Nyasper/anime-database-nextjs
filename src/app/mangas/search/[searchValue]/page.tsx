import MangasList from "../../all/mangasList"
import { getMediaBySearch } from "@/aniListAPI"

export default async function searchValue({params}:PageProps){
  const {searchValue} = await params
  const Mangas = await getMediaBySearch(searchValue.replaceAll('%20',' '),"MANGA",1,50)
  return(
    <>  
    <MangasList getAllMangas={Mangas} order="POPULARITY_DESC" title={`Search results for: ${searchValue.replaceAll('%20',' ')}`} />
    </>
  )
}

interface PageProps {
  params: Promise<{
    searchValue:string
  }>
}