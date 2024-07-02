type CollapseButtonProps = {
  isOpen: boolean;
};

export default function CollapseButton({ isOpen }: CollapseButtonProps) {
  return (
    <div className="flex items-center justify-center w-10 h-10 p-2 relative">
      <span
        className={`absolute block w-6 h-1 rounded-full bg-accent mx-1 transition-opacity duration-300 ${
          isOpen ? "opacity-0 bg-primary" : "opacity-100"
        }`}
      ></span>
      <span
        className={`block w-1 h-6 rounded-full bg-accent mx-1 transition-transform duration-300 ${
          isOpen ? "transform rotate-90 bg-primary" : ""
        }`}
      ></span>
    </div>
  );
}
