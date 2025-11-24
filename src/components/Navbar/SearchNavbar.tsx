import { useState } from "react";
import type { ReactNode } from "react";


type SearchNavbarProps = {
  children: ReactNode;
}

export default function SearchNavbar( { children }: SearchNavbarProps ) {
  const [query, setQuery] = useState('');

  return (
    <div className="search-container">
      <input className="search" type="text" placeholder="Search anime..." value={query} onChange={(e) => setQuery(e.target.value)} />
      {children}
    </div>
  )
}