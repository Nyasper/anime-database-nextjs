import { getMediaInfoByID } from "@/aniListAPI"
import CharactersList from "@/app/components/CharactersList"
import MediaInfo from "@/app/components/MediaInfo"
import { animeOrder } from "@/interfaces"

export default async function AnimePage({params}:PageProps ){
    const {mangaID, order} = await params 
    const {Page} = await getMediaInfoByID(mangaID,1)
    const animeCharactersPages = [
      await getMediaInfoByID(mangaID,1),
      await getMediaInfoByID(mangaID,2),
      await getMediaInfoByID(mangaID,3)
    ]
    return (
      <div>
        <MediaInfo
          Page={Page}
        />
        <CharactersList
          Page={animeCharactersPages[0].Page}
          mediaID={mangaID}
          order={order}
          characterPage={1}
          mediaType="mangas"
        />
        <CharactersList
          Page={animeCharactersPages[1].Page}
          mediaID={mangaID}
          order={order}
          characterPage={2}
          mediaType="mangas"
        />
        <CharactersList
          Page={animeCharactersPages[2].Page}
          mediaID={mangaID}
          order={order}
          characterPage={3}
          mediaType="mangas"
        />
      </div>
    )
  }

  interface PageProps {
    params: Promise<{
      order:animeOrder,
      mangaID:number
    }>
}
