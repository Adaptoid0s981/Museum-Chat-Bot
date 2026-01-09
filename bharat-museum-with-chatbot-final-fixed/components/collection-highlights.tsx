"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useTranslation } from "@/app/i18n/client";

interface CollectionHighlightsProps {
  lng: string;
}

const highlights = [
  {
    id: 1,
    titleKey: "collectionHighlights.rosettaStone.title",
    descriptionKey: "collectionHighlights.rosettaStone.description",
    image: "/rosseta-stone.jpg?height=500&width=400",
  },
  {
    id: 2,
    titleKey: "collectionHighlights.parthenonSculptures.title",
    descriptionKey: "collectionHighlights.parthenonSculptures.description",
    image: "/parthenon_marbles-scaled.jpg?height=500&width=400",
  },
  {
    id: 3,
    titleKey: "collectionHighlights.lewisChessmen.title",
    descriptionKey: "collectionHighlights.lewisChessmen.description",
    image: "/pexels-enginakyurt.jpg?height=500&width=400",
  },
  {
    id: 4,
    titleKey: "collectionHighlights.suttonHooHelmet.title",
    descriptionKey: "collectionHighlights.suttonHooHelmet.description",
    image: "/sutton_Hoo_helmet.jpg?height=500&width=400",
  },
  {
    id: 5,
    titleKey: "collectionHighlights.ashokaPillar.title",
    descriptionKey: "collectionHighlights.ashokaPillar.description",
    image: "/ashoka-pillar.jpg?height=500&width=400",
  },
  {
    id: 6,
    titleKey: "collectionHighlights.dancingShiva.title",
    descriptionKey: "collectionHighlights.dancingShiva.description",
    image: "/shiva.jpg?height=500&width=400",
  },
  {
    id: 7,
    titleKey: "collectionHighlights.indusValleySeals.title",
    descriptionKey: "collectionHighlights.indusValleySeals.description",
    image: "/collections-of-seals-of-indus-valley-civ.jpg?height=500&width=400",
  },
  {
    id: 8,
    titleKey: "collectionHighlights.ajantaCavePaintings.title",
    descriptionKey: "collectionHighlights.ajantaCavePaintings.description",
    image: "/Bodhi_Ajanta.jpg?height=500&width=400",
  },
];

export default function CollectionHighlights({ lng }: CollectionHighlightsProps) {
  const { t } = useTranslation(lng);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section className="py-16 px-4 md:px-8 bg-black" ref={containerRef}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-light mb-4">{t("collectionHighlights.title")}</h2>
          <p className="text-gray-300 max-w-2xl mb-12">
            {t("collectionHighlights.description")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <Link href={`/${lng}/collection/${item.id}`} className="block">
                <div className="relative h-80 mb-4 overflow-hidden">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={t(item.titleKey)}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-xl font-medium mb-2">{t(item.titleKey)}</h3>
                <p className="text-gray-300">{t(item.descriptionKey)}</p>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href={`/${lng}/collection`}
            className="inline-flex items-center gap-2 border border-white px-6 py-3 hover:bg-white hover:text-black transition-colors"
          >
            {t("collectionHighlights.exploreCollection")}
          </Link>
        </div>
      </div>
    </section>
  );
}
