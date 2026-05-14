export default function CharactersList(props:props){
  return props.Page.media[0].characters.nodes.length? (
    <div className="flex flex-col flex-wrap p-1 glass xl:w-11/12 mx-auto my-4 mb-8 rounded-xl border">
      <h3 className="text-2xl font-bold py-4 px-8">Characters Page {props.characterPage}</h3>
      <ul className="flex flex-wrap justify-center place-items-baseline gap-5 w-full px-8 py-6">
      {props.Page.media[0].characters.nodes.map(character=>(
        <li key={character.id}>
          <p className="text-lg lg:text-center py-1">{character.name.full}</p>
          <Link className="w-56 h-80 block relative max-lg:w-40 max-lg:h-72" href={`/${props.mediaType}/all/${props.order}/${props.mediaID}/${character.id}`}>
            <Image
              src={character.image.large?character.image.large:"/media-image.jpg"}
              className="h-auto object-cover"
              fill
              sizes="230"
              priority
              alt={`${character.name.full} image`}
            />
            </Link>
        </li>
      ))}
    </ul>
    </div>
  ):null
}

interface props{
  Page: {
    pageInfo:pageInfo,
    media:[{
      id:number,
      title:title,
      type:Type,
      format:Format,
      season:Season,
      seasonYear:number,
      status:Status,
      popularity:number,
      episodes:number|null,
      genres:string[],
      isAdult:boolean,
      bannerImage:string,
      coverImage:coverImage,
      characters:{
        nodes:characterQuery[]
      }
    }]
  }
  mediaID:number,
  order:string,
  mediaType:"animes"|"mangas"
  characterPage:number
}



import { pageInfo ,Season, Status, coverImage , title , characterQuery , Format , Type} from "@/interfaces"
import Image from "next/image"
import Link from "next/link"