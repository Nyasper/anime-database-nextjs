'use client';

import HamburguerMenu from './hamburguerMenu';
import Link from 'next/link';
import { useState, useEffect } from 'react';

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

  return (
    <>
      {/* Spacer so content is not hidden behind the fixed navbar initially */}
      <div className="h-20 sm:h-24"></div>

      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-5xl transition-all duration-300">
        <div className="sm:backdrop-blur-xl sm:bg-slate-900/70 sm:border border-white/10 sm:shadow-2xl rounded-full px-6 py-3 flex items-center justify-center gap-8 text-slate-200 relative">

          {/* Mobile Menu Button */}
          <div className="sm:hidden flex items-center absolute left-4 p-2 rounded-xl bg-white/5 border border-white/10 shadow-sm hover:bg-white/10 transition-all duration-300">
            <HamburguerMenu click={clickMenu} state={menuActived} />
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden sm:flex items-center gap-8 font-semibold tracking-wide">
            <li>
              <Link href="/" className="hover:text-sky-400 transition-colors drop-shadow-md">HOME</Link>
            </li>

            {/* Animes Dropdown */}
            <li className="relative group py-2">
              <span className="cursor-pointer flex items-center gap-1 hover:text-sky-400 transition-colors drop-shadow-md">
                Animes
                <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                </svg>
              </span>
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
                <ul className="backdrop-blur-2xl bg-slate-900/95 border border-white/10 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.5)] w-64 overflow-hidden flex flex-col p-2 text-sm font-medium">
                  <li><Link href="/animes/all/POPULARITY_DESC-1" className="block px-4 py-3 hover:bg-sky-500/20 hover:text-sky-300 rounded-xl transition-all">List by Popularity</Link></li>
                  <li><Link href="/animes/all/EPISODES_DESC-1" className="block px-4 py-3 hover:bg-sky-500/20 hover:text-sky-300 rounded-xl transition-all">List by Episodes</Link></li>
                  <li><Link href="/animes/all/TITLE_ROMAJI-1" className="block px-4 py-3 hover:bg-sky-500/20 hover:text-sky-300 rounded-xl transition-all">List by Name</Link></li>
                  <li><Link href="/animes/search" className="block px-4 py-3 hover:bg-sky-500/20 hover:text-sky-300 rounded-xl transition-all">Search Animes</Link></li>
                </ul>
              </div>
            </li>

            {/* Mangas Dropdown */}
            <li className="relative group py-2">
              <span className="cursor-pointer flex items-center gap-1 hover:text-sky-400 transition-colors drop-shadow-md">
                Mangas
                <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                </svg>
              </span>
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
                <ul className="backdrop-blur-2xl bg-slate-900/95 border border-white/10 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.5)] w-64 overflow-hidden flex flex-col p-2 text-sm font-medium">
                  <li><Link href="/mangas/all/POPULARITY_DESC-1" className="block px-4 py-3 hover:bg-sky-500/20 hover:text-sky-300 rounded-xl transition-all">List by Popularity</Link></li>
                  <li><Link href="/mangas/all/EPISODES_DESC-1" className="block px-4 py-3 hover:bg-sky-500/20 hover:text-sky-300 rounded-xl transition-all">List by Chapters</Link></li>
                  <li><Link href="/mangas/all/TITLE_ROMAJI-1" className="block px-4 py-3 hover:bg-sky-500/20 hover:text-sky-300 rounded-xl transition-all">List by Name</Link></li>
                  <li><Link href="/mangas/search" className="block px-4 py-3 hover:bg-sky-500/20 hover:text-sky-300 rounded-xl transition-all">Search Mangas</Link></li>
                </ul>
              </div>
            </li>
          </ul>

          {/* Favorites Button - Hidden on mobile, moved to hamburger menu */}
          <div className="hidden sm:flex items-center">
            <Link href="/favorites" className="bg-sky-500 hover:bg-sky-400 text-white px-5 py-2 rounded-full font-bold tracking-wide transition-all shadow-[0_0_15px_rgba(14,165,233,0.5)] hover:shadow-[0_0_25px_rgba(14,165,233,0.7)] hover:scale-105 text-sm">
              FAVORITES
            </Link>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <div className={`sm:hidden absolute top-full left-0 w-full pt-4 transition-all duration-300 origin-top ${menuActived ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'}`}>
          <div className="backdrop-blur-2xl bg-slate-900/95 border border-white/10 rounded-3xl shadow-2xl p-5 flex flex-col gap-4 text-slate-200">
            <Link href="/" onClick={() => setMenuActived(false)} className="px-4 py-3 hover:bg-slate-800/80 rounded-xl transition-colors text-lg font-semibold tracking-wide">Home</Link>
            <Link href="/favorites" onClick={() => setMenuActived(false)} className="mx-4 my-2 bg-sky-500 hover:bg-sky-400 text-white px-6 py-3 rounded-2xl font-bold tracking-wide transition-all shadow-[0_0_15px_rgba(14,165,233,0.4)] text-center">FAVORITES</Link>

            <div className="px-4 py-2">
              <div className="text-sky-400 font-extrabold mb-3 uppercase text-xs tracking-widest opacity-80">Animes</div>
              <div className="flex flex-col gap-2 pl-4 border-l-2 border-slate-700/50">
                <Link href="/animes/search" onClick={() => setMenuActived(false)} className="hover:text-sky-300 hover:translate-x-1 transition-all py-1.5 font-medium">Search Animes</Link>
                <Link href="/animes/all/TITLE_ROMAJI-1" onClick={() => setMenuActived(false)} className="hover:text-sky-300 hover:translate-x-1 transition-all py-1.5 font-medium">List by Name</Link>
                <Link href="/animes/all/POPULARITY_DESC-1" onClick={() => setMenuActived(false)} className="hover:text-sky-300 hover:translate-x-1 transition-all py-1.5 font-medium">List by Popularity</Link>
                <Link href="/animes/all/EPISODES_DESC-1" onClick={() => setMenuActived(false)} className="hover:text-sky-300 hover:translate-x-1 transition-all py-1.5 font-medium">List by Episodes</Link>
              </div>
            </div>

            <div className="px-4 py-2">
              <div className="text-sky-400 font-extrabold mb-3 uppercase text-xs tracking-widest opacity-80">Mangas</div>
              <div className="flex flex-col gap-2 pl-4 border-l-2 border-slate-700/50">
                <Link href="/mangas/search" onClick={() => setMenuActived(false)} className="hover:text-sky-300 hover:translate-x-1 transition-all py-1.5 font-medium">Search Mangas</Link>
                <Link href="/mangas/all/TITLE_ROMAJI-1" onClick={() => setMenuActived(false)} className="hover:text-sky-300 hover:translate-x-1 transition-all py-1.5 font-medium">List by Name</Link>
                <Link href="/mangas/all/POPULARITY_DESC-1" onClick={() => setMenuActived(false)} className="hover:text-sky-300 hover:translate-x-1 transition-all py-1.5 font-medium">List by Popularity</Link>
                <Link href="/mangas/all/EPISODES_DESC-1" onClick={() => setMenuActived(false)} className="hover:text-sky-300 hover:translate-x-1 transition-all py-1.5 font-medium">List by Chapters</Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Backdrop Overlay */}
      {menuActived && (
        <div
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm sm:hidden transition-all duration-300"
          onClick={() => setMenuActived(false)}
        />
      )}
    </>
  );
}
