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
  title: "Jonas Szigeti - Développeur Full stack",
  description:
    "Développeur Full Stack sur le Calvados, pour vous accompagner dans tous vos projets !",
  openGraph: {
    title: "Jonas Szigeti - Développeur Full Stack",
    description:
      "Développeur Full Stack sur le Calvados, pour vous accompagner dans tous vos projets !",
    url: "https://jsproject.fr/",
    siteName: "Jsproject",
    images: [
      {
        url: "https://jsproject.fr/assets/portfolio-preview.png",
        width: 1200,
        height: 627,
      },
    ],
    locale: "fr",
    type: "website",
  },
  generator: "Next.js",
  manifest: "/manifest.json",
  keywords: ["nextjs", "nextjs14", "next14", "pwa", "next-pwa"],
  authors: [
    { name: "Alldo Faiz Ramadhani" },
    {
      name: "Alldo Faiz Ramadhani",
      url: "https://www.linkedin.com/in/alldofaiz/",
    },
  ],
  icons: [
    { rel: "apple-touch-icon", url: "icons/icon-128x128.png" },
    { rel: "icon", url: "icons/icon-128x128.png" },
  ],
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
