"use client";

import { useState } from "react";

// Components
import Nav from "./Nav";
import Logo from "./Logo";
import MobileNav from "./MobileNav";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = (): void => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header
        className={`pt-2 md:py-4 text-foreground md:shadow-xl sticky top-0 left-0 right-0 bg-primary z-50 h-full`}
      >
        <div className="container flex justify-between items-center">
          <Logo onClick={isOpen ? toggleMenu : undefined} />
          {/* Desktop nav */}
          <Nav />
          {/* Mobile nav icons and theme switch */}
          <MobileNav toggleMenu={toggleMenu} isOpen={isOpen} />
        </div>
      </header>
      {/* Animate mobile nav */}
      <MobileMenu toggleMenu={toggleMenu} isOpen={isOpen} />
    </>
  );
}
