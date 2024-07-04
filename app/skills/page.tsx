// Components
import BackendSkills from "../../components/Skills/BackendSkills";
import FrontendSkills from "../../components/Skills/FrontendSkills";
import PraticalSkills from "../../components/Skills/PraticalSkills";
import ToolsSkills from "../../components/Skills/ToolsSkills";

export default function Skills() {
  return (
    <main className="container flex flex-col gap-8 py-6 lg:py-8 my-6 lg:my-8">
      <h2 className="text-5xl font-bold text-accent text-center lg:text-left">
        Skills
      </h2>
      <FrontendSkills />
      <BackendSkills />
      <ToolsSkills />
      <PraticalSkills />
    </main>
  );
}
