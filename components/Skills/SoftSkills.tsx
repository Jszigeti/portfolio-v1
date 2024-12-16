// Components
import Collapse from "../Collapse";
import AdaptationIcon from "../icons/AdaptationIcon";
import AgileIcon from "../icons/AgileIcon";
import CollaborationIcon from "../icons/CollaborationIcon";
import CommunicationIcon from "../icons/CommunicationIcon";
import ManagementIcon from "../icons/ManagementIcon";
import SolvingIcon from "../icons/SolvingIcon";

export default function SoftSkills() {
  return (
    <div className="flex flex-col gap-10 py-6 lg:py-8">
      <Collapse title="Soft skills">
        <div className="flex flex-wrap gap-y-6 mt-6">
          <AgileIcon size="85px" className="fill-foreground" title="Agile" />
          <CommunicationIcon
            size="85px"
            className="fill-foreground"
            title="Communication"
          />
          <CollaborationIcon
            size="85px"
            className="fill-foreground"
            title="Collaboration"
          />
          <ManagementIcon
            size="85px"
            className="fill-foreground"
            title="Management"
          />
          <SolvingIcon
            size="85px"
            className="fill-foreground"
            title="Résolution"
          />
          <AdaptationIcon
            size="85px"
            className="fill-foreground"
            title="Adaptation"
          />
        </div>
      </Collapse>
    </div>
  );
}
