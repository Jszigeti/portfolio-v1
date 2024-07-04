import { type NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";

export async function POST(request: NextRequest) {
  const successMessage =
    "Votre message a bien été envoyé, je vous réponds au plus vite !";
  const errorMessage = "Une erreur s'est produite.";

  try {
    const { email, firstName, lastName, message } = await request.json();

    // Setting up the mail server
    const transport = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MY_EMAIL,
        pass: process.env.MY_PASSWORD,
      },
    });

    // Setting the email format
    const mailOptions: Mail.Options = {
      from: process.env.MY_EMAIL,
      to: process.env.MY_EMAIL,
      subject: `Message de ${firstName} ${lastName} (${email})`,
      text: message,
    };

    // Send mail function
    const sendMailPromise = () =>
      new Promise<string>((resolve, reject) => {
        transport.sendMail(mailOptions, (err) => {
          if (err) {
            reject(err);
          } else {
            resolve(successMessage);
          }
        });
      });

    await sendMailPromise();
    return NextResponse.json(
      { success: true, message: successMessage },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json(
      { succes: false, error: errorMessage },
      { status: 500 }
    );
  }
}
