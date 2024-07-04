// Components
import UbuntuIcon from "@/components/icons/UbuntuIcon";
import Collapse from "../Collapse";
import FigmaIcon from "../icons/FigmaIcon";
import GithubIcon from "../icons/GithubIcon";
import PostmanIcon from "../icons/PostmanIcon";
import VSCodeIcon from "../icons/VSCodeIcon";

export default function ToolsSkills() {
  return (
    <div className="flex flex-col gap-10 py-6 lg:py-8">
      <Collapse title="Outils de développement">
        <div className="flex flex-wrap gap-y-6 mt-6">
          <VSCodeIcon size="85px" className="fill-foreground" title="VS Code" />
          <GithubIcon size="85px" className="fill-foreground" title="GitHub" />
          <UbuntuIcon size="85px" className="fill-foreground" title="Ubuntu" />
          <PostmanIcon
            size="85px"
            className="fill-foreground"
            title="Postman"
          />
          <FigmaIcon size="85px" className="fill-foreground" title="Figma" />
        </div>
      </Collapse>
    </div>
  );
}
