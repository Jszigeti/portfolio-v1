// Components
import JavascriptIcon from "../../components/icons/JavascriptIcon";
import ReactIcon from "../../components/icons/ReactIcon";
import TailwindIcon from "../../components/icons/TailwindIcon";

export default function IloveSection() {
  return (
    <section className="flex flex-col gap-8 py-6 lg:py-8  my-6 lg:my-8">
      <h3 className=" text-4xl font-bold text-center">
        J&apos;<span className="text-accent">aime</span> travailler sur...
      </h3>
      <div className="flex justify-around">
        <ReactIcon size="85px" className="fill-foreground" title="React" />
        <JavascriptIcon
          size="85px"
          className="fill-foreground"
          title="JavaScript"
        />
        <TailwindIcon
          size="85px"
          className="fill-foreground"
          title="Tailwind"
        />
      </div>
    </section>
  );
}
