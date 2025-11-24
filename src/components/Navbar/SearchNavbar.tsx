import { useState } from "react";
import type { ReactNode } from "react";


type SearchNavbarProps = {
  children: ReactNode;
  onSearch: (query: string) => void;

}

export default function SearchNavbar( { children, onSearch }: SearchNavbarProps ) {
  const [query, setQuery] = useState('');

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setQuery(value);
    onSearch(value);
  }


  return (
    <div className="search-nav flex flex-col items-center gap-4">
      <input
        className="w-[40rem] p-4 rounded-full text-2xl text-black"
        type="text"
        placeholder="Search anime..."
        value={query}
        onChange={handleChange}
      />
      {children}
    </div>
  )
}