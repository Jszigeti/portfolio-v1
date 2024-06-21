import { FormData } from "@/app/contact/ContactForm";

export async function sendEmail(data: FormData) {
  const apiEndpoint = "/api/email";

  try {
    const response = await fetch(apiEndpoint, {
      method: "POST",
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (response.ok) {
      return {
        success: true,
        message:
          "Votre message a bien été envoyé, je vous répond au plus vite !",
      };
    } else {
      return {
        success: false,
        message: result.message || "Une erreur s'est produite.",
      };
    }
  } catch (err) {
    const errorMessage =
      err instanceof Error ? err.message : "Une erreur s'est produite.";
    return { success: false, message: errorMessage };
  }
}
