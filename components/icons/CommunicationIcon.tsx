export default function CommunicationIcon({
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
      <svg
        width={size}
        height={size}
        className={className}
        viewBox="0 0 512 512"
      >
        <path
          d="M502.82,60.707c-8.747-18.246-23.112-33.379-40.878-43.99C444.158,6.116,422.918,0.018,400.114,0
		c-30.364,0.018-58.026,10.846-78.361,28.784c-10.163,8.974-18.508,19.756-24.32,31.923c-5.825,12.148-9.096,25.69-9.096,39.875
		c-0.009,18.074,5.333,35.08,14.478,49.563c7.811,12.384,18.377,22.977,30.838,31.263l-18.766,46.876l13.551-1.673
		c46.817-5.854,91.631-23.376,112.916-32.575c20.222-7.218,37.676-19.558,50.241-35.586c12.647-16.138,20.332-36.194,20.318-57.867
		C511.926,86.397,508.638,72.856,502.82,60.707z M479.844,146.969c-10.521,13.452-25.695,24.325-43.66,30.638l-0.245,0.072
		l-0.244,0.109c-18.418,7.996-55.674,22.515-95.277,29.408l13.424-33.489l-6.59-3.772c-13.297-7.599-24.184-17.947-31.679-29.824
		c-7.504-11.914-11.62-25.284-11.633-39.531c0-11.19,2.546-21.819,7.25-31.661c7.042-14.736,19.051-27.626,34.464-36.826
		c15.419-9.199,34.19-14.663,54.458-14.654c27.065-0.009,51.394,9.715,68.703,25.012c8.648,7.644,15.541,16.645,20.236,26.468
		c4.699,9.842,7.246,20.471,7.255,31.661C496.298,117.624,490.383,133.491,479.844,146.969z"
        />
        <path
          d="M356.032,89.483c-6.704,0-12.135,6.078-12.135,13.55c0,7.49,5.432,13.56,12.135,13.56
		c6.703,0,12.144-6.07,12.144-13.56C368.176,95.561,362.735,89.483,356.032,89.483z"
        />
        <path
          d="M402.858,89.483c-6.707,0-12.148,6.078-12.148,13.55c0,7.49,5.441,13.56,12.148,13.56
		c6.704,0,12.14-6.07,12.14-13.56C414.998,95.561,409.562,89.483,402.858,89.483z"
        />
        <path
          d="M449.672,89.483c-6.704,0-12.14,6.078-12.14,13.55c0,7.49,5.436,13.56,12.14,13.56
		c6.712,0,12.149-6.07,12.149-13.56C461.82,95.561,456.384,89.483,449.672,89.483z"
        />
        <path
          d="M220.945,347.057c-12.682,4.216-26.202,6.585-40.282,6.585s-27.599-2.369-40.282-6.585
		C48.284,362.172,0.088,429.854,0.088,512h180.575h180.575C361.238,429.854,313.046,362.172,220.945,347.057z"
        />
        <path
          d="M180.663,324.36c54.588,0,98.836-44.252,98.836-98.836v-28.043c0-54.582-44.248-98.836-98.836-98.836
		s-98.836,44.253-98.836,98.836v28.043C81.827,280.108,126.076,324.36,180.663,324.36z"
        />
      </svg>
      <h3 className="text-xl font-bold text-accent">{title}</h3>
    </div>
  );
}
