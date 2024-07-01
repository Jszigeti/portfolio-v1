// Components
import FooterNav from "./FooterNav";

export default function Footer() {
  return (
    <footer className="py-6 lg:py-8 text-foreground border-t-2 border-accent">
      <div className="container mx-auto flex justify-center lg:justify-end items-center">
        <FooterNav />
      </div>
    </footer>
  );
}
