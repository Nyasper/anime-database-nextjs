import SearchFormComponent from '@/app/animes/search/searchFormComponent';

interface SearchPageProps {
  type: 'Anime' | 'Manga';
  searchAction: (formData: FormData) => Promise<void>;
}

export default function SearchPage({ type, searchAction }: SearchPageProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[75vh] w-full px-4 py-8 sm:py-12">
      <div className="relative w-full max-w-3xl">
        {/* Decorative background glow - Removed animate-pulse for a static elegant glow */}
        <div className="absolute -inset-6 bg-linear-to-r from-sky-500/10 to-indigo-500/10 rounded-[4rem] blur-3xl pointer-events-none" />

        <div className="relative flex flex-col items-center px-8 md:px-16 py-16 glass w-full rounded-[3rem] border border-white/10 shadow-2xl backdrop-blur-3xl bg-slate-900/60 overflow-hidden">

          {/* Subtle pattern background */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none select-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />

          <div className="relative z-10 w-full text-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-sky-500/10 text-sky-400 text-xs font-bold uppercase tracking-widest mb-6 border border-sky-500/20">
              AniList Database
            </span>

            <h1 className="text-5xl md:text-7xl font-black mb-6 bg-linear-to-b from-white to-slate-400 bg-clip-text text-transparent tracking-tighter">
              Search {type}
            </h1>

            <p className="text-slate-400 text-lg md:text-xl font-medium mb-12 max-w-lg mx-auto leading-relaxed opacity-80">
              Explore and discover your next favorite {type.toLowerCase()} titles in our extensive database.
            </p>

            <div className="w-full max-w-xl mx-auto scale-105 md:scale-110">
              <SearchFormComponent action={searchAction} />
            </div>

            <div className="mt-16 flex items-center justify-center gap-8 opacity-30">
              <div className="h-px flex-1 bg-linear-to-r from-transparent to-white" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white whitespace-nowrap">AniList API Powered</span>
              <div className="h-px flex-1 bg-linear-to-l from-transparent to-white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
