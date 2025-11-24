
import type { AnimeType } from "../../../types/AnimeType";

type AnimeDetailProps = {
  selectedAnime: AnimeType | null;
};


export default function AnimeDetail( { selectedAnime }: AnimeDetailProps ) {

  if (!selectedAnime) return null;

  return (
    <div className="details">
      <header>
        <img src={selectedAnime.images.webp.image_url} alt={`${selectedAnime.title} cover`} />
        <div className="details-overview">
          <h2>{selectedAnime.title}</h2>anime.images.webp.image_url
          <p>
            {selectedAnime.year} &bull; {selectedAnime.score}
          </p>
        </div>
      </header>
      <section>
        <p>
          <em>{selectedAnime.synopsis}</em>
        </p>
      </section>
    </div>
  );
}