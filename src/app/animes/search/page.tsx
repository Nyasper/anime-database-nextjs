export default async function animePages(){

  async function create(formData: FormData) {
    'use server'
    const searchValue = formData.get('search')
    redirect(`/animes/search/${searchValue}`)
  }

  const linksOrders:LinkOrder[] = [
  { 
    textContent:"name",
    href:"/animes/all/TITLE_ROMAJI-1"
  },
  {
    textContent:"popularity",
    href:"/animes/all/POPULARITY_DESC-1"
  },
  {
    textContent:"numbers of episodes",
    href:"/animes/all/EPISODES_DESC-1"
  }
]

  return (
    <div className="flex flex-col px-8 py-4 glass w-max mx-auto md:my-28 rounded-xl max-sm:w-full">
    <h1 className="text-2xl p-1 mb-4" >Search Anime:</h1>
    <SearchFormComponent action={create} />
    <h2 className="text-lg mt-5">List animes by:</h2>
    <ul className="p-1 text-sky-400 text-lg">
    {
    linksOrders.map((link)=>(
      <li key={link.href} className="px-1" ><Link href={link.href} className="w-max" >{link.textContent}</Link></li>
    ))
    }
    </ul>
    </div>
  )
}

interface LinkOrder{
  textContent:string,
  href:`${string}/${animeOrder}-1`
}

import SearchFormComponent from "./searchFormComponent"
import { redirect } from "next/navigation";
import Link from "next/link"
import { animeOrder } from "@/interfaces"