'use client';

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Play, Volume2, Info } from "lucide-react";
import { useTranslation } from "@/app/i18n/client";

interface HeroSectionProps {
  lng: string;
}

export default function HeroSection({ lng }: HeroSectionProps) {
  const { t } = useTranslation(lng);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  return (
    <div className="relative h-[70vh] overflow-hidden">
      {/* Hero video for desktop */}
      <div className="absolute inset-0 hidden md:block">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          src="/hero-museum.mp4" // <-- Put your real video path here
        >
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
      </div>

      {/* Hero image for mobile */}
      <div className="absolute inset-0 block md:hidden">
        <Image
          src="/museum-hero.jpg?height=1080&width=1920"
          alt={t("hero.alt")}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
      </div>

      {/* Welcome text */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative z-10 max-w-md p-8 bg-white text-black m-8"
      >
        <h1 className="text-3xl font-bold mb-4">{t("hero.title")}</h1>
        <p className="mb-6">{t("hero.description")}</p>
        <Link
          href={`/${lng}/plan-your-visit`}
          className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 hover:bg-gray-800 transition-colors"
        >
          {t("hero.planYourVisit")}
        </Link>
      </motion.div>

      {/* Video controls */}
      <div className="absolute bottom-6 right-6 flex gap-2 z-10">
        <button onClick={() => setIsVideoPlaying(!isVideoPlaying)} className="bg-white p-2 rounded-full text-black hover:bg-gray-300 transition">
          <Play />
        </button>
        <button className="bg-white p-2 rounded-full text-black hover:bg-gray-300 transition">
          <Volume2 />
        </button>
        <button className="bg-white p-2 rounded-full text-black hover:bg-gray-300 transition">
          <Info />
        </button>
      </div>
    </div>
  );
}
