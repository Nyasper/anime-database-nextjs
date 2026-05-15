import SearchPage from '@/app/components/SearchPage';
import { redirect } from 'next/navigation';

export default async function animePages() {
  async function create(formData: FormData) {
    'use server';
    const searchValue = formData.get('search');
    redirect(`/animes/search/${searchValue}`);
  }

  return <SearchPage type="Anime" searchAction={create} />;
}
