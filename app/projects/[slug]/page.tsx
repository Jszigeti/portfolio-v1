"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { SlArrowLeft } from "react-icons/sl";
import { fetchProjects } from "@/utils/fetchProjects";
import { Objective, Project, Stack } from "@/types/project";

// Components
import LoadingAnimation from "@/components/LoadingAnimation";
import Collapse from "@/components/Collapse";
import Button from "@/components/Button";
import Slidder from "@/components/Slidder";

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);

  // Retrieving projects and filter based on slug
  useEffect(() => {
    const fetchProjectsAsync = async () => {
      try {
        const res = await fetchProjects();
        const filteredProject = res.projects.find(
          (proj: Project) => proj.slug === params.slug
        );
        setProject(filteredProject || null);
      } catch (error) {
        console.error("Erreur :", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProjectsAsync();
  }, [params.slug]);

  return (
    <main className="container flex flex-col gap-8 py-6 lg:py-8 my-6 lg:my-8">
      {/* Shows a loading animation while projects load */}
      {loading ? (
        <div className="flex justify-center items-center">
          <LoadingAnimation />
        </div>
      ) : project ? (
        <section className="flex flex-col gap-6">
          <Link
            href="/projects"
            className="text-xl lg:hidden flex gap-4 items-center font-semibold"
          >
            <SlArrowLeft /> Retour aux projets
          </Link>
          <h2 className="text-5xl font-bold text-accent text-center lg:text-left">
            {project.title}
          </h2>
          {/* Slidder */}
          <Slidder project={project} />
          {/* Collapses with the objectives and stacks used */}
          <div className="flex flex-col lg:flex-row justify-center gap-8">
            <Collapse
              title={`Objectif${project.objectives.length > 1 ? "s" : ""}`}
              className="lg:w-1/2"
            >
              <ul className="text-lg">
                {project.objectives.map((objective: Objective) => (
                  <li className="p-2 text-justify" key={objective.id}>
                    {objective.name}
                  </li>
                ))}
              </ul>
            </Collapse>
            <Collapse
              title={`Technologie${
                project.stacks.length > 1 ? "s" : ""
              } utilisée${project.stacks.length > 1 ? "s" : ""}`}
              className="lg:w-1/2"
            >
              <ul className="text-lg">
                {project.stacks.map((stack: Stack) => (
                  <li className="p-2 text-justify" key={stack.id}>
                    {stack.name}
                  </li>
                ))}
              </ul>
            </Collapse>
          </div>
          <div className="rounded-lg shadow-2xl p-4">
            <p className="text-justify">{project.description}</p>
            {/* Conditional display depending on the link */}
            <div className="flex justify-center lg:justify-start mt-4">
              <Link href={project.link} target="_blank">
                <Button
                  content={`${
                    project.link.includes("github")
                      ? "Voir le repository"
                      : "Voir le projet"
                  }`}
                />
              </Link>
            </div>
          </div>
        </section>
      ) : (
        // Display of the message "Projet non trouvé" if it's impossible to retrieve the projects from the database
        <div className="flex justify-center items-center">
          <p>Projet non trouvé.</p>
        </div>
      )}
    </main>
  );
}
