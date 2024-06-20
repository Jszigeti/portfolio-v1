export default function ContactForm() {
  return (
    <section className="flex justify-center">
      <form className="flex flex-col justify-center gap-8 py-6 lg:py-8 w-4/5">
        <div className="flex gap-4 items-center w-full">
          <input
            type="text"
            id="firstName"
            placeholder="Prénom"
            className="w-1/2"
          />
          <input
            type="text"
            id="lastName"
            placeholder="Nom"
            className="w-1/2"
          />
        </div>
        <input type="text" id="email" placeholder="Email" />
        <input
          type="textarea"
          id="message"
          placeholder="Votre message"
          className="h-60"
        />
      </form>
    </section>
  );
}
