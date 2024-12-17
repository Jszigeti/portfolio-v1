import Link from "next/link";

// Components
import Button from "../Button";
import Image from "next/image";

export default function PresentationSection() {
  return (
    <section className="flex flex-col items-center justify-center gap-8 lg:flex-row lg:justify-around py-6 lg:py-8 my-6 lg:my-8 lg:rounded-xl lg:shadow-xl">
      <Image
        src="/assets/portrait_js.webp"
        alt="Jonas picture"
        width={250}
        height={250}
        priority={true}
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
          , passionné par la création d&apos;applications{" "}
          <span className="text-accent font-semibold">modernes</span> et{" "}
          <span className="text-accent font-semibold">scalables</span>,
          j&apos;allie créativité et rigueur technique pour transformer des
          concepts innovants en solutions numériques performantes.{" "}
        </p>
        <p className="text-lg text-justify">
          Grâce à une expertise en{" "}
          <span className="text-accent font-semibold">React</span>,{" "}
          <span className="text-accent font-semibold">TypeScript</span>,{" "}
          <span className="text-accent font-semibold">NestJS</span> et une
          approche centrée sur la{" "}
          <span className="text-accent font-semibold">Clean Architecture</span>,
          je conçois des interfaces intuitives et des backends robustes, prêts à
          évoluer avec{" "}
          <span className="text-accent font-semibold">vos besoins</span>.
        </p>
        <p className="text-lg text-justify">
          Curieux et toujours à l&apos;écoute des dernières tendances, je suis
          prêt à relever vos{" "}
          <span className="text-accent font-semibold">défis techniques</span> et
          à vous accompagner dans{" "}
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
