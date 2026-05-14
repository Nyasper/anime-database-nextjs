'use client'
export default function Favorites(){
  const [favorites, setFavorites] = useState<Anime[]>([]);

  useEffect(() => {

      const favoritesJSON = localStorage.getItem('favorites');
      const parsedFavorites: Anime[] = favoritesJSON ? JSON.parse(favoritesJSON) : [];
      setFavorites(parsedFavorites);
      
  }, []);


  return favorites.length ? (
    <div className="flex flex-col items-center px-8 py-4 glass w-11/12 mx-auto my-28 rounded-xl">
      <h2 className="text-4xl text-center py-2 mb-8">Favorites</h2>
      <ul className="flex flex-wrap justify-center items-start gap-10 mt-8 mb-8 rounded-xl">
      {favorites.map(fav=>(
            <li key={fav.id} className="flex flex-col gap-2 items-center w-56 h-96 overflow-auto">
                <span className="max-h-5 text-center" title={fav.title.romaji}>{fav.title.romaji}</span>
                <Link className="w-56 h-80 relative object-cover" href={`/${fav.type.toLowerCase().concat('s')}/all/POPULARITY_DESC/${fav.id}`}>
                  <Image
                    src={fav.coverImage.large}
                    fill
                    alt={`${fav.title.romaji} image`}
                  />
                </Link>
              <FavoriteButton mediaInfo={fav} />
            </li>
          ))}
    </ul>
    </div>
  ) : (
    <div className="flex flex-col items-center p-10 gap-4 glass w-max mx-auto my-28 rounded-xl">
      <h2 className="py-2 text-3xl text-red-500">No Favorites Added</h2>
      <Link className="bg-sky-400 px-4 p-1 ml-2 rounded-md text-xl" href={'/animes/all/POPULARITY_DESC-1'}>Click to Start</Link>
    </div>
  )
}

import { useEffect , useState } from "react"
import Image from "next/image";
import Link from "next/link";
import FavoriteButton from "../animes/all/[order]/[animeID]/favoriteButton";
import { Anime  } from "@/interfaces";