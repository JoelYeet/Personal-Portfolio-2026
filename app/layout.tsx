import type { Metadata } from "next";
import { Inconsolata, Inter } from "next/font/google";
import "./globals.css";


const inconsolata = Inconsolata({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-inconsolata",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Joel Yee Portfolio",
  description: "Personal portfolio of designer Joel Yee.",
  icons: {
    icon: "/images/favicon.png",
    apple: "/images/webclip.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inconsolata.variable} ${inter.variable}`}>
          <body>
              {children}
          </body>
    </html>
  );
}
