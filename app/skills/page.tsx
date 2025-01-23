// Components
import DevelopmentSkills from "@/components/Skills/DevelopmentSkills";
import DevOpsAndToolsSkills from "@/components/Skills/DevOpsAndToolsSkills";
import SoftSkills from "@/components/Skills/SoftSkills";

export default function Skills() {
  return (
    <main className="container flex flex-col gap-8 py-6 lg:py-8 my-6 lg:my-8">
      <h2 className="text-5xl font-bold text-accent text-center lg:text-left">
        Skills
      </h2>
      <DevelopmentSkills />
      <DevOpsAndToolsSkills />
      <SoftSkills />
    </main>
  );
}
