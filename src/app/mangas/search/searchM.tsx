'use server';
export default async function searchM(formData: FormData) {
  const searchValue = formData.get('search');
  redirect(`/mangas/search/${searchValue}`);
}
import { redirect } from 'next/navigation';
