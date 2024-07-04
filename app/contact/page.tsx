// Components
import ContactForm from "@/components/Contact/ContactForm";

export default function Contact() {
  return (
    <main className="container text-center py-6 lg:py-8 lg:rounded-xl lg:shadow-xl my-6 lg:my-8">
      <h2 className="text-5xl font-bold text-accent text-center lg:text-left">
        Me contacter
      </h2>
      <ContactForm />
    </main>
  );
}
