import CharacterInfo from '@/app/components/CharacterInfo';
import Image from 'next/image';
import { getCharacterInfoByID } from '@/app/utils/aniListAPI';

export default async function CharacterPage({ params }: PageProps) {
  const { characterID } = await params;
  const { Character } = await getCharacterInfoByID(characterID);
  console.log(Character);
  return (
    <div className="flex flex-row max-lg:flex-col p-1 glass md:w-11/12 mx-auto lg:my-28 rounded-xl border lg:max-h-[70vh] overflow-auto">
      <div className=" m-8">
        <h2 className="text-5xl min-w-max text-center">
          {Character.name.full}
        </h2>
        <Image
          className="mx-auto my-6 w-auto"
          src={Character.image.large}
          width={300}
          height={360}
          alt={`${Character.name.full} image`}
        />
      </div>
      <CharacterInfo props={Character} />
    </div>
  );
}

interface PageProps {
  params: Promise<{
    characterID: number;
  }>;
}
