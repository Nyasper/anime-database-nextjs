'use client';
import { useLanguage } from './context/LanguageContext';

const ExternalLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-sky-400 hover:text-sky-300 transition-colors inline-flex items-center gap-1 group/link font-bold"
  >
    {children}
    <svg className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  </a>
);

export default function Home() {
  const { lang, switchLang } = useLanguage();

  const content = lang === 'en' ? {
    title: "Welcome to my Anime/Manga Library App",
    intro: (
      <>
        My third project is an application developed with Next.js, which connects to the{' '}
        <ExternalLink href="https://anilist.co/home">AniList</ExternalLink>{' '}
        website API using the GraphQL query language to obtain detailed information about a wide variety of animes and mangas.
      </>
    ),
    featuresTitle: "Application Features:",
    features: [
      "Exploring various information about animes and mangas, including release dates, descriptions, chapter counts, genres, and popularity.",
      "Integrated Search Bar: Allows users to search for any anime or manga present in the AniList database.",
      "Favorites Section: Users can save their favorites to Local Storage, ensuring persistence across sessions."
    ],
    langBtn: "EN",
    flag: "english.svg"
  } : {
    title: "Bienvenido a mi aplicación Biblioteca de Anime/Manga",
    intro: (
      <>
        Mi tercer proyecto es una aplicación desarrollada con Next.js, la cual se conecta a la API del sitio web{' '}
        <ExternalLink href="https://anilist.co/home">AniList</ExternalLink>{' '}
        utilizando GraphQL para obtener información detallada sobre una amplia variedad de animes y mangas.
      </>
    ),
    featuresTitle: "Funcionalidades destacadas:",
    features: [
      "Exploración de información diversa sobre animes y mangas, incluyendo fechas de estreno, descripciones, recuento de capítulos y géneros.",
      "Barra de búsqueda integrada: Permite buscar cualquier título presente en la base de datos de AniList.",
      "Sección de Favoritos: Guarda tus animes y mangas preferidos en Local Storage para acceder a ellos en futuras visitas."
    ],
    langBtn: "ES",
    flag: "spanish.svg"
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[75vh] px-4 py-20">
      <div className="relative w-full max-w-7xl">
        {/* Decorative background glow */}
        <div className="absolute -inset-4 bg-linear-to-r from-sky-500/10 to-indigo-500/10 rounded-[3rem] blur-3xl pointer-events-none" />

        <div className="relative glass p-8 md:p-16 rounded-[3rem] border border-white/10 shadow-2xl backdrop-blur-3xl bg-slate-900/60 overflow-hidden animate-in fade-in zoom-in duration-1000">

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-12">
            <h1 className="text-4xl md:text-6xl font-black bg-linear-to-r from-white via-sky-200 to-indigo-200 bg-clip-text text-transparent tracking-tighter">
              {content.title}
            </h1>

            <button
              onClick={switchLang}
              className={`flex items-center gap-3 ${lang === 'en' ? 'px-4' : 'pl-4 pr-7'} py-2 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 group cursor-pointer`}
            >
              <span className="font-bold text-sky-400">{content.langBtn}</span>
              <img
                src={content.flag}
                alt="Flag"
                className="w-7 h-5 object-cover rounded-sm shadow-sm group-hover:scale-110 transition-transform"
              />
            </button>
          </div>

          <p className="text-slate-300 text-lg md:text-xl leading-relaxed mb-12 opacity-90 font-medium">
            {content.intro}
          </p>

          <div className="space-y-8">
            <h2 className="text-2xl font-bold text-sky-400 flex items-center gap-3">
              <span className="w-8 h-px bg-sky-400/50" />
              {content.featuresTitle}
            </h2>

            <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {content.features.map((feature, i) => (
                <li key={i} className="flex gap-4 p-6 rounded-2xl bg-white/3 border border-white/5 hover:border-sky-500/30 transition-colors group">
                  <span className="shrink-0 w-6 h-6 rounded-lg bg-sky-500/20 flex items-center justify-center text-sky-400 text-xs font-black">
                    {i + 1}
                  </span>
                  <p className="text-slate-400 text-sm md:text-base leading-relaxed group-hover:text-slate-200 transition-colors">
                    {feature}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
