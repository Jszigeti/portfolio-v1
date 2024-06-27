"use client";

import { Project } from "@/types/project";
import { fetchProjects } from "@/utils/fetchProjects";
import { useEffect, useState } from "react";

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const fetchProjectsAsync = async () => {
      try {
        const res = await fetchProjects();
        setProjects(res.projects);
      } catch (error) {
        console.error("Erreur :", error);
      }
    };
    fetchProjectsAsync();
  }, []);

  return (
    <main className="container flex flex-col gap-8 py-6 lg:py-8 my-6 lg:my-8">
      <h2 className="text-5xl font-bold text-accent text-center lg:text-left">
        Projets
      </h2>
      <ul>
        {projects.length > 0 ? (
          projects.map((project) => <li key={project.id}>{project.title}</li>)
        ) : (
          <li>Aucun projet disponible</li>
        )}
      </ul>
    </main>
  );
}
