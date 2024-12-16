// Components
import JavascriptIcon from "../icons/JavascriptIcon";
import NestJSIcon from "../icons/NestJSIcon";
import ReactIcon from "../icons/ReactIcon";
import TailwindIcon from "../icons/TailwindIcon";
import TypescriptIcon from "../icons/TypescriptIcon";

export default function IloveSection() {
  return (
    <section className="flex flex-col gap-8 py-6 lg:py-8  my-6 lg:my-8">
      <h3 className=" text-4xl font-bold text-center">
        J&apos;<span className="text-accent">aime</span> travailler sur...
      </h3>
      <div className="flex justify-around">
        <ReactIcon size="85px" className="fill-foreground" title="React" />
        <NestJSIcon size="85px" className="fill-foreground" title="NestJS" />
        <TypescriptIcon
          size="85px"
          className="fill-foreground"
          title="TypeScript"
        />
      </div>
    </section>
  );
}
