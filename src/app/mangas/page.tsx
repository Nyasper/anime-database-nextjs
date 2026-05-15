export default async function searchMangaPage() {
  return (
    <div>
      <SearchFormComponent action={searchM} />
    </div>
  );
}

import SearchFormComponent from '@/app/animes/search/searchFormComponent';
import searchM from './search/searchM';
