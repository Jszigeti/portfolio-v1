"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

// Components
import MobileNavIcon from "../icons/MobileNavIcon";
import ClosingIcon from "../icons/ClosingIcon";
import Button from "../Button";
import ThemeSwitch from "../ThemeSwitch";

const links = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Skills",
    path: "/skills",
  },
  {
    name: "Projets",
    path: "/projects",
  },
];

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  return (
    <div className="lg:hidden flex items-center gap-2">
      <ThemeSwitch />
      <div
        onClick={toggleMenu}
        className="hover:scale-105 active:scale-95 transform transition-transform duration-150"
      >
        <MobileNavIcon size="60px" />
      </div>
      <motion.div
        initial={{ y: "-100%" }}
        animate={{ y: isOpen ? 0 : "-100%" }}
        transition={{ type: "spring", stiffness: 300, damping: 50 }}
        className="fixed top-0 right-0 w-full bottom-0 bg-primary shadow-2xl z-30"
      >
        <div>
          <div className="flex justify-end pt-4 pr-4">
            <div
              onClick={toggleMenu}
              className="hover:scale-105 active:scale-95 transform transition-transform duration-150"
            >
              <ClosingIcon size="60px" />
            </div>
          </div>
          <nav className="flex flex-col items-center gap-8">
            {links.map((link, index) => {
              return (
                <Link
                  key={index}
                  href={link.path}
                  onClick={toggleMenu}
                  className={`${
                    link.path === pathname && "text-accent"
                  } font-medium text-2xl hover:text-accent hover:scale-110 transform transition-transform duration-150`}
                >
                  {link.name}
                </Link>
              );
            })}
            <Link href="/contact">
              <Button
                content="Me contacter"
                onClickFunction={toggleMenu}
                className={`${
                  pathname === "/contact" && "bg-accent text-primary"
                } text-2xl`}
              />
            </Link>
          </nav>
        </div>
      </motion.div>
    </div>
  );
}
