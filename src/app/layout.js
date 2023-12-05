import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Pest Control Services",
  description:
    "Pest Control Services in USA Connect with Local Exterminator & Get Your Quote",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="favicon.ico" type="x-icon"></link>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
