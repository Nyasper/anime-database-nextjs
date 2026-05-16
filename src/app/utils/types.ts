//Interfaces
export interface Anime {
  id: number;
  title: title;
  type: Type;
  format: Format;
  season: Season;
  seasonYear: number;
  status: Status;
  popularity: number;
  episodes: number | null;
  genres: string[];
  isAdult: boolean;
  bannerImage: string;
  coverImage: coverImage;
}
export interface Manga {
  id: number;
  title: title;
  type: Type;
  format: Format;
  season: Season;
  seasonYear: number;
  status: Status;
  popularity: number;
  chapters: number;
  volumes: number;
  genres: string[];
  isAdult: boolean;
  bannerImage: string;
  coverImage: coverImage;
}

export interface title {
  romaji: string;
  english: string | null;
}

export interface coverImage {
  large: string;
  extraLarge: string;
}

export type Status =
  | 'FINISHED'
  | 'RELEASING'
  | 'NOT_YET_RELEASED'
  | 'CANCELLED'
  | 'HIATUS';

export type Format =
  | 'TV'
  | 'TV_SHORT'
  | 'MOVIE'
  | 'SPECIAL'
  | 'OVA'
  | 'ONA'
  | 'MUSIC'
  | 'MANGA'
  | 'NOVEL'
  | 'ONE_SHOT';

export type Type = 'ANIME' | 'MANGA';

export type Season = 'WINTER' | 'SPRING' | 'SUMMER' | 'FALL';

export interface pageInfo {
  total: number;
  currentPage: number;
  lastPage: number;
  hasNextPage: boolean;
  perPage: number;
  order?: animeOrder;
}

//QUERIES
export interface getAllAnimesQuery {
  Page: {
    pageInfo: pageInfo;
    media: Anime[];
    params?: string;
  };
}

export interface getAllMangasQuery {
  Page: {
    pageInfo: pageInfo;
    media: Anime[];
    params?: string;
  };
}

export interface getAnimeInfoByAnimeIdQuery extends Anime {
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

export interface characterQuery {
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
  media?: {
    nodes: {
      id: number;
      title: title;
      type: Type;
      coverImage: {
        medium: string;
      };
    }[];
  };
}

export interface getAllCharactersInterface {
  Page: {
    pageInfo: pageInfo;
    media: [
      {
        id: number;
        title: { romaji: string };
        popularity: number;
        characters: {
          nodes: characterQuery[];
        };
      },
    ];
  };
}

export type animeOrder =
  | 'ID'
  | 'ID_DESC'
  | 'TITLE_ROMAJI'
  | 'TITLE_ROMAJI_DESC'
  | 'TITLE_ENGLISH'
  | 'TITLE_ENGLISH_DESC'
  | 'TYPE'
  | 'TYPE_DESC'
  | 'FORMAT'
  | 'FORMAT_DESC'
  | 'POPULARITY'
  | 'POPULARITY_DESC'
  | 'EPISODES'
  | 'EPISODES_DESC'
  | 'STATUS'
  | 'STATUS_DESC'
  | 'CHAPTERS'
  | 'CHAPTERS_DESC'
  | 'SEARCH_MATCH';

export type characterOrder =
  | 'ID'
  | 'ID_DESC'
  | 'ROLE'
  | 'ROLE_DESC'
  | 'SEARCH_MATCH'
  | 'FAVOURITES'
  | 'FAVOURITES_DESC'
  | 'RELEVANCE';

export interface linkInterface {
  name: string;
  route: string;
}

export interface propsState {
  state: boolean;
  click?: MouseEventHandler;
  hidden?: MouseEventHandler;
  params?: string;
}

interface searchAnime {
  order: string;
  page: number;
  search: string | null;
}

import { MouseEventHandler } from 'react';
