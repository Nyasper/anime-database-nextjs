import SearchPage from '@/app/components/SearchPage';
import searchM from './searchM';

export default async function mangaPages() {
  return <SearchPage type="Manga" searchAction={searchM} />;
}

