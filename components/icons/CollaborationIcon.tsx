export default function CollaborationIcon({
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
      <svg width={size} height={size} className={className} viewBox="0 0 32 32">
        <path
          d="M6,21V20H4v1a7,7,0,0,0,7,7h3V26H11A5,5,0,0,1,6,21Z"
          transform="translate(0)"
        />
        <path
          d="M24,11v1h2V11a7,7,0,0,0-7-7H16V6h3A5,5,0,0,1,24,11Z"
          transform="translate(0)"
        />
        <path
          d="M11,11H5a3,3,0,0,0-3,3v2H4V14a1,1,0,0,1,1-1h6a1,1,0,0,1,1,1v2h2V14A3,3,0,0,0,11,11Z"
          transform="translate(0)"
        />
        <path
          d="M8,10A4,4,0,1,0,4,6,4,4,0,0,0,8,10ZM8,4A2,2,0,1,1,6,6,2,2,0,0,1,8,4Z"
          transform="translate(0)"
        />
        <path
          d="M27,25H21a3,3,0,0,0-3,3v2h2V28a1,1,0,0,1,1-1h6a1,1,0,0,1,1,1v2h2V28A3,3,0,0,0,27,25Z"
          transform="translate(0)"
        />
        <path
          d="M20,20a4,4,0,1,0,4-4A4,4,0,0,0,20,20Zm6,0a2,2,0,1,1-2-2A2,2,0,0,1,26,20Z"
          transform="translate(0)"
        />
      </svg>
      <h3 className="text-xl font-bold text-accent">{title}</h3>
    </div>
  );
}
