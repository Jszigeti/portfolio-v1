import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { MobileNavProps } from "@/types/MobileNavProps";
import { links } from "./Nav";

// Components
import Button from "../Button";

export default function MobileMenu({ toggleMenu, isOpen }: MobileNavProps) {
  // Using usePathname to retrieve the active page from the URL
  const pathname = usePathname();

  return (
    <motion.div
      initial={{ height: 0 }}
      animate={{ height: isOpen ? "100vh" : 0 }} // Subtract header height
      transition={{ type: "spring", stiffness: 300, damping: 50 }}
      className={`overflow-hidden bg-primary fixed top-0 left-0 right-0 z-40 pt-16 shadow-xl md:hidden} ${
        isOpen ? "h-full" : ""
      }`}
    >
      <nav className="flex flex-col items-center gap-8 p-4">
        {links.map((link, index) => (
          <Link
            key={index}
            href={link.path}
            onClick={toggleMenu}
            className={`${
              link.path === pathname && "text-accent"
            } font-medium text-2xl hover:text-accent hover:scale-110 transform transition-transform duration-300`}
          >
            {link.name}
          </Link>
        ))}
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
    </motion.div>
  );
}
