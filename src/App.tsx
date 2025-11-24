import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import SearchNavbar from "./components/Navbar/SearchNavbar";
import Result from "./components/Navbar/Result";
import AnimeListPage from "./pages/AnimeListPage";
import AnimeDetailPage from "./pages/AnimeDetailPage";
import { useState } from "react";

export default function App() {
  const [query, setQuery] = useState("");

  return (
    <>
      <Navbar>
        <SearchNavbar onSearch={setQuery}>
          <Result />
        </SearchNavbar>
      </Navbar>

      <Routes>
        <Route path="/" element={<AnimeListPage searchQuery={query} />} />
        <Route path="/anime/:id" element={<AnimeDetailPage />} />
      </Routes>
    </>
  );
}
