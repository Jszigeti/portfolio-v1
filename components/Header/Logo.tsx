import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/">
      <h1 className="text-3xl md:text-4xl xl:text-6xl font-semibold">
        &#x7B;
        <span className="text-accent">js</span>
        project<span className="text-accent">.</span>fr&#x7D;
      </h1>
    </Link>
  );
}
