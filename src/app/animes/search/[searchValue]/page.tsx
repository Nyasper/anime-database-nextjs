import AnimeList from "../../all/[order]/animesList"
import { getMediaBySearch } from "@/aniListAPI"

export default async function searchValue({params}:PageProps){
  const {searchValue} = await params
  const Animes = await getMediaBySearch(searchValue.replaceAll('%20',' '),'ANIME',1,50)
  return(
    <>  
    <AnimeList getAllAnimes={Animes} order="POPULARITY_DESC" title={`Search results for: ${searchValue.replaceAll('%20',' ')}`} />
    </>
  )
}

interface PageProps {
  params: Promise<{
    searchValue:string
  }>
}