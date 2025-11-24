import { useState } from "react";
import type { ReactNode } from "react";


type SearchNavbarProps = {
  children: ReactNode;
}

export default function SearchNavbar( { children }: SearchNavbarProps ) {
  const [query, setQuery] = useState('');

  return (
    <div className="search-nav flex flex-col items-center gap-4">
      <input className="w-[40rem] p-4 rounded-full text-2xl text-black" type="text" placeholder="Search anime..." value={query} onChange={(e) => setQuery(e.target.value)} />
      {children}
    </div>
  )
}