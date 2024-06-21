import Collapse from "../../components/Collapse";
import CssIcon from "../../components/icons/CssIcon";
import HtmlIcon from "../../components/icons/HtmlIcon";
import JavascriptIcon from "../../components/icons/JavascriptIcon";
import NextJSIcon from "../../components/icons/NextJSIcon";
import ReactIcon from "../../components/icons/ReactIcon";
import ReduxIcon from "../../components/icons/ReduxIcon";
import SassIcon from "../../components/icons/SassIcon";
import TypescriptIcon from "../../components/icons/TypescriptIcon";

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
          <NextJSIcon size="85px" className="fill-foreground" title="Next JS" />
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
