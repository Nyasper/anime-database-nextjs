'use server';
export default async function search(formData: FormData) {
  const searchValue = formData.get('search');
  redirect(`/animes/search/${searchValue}`);
}
import { redirect } from 'next/navigation';
