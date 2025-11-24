import type { AnimeType } from "../../types/AnimeType";

type ResultProps = {
  animes: AnimeType[]; 
};


export default function Result( {animes} : ResultProps ) {
  return (
    <p className="search-results">
      Found <strong>{animes.length}</strong> results
    </p>
  )
}