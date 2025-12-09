import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";

const workSans = Work_Sans({
  variable: "--font-worksans",
  subsets: ["latin"],
  style: "normal"
});

export const metadata: Metadata = {
  title: "Easy PMI Solutions",
  description: "Soluzioni semplici per far crescere la tua impresa.",
  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon" },
      //test fix
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${workSans.variable} font-worksans antialiased leading-pmi-text tracking-tight`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
