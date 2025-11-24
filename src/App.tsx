import { useState } from 'react';
import './App.css';
// import { animesData } from './utils/AnimeData';
import Navbar from './components/Navbar/Navbar';
import SearchNavbar from './components/Navbar/SearchNavbar';
import Result from './components/Navbar/Result';
import MainContent from './components/Main/MainContent';
import Box from './components/Main/Box/Box';
import AnimeList from './components/Main/Box/AnimeList';
import { getAnimes } from './services/anime/serviceAnime';
import { useFetcher } from './hooks';
import type { AnimeType, AnimeResponse } from './types/AnimeType';
// import AnimeDetail from './components/Main/Box/AnimeDetail';


export default function App() {
  const [page] = useState(1);

  // const [animes] = useState(animesData);
  // const [selectedAnime, setSelectedAnime] = useState(animes[0]);

  const { data, isLoading } = useFetcher<AnimeResponse>(
    () => getAnimes(page),
    ["animes", page]
  );

  const [selectedAnime, setSelectedAnime] = useState<AnimeType | null>(null);
  if (isLoading) return <p>Loading...</p>;

  return (
    <>
      <Navbar>
        <SearchNavbar>
          <Result animes={data?.data || []} />
        </SearchNavbar>
      </Navbar>
      <MainContent>
        <Box selectedAnime={selectedAnime}>
          <AnimeList
              animes={data?.data || []}
              onSelectedAnime={(id: number) => {
                const find = data?.data.find(a => a.mal_id === id);
                if (find) setSelectedAnime(find);
              }}
            />
        </Box>
        {/* <Box selectedAnime={selectedAnime}>
          <AnimeDetail selectedAnime={selectedAnime} />
        </Box> */}
      </MainContent>
    </>
      
  );
}