"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import { useTranslation } from "@/app/i18n/client";
import LanguageSwitcher from "@/app/components/LanguageSwitcher";

interface MainNavigationProps {
  lng: string;
}

export default function MainNavigation({ lng }: MainNavigationProps) {
  const { t } = useTranslation(lng);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    {
      title: t("navigation.visit"),
      baseSlug: "visit",
      submenu: [
        { label: t("submenu.visit.plan"), slug: "plan-your-visit" },
        { label: t("submenu.visit.getting"), slug: "getting-here" },
        { label: t("submenu.visit.access"), slug: "access" },
        { label: t("submenu.visit.group"), slug: "group-visits" },
        { label: t("submenu.visit.schools"), slug: "schools" },
        { label: t("submenu.visit.families"), slug: "families" },
      ],
    },
    {
      title: t("navigation.exhibitions"),
      baseSlug: "exhibitions-and-events",
      submenu: [
        { label: t("submenu.exhibitions.current"), slug: "current-exhibitions" },
        { label: t("submenu.exhibitions.upcoming"), slug: "upcoming-exhibitions" },
        { label: t("submenu.exhibitions.past"), slug: "past-exhibitions" },
        { label: t("submenu.exhibitions.events"), slug: "events" },
        { label: t("submenu.exhibitions.tours"), slug: "tours" },
      ],
    },
    {
      title: t("navigation.collection"),
      baseSlug: "collection",
      submenu: [
        { label: t("submenu.collection.search"), slug: "search-the-collection" },
        { label: t("submenu.collection.highlights"), slug: "highlights" },
        { label: t("submenu.collection.departments"), slug: "departments" },
        { label: t("submenu.collection.research"), slug: "research" },
        { label: t("submenu.collection.conservation"), slug: "conservation" },
      ],
    },
    {
      title: t("navigation.learn"),
      baseSlug: "learn",
      submenu: [
        { label: t("submenu.learn.schools"), slug: "schools" },
        { label: t("submenu.learn.young"), slug: "young-people" },
        { label: t("submenu.learn.families"), slug: "families" },
        { label: t("submenu.learn.adults"), slug: "adults" },
        { label: t("submenu.learn.communities"), slug: "communities" },
        { label: t("submenu.learn.digital"), slug: "digital-resources" },
      ],
    },
    {
      title: t("navigation.membership"),
      baseSlug: "membership",
      submenu: [
        { label: t("submenu.membership.join"), slug: "join" },
        { label: t("submenu.membership.benefits"), slug: "benefits" },
        { label: t("submenu.membership.events"), slug: "events" },
        { label: t("submenu.membership.renew"), slug: "renew" },
        { label: t("submenu.membership.gift"), slug: "gift-membership" },
      ],
    },
    {
      title: t("navigation.support"),
      baseSlug: "support-us",
      submenu: [
        { label: t("submenu.support.donate"), slug: "donate" },
        { label: t("submenu.support.corporate"), slug: "corporate-support" },
        { label: t("submenu.support.patrons"), slug: "patrons" },
        { label: t("submenu.support.legacies"), slug: "legacies" },
        { label: t("submenu.support.volunteer"), slug: "volunteer" },
      ],
    },
  ];

  return (
    <header className="relative z-50">
      <div className="flex justify-between items-center px-4 md:px-8 py-4 bg-black text-white">
        {/* Logo */}
        <Link href={`/${lng}`} className="relative">
          <div className="flex flex-col items-start leading-tight">
            <span className="text-sm font-light">The</span>
            <span className="text-2xl font-serif">Bharat</span>
            <span className="text-2xl font-serif">Museum</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-6">
          {menuItems.map((item) => (
            <div
              key={item.title}
              className="relative"
              onMouseEnter={() => setActiveMenu(item.title)}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <button className="flex items-center gap-1 py-2 hover:text-gray-300 transition-colors">
                {item.title}
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-300 ${activeMenu === item.title ? "rotate-180" : ""}`}
                />
              </button>

              <AnimatePresence>
                {activeMenu === item.title && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-0 mt-2 w-64 bg-white text-black rounded shadow-lg py-2"
                  >
                    {item.submenu.map((sub) => (
                      <Link
                        key={sub.slug}
                        href={`/${lng}/${item.baseSlug}/${sub.slug}`}
                        className="block px-4 py-2 hover:bg-gray-100 transition-colors"
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
          {/* Language Switcher */}
          <LanguageSwitcher lng={lng} />
        </nav>

        {/* Mobile Hamburger */}
        <button className="lg:hidden" onClick={() => setMobileMenuOpen(true)}>
          <Menu size={28} />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 right-0 w-72 h-full bg-white text-black z-50 shadow-lg p-6 overflow-y-auto"
          >
            <div className="flex justify-between items-center mb-8">
              <span className="text-xl font-bold">Menu</span>
              <button onClick={() => setMobileMenuOpen(false)}>
                <X size={28} />
              </button>
            </div>

            <nav className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <div key={item.title}>
                  <span className="font-semibold">{item.title}</span>
                  <div className="ml-4 mt-2 flex flex-col space-y-2">
                    {item.submenu.map((sub) => (
                      <Link
                        key={sub.slug}
                        href={`/${lng}/${item.baseSlug}/${sub.slug}`}
                        className="text-gray-700 hover:underline"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
              <div className="mt-6">
                <LanguageSwitcher lng={lng} />
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
