import { animeOrder } from './types';

/**
 * Converts a technical order string (e.g., POPULARITY_DESC) into a human-readable format.
 */
export function formatOrderString(order: animeOrder | string, lang: 'en' | 'es' = 'en'): string {
  if (!order) return '';

  // Clean order string in case it contains page info (e.g. "POPULARITY_DESC-1")
  const baseOrder = typeof order === 'string' ? order.split('-')[0] : order;

  const orderMapEN: Record<string, string> = {
    POPULARITY_DESC: 'Most Popular',
    POPULARITY: 'Least Popular',
    TITLE_ROMAJI: 'Title (A-Z)',
    TITLE_ROMAJI_DESC: 'Title (Z-A)',
    TITLE_ENGLISH: 'English Title (A-Z)',
    TITLE_ENGLISH_DESC: 'English Title (Z-A)',
    EPISODES_DESC: 'More Episodes',
    EPISODES: 'Fewer Episodes',
    CHAPTERS_DESC: 'More Chapters',
    CHAPTERS: 'Fewer Chapters',
    ID_DESC: 'Recently Added',
    ID: 'Oldest Added',
    TRENDING_DESC: 'Trending Now',
    SCORE_DESC: 'Highest Score',
    START_DATE_DESC: 'Newest',
    STATUS: 'Status',
    FORMAT: 'Format',
  };

  const orderMapES: Record<string, string> = {
    POPULARITY_DESC: 'Más Populares',
    POPULARITY: 'Menos Populares',
    TITLE_ROMAJI: 'Título (A-Z)',
    TITLE_ROMAJI_DESC: 'Título (Z-A)',
    TITLE_ENGLISH: 'Título Inglés (A-Z)',
    TITLE_ENGLISH_DESC: 'Título Inglés (Z-A)',
    EPISODES_DESC: 'Más Episodios',
    EPISODES: 'Menos Episodios',
    CHAPTERS_DESC: 'Más Capítulos',
    CHAPTERS: 'Menos Capítulos',
    ID_DESC: 'Añadidos Recientemente',
    ID: 'Más Antiguos',
    TRENDING_DESC: 'En Tendencia',
    SCORE_DESC: 'Mayor Puntuación',
    START_DATE_DESC: 'Más Nuevos',
    STATUS: 'Estado',
    FORMAT: 'Formato',
  };

  const orderMap = lang === 'en' ? orderMapEN : orderMapES;
  return orderMap[baseOrder] || baseOrder.replace(/_/g, ' ');
}
