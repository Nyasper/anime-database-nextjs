import { getMediaInfoByID } from '@/app/utils/aniListAPI';
import CharactersList from './CharactersList';

interface Props {
  mediaID: number;
  order: string;
  mediaType: 'animes' | 'mangas';
}

export default async function CharactersContainer({
  mediaID,
  order,
  mediaType,
}: Props) {
  let pages = [];
  try {
    pages = await Promise.all([
      getMediaInfoByID(mediaID, 1),
      getMediaInfoByID(mediaID, 2),
      getMediaInfoByID(mediaID, 3),
    ]);
  } catch (error) {
    console.error('Error loading characters on server:', error);
    return null;
  }

  return (
    <div className="animate-in fade-in duration-700">
      {pages.map((data, index) => {
        if (!data || !data.Page) return null;
        return (
          <CharactersList
            key={`${mediaID}-page-${index + 1}`}
            Page={data.Page}
            mediaID={mediaID}
            order={order}
            characterPage={index + 1}
            mediaType={mediaType}
          />
        );
      })}
    </div>
  );
}

