import Link from "next/link";
import { ShoppingBag, Search, Clock } from "lucide-react";
import { useTranslation } from "../i18n";
import HeroSection from "@/components/hero-section";
import MainNavigation from "@/components/main-navigation";
import FeaturedExhibitions from "@/components/featured-exhibitions";
import CollectionHighlights from "@/components/collection-highlights";
import Footer from "@/components/footer";

interface HomeProps {
  params: Promise<{ lng: string }>; // ✅ params is now Promise
}

export default async function Home({ params }: HomeProps) {
  const { lng } = await params; // ✅ await the params
  const { t } = await useTranslation(lng);

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      {/* Top utility bar */}
      <div className="hidden md:flex justify-end items-center px-6 py-2 space-x-6 text-sm">
        <Link href={`/${lng}/shop`} className="flex items-center gap-2 hover:text-gray-300 transition-colors">
          <ShoppingBag size={16} />
          <span>{t("header.shop")}</span>
        </Link>
        <Link href={`/${lng}/search`} className="flex items-center gap-2 hover:text-gray-300 transition-colors">
          <Search size={16} />
          <span>{t("header.search")}</span>
        </Link>
        <Link href={`/${lng}/donate`} className="hover:text-gray-300 transition-colors">
          {t("header.donate")}
        </Link>
      </div>

      {/* Main Sections */}
      <MainNavigation lng={lng} />
      <HeroSection lng={lng} />

      <div className="bg-black text-white py-6 px-4 md:px-8 flex flex-col md:flex-row justify-between items-start md:items-center">
        <div className="mb-4 md:mb-0">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-light mb-2">{t("visit.title")}</h2>
        </div>
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            {/* Ticket Icon */}
            <span className="inline-block">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                   stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
                <path d="M13 5v2" />
                <path d="M13 17v2" />
                <path d="M13 11v2" />
              </svg>
            </span>
            <span>
              {t("visit.for")}{" "}
              <Link href={`/${lng}/book-online`} className="underline hover:text-gray-300 transition-colors">
                {t("visit.book")}
              </Link>
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Clock size={20} />
            <span>{t("visit.open")}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock size={20} />
            <span>{t("visit.last")}</span>
          </div>
        </div>
      </div>

      <FeaturedExhibitions lng={lng} />
      <CollectionHighlights lng={lng} />
      <Footer lng={lng} />
    </div>
  );
}
