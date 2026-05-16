'use client';

import HamburguerMenu from './hamburguerMenu';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function Navbar() {
  const [menuActived, setMenuActived] = useState(false);
  const { lang, switchLang } = useLanguage();

  const texts = lang === 'en' ? {
    home: "HOME",
    animes: "Animes",
    mangas: "Mangas",
    favorites: "FAVORITES",
    listByPopularity: "List by Popularity",
    listByEpisodes: "List by Episodes",
    listByChapters: "List by Chapters",
    listByName: "List by Name",
    searchAnimes: "Search Animes",
    searchMangas: "Search Mangas",
    langBtn: "EN",
    flag: "/english.svg"
  } : {
    home: "INICIO",
    animes: "Animes",
    mangas: "Mangas",
    favorites: "FAVORITOS",
    listByPopularity: "Por Popularidad",
    listByEpisodes: "Por Episodios",
    listByChapters: "Por Capítulos",
    listByName: "Por Nombre",
    searchAnimes: "Buscar Animes",
    searchMangas: "Buscar Mangas",
    langBtn: "ES",
    flag: "/spanish.svg"
  };


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

      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-2xl transition-all duration-300">
        <div className="sm:backdrop-blur-xl sm:bg-slate-900/70 sm:border border-white/10 sm:shadow-2xl rounded-full px-6 py-3 flex items-center justify-center gap-8 text-slate-200 relative">

          {/* Mobile Menu Button */}
          <div className="sm:hidden flex items-center absolute left-4 p-2 rounded-xl bg-white/5 border border-white/10 shadow-sm hover:bg-white/10 transition-all duration-300">
            <HamburguerMenu click={clickMenu} state={menuActived} />
          </div>

          {/* Desktop Left: Home */}
          <div className="hidden sm:block">
            <Link href="/" className="text-xl font-black tracking-tighter hover:text-sky-400 transition-colors drop-shadow-md">
              {texts.home}
            </Link>
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden sm:flex items-center gap-6 font-semibold tracking-wide">
            {/* Animes Dropdown */}
            <li className="relative group py-2">
              <span className="cursor-pointer flex items-center gap-1 hover:text-sky-400 transition-colors drop-shadow-md">
                {texts.animes}
                <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                </svg>
              </span>
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
                <ul className="backdrop-blur-2xl bg-slate-900/95 border border-white/10 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.5)] w-64 overflow-hidden flex flex-col p-2 text-sm font-medium">
                  <li><Link href="/animes/all/POPULARITY_DESC-1" className="block px-4 py-3 hover:bg-sky-500/20 hover:text-sky-300 rounded-xl transition-all">{texts.listByPopularity}</Link></li>
                  <li><Link href="/animes/all/EPISODES_DESC-1" className="block px-4 py-3 hover:bg-sky-500/20 hover:text-sky-300 rounded-xl transition-all">{texts.listByEpisodes}</Link></li>
                  <li><Link href="/animes/all/TITLE_ROMAJI-1" className="block px-4 py-3 hover:bg-sky-500/20 hover:text-sky-300 rounded-xl transition-all">{texts.listByName}</Link></li>
                  <li><Link href="/animes/search" className="block px-4 py-3 hover:bg-sky-500/20 hover:text-sky-300 rounded-xl transition-all">{texts.searchAnimes}</Link></li>
                </ul>
              </div>
            </li>

            {/* Mangas Dropdown */}
            <li className="relative group py-2">
              <span className="cursor-pointer flex items-center gap-1 hover:text-sky-400 transition-colors drop-shadow-md">
                {texts.mangas}
                <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                </svg>
              </span>
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
                <ul className="backdrop-blur-2xl bg-slate-900/95 border border-white/10 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.5)] w-64 overflow-hidden flex flex-col p-2 text-sm font-medium">
                  <li><Link href="/mangas/all/POPULARITY_DESC-1" className="block px-4 py-3 hover:bg-sky-500/20 hover:text-sky-300 rounded-xl transition-all">{texts.listByPopularity}</Link></li>
                  <li><Link href="/mangas/all/EPISODES_DESC-1" className="block px-4 py-3 hover:bg-sky-500/20 hover:text-sky-300 rounded-xl transition-all">{texts.listByChapters}</Link></li>
                  <li><Link href="/mangas/all/TITLE_ROMAJI-1" className="block px-4 py-3 hover:bg-sky-500/20 hover:text-sky-300 rounded-xl transition-all">{texts.listByName}</Link></li>
                  <li><Link href="/mangas/search" className="block px-4 py-3 hover:bg-sky-500/20 hover:text-sky-300 rounded-xl transition-all">{texts.searchMangas}</Link></li>
                </ul>
              </div>
            </li>
          </ul>

          {/* Desktop Right Actions: Favorites & Language */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Favorites Button */}
            <Link href="/favorites" className="bg-sky-500 hover:bg-sky-400 text-white px-5 py-2 rounded-full font-bold tracking-wide transition-all shadow-[0_0_15px_rgba(14,165,233,0.5)] hover:shadow-[0_0_25px_rgba(14,165,233,0.7)] hover:scale-105 text-sm">
              {texts.favorites}
            </Link>

            {/* Language Toggle */}
            <button
              onClick={switchLang}
              className="flex items-center gap-2  px-3 py-1.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 cursor-pointer"
            >
              <span className="font-bold text-sky-400 text-xs">{texts.langBtn}</span>
              <img
                src={texts.flag}
                alt="Language"
                className="w-5 h-3 object-cover rounded-sm"
              />
            </button>
          </div>
        </div>


        {/* Mobile Dropdown Menu */}
        <div className={`sm:hidden absolute top-full left-0 w-full pt-4 transition-all duration-300 origin-top ${menuActived ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'}`}>
          <div className="backdrop-blur-2xl bg-slate-900/95 border border-white/10 rounded-3xl shadow-2xl p-5 flex flex-col gap-4 text-slate-200">
            <div className="flex justify-between items-center px-4">
              <button
                onClick={switchLang}
                className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 cursor-pointer"
              >
                <span className="font-bold text-sky-400 text-xs">{texts.langBtn}</span>
                <img
                  src={texts.flag}
                  alt="Language"
                  className="w-5 h-3 object-cover rounded-sm"
                />
              </button>
            </div>

            <Link href="/" onClick={() => setMenuActived(false)} className="px-4 py-2 hover:bg-slate-800/80 rounded-xl transition-colors text-lg font-semibold tracking-wide">{texts.home}</Link>
            <Link href="/favorites" onClick={() => setMenuActived(false)} className="mx-4 my-2 bg-sky-500 hover:bg-sky-400 text-white px-6 py-3 rounded-2xl font-bold tracking-wide transition-all shadow-[0_0_15px_rgba(14,165,233,0.4)] text-center">{texts.favorites}</Link>

            <div className="px-4 py-2">
              <div className="text-sky-400 font-extrabold mb-3 uppercase text-xs tracking-widest opacity-80">{texts.animes}</div>
              <div className="flex flex-col gap-2 pl-4 border-l-2 border-slate-700/50">
                <Link href="/animes/search" onClick={() => setMenuActived(false)} className="hover:text-sky-300 hover:translate-x-1 transition-all py-1.5 font-medium">{texts.searchAnimes}</Link>
                <Link href="/animes/all/TITLE_ROMAJI-1" onClick={() => setMenuActived(false)} className="hover:text-sky-300 hover:translate-x-1 transition-all py-1.5 font-medium">{texts.listByName}</Link>
                <Link href="/animes/all/POPULARITY_DESC-1" onClick={() => setMenuActived(false)} className="hover:text-sky-300 hover:translate-x-1 transition-all py-1.5 font-medium">{texts.listByPopularity}</Link>
                <Link href="/animes/all/EPISODES_DESC-1" onClick={() => setMenuActived(false)} className="hover:text-sky-300 hover:translate-x-1 transition-all py-1.5 font-medium">{texts.listByEpisodes}</Link>
              </div>
            </div>

            <div className="px-4 py-2">
              <div className="text-sky-400 font-extrabold mb-3 uppercase text-xs tracking-widest opacity-80">{texts.mangas}</div>
              <div className="flex flex-col gap-2 pl-4 border-l-2 border-slate-700/50">
                <Link href="/mangas/search" onClick={() => setMenuActived(false)} className="hover:text-sky-300 hover:translate-x-1 transition-all py-1.5 font-medium">{texts.searchMangas}</Link>
                <Link href="/mangas/all/TITLE_ROMAJI-1" onClick={() => setMenuActived(false)} className="hover:text-sky-300 hover:translate-x-1 transition-all py-1.5 font-medium">{texts.listByName}</Link>
                <Link href="/mangas/all/POPULARITY_DESC-1" onClick={() => setMenuActived(false)} className="hover:text-sky-300 hover:translate-x-1 transition-all py-1.5 font-medium">{texts.listByPopularity}</Link>
                <Link href="/mangas/all/EPISODES_DESC-1" onClick={() => setMenuActived(false)} className="hover:text-sky-300 hover:translate-x-1 transition-all py-1.5 font-medium">{texts.listByChapters}</Link>
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
