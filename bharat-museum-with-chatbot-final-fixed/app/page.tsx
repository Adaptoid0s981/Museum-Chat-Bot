import Link from "next/link"
import { ShoppingBag, Search, Clock } from "lucide-react"
import HeroSection from "@/components/hero-section"
import MainNavigation from "@/components/main-navigation"
import FeaturedExhibitions from "@/components/featured-exhibitions"
import CollectionHighlights from "@/components/collection-highlights"
import Footer from "@/components/footer"

type Props = {
  params: { lng: string };
};

export default function Home({ params }: Props) {
  const { lng } = params;

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      {/* Top utility bar */}
      <div className="hidden md:flex justify-end items-center px-6 py-2 space-x-6 text-sm">
        <Link href="/shop" className="flex items-center gap-2 hover:text-gray-300 transition-colors">
          <ShoppingBag size={16} />
          <span>Shop</span>
        </Link>
        <Link href="/search" className="flex items-center gap-2 hover:text-gray-300 transition-colors">
          <Search size={16} />
          <span>Search</span>
        </Link>
        <Link href="/donate" className="hover:text-gray-300 transition-colors">
          Donate
        </Link>
      </div>

      {/* Main navigation */}
      <MainNavigation lng={lng} />

      {/* Hero section */}
      <HeroSection lng={lng} />

      {/* Visit information */}
      <div className="bg-black text-white py-6 px-4 md:px-8 flex flex-col md:flex-row justify-between items-start md:items-center">
        <div className="mb-4 md:mb-0">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-2">
            Discover two million years of human
            <br className="hidden md:block" /> history and culture
          </h2>
        </div>
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="inline-block">
              {/* Ticket SVG */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-ticket"
              >
                <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
                <path d="M13 5v2" />
                <path d="M13 17v2" />
                <path d="M13 11v2" />
              </svg>
            </span>
            <span>
              For Entry –{" "}
              <Link href="/book-online" className="underline hover:text-gray-300 transition-colors">
                book online
              </Link>
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Clock size={20} />
            <span>Open today: 09:00–17:00</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock size={20} />
            <span>Last entry: 16:45</span>
          </div>
        </div>
      </div>

      {/* Featured exhibitions */}
      <FeaturedExhibitions lng={lng} />

      {/* Collection highlights */}
      <CollectionHighlights lng={lng} />

      {/* Footer */}
      <Footer lng={lng} />
    </div>
  )
}
