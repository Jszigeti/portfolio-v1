import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";

// Components
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import ThemeProvider from "@/app/ThemeProvider";

// Font
const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  variable: "--font-ibmPlexSans",
});

// Metadata
export const metadata: Metadata = {
  title: "Jonas Szigeti - Développeur web",
  description:
    "Développeur web sur le Calvados, pour vous accompagner dans tous vos projets !",
  openGraph: {
    title: "Jonas Szigeti - Développeur web",
    description:
      "Développeur web sur le Calvados, pour vous accompagner dans tous vos projets !",
    url: "https://jsproject.fr/",
    siteName: "Jsproject",
    images: [
      {
        url: "https://jsproject.fr/assets/portfolio.png",
        width: 1200,
        height: 627,
      },
    ],
    locale: "fr",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body
        className={`${ibmPlexSans.variable} flex flex-col justify-between min-h-svh`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
