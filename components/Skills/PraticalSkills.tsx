// Components
import Collapse from "../Collapse";
import AgileIcon from "../icons/AgileIcon";
import DebugIcon from "../icons/DebugIcon";
import ProjectManagementIcon from "../icons/ProjectManagementIcon";
import SeoIcon from "../icons/SeoIcon";

export default function PraticalSkills() {
  return (
    <div className="flex flex-col gap-10 py-6 lg:py-8">
      <Collapse title="Méthodologies">
        <div className="flex flex-wrap gap-y-6 mt-6">
          <SeoIcon size="85px" className="fill-foreground" title="SEO" />
          <DebugIcon
            size="85px"
            className="fill-foreground"
            title="Debugging"
          />
          <ProjectManagementIcon
            size="85px"
            className="stroke-foreground fill-none"
            title="Project management"
          />
          <AgileIcon size="85px" className="fill-foreground" title="AGILE" />
        </div>
      </Collapse>
    </div>
  );
}
