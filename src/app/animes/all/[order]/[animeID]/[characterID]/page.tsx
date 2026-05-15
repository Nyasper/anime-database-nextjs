import CharacterDetailsPage from '@/app/components/CharacterDetailsPage';

export default async function CharacterPage({ params }: PageProps) {
  const { characterID } = await params;
  return <CharacterDetailsPage characterID={characterID} />;
}

interface PageProps {
  params: Promise<{
    characterID: number;
  }>;
}
