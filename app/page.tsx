// Components
import PresentationSection from "@/components/Home/PresentationSection";
import IloveSection from "@/components/Home/IloveSection";

export default function Home() {
  return (
    <main className="container py-6 lg:py-8">
      <PresentationSection />
      <IloveSection />
    </main>
  );
}
