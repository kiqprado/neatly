import type { Metadata } from "next";
import { Exo_2 } from "next/font/google";
import "./styles/globals.css";

const exo = Exo_2({
  variable: "--font-exo-2",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Neaty App",
  description: "Tap. Sort. Done.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${exo.variable} bg-neutral-950 text-zinc-300 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
