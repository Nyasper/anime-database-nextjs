'use client';
import { useLanguage } from '../context/LanguageContext';

export default function MediaInfo(props: props) {
  const { lang } = useLanguage();
  
  const textInfo = lang === 'en' ? 'Anime Information' : 'Información del Anime';
  const textFormat = lang === 'en' ? 'Format:' : 'Formato:';
  const textSeason = lang === 'en' ? 'Season:' : 'Temporada:';
  const textStatus = lang === 'en' ? 'Status:' : 'Estado:';
  const textEpisodes = lang === 'en' ? 'Episodes:' : 'Episodios:';
  const textChapters = lang === 'en' ? 'Chapters:' : 'Capítulos:';
  const textVolumes = lang === 'en' ? 'Volumes:' : 'Volúmenes:';
  const textGenres = lang === 'en' ? 'Genres:' : 'Géneros:';
  const textPopularity = lang === 'en' ? 'Popularity:' : 'Popularidad:';
  return (
    <>
      <div className="w-full h-max p-2 mt-6 sm:mt-12 mb-6">
        <h2 className="text-6xl max-md:text-4xl text-center font-bold text-glow tracking-tight">
          {props.Page.media[0].title.romaji}
        </h2>
        <div className="relative mx-auto my-12 w-200 max-w-full rounded-2xl overflow-hidden glass-glow">
          <Image
            className="w-full h-auto object-cover"
            src={
              props.Page.media[0].bannerImage
                ? props.Page.media[0].bannerImage
                : '/cover-image.png'
            }
            priority
            unoptimized
            width={800}
            height={400}
            alt={`${props.Page.media[0].title.romaji} banner image`}
          />
          <div className="absolute inset-0 bg-linear-to-t from-primary to-transparent opacity-60"></div>
        </div>
      </div>
      <div className="glass-glow p-8 xl:w-11/12 mx-auto h-max mb-12 rounded-2xl">
        <h3 className="text-3xl font-bold mb-6 text-glow">{textInfo}</h3>
        <ul className="flex flex-col text-lg my-2 gap-3 font-light">
          {props.Page.media[0].format ? (
            <li className="flex items-center gap-2">
              <span className="font-semibold text-sky-400">{textFormat}</span>{' '}
              {props.Page.media[0].format}
            </li>
          ) : null}
          {props.Page.media[0].season ? (
            <li className="flex items-center gap-2">
              <span className="font-semibold text-sky-400">{textSeason}</span>{' '}
              {props.Page.media[0].season} {props.Page.media[0].seasonYear}
            </li>
          ) : null}
          {props.Page.media[0].status ? (
            <li className="flex items-center gap-2">
              <span className="font-semibold text-sky-400">{textStatus}</span>{' '}
              {props.Page.media[0].status}
            </li>
          ) : null}
          {props.Page.media[0].episodes ? (
            <li className="flex items-center gap-2">
              <span className="font-semibold text-sky-400">{textEpisodes}</span>{' '}
              {props.Page.media[0].episodes}
            </li>
          ) : null}
          {props.Page.media[0].chapters ? (
            <li className="flex items-center gap-2">
              <span className="font-semibold text-sky-400">{textChapters}</span>{' '}
              {props.Page.media[0].chapters}
            </li>
          ) : null}
          {props.Page.media[0].volumes ? (
            <li className="flex items-center gap-2">
              <span className="font-semibold text-sky-400">{textVolumes}</span>{' '}
              {props.Page.media[0].volumes}
            </li>
          ) : null}
          {props.Page.media[0].genres ? (
            <li className="flex items-center gap-2 flex-wrap">
              <span className="font-semibold text-sky-400 mr-2">{textGenres}</span>{' '}
              {props.Page.media[0].genres.map((genre) => (
                <Link
                  href={`/${props.Page.media[0].type.toLowerCase()}s/genre/${genre}`}
                  className="px-3 py-1 bg-sky-500/10 border border-sky-400/30 rounded-full text-sm mr-2 shadow-sm hover:bg-sky-500/30 transition-colors cursor-pointer"
                  key={genre}
                >
                  {genre}
                </Link>
              ))}
            </li>
          ) : null}
          {props.Page.media[0].popularity ? (
            <li className="flex items-center gap-2">
              <span className="font-semibold text-sky-400">{textPopularity}</span>{' '}
              {props.Page.media[0].popularity}
            </li>
          ) : null}
          <div className="my-6">
            <FavoriteButton mediaInfo={props.Page.media[0]} />
          </div>
        </ul>
      </div>
    </>
  );
}

interface props {
  Page: {
    pageInfo: pageInfo;
    media: [
      {
        id: number;
        title: title;
        type: Type;
        format: Format;
        season: Season;
        seasonYear: number;
        status: Status;
        popularity: number;
        episodes: number | null;
        chapters: number | null;
        volumes: number | null;
        genres: string[];
        isAdult: boolean;
        bannerImage: string;
        coverImage: coverImage;
        characters: {
          nodes: characterQuery[];
        };
      },
    ];
  };
}

import FavoriteButton from '@/app/components/FavoriteButton';
import Link from 'next/link';
import {
  pageInfo,
  Season,
  Status,
  coverImage,
  title,
  characterQuery,
  Format,
  Type,
} from '@/app/utils/types';
import Image from 'next/image';
