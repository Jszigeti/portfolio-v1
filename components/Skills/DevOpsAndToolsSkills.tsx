// Components
import Collapse from "../Collapse";
import CICDIcon from "../icons/CICDIcon";
import DockerIcon from "../icons/DockerIcon";
import GithubIcon from "../icons/GithubIcon";
import GitIcon from "../icons/GitIcon";
import GitlabIcon from "../icons/GitlabIcon";
import LinuxIcon from "../icons/LinuxIcon";
import MongoIcon from "../icons/MongoIcon";
import MysqlIcon from "../icons/Mysqlcon";
import NginxIcon from "../icons/NginxIcon";
import PostgreSQLIcon from "../icons/PostgreSQLIcon";

export default function DevOpsAndToolsSkills() {
  return (
    <div className="flex flex-col gap-10 py-6 lg:py-8">
      <Collapse title="DevOps & Outils">
        <div className="flex flex-wrap gap-y-6 mt-6">
          <DockerIcon size="85px" className="fill-foreground" title="Docker" />
          <NginxIcon size="85px" className="fill-foreground" title="Nginx" />
          <CICDIcon size="85px" className="fill-foreground" title="CI/CD" />
          <GitIcon size="85px" className="fill-foreground" title="Git" />
          <GithubIcon size="85px" className="fill-foreground" title="GitHub" />
          <GitlabIcon size="85px" className="fill-foreground" title="GitLab" />
          <MysqlIcon
            size="85px"
            className="stroke-foreground fill-none"
            title="MySQL"
          />
          <PostgreSQLIcon
            size="85px"
            className="fill-foreground"
            title="PostgreSQL"
          />
          <MongoIcon size="85px" className="fill-foreground" title="MongoDB" />
          <LinuxIcon size="85px" className="fill-foreground" title="Linux" />
        </div>
      </Collapse>
    </div>
  );
}
