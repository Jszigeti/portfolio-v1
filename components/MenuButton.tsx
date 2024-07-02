import { MobileNavProps } from "@/types/MobileNavProps";

export default function MenuButton({ toggleMenu, isOpen }: MobileNavProps) {
  return (
    <button
      className="flex flex-col items-center justify-center w-12 h-12 p-2 font-bold gap-2"
      onClick={toggleMenu}
    >
      <span
        className={`block w-full h-1 bg-accent rounded transition-all duration-300 ${
          isOpen ? "transform rotate-45 translate-y-3" : ""
        }`}
      ></span>
      <span
        className={`block w-full h-1 bg-accent rounded transition-all duration-300 ${
          isOpen ? "opacity-0" : "opacity-100"
        }`}
      ></span>
      <span
        className={`block w-full h-1 bg-accent rounded transition-all duration-300 ${
          isOpen ? "transform -rotate-45 -translate-y-3" : ""
        }`}
      ></span>
    </button>
  );
}
