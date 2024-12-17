import Link from "next/link";
import { Project } from "@/types/project";
import Image from "next/image";

type CardProp = {
  project: Project;
};

export default function Card({ project }: CardProp) {
  return (
    // Generating link based on the slud
    <Link
      href={`/projects/${project.slug}`}
      key={project.id}
      className="relative block rounded-lg overflow-hidden hover:scale-105 active:scale-95 transition duration-300 w-full shadow-lg"
    >
      <div className="aspect-[16/9] w-full relative">
        <Image
          src={project.cover_url}
          alt={`${project.title} picture`}
          className="rounded-lg object-cover"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent opacity-75 transition duration-300"></div>
        <div className="absolute inset-0 flex items-end px-4 py-2">
          <h2 className="text-accent text-lg font-semibold">{project.title}</h2>
        </div>
      </div>
    </Link>
  );
}
