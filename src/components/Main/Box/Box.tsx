import { useState } from "react";
import type { ReactNode } from "react";

type BoxProps = {
  children: ReactNode;
  selectedAnime: string | null;
};

export default function Box({ children }: BoxProps) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="bg-[#2d3c44] w-full md:w-3/4 p-4 md:p-6">
      <button className="btn-toggle" onClick={() => setIsOpen((open) => !open)}>
        {isOpen ? "–" : "+"}
      </button>

      {isOpen && children}
    </div>
  );
}
