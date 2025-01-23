import Link from "next/link";

// Components
import Button from "../Button";

export default function PresentationSection() {
  return (
    <section className="flex flex-col items-center justify-center gap-8 lg:flex-row lg:justify-around py-6 lg:py-8 my-6 lg:my-8 lg:rounded-xl lg:shadow-xl">
      <img
        src="/assets/portrait_js.webp"
        alt="Jonas picture"
        width={250}
        height={250}
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
          , je suis avant tout un passionné par le développement web et la
          création de solutions numériques utiles et accessibles. J&apos;aime
          transformer des idées en applications{" "}
          <span className="text-accent font-semibold">modernes</span>,{" "}
          <span className="text-accent font-semibold">intuitives</span> et{" "}
          <span className="text-accent font-semibold">scalables</span>.
        </p>
        <p className="text-lg text-justify">
          Fort d&apos;une expertise en{" "}
          <span className="text-accent font-semibold">React</span>,{" "}
          <span className="text-accent font-semibold">TypeScript</span>,{" "}
          <span className="text-accent font-semibold">NestJS</span>, et
          d&apos;une approche basée sur la{" "}
          <span className="text-accent font-semibold">Clean Architecture</span>,
          je conçois des interfaces ergonomiques et des backends fiables, pensés
          pour s&apos;adapter à{" "}
          <span className="text-accent font-semibold">vos besoins</span>.
        </p>
        <p className="text-lg text-justify">
          Toujours curieux et en veille sur les évolutions technologiques,
          j&apos;aime relever des{" "}
          <span className="text-accent font-semibold">défis techniques</span> et
          m&apos;investir dans des projets ambitieux. Mon objectif ? Vous
          accompagner pour donner vie à vos idées, tout en garantissant qualité
          et performance.
        </p>

        <Link href="/assets/CV_Jonas_Szigeti.pdf" target="_blank">
          <Button content="VOIR MON CV" className="text-xl" />
        </Link>
      </div>
    </section>
  );
}
