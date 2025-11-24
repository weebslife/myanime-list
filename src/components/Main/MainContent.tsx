import type { ReactNode } from "react";


type childrenProps = {
  children: ReactNode;
}
export default function MainContent( { children }: childrenProps  ) {

  return (
    <main className="flex justify-center mt-4">
      {children}
    </main>
  );
}