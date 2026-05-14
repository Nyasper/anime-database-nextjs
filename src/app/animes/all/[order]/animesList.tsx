export default function AnimeList(props: props) {

 return (
      <div className="flex flex-col flex-wrap xl:p-8 glass w-11/12 max-xl:w-screen mx-auto max-lg:mx-2 mt-28 mb-8 xl:rounded-xl  max-sm:m-0 max-sm:p-0 max-sm:rounded-none">
        <div className="flex w-full min-w-screen max-md:text-sm justify-between px-12 max-lg:flex-col max-lg:py-1">
          <h2 className="mt-5 text-4xl xl:text-center text-glow font-bold tracking-wide">{props.title}</h2>
          <SearchFormComponent action={search} />
        </div>
        <ul className="flex flex-wrap lg:justify-center lg:items-start gap-10 mt-8 mb-8 xl:rounded-xl max-xl:grid max-xl:place-items-center max-xl:m-0 max-xl:p-0 max-xl:grid-cols-4 max-lg:grid-cols-4 max-sm:grid-cols-2 max-lg:place-items-center max-lg:w-screen">
          {props.getAllAnimes.Page.media?.map((animes: Anime) => (
            <li key={animes.id} className="flex flex-col gap-3 items-center w-56 h-auto max-lg:w-40">
              <span className="max-h-12 overflow-hidden text-center font-medium line-clamp-2" title={animes.title.romaji}>{animes.title.romaji}</span>
              <Link className="w-56 h-80 relative max-lg:w-40 max-lg:h-72 glass-glow rounded-xl overflow-hidden group" href={`/animes/all/${props.order}/${animes.id}`}>
                <Image
                  src={animes.coverImage.large?animes.coverImage.large:"/cover-image.png"}
                  fill
                  priority
                  sizes="230"
                  alt={`${animes.title.romaji} image`}
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </Link>
              <FavoriteButton mediaInfo={animes} />
            </li>
          ))}
        </ul>
      </div>
  )
}

//Image with src "https://s4.anilist.778-82gwrvQV6OBc.png" has "fill" but is missing "sizes" prop. Please add it to improve page performance.
interface props {
  getAllAnimes: getAllAnimesQuery,
  order: animeOrder,
  title: string
}

import FavoriteButton from "./[animeID]/favoriteButton"
import Image from "next/image"
import Link from "next/link"
import { Anime, getAllAnimesQuery, animeOrder } from "@/interfaces"
import search from "./search"
import SearchFormComponent from "../../search/searchFormComponent"