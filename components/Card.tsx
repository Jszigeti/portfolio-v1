import { Project } from "@/types/project";
import Image from "next/image";
import Link from "next/link";

type CardProp = {
  project: Project;
};

export default function Card({ project }: CardProp) {
  return (
    <Link href={`/projects/${project.id}`} key={project.id}>
      <a className="relative block rounded-lg overflow-hidden border border-gray-200 hover:border-gray-300 transition duration-300">
        <div className="aspect-w-1 aspect-h-1">
          <Image
            src={project.cover}
            alt={`${project.title} pict`}
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-gray-700 to-transparent opacity-75 transition duration-300"></div>
        <div className="absolute inset-0 flex items-end px-4 py-2">
          <h2 className="text-white text-lg font-semibold">{project.title}</h2>
        </div>
      </a>
    </Link>
  );
}
