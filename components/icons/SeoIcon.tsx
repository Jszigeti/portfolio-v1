export default function SeoIcon({
  size,
  className,
  title,
}: {
  size: string;
  className?: string;
  title?: string;
}) {
  return (
    <div className="flex flex-col gap-4 items-center w-1/3">
      <svg width={size} height={size} className={className} viewBox="0 0 24 24">
        <path d="M21,4V7H3V4A1,1,0,0,1,4,3H20A1,1,0,0,1,21,4ZM3,9H21V20a1,1,0,0,1-1,1H4a.974.974,0,0,1-.46-.126l3.587-3.587,2.318,1.545a1,1,0,0,0,1.262-.125l2-2a1,1,0,0,0-1.414-1.414l-1.42,1.42L7.555,15.168a1,1,0,0,0-1.262.125L3,18.586Zm11.293,4.707a1,1,0,0,0,1.414,0l1-1a1,1,0,0,0-1.414-1.414l-1,1A1,1,0,0,0,14.293,13.707Z" />
      </svg>
      <h3 className="text-xl font-bold text-accent">{title}</h3>
    </div>
  );
}
