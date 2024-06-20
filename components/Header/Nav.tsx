"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
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

export default function Nav() {
  const pathname = usePathname();
  return (
    <nav className="hidden lg:flex items-center gap-8">
      {links.map((link, index) => {
        return (
          <Link
            key={index}
            href={link.path}
            className={`${
              link.path === pathname && "text-accent border-b-2 border-accent"
            } font-medium text-lg hover:text-accent hover:scale-110 transform transition-transform duration-150`}
          >
            {link.name}
          </Link>
        );
      })}
      <Link href="/contact">
        <Button
          content="Me contacter"
          className={`${
            pathname === "/contact" && "bg-accent text-primary"
          } text-lg`}
        />
      </Link>
      <ThemeSwitch />
    </nav>
  );
}
