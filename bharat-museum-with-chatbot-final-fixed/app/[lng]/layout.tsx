import type { Metadata } from "next";
import { Inter, Playfair_Display, Cormorant_Garamond, Lora } from "next/font/google";
import { languages } from "../i18n/settings";
import "../globals.css";

// Font definitions
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair", display: "swap" });
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});
const lora = Lora({ subsets: ["latin"], variable: "--font-lora", display: "swap" });

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export const metadata: Metadata = {
  title: "The Bharat Museum",
  description: "Experience cultures across the globe, from the dawn of human history to the present.",
};

interface RootLayoutProps {
  children: React.ReactNode;
  params: { lng: string };
}

// ✅ Fix: Make LangLayout async
export default async function LangLayout({ children, params }: RootLayoutProps) {
  const { lng } = params;

  return (
    <html lang={lng}>
      <body className={`${inter.variable} ${playfair.variable} ${cormorant.variable} ${lora.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
