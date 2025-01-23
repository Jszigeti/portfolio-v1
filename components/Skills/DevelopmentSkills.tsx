// Components

import Collapse from "../Collapse";
import CssIcon from "../icons/CssIcon";
import CypressIcon from "../icons/CypressIcon";
import DebugIcon from "../icons/DebugIcon";
import HtmlIcon from "../icons/HtmlIcon";
import JavascriptIcon from "../icons/JavascriptIcon";
import JestIcon from "../icons/JestIcon";
import NestJSIcon from "../icons/NestJSIcon";
import NextJSIcon from "../icons/NextJSIcon";
import NodeJSIcon from "../icons/NodeJSIcon";
import PrismaIcon from "../icons/PrismaIcon";
import ReactIcon from "../icons/ReactIcon";
import SeoIcon from "../icons/SeoIcon";
import TailwindIcon from "../icons/TailwindIcon";
import TypescriptIcon from "../icons/TypescriptIcon";

export default function DevelopmentSkills() {
  return (
    <div className="flex flex-col gap-10 py-6 lg:py-8">
      <Collapse title="Développement">
        <div className="flex flex-wrap gap-y-6 mt-6">
          <HtmlIcon size="85px" className="fill-foreground" title="HTML" />
          <CssIcon size="85px" className="fill-foreground" title="CSS 3" />
          <TailwindIcon
            size="85px"
            className="fill-foreground"
            title="Tailwind CSS"
          />
          <JavascriptIcon
            size="85px"
            className="fill-foreground"
            title="JavaScript"
          />
          <TypescriptIcon
            size="85px"
            className="fill-foreground"
            title="TypeScript"
          />
          <ReactIcon size="85px" className="fill-foreground" title="React" />
          <NextJSIcon size="85px" className="fill-foreground" title="Next.js" />
          <CypressIcon
            size="85px"
            className="fill-foreground"
            title="Cypress"
          />
          <JestIcon size="85px" className="fill-foreground" title="Jest" />
          <NodeJSIcon size="85px" className="fill-foreground" title="Node.js" />
          <NestJSIcon size="85px" className="fill-foreground" title="NestJS" />
          <PrismaIcon size="85px" className="fill-foreground" title="Prisma" />
          <SeoIcon size="85px" className="fill-foreground" title="SEO" />
          <DebugIcon
            size="85px"
            className="fill-foreground"
            title="Debugging"
          />
        </div>
      </Collapse>
    </div>
  );
}
