// Components
import PresentationSection from "@/app/home/PresentationSection";
import IloveSection from "@/app/home/IloveSection";

export default function Home() {
  return (
    <main className="container py-6 lg:py-8">
      <PresentationSection />
      <IloveSection />
    </main>
  );
}
