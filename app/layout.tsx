import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ["100", "200", "400", "700", "900"],
  subsets: ["latin"],
  preload: false,
});

export const metadata: Metadata = {
  title: "Walid Lamraoui | Fullstack Developer",
  description:
    "Hey! I'm Walid Lamraoui, and I'm a Frontend developer, Open Source enthusiast, and Poet.",
  openGraph: {
    title: "Walid Lamraoui | Fullstack Developer",
    type: "article",
    url: "https://codewithwalid.pro/",
    images: ["https://codewithwalid.pro/screenshot.png"],
    description:
      "Hey! I'm Walid Lamraoui, and I'm a Frontend developer, Open Source enthusiast, and Poet.",
  },
  twitter: {
    card: "summary",
    site: "@dzc0d3r",
    title: "Walid Lamraoui | Fullstack Developer",
    description:
      "Hey! I'm Walid Lamraoui, and I'm a Frontend developer, Open Source enthusiast, and Poet.",
    creator: "@dzc0d3r",
    images: ["https://codewithwalid.pro/screenshot.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/favicon.png" />
      </head>
      <body className={poppins.className}>
        <div id="root">{children}</div>
      </body>
    </html>
  );
}
