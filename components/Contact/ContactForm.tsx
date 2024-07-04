"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaCheck, FaExclamationCircle } from "react-icons/fa";
import { sendEmail } from "@/utils/sendEmail";
import { FormData } from "@/types/formData";

// Components
import Button from "@/components/Button";
import Modal from "@/components/Modal";

export default function ContactForm() {
  // useForm hook
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    watch,
  } = useForm<FormData>();

  // watching inputs values
  const emailValue = watch("email", "");
  const firstNameValue = watch("firstName", "");
  const lastNameValue = watch("lastName", "");
  const messageValue = watch("message", "");

  // States concerning the modal
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [modalTitle, setModalTitle] = useState("");

  // Valid formats for inputs
  const isValidUserInput = (userInput: string) => userInput.trim().length > 0;
  const isValidEmail = emailValue.match(
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  );

  // Sending form values
  const onSubmit = async (data: FormData) => {
    const result = await sendEmail(data);

    // Display the modal
    setModalTitle(result.success ? "Message envoyé" : "Erreur lors de l'envoi");
    setModalMessage(result.success ? result.message : result.error);
    setShowModal(true);

    // Reset inputs
    if (result.success) {
      reset();
    }
  };

  return (
    <>
      <section className="flex justify-center py-6 lg:py-8">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col justify-center gap-8 py-6 lg:py-8 w-full lg:w-4/5"
        >
          {/* First name input  */}
          <div className="flex gap-4 items-center w-full">
            <div className="relative w-1/2">
              <input
                type="text"
                id="firstName"
                placeholder="Prénom"
                className={`w-full bg-primary text-accent border-b font-semibold focus:outline-none focus:border-b-2 pr-10 ${
                  errors.firstName ? "border-red-500" : "border-accent"
                }`}
                {...register("firstName", { required: true })}
              />
              {errors.firstName ? (
                <FaExclamationCircle className="absolute right-3 top-1/2 transform -translate-y-1/2 text-red-500" />
              ) : isValidUserInput(firstNameValue) ? (
                <FaCheck className="absolute right-3 top-1/2 transform -translate-y-1/2 text-green-500" />
              ) : null}
            </div>

            {/* Last name input */}
            <div className="relative w-1/2">
              <input
                type="text"
                id="lastName"
                placeholder="Nom"
                className={`w-full bg-primary text-accent border-b font-semibold focus:outline-none focus:border-b-2 pr-10 ${
                  errors.lastName ? "border-red-500" : "border-accent"
                }`}
                {...register("lastName", { required: true })}
              />
              {errors.lastName ? (
                <FaExclamationCircle className="absolute right-3 top-1/2 transform -translate-y-1/2 text-red-500" />
              ) : isValidUserInput(lastNameValue) ? (
                <FaCheck className="absolute right-3 top-1/2 transform -translate-y-1/2 text-green-500" />
              ) : null}
            </div>
          </div>

          {/* Email input */}
          <div className="relative">
            <input
              type="text"
              id="email"
              placeholder="Email"
              className={`bg-primary text-accent border-b border-accent font-semibold focus:outline-none focus:border-b-2 w-full pr-10 ${
                errors.email ? "border-red-500" : "border-accent"
              }`}
              {...register("email", {
                required: true,
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Format d'adresse e-mail invalide",
                },
              })}
            />
            {errors.email ? (
              <FaExclamationCircle className="absolute right-3 top-1/2 transform -translate-y-1/2 text-red-500" />
            ) : isValidEmail ? (
              <FaCheck className="absolute right-3 top-1/2 transform -translate-y-1/2 text-green-500" />
            ) : null}
          </div>

          {/* Message input */}
          <div className="relative w-full">
            <textarea
              id="message"
              placeholder="Votre message"
              className={`w-full h-60 bg-primary text-accent border-b font-semibold focus:outline-none focus:border-b-2 pr-10 ${
                errors.message ? "border-red-500" : "border-accent"
              }`}
              {...register("message", { required: "Le message est requis" })}
            />
            {errors.message ? (
              <FaExclamationCircle className="absolute right-3 top-4 transform -translate-y-1/2 text-red-500" />
            ) : isValidUserInput(messageValue) ? (
              <FaCheck className="absolute right-3 top-4 transform -translate-y-1/2 text-green-500" />
            ) : null}
          </div>

          <Button content="Envoyer" />
        </form>
      </section>

      {/* Modal */}
      <Modal
        show={showModal}
        onClose={() => setShowModal(false)}
        title={modalTitle}
      >
        {modalMessage}
      </Modal>
    </>
  );
}
