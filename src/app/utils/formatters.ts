import { animeOrder } from './types';

/**
 * Converts a technical order string (e.g., POPULARITY_DESC) into a human-readable format.
 */
export function formatOrderString(order: animeOrder | string): string {
  if (!order) return '';

  // Clean order string in case it contains page info (e.g. "POPULARITY_DESC-1")
  const baseOrder = typeof order === 'string' ? order.split('-')[0] : order;

  const orderMap: Record<string, string> = {
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

  return orderMap[baseOrder] || baseOrder.replace(/_/g, ' ');
}
