'use client'
export default function Error(){
  return (
    <div className="flex flex-col flex-wrap p-8 glass w-11/12 mx-auto mt-28 mb-8 rounded-xl">
      <h1>It seems there has been an error...</h1>
      <Link className="bg-sky-400 px-4 p-1 ml-2 rounded-md text-xl" href={'/'}>click here to redirect</Link>
    </div>
  )
}
import Link from "next/link"