import MysqlIcon from "@/components/icons/Mysqlcon";
import Collapse from "../../components/Collapse";
import NextJSIcon from "../../components/icons/NextJSIcon";
import NodeJSIcon from "../../components/icons/NodeJSIcon";
import TypescriptIcon from "../../components/icons/TypescriptIcon";
import PrismaIcon from "@/components/icons/PrismaIcon";

export default function BackendSkills() {
  return (
    <div className="flex flex-col gap-10 py-6 lg:py-8">
      <Collapse title="Back-end">
        <div className="flex flex-wrap gap-y-6 mt-6">
          <NodeJSIcon size="85px" className="fill-foreground" title="Node.js" />
          <NextJSIcon size="85px" className="fill-foreground" title="Next.js" />
          <TypescriptIcon
            size="85px"
            className="fill-foreground"
            title="TypeScript"
          />
          <MysqlIcon
            size="85px"
            className="stroke-foreground fill-none"
            title="MySQL"
          />
          <PrismaIcon size="85px" className="fill-foreground" title="Prisma" />
        </div>
      </Collapse>
    </div>
  );
}
