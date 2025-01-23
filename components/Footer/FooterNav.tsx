import Link from "next/link";

// Components
import LinkedInIcon from "../icons/LinkedInIcon";
import GithubIcon from "../icons/GithubIcon";

export default function FooterNav() {
  return (
    <div className="flex items-center gap-8">
      <Link href="https://www.linkedin.com/in/jonas-szigeti/" target="_blank">
        <LinkedInIcon
          size="35px"
          classNameFooterNav="fill-foreground hover:fill-accent hover:scale-110 active:scale-95 transform transition-transform duration-300 shadow-lg"
        />
      </Link>
      <Link href="https://github.com/Jszigeti" target="_blank">
        <GithubIcon
          size="35px"
          classNameFooterNav="fill-foreground hover:fill-accent hover:scale-110 active:scale-95 transform transition-transform duration-300 shadow-lg"
        />
      </Link>
    </div>
  );
}
