import { useState } from 'react';
import './App.css';
// import { animesData } from './utils/AnimeData';
import Navbar from './components/Navbar/Navbar';
import SearchNavbar from './components/Navbar/SearchNavbar';
import Result from './components/Navbar/Result';
import MainContent from './components/Main/MainContent';
import Box from './components/Main/Box/Box';
import AnimeList from './components/Main/Box/AnimeList';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { getAnimes } from './services/anime/serviceAnime';
import { useFetcher } from './hooks';
import type { AnimeType, AnimeResponse } from './types/AnimeType';
// import AnimeDetail from './components/Main/Box/AnimeDetail';


export default function App() {

  const queryClient = new QueryClient();
  
  // const [animes] = useState(animesData);
  // const [selectedAnime, setSelectedAnime] = useState(animes[0]);

  const { data, isLoading } = useFetcher<AnimeResponse>(getAnimes);
  const defaultAnime = data?.data?.[0] ?? null;
  const [selectedAnime, setSelectedAnime] = useState<AnimeType | null>(null);
  const activeAnime = selectedAnime ?? defaultAnime;




  // function handleSelectedAnime(id: number) {
  //   const newAnime = data.filter((anime) => anime.mal_id === id);
  //   setSelectedAnime(newAnime[0]);
  // }

  // useEffect(() => {
  //   if (data?.data && !selectedAnime) {
  //     setSelectedAnime(data.data[0]);
  //   }
  // }, [data]);


  if (isLoading) return <p>Loading...</p>;


  return (
    <QueryClientProvider client={queryClient}>
   
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
      
     </QueryClientProvider>
  );
}