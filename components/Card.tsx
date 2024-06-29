import { Project } from "@/types/project";
import Image from "next/image";
import Link from "next/link";

type CardProp = {
  project: Project;
};

export default function Card({ project }: CardProp) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      key={project.id}
      className="relative block rounded-lg overflow-hidden hover:scale-105 active:scale-95 transition duration-300 lg:w-5/12 shadow-lg"
    >
      <div>
        <img
          src={project.cover_url}
          alt={`${project.title} pict`}
          width="100%"
          className="rounded-lg object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-primary via-gray-400 to-transparent opacity-75 transition duration-300"></div>
      <div className="absolute inset-0 flex items-end px-4 py-2">
        <h2 className="text-accent text-lg font-semibold">{project.title}</h2>
      </div>
    </Link>
  );
}
