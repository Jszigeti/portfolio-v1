import Link from "next/link";
import { usePathname } from "next/navigation";

// Components
import Button from "../Button";
import ThemeSwitch from "../ThemeSwitch";

export const links = [
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
  // Using usePathname to retrieve the active page
  const pathname = usePathname();

  return (
    <nav className="hidden md:flex items-center gap-6 lg:gap-8">
      {/* Generating links */}
      {links.map((link, index) => {
        return (
          <Link
            key={index}
            href={link.path}
            className={`${
              link.path === pathname && "text-accent border-b-2 border-accent"
            } font-medium text-lg hover:text-accent hover:scale-110 transform transition-transform duration-300`}
          >
            {link.name}
          </Link>
        );
      })}
      {/* Contact button */}
      <Link href="/contact">
        <Button
          content="Me contacter"
          className={`${
            pathname === "/contact" && "bg-accent text-primary"
          } text-lg`}
        />
      </Link>
      {/* Theme control button */}
      <ThemeSwitch />
    </nav>
  );
}
