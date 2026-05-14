import MediaList from "@/app/components/MediaList"
import { getMediaBySearch } from "@/aniListAPI"
import { redirect } from "next/navigation"

export default async function searchValue({params}:PageProps){
  const {searchValue} = await params

  async function search(formData: FormData) {
    'use server'
    const newSearchValue = formData.get('search')
    redirect(`/mangas/search/${newSearchValue}`)
  }

  const Mangas = await getMediaBySearch(searchValue.replaceAll('%20',' '),"MANGA",1,50)
  return(
    <>  
    <MediaList 
      data={Mangas} 
      order="POPULARITY_DESC" 
      title={`Search results for: ${searchValue.replaceAll('%20',' ')}`} 
      baseRoute="/mangas"
      searchAction={search}
      fallbackImage="/media-image.jpg"
    />
    </>
  )
}

interface PageProps {
  params: Promise<{
    searchValue:string
  }>
}