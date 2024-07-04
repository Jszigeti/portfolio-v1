import Link from "next/link";

// Components
import Button from "@/components/Button";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center gap-16 my-80">
      <h2 className="text-5xl font-bold text-accent text-center">
        Page non trouvée
      </h2>
      <Link href="/">
        <Button content="Retour à l'accueil" />
      </Link>
    </div>
  );
}
