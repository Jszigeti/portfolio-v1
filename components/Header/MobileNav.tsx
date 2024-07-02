import { MobileNavProps } from "@/types/MobileNavProps";

// Components
import ThemeSwitch from "../ThemeSwitch";
import MenuButton from "../MenuButton";

export default function MobileNav({ toggleMenu, isOpen }: MobileNavProps) {
  return (
    <div className="md:hidden flex items-center gap-2">
      <ThemeSwitch />
      <div
        onClick={toggleMenu}
        className="hover:scale-105 active:scale-95 transform transition-transform duration-300"
      >
        <MenuButton toggleMenu={toggleMenu} isOpen={isOpen} />
      </div>
    </div>
  );
}
