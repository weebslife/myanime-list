import { getAnimes } from "../../../services/anime/serviceAnime";
import { useFetcher } from "../../../hooks";
import type { AnimeType } from "../../../types/AnimeType";

// type AnimeListProps = {
//   data: AnimeType[];
// };

export default function AnimeList() {
  return (
     <AnimeListTwo />

    // <ul className="list list-anime">
    //   {animes?.map((anime) => (
    //     <Anime
    //       key={anime.mal_id}
    //       anime={anime}
    //       onSelectedAnime={onSelectedAnime}
    //     />
    //   ))}
    // </ul>

)}

const AnimeListTwo = () => {
  // const { data, isLoading } = useFetcher<AnimeListProps>(getAnimes);
  const { data, isLoading } = useFetcher<{ data: AnimeType[] }>(getAnimes);


  console.log(data);

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-6">
      {data?.data?.map((anime) => (
        <>
          <a href={anime.url} target="_blank" key={anime.mal_id} className="bg-[#3c4c54] rounded-lg shadow-lg overflow-hidden w-full flex flex-col">
            <img className="w-full aspect-[3/4] object-cover" src={anime.images.webp.image_url} alt={anime.title} />

            <div className="px-4 py-3 flex flex-col flex-grow">
              
              <h3 className="font-bold text-lg mb-2 line-clamp-1">
                {anime.title}
              </h3>

              <p className="text-sm text-gray-300 line-clamp-4 flex-grow">
                {anime.synopsis}
              </p>
            </div>

            <div className="px-4 pb-4 flex flex-wrap gap-2">
              {anime.genres.map((genre) => (
                <a href={genre.url} key={genre.mal_id}>
                  <span className="bg-gray-200 text-gray-900 px-3 py-1 rounded-full text-xs font-semibold">
                  {genre.name}
                </span>
                </a>
              ))}
            </div>
          </a>

        </>
      ))}
    </div>
  );
};
