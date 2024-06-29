"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { fetchProjects } from "@/utils/fetchProjects";
import { Objective, Project, Stack } from "@/types/project";
import LoadingAnimation from "@/components/LoadingAnimation";
import Collapse from "@/components/Collapse";
import Button from "@/components/Button";

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);

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
      {loading ? (
        <div className="flex justify-center items-center">
          <LoadingAnimation />
        </div>
      ) : project ? (
        <section className="flex flex-col gap-6">
          <h2 className="text-5xl font-bold text-accent text-center lg:text-left">
            {project.title}
          </h2>
          <img
            src={project.cover_url}
            alt={`${project.title} picture`}
            className="rounded-xl shadow-xl"
          />
          <div className="flex flex-col lg:flex-row justify-center gap-8">
            <Collapse title="Objectifs" className="lg:w-1/2">
              <ul className="text-lg">
                {project.objectives.map((feature: Objective) => (
                  <li className="p-2 text-justify" key={feature.id}>
                    {feature.name}
                  </li>
                ))}
              </ul>
            </Collapse>
            <Collapse title="Technologies utilisées" className="lg:w-1/2">
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
            <p>{project.description}</p>
            <div className="flex justify-center lg:justify-start mt-4">
              <Link href={project.project_link} target="_blank">
                <Button content="Ouvrir le projet" />
              </Link>
            </div>
          </div>
        </section>
      ) : (
        <div className="flex justify-center items-center">
          <p>Projet non trouvé.</p>
        </div>
      )}
    </main>
  );
}
