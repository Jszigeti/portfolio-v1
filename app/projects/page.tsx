"use client";

import { useEffect, useState } from "react";
import { fetchProjects } from "@/utils/fetchProjects";
import { Project } from "@/types/project";

// Components
import CardList from "@/components/CardList";
import LoadingAnimation from "@/components/LoadingAnimation";

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  // Retrieving projects
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
      {/* Shows a loading animation while projects load */}
      {loading ? (
        <div className="flex justify-center items-center">
          <LoadingAnimation />
        </div>
      ) : (
        <div>
          {/* Generate the list of cards */}
          <CardList projects={projects} />
        </div>
      )}
    </main>
  );
}
