import { useState } from "react";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { Media, Project } from "@/types/project";

type SlidderProp = {
  project: Project;
};

export default function Slidder({ project }: SlidderProp) {
  // States managing the current slide and the transition
  const [slide, setSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Function to display the next slide
  function nextSlide() {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setTimeout(() => {
        setSlide((prevSlide) =>
          prevSlide === project.medias_url.length - 1 ? 0 : prevSlide + 1
        );
        setIsTransitioning(false);
      }, 300);
    }
  }

  // Function to display the previous slide
  function prevSlide() {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setTimeout(() => {
        setSlide((prevSlide) =>
          prevSlide === 0 ? project.medias_url.length - 1 : prevSlide - 1
        );
        setIsTransitioning(false);
      }, 300);
    }
  }

  return (
    <section className="relative mx-auto flex items-center justify-center h-72 sm:h-96 lg:h-[32rem] xl:h-[40rem] mb-6 w-full overflow-hidden rounded-xl shadow-xl">
      {/* Previous slide button */}
      <button
        onClick={prevSlide}
        className={`absolute left-4 md:left-8 top-1/2 transform -translate-y-1/2 z-20 text-accent text-3xl md:text-5xl font-bold ${
          project.medias_url.length < 2 ? "hidden" : ""
        }`}
      >
        <SlArrowLeft />
      </button>
      <div className="relative w-full h-full">
        {/* Generation of slider images */}
        {project.medias_url.map((media: Media, index: number) => (
          <img
            src={media.url}
            alt={media.url}
            key={media.id}
            className={`absolute w-full h-full object-cover transition-transform duration-300 ease-in-out ${
              slide === index
                ? "translate-x-0"
                : slide < index
                ? "translate-x-full"
                : "-translate-x-full"
            }`}
          />
        ))}
      </div>
      {/* Next slide button */}
      <button
        className={`absolute right-4 md:right-8 top-1/2 transform -translate-y-1/2 z-20 text-accent text-3xl md:text-5xl ${
          project.medias_url.length < 2 ? "hidden" : ""
        }`}
        onClick={nextSlide}
      >
        <SlArrowRight />
      </button>
      {/* Bullet points indicating the current slide */}
      <div className="absolute bottom-5 flex space-x-2">
        {project.medias_url.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${
              slide === index ? "bg-accent" : "bg-gray-300"
            } ${project.medias_url.length < 2 ? "hidden" : ""}`}
          ></div>
        ))}
      </div>
    </section>
  );
}
