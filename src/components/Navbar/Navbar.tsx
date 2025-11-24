import Logo from "./Logo";
import type { ReactNode } from "react";

type NavbarProps = {
  children: ReactNode;
}

export default function Navbar( {children}: NavbarProps ) {
  return (
    <nav className="flex flex-col gap-4 justify-center">
      <Logo />
      {children}
    </nav>
  )
}