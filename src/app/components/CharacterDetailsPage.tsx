import CharacterInfo from '@/app/components/CharacterInfo';
import Image from 'next/image';
import { getCharacterInfoByID } from '@/app/utils/aniListAPI';
import ClientAgeBadge from './ClientAgeBadge';

interface CharacterDetailsPageProps {
  characterID: number;
}

export default async function CharacterDetailsPage({ characterID }: CharacterDetailsPageProps) {
  const { Character } = await getCharacterInfoByID(characterID);

  return (
    <div className="flex flex-col items-center justify-center min-h-[75vh] w-full px-4 py-10 lg:py-6">
      <div className="relative flex flex-col lg:flex-row p-4 md:p-8 glass w-11/12 max-w-7xl rounded-[3rem] border border-white/10 shadow-2xl backdrop-blur-3xl bg-slate-900/60 lg:max-h-[80vh] overflow-hidden">

        {/* Background decoration */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-sky-500/10 blur-[100px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-96 h-96 bg-indigo-500/10 blur-[100px] rounded-full pointer-events-none" />

        {/* Left side: Profile Card */}
        <div className="relative z-10 flex flex-col items-center lg:w-87.5 p-6 lg:p-8 border-b lg:border-b-0 lg:border-r border-white/10 shrink-0">
          <div className="relative group w-full max-w-70">
            <div className="absolute -inset-1.5 bg-linear-to-br from-sky-400 to-indigo-500 rounded-3xl blur-md opacity-20 group-hover:opacity-40 transition duration-500" />
            <div className="relative rounded-3xl overflow-hidden aspect-3/4 shadow-2xl border border-white/10">
              <Image
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                src={Character.image.large}
                fill
                unoptimized
                alt={`${Character.name.full} image`}
                priority
                sizes="(max-width: 768px) 100vw, 300px"
              />
            </div>
          </div>

          <div className="mt-8 lg:mt-10 text-center">
            <h1 className="text-3xl md:text-5xl font-black bg-linear-to-b from-white to-slate-400 bg-clip-text text-transparent tracking-tighter leading-tight">
              {Character.name.full}
            </h1>
            {Character.name.native && (
              <p className="text-sky-400 font-bold mt-2 lg:mt-3 text-lg lg:text-xl opacity-80 tracking-wide">
                {Character.name.native}
              </p>
            )}
          </div>

          {/* Quick Stats Placeholder or Badge */}
          <div className="mt-6 lg:mt-8 flex flex-wrap justify-center gap-3">
            {Character.gender && (
              <span className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold text-slate-300 uppercase tracking-widest">
                {Character.gender}
              </span>
            )}
            {Character.age && (
              <ClientAgeBadge age={Character.age} />
            )}
          </div>
        </div>

        {/* Right side: Information Details */}
        <div className="relative z-10 flex-1 overflow-y-auto custom-scrollbar lg:px-10 py-6 lg:py-4">
          <div className="prose prose-invert max-w-none">
            <CharacterInfo props={Character} />
          </div>
        </div>
      </div>
    </div>
  );
}
