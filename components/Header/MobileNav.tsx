import { MobileNavProps } from "@/types/MobileNavProps";

// Components
import ThemeSwitch from "../ThemeSwitch";
import MenuButton from "../MenuButton";

export default function MobileNav({ toggleMenu, isOpen }: MobileNavProps) {
  return (
    <div className="md:hidden flex items-center gap-2">
      {/* Theme control button */}
      <ThemeSwitch />
      {/* Button to open the menu */}
      <MenuButton toggleMenu={toggleMenu} isOpen={isOpen} />
    </div>
  );
}
