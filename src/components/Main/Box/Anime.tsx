import type { AnimeType } from "../../../types/AnimeType"

type AnimeProps = {
  anime: AnimeType;
  onSelectedAnime: (id: number) => void;

}

export default function Anime( { anime, onSelectedAnime } : AnimeProps ) {
  return (
    <li onClick={() => onSelectedAnime(anime.mal_id)}>
      <img src={anime.image} alt={`${anime.title} cover`} />
      <h3>{anime.title}</h3>
      <div>
        <p>
          <span>{anime.year}</span>
        </p>
      </div>
    </li>
  )
}