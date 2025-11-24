import { useParams } from "react-router-dom";
import { useFetcher } from "../hooks";
import { getAnimeById } from "../services/anime/serviceAnime";

export default function AnimeDetailPage() {
  const { id } = useParams();

  const { data, isLoading } = useFetcher(
    () => getAnimeById(Number(id)),
    ["anime-detail", id]
  );


  if (isLoading) return <p>Loading…</p>;

  const anime = data.data;

  return (
    <div className="p-8 max-w-3xl mx-auto">
      <img 
        className="rounded-xl"
        src={anime.images.webp.large_image_url} 
        alt={anime.title} 
      />

      <h1 className="text-3xl font-bold mt-4">{anime.title}</h1>

      <p className="mt-2 opacity-80">
        {anime.year} • Score: {anime.score}
      </p>

      <p className="mt-4 leading-relaxed">
        {anime.synopsis}
      </p>

      <div className="flex gap-2 flex-wrap mt-4">
        {anime.genres.map((g: any) => (
          <a href={g.url} key={g.mal_id} className="px-3 py-1 bg-gray-700 rounded-full text-sm">
            {g.name}
          </a>
        ))}
      </div>
    </div>
  );
}
