import { Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";

const hankenGrotesk = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-hanken",
});

export const metadata = {
  title: "Sunan. | MERN Stack & Next.js Developer",
  description: "Crafting scalable web applications, modern interfaces, and high-performance digital experiences.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${hankenGrotesk.variable} dark`}>
      <body className={`${hankenGrotesk.className} mesh-bg text-gray-900 dark:text-white min-h-screen antialiased overflow-x-hidden relative transition-colors duration-300`}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
