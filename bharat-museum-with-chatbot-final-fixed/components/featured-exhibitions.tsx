"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslation } from "@/app/i18n/client";

interface FeaturedExhibitionsProps {
  lng: string;
}

const exhibitions = [
  {
    id: 1,
    titleKey: "featuredExhibitions.ageOfCuriosity.title",
    descriptionKey: "featuredExhibitions.ageOfCuriosity.description",
    image: "/museum-dino.jpg?height=600&width=800",
    datesKey: "featuredExhibitions.ageOfCuriosity.dates",
  },
  {
    id: 2,
    titleKey: "featuredExhibitions.ancientEgypt.title",
    descriptionKey: "featuredExhibitions.ancientEgypt.description",
    image: "/Ancient-Egyptian-Afterlife.jpg?height=600&width=800",
    datesKey: "featuredExhibitions.ancientEgypt.dates",
  },
  {
    id: 3,
    titleKey: "featuredExhibitions.greekMyths.title",
    descriptionKey: "featuredExhibitions.greekMyths.description",
    image: "/pexels-unalaurencic.jpg?height=600&width=800",
    datesKey: "featuredExhibitions.greekMyths.dates",
  },
  {
    id: 4,
    titleKey: "featuredExhibitions.ancientIndia.title",
    descriptionKey: "featuredExhibitions.ancientIndia.description",
    image: "/ganesha.jpg?height=600&width=800",
    datesKey: "featuredExhibitions.ancientIndia.dates",
  },
];

export default function FeaturedExhibitions({ lng }: FeaturedExhibitionsProps) {
  const { t } = useTranslation(lng);
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const nextSlide = () => setCurrentIndex((prevIndex) => (prevIndex === exhibitions.length - 1 ? 0 : prevIndex + 1));
  const prevSlide = () => setCurrentIndex((prevIndex) => (prevIndex === 0 ? exhibitions.length - 1 : prevIndex - 1));

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 px-4 md:px-8 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-light mb-8">{t("featuredExhibitions.title")}</h2>

        <div className="relative">
          <div className="overflow-hidden" ref={sliderRef}>
            <motion.div
              className="flex"
              animate={{ x: `-${currentIndex * 100}%` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {exhibitions.map((exhibition) => (
                <div key={exhibition.id} className="min-w-full md:grid md:grid-cols-2 gap-8 items-center">
                  <div className="relative h-64 md:h-96 mb-4 md:mb-0">
                    <Image
                      src={exhibition.image || "/placeholder.svg"}
                      alt={t(exhibition.titleKey)}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-light mb-2">{t(exhibition.titleKey)}</h3>
                    <p className="text-gray-300 mb-4">{t(exhibition.datesKey)}</p>
                    <p className="mb-6">{t(exhibition.descriptionKey)}</p>
                    <Link
                      href={`/${lng}/exhibitions/${exhibition.id}`}
                      className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 hover:bg-gray-200 transition-colors"
                    >
                      {t("featuredExhibitions.bookNow")}
                    </Link>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          <button onClick={prevSlide} className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/70 p-3 hover:bg-black transition-colors">
            <ChevronLeft size={24} />
          </button>

          <button onClick={nextSlide} className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/70 p-3 hover:bg-black transition-colors">
            <ChevronRight size={24} />
          </button>

          <div className="flex justify-center mt-6 gap-2">
            {exhibitions.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full ${currentIndex === index ? "bg-white" : "bg-gray-600"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
