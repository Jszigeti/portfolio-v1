import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/">
      <h1 className="text-4xl lg:text-6xl font-semibold">
        &#x7B;
        <span className="text-accent">js</span>
        works<span className="text-accent">.</span>io&#x7D;
      </h1>
    </Link>
  );
}
