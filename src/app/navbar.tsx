'use client';
export default function Navbar() {
  const [menuActived, setMenuActived] = useState(false);

  const clickMenu = () => setMenuActived(!menuActived);

  //Auto Hidden Menu Function
  useEffect(() => {
    // Función para comprobar el ancho de la ventana. Si el Ancho es Mayor a '640px' el menu desplegable se oculta automaticamente.
    const checkMediaQuery = () => {
      if (window.matchMedia('(min-width: 640px)').matches)
        setMenuActived(false);
    };

    // Llama a la función para comprobar cuando se carga la página
    checkMediaQuery();

    // Agrega un listener para actualizar cuando cambie el tamaño de la ventana
    window.addEventListener('resize', checkMediaQuery);

    // Limpia el listener cuando el componente se desmonta
    return () => {
      window.removeEventListener('resize', checkMediaQuery);
    };
  }, []);

  const links: linkInterface[] = [
    {
      name: 'Home',
      route: '/',
    },
    {
      name: 'Characters',
      route: '/characters',
    },
  ];
  return (
    <nav className="pb-3">
      <ul
        className={
          menuActived
            ? 'flex flex-col w-screen gap-2 py-1 px-10 sm:pb-10  items-center glass fixed z-40 top-100 left-0 border rounded-xl sm:rounded-b-full'
            : 'flex justify-start w-full gap-8 p-4 items-center sm:glass fixed z-40 top-0 sm:rounded-b-full max-sm:max-w-screen-sm max-sm:glass sm:shadow-md max-sm:h-16 sm:shadow-gray-950 max-sm:shadow-sm'
        }
      >
        <li>
          <HamburguerMenu click={clickMenu} state={menuActived} />
        </li>
        <li className="ml-20 max-sm:hidden">LOGO</li>
        <li className={menuActived ? 'fixed top-5 left-12 ml-6' : 'ml-6'}>
          <Link href={'/'}>HOME</Link>
        </li>
        <li
          className={
            menuActived
              ? 'relative group py-2'
              : 'relative group py-2 max-sm:hidden'
          }
        >
          <span className="cursor-pointer mr-1">
            Animes
            <span className="w-0 h-0 cursor-pointer border-t-[6px] border-b-[6px] border-r-[8px]  border-b-transparent border-t-transparent border-r-white -rotate-90 absolute left-max ml-2    mt-2"></span>
          </span>
          <ul
            className={
              menuActived
                ? 'transition group-hover:block relative left-0 mt-2 glass rounded-xl shadow-2xl'
                : 'hidden transition group-hover:block absolute left-0 mt-2 glass rounded-xl shadow-2xl'
            }
          >
            <li className="w-full mx-auto p-2 px-4 hover:bg-sky-400 rounded-xl">
              <Link href={'/animes/search'}>Search Animes</Link>
            </li>
            <li className="w-full mx-auto p-2 px-4 hover:bg-sky-400 rounded-xl">
              <Link href={'/animes/all/TITLE_ROMAJI-1'}>
                list animes by name
              </Link>
            </li>
            <li className="w-full mx-auto p-2 px-4 hover:bg-sky-400 rounded-xl">
              <Link href={'/animes/all/POPULARITY_DESC-1'}>
                list animes by popularity
              </Link>
            </li>
            <li className="w-max  mx-auto p-2 px-4 hover:bg-sky-400 rounded-xl">
              <Link href={'/animes/all/EPISODES_DESC-1'}>
                list animes by number of episodes
              </Link>
            </li>
          </ul>
        </li>
        <li
          className={
            menuActived
              ? 'relative group py-2'
              : 'relative group py-2 max-sm:hidden'
          }
        >
          <span className="cursor-pointer mr-1">
            Mangas
            <span className="w-0 h-0 cursor-pointer border-t-[6px] border-b-[6px] border-r-[8px]  border-b-transparent border-t-transparent border-r-white -rotate-90 absolute left-max ml-2 mt-2"></span>
          </span>
          <ul
            className={
              menuActived
                ? 'transition group-hover:block relative left-0 mt-2 glass rounded-xl shadow-2xl'
                : 'hidden transition group-hover:block absolute left-0 mt-2 glass rounded-xl shadow-2xl'
            }
          >
            <li className="w-full mx-auto p-2 px-4 hover:bg-sky-400 rounded-xl">
              <Link href={'/mangas/search'}>Search Mangas</Link>
            </li>
            <li className="w-full mx-auto p-2 px-4 hover:bg-sky-400 rounded-xl">
              <Link href={'/mangas/all/TITLE_ROMAJI-1'}>
                list mangas by name
              </Link>
            </li>
            <li className="w-full mx-auto p-2 px-4 hover:bg-sky-400 rounded-xl">
              <Link href={'/mangas/all/POPULARITY_DESC-1'}>
                list mangas by popularity
              </Link>
            </li>
            <li className="w-max mx-auto p-2 px-4 hover:bg-sky-400 rounded-xl">
              <Link href={'/mangas/all/EPISODES_DESC-1'}>
                list mangas by number of chapters
              </Link>
            </li>
          </ul>
        </li>
        <li
          className={
            menuActived
              ? 'fixed top-5 right-4 max-sm:mr-1'
              : 'ml-auto mr-10 max-sm:mr-1'
          }
        >
          <Link href={'/favorites'}>FAVORITES</Link>
        </li>
      </ul>
      {menuActived ? (
        <div
          className="fixed z-10 w-full h-screen"
          onClick={() => (menuActived ? clickMenu() : null)}
        ></div>
      ) : null}
    </nav>
  );
}
import HamburguerMenu from './hamburguerMenu';
import Link from 'next/link';
import { linkInterface } from '@/app/utils/types';
import { useState, useEffect } from 'react';
