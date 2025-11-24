import type { AnimeType } from "../../types/AnimeType";

type ResultProps = {
  animes: AnimeType[]; 
};


export default function Result( {animes} : ResultProps ) {
  return (
    <p className="text-xl">
      Found <strong>{animes.length}</strong> results Anime
    </p>
  )
}