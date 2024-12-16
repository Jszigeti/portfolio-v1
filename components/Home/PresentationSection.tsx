import Link from "next/link";

// Components
import Button from "../Button";

export default function PresentationSection() {
  return (
    <section className="flex flex-col items-center justify-center gap-8 lg:flex-row lg:justify-around py-6 lg:py-8 my-6 lg:my-8 lg:rounded-xl lg:shadow-xl">
      <img
        src="/assets/portrait_js.webp"
        alt="Jonas picture"
        width="250px"
        height="250px"
        className="rounded-full border-solid border-b-4 border-r-4 border-accent"
      />
      <div className="flex flex-col lg:w-1/2 gap-8">
        <div>
          <p className="font-bold text-lg">Développeur Full Stack</p>
          <h2 className=" text-5xl font-bold">
            Jonas
            <span className="text-accent"> Szigeti</span>
          </h2>
        </div>
        <p className="text-lg text-justify">
          <span className="text-accent font-semibold">
            Développeur Full Stack & DevOps
          </span>
          , passionné par la création d&apos;applications modernes et scalables,
          j&apos;allie créativité et rigueur technique pour transformer des
          concepts innovants en solutions numériques performantes. Grâce à une
          expertise en React, TypeScript, NestJS et une approche centrée sur la
          Clean Architecture, je conçois des interfaces intuitives et des
          backends robustes, prêts à évoluer avec vos besoins. Curieux et
          toujours à l&apos;écoute des dernières tendances, je suis prêt à
          relever vos défis techniques et à vous accompagner dans{" "}
          <span className="text-accent font-semibold">
            la réalisation de vos projets ambitieux.
          </span>
        </p>
        <Link href="/assets/CV_Jonas_Szigeti.pdf" target="_blank">
          <Button content="VOIR MON CV" className="text-xl" />
        </Link>
      </div>
    </section>
  );
}
