import { useState } from "react";
import { useFetcher } from "../hooks";
import { getAnimeSeasons } from "../services/anime/serviceAnime";
import AnimeList from "../components/Main/Box/AnimeList";
import type { AnimeResponse } from "../types/AnimeType";

type AnimeListPageProps = {
  searchQuery: string;
};

export default function AnimeListPage({ searchQuery }: AnimeListPageProps) {
  const [page, setPage] = useState(1);

  // Fetch API
  const { data, isLoading } = useFetcher<AnimeResponse>(
    () => getAnimeSeasons(page),
    ["animes", page]
  );

  if (isLoading) return <p>Loading...</p>;

  // Filtering by search query
  const filtered =
    data?.data.filter((anime) =>
      anime.title.toLowerCase().includes(searchQuery.toLowerCase())
    ) || [];

  return (
    <AnimeList
      animes={filtered}
      page={page}
      setPage={setPage}
      pagination={data?.pagination}
    />
  );
}
