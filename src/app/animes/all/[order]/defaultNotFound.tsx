export default async function DefaultNotFound(){
  return (
    <div className="flex flex-col flex-wrap p-8 glass w-max mx-auto mt-[30vh] mb-8 rounded-xl">
    <h1 className="text-7xl m-10 text-center">No Data Found</h1>
    <Link href={'../'} className="text-3xl mx-auto py-2 px-4 rounded-xl bg-slate-900 w-max text-sky-400" >Back</Link>
    </div>
  )
} 
import Link from "next/link"