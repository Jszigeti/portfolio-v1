import React, { useState } from "react";
import { Project } from "@/types/project";

// Componentss
import Card from "./Card";
import Button from "../Button";

type CardListProps = {
  projects: Project[];
};

export default function CardList({ projects }: CardListProps) {
  // State managing the number of projects displayed
  const [visibleCount, setVisibleCount] = useState(3);

  //   Function to display more projects
  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 3);
  };

  return (
    <div className="p-4">
      <div className="flex flex-col justify-center gap-6 md:gap-10 lg:gap-14 mt-6">
        {/* Viewing projects based on visibleCount state */}
        {projects.slice(0, visibleCount).map((project: Project) => (
          <Card project={project} key={project.id} />
        ))}
      </div>
      {/* Generation of a “Charger plus” button if there are still projects to display */}
      {visibleCount < projects.length && (
        <div className="mt-8 flex justify-center">
          <Button
            content="Charger plus"
            onClickFunction={handleLoadMore}
            className="md:w-1/3"
          />
        </div>
      )}
    </div>
  );
}
