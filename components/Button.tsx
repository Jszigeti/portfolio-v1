export default function Button({
  content,
  className,
  onClickFunction,
}: {
  content: string;
  className?: string;
  onClickFunction?: React.MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <button
      className={`inline-flex items-center justify-center text-accent font-bold border-2 border-accent whitespace-nowrap h-11 rounded-md px-8 text-lg w-full hover:bg-accent hover:text-primary hover:scale-105 active:scale-95 transform transition-all duration-300 shadow-2xl ${className}`}
      onClick={onClickFunction}
    >
      {content}
    </button>
  );
}
