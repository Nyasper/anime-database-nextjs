import React from 'react';

interface InfoItemProps {
  label: string;
  value: React.ReactNode;
}

const InfoItem = ({ label, value }: InfoItemProps) => {
  if (!value) return null;
  return (
    <div className="flex flex-col gap-1 py-3 border-b border-white/5 last:border-0 w-full group">
      <span className="text-sky-400 font-bold uppercase text-[10px] tracking-[0.2em] opacity-60 group-hover:opacity-100 transition-opacity">
        {label}
      </span>
      <div className="text-slate-200 font-medium leading-relaxed">
        {value}
      </div>
    </div>
  );
};

export default function CharacterInfo({ props }: CharacterInfoProps) {
  const { name, gender, age, dateOfBirth, siteUrl, description } = props;

  return (
    <div className="flex flex-col gap-6 w-full animate-in fade-in slide-in-from-bottom-4 duration-1000">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-2">
        <InfoItem label="First Name" value={name.first} />
        <InfoItem label="Last Name" value={name.last} />
        <InfoItem label="Native Name" value={name.native} />
        <InfoItem label="Gender" value={gender} />
        <InfoItem label="Age" value={age?.replace(/-$/, '')} />
        <InfoItem
          label="Date of Birth"
          value={dateOfBirth.day ? `${dateOfBirth.day}/${dateOfBirth.month}` : null}
        />
        <div className="md:col-span-2">
          <InfoItem
            label="Anilist URL"
            value={siteUrl ? (
              <a
                href={siteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-400 hover:text-sky-300 transition-colors flex items-center gap-2 group/link w-max"
              >
                View on AniList
                <svg className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            ) : null}
          />
        </div>
      </div>

      {description && (
        <div className="mt-4 p-8 rounded-[2rem] bg-white/[0.03] border border-white/10 shadow-inner">
          <span className="text-sky-400 font-bold uppercase text-[10px] tracking-[0.3em] opacity-60 mb-6 block">
            Biography
          </span>
          <div
            className="text-slate-300 leading-relaxed prose prose-invert prose-sky max-w-none text-sm md:text-base font-normal character-description"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        </div>
      )}
    </div>
  );
}

interface CharacterInfoProps {
  props: {
    id: number;
    name: {
      first: string;
      last: string;
      full: string;
      native: string;
    };
    gender: string;
    age: string;
    image: {
      medium: string;
      large: string;
    };
    dateOfBirth: {
      day: number;
      month: number;
    };
    siteUrl: string;
    description: string;
  };
}
