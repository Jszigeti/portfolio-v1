"use client";

import Card from "@/components/Card";
import LoadingAnimation from "@/components/LoadingAnimation";
import { Project } from "@/types/project";
import { fetchProjects } from "@/utils/fetchProjects";
import { useEffect, useState } from "react";

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjectsAsync = async () => {
      try {
        const res = await fetchProjects();
        setProjects(res.projects);
      } catch (error) {
        console.error("Erreur :", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProjectsAsync();
  }, []);

  return (
    <main className="container flex flex-col gap-8 py-6 lg:py-8 my-6 lg:my-8">
      <h2 className="text-5xl font-bold text-accent text-center lg:text-left">
        Projets
      </h2>
      {loading ? (
        <div className="flex justify-center items-center">
          <LoadingAnimation />
        </div>
      ) : (
        <div className="flex flex-col justify-center gap-6 md:gap-10 lg:gap-14 mt-6">
          {projects.map((project) => (
            <Card project={project} key={project.id} />
          ))}
        </div>
      )}
    </main>
  );
}
