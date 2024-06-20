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
      className={`inline-flex items-center justify-center border-2 border-accent whitespace-nowrap font-medium h-11 rounded-md px-8 text-foreground text-lg w-full hover:bg-accent hover:text-primary hover:scale-105 active:scale-95 transform transition-transform duration-150 shadow-lg ${className}`}
      onClick={onClickFunction}
    >
      {content}
    </button>
  );
}
