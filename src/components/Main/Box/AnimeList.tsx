import { getAnimeSeasons } from "../../../services/anime/serviceAnime";
import { useFetcher } from "../../../hooks";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Type Import
import type { AnimeResponse } from "../../../types/AnimeType";

export default function AnimeList() {
  const searchParams = new URLSearchParams(window.location.search);
  const initialPage = Number(searchParams.get("page")) || 1;
  const navigate = useNavigate();


  const [page, setPage] = useState(initialPage);


  const { data, isLoading } = useFetcher<AnimeResponse>(
    () => getAnimeSeasons(page),
    ["animes", page]
  );


  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    params.set("page", String(page));
    window.history.replaceState({}, "", `?${params.toString()}`);
  }, [page]);


  console.log(data);

  if (isLoading) return <p>Loading...</p>;
  return (
    <>
      <div className="w-100 flex justify-end gap-4">
        <button
          onClick={() => setPage((p) => Math.max(1, p - 1))}
          disabled={page === 1}
          className="px-4 py-2 bg-gray-200 text-black rounded disabled:opacity-40"
        >
          Previous
        </button>

        <button
          onClick={() => setPage((p) => p + 1)}
          disabled={!data?.pagination?.has_next_page}
          className="px-4 py-2 bg-gray-200 text-black rounded disabled:opacity-40"
        >
          Next
        </button>
      </div>

      <div className="flex justify-center w-full">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-6 mt-4 bg-[#E0E0E0] p-6 rounded-xl">
          {data?.data?.map((anime) => (
            <div key={anime.mal_id} className="bg-[#3c4c54] rounded-lg shadow-lg overflow-hidden w-full flex flex-col">
              <img className="w-full aspect-[3/4] object-cover cursor-pointer" src={anime.images.webp.large_image_url} alt={anime.title} onClick={() => navigate(`/anime/${anime.mal_id}`)}  />

              <div className="px-4 py-3 flex flex-col flex-grow">
                
                <h3 className="font-bold text-3xl mb-2 line-clamp-1">
                  {anime.title}
                </h3>

                <p className="text-lg text-gray-300 line-clamp-4 flex-grow">
                  {anime.synopsis}
                </p>
              </div>

              <div className="px-4 pb-4 flex flex-wrap gap-2">
                {anime.genres.map((genre) => (
                  <a href={genre.url} key={genre.mal_id}>
                    <span className="bg-gray-200 text-gray-900 px-3 py-1 rounded-full text-lg font-semibold">
                    {genre.name}
                  </span>
                  </a>
                ))}
              </div>
            </div>
          ))}

        </div>
      </div>
    </>

)}