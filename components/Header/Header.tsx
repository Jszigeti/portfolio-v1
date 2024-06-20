// Components
import Nav from "./Nav";
import Logo from "./Logo";
import MobileNav from "./MobileNav";

export default function Header() {
  return (
    <header className="lg:py-4 text-foreground">
      <div className="container flex justify-between items-center">
        <Logo />
        {/* Desktop nav */}
        <Nav />
        {/* Mobile nav */}
        <MobileNav />
      </div>
    </header>
  );
}
