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
          <p className="font-bold text-lg">Développeur web</p>
          <h2 className=" text-5xl font-bold">
            Jonas
            <span className="text-accent"> Szigeti</span>
          </h2>
        </div>
        <p className="text-lg text-justify">
          Récemment reconverti en{" "}
          <span className="text-accent font-semibold">développeur web</span>, je
          suis passionné par la création d&apos;interfaces utilisateur modernes
          et intuitives.
          <br />
          Mon objectif est de transformer des concepts innovants en expériences
          numériques attrayantes et performantes.
          <br />
          Toujours à l&apos;affût des dernières tendances, je suis prêt à
          apporter des solutions créatives et efficaces à{" "}
          <span className="text-accent font-semibold">vos projets !</span>
        </p>
        <Link href="/assets/CV_Jonas_Szigeti.pdf" target="_blank">
          <Button content="VOIR MON CV" className="text-xl" />
        </Link>
      </div>
    </section>
  );
}
