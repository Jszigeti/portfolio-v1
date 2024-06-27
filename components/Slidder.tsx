import { useState } from "react";
import Image from "next/image";
import { Project } from "@/types/project";

type SlidderProp = {
  project: Project;
};

export default function Slidder({ project }: SlidderProp) {
  const [slide, setSlide] = useState(0);
  const [direction, setDirection] = useState<"left" | "right" | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  function nextSlide() {
    setIsTransitioning(true);
    setDirection("left");
    setTimeout(() => {
      setSlide(slide === project.imgs.length - 1 ? 0 : slide + 1);
      setDirection(null);
      setIsTransitioning(false);
    }, 300);
  }

  function prevSlide() {
    setIsTransitioning(true);
    setDirection("right");
    setTimeout(() => {
      setSlide(slide === 0 ? project.imgs.length - 1 : slide - 1);
      setDirection(null);
      setIsTransitioning(false);
    }, 300);
  }

  return (
    <section className="carrousel relative mx-auto flex items-center justify-center w-85 md:w-90 h-96 md:h-60 mb-6">
      <button
        onClick={prevSlide}
        className={`absolute left-6 md:left-0 bottom-20 md:bottom-12 arrow ${
          project.imgs.length < 2 ? "hidden" : "arrow-left"
        }`}
      ></button>
      {project.imgs.map((img: string, i: number) => {
        return (
          <Image
            src={img}
            alt={img}
            key={i}
            className={`slide absolute w-full h-full object-cover rounded-3xl transition-transform duration-300 transform ${
              slide === i ? "" : "translate-x-full"
            } ${isTransitioning && direction ? `slide-${direction}` : ""}`}
          />
        );
      })}
      <button
        className={`absolute right-6 md:right-0 bottom-20 md:bottom-12 arrow ${
          project.imgs.length < 2 ? "hidden" : "arrow-right"
        }`}
        onClick={nextSlide}
      ></button>
      <span
        className={`absolute bottom-5 text-third-color text-lg font-medium ${
          project.imgs.length < 2 ? "hidden" : "indicator"
        }`}
      >
        {`${slide + 1}/${project.imgs.length}`}
      </span>
    </section>
  );
}
