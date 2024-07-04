// Components
import Collapse from "../Collapse";
import CssIcon from "../icons/CssIcon";
import HtmlIcon from "../icons/HtmlIcon";
import JavascriptIcon from "../icons/JavascriptIcon";
import NextJSIcon from "../icons/NextJSIcon";
import ReactIcon from "../icons/ReactIcon";
import ReduxIcon from "../icons/ReduxIcon";
import SassIcon from "../icons/SassIcon";
import TypescriptIcon from "../icons/TypescriptIcon";

export default function FrontendSkills() {
  return (
    <div className="flex flex-col gap-10 py-6 lg:py-8">
      <Collapse title="Front-end">
        <div className="flex flex-wrap gap-y-6 mt-6">
          <HtmlIcon size="85px" className="fill-foreground" title="HTML 5" />
          <CssIcon size="85px" className="fill-foreground" title="CSS 3" />
          <SassIcon size="85px" className="fill-foreground" title="Sass" />
          <JavascriptIcon
            size="85px"
            className="fill-foreground"
            title="JavaScript"
          />
          <ReactIcon size="85px" className="fill-foreground" title="React" />
          <ReduxIcon size="85px" className="fill-foreground" title="Redux" />
          <NextJSIcon size="85px" className="fill-foreground" title="Next.js" />
          <TypescriptIcon
            size="85px"
            className="fill-foreground"
            title="TypeScript"
          />
        </div>
      </Collapse>
    </div>
  );
}
