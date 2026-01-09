"use client";

import Link from "next/link";
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import { useTranslation } from "@/app/i18n/client";

interface FooterProps {
  lng: string;
}

export default function Footer({ lng }: FooterProps) {
  const { t } = useTranslation(lng);

  return (
    <footer className="bg-black text-white pt-16 pb-8 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {/* Visit Us */}
          <div>
            <h3 className="text-xl font-medium mb-4">{t("footer.visitUs")}</h3>
            <address className="not-italic text-gray-300 mb-4">
              Near YASHOBHOOMI (IICC)
              <br />
              Dwarka, New Delhi
              <br />
              Republic Of India
            </address>
            <p className="text-gray-300">
              <span className="block">+91 (0)20 7323 8000</span>
              <span className="block">contact@bharatmuseum.org</span>
            </p>
          </div>

          {/* Opening Times */}
          <div>
            <h3 className="text-xl font-medium mb-4">{t("footer.openingTimes")}</h3>
            <ul className="text-gray-300 space-y-2">
              {["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"].map((day) => (
                <li key={day}>{t(`footer.days.${day}`)}</li>
              ))}
            </ul>
          </div>

          {/* Explore */}
          <div>
            <h3 className="text-xl font-medium mb-4">{t("footer.explore")}</h3>
            <ul className="space-y-2">
              {[
                { path: "visit", label: "visit" },
                { path: "exhibitions-and-events", label: "exhibitionsAndEvents" },
                { path: "collection", label: "collection" },
                { path: "learn", label: "learn" },
                { path: "membership", label: "membership" },
                { path: "support-us", label: "supportUs" },
                { path: "shop", label: "shop" },
              ].map((link) => (
                <li key={link.path}>
                  <Link href={`/${lng}/${link.path}`} className="hover:text-gray-300 transition-colors">
                    {t(`footer.links.${link.label}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-xl font-medium mb-4">{t("footer.connectWithUs")}</h3>
            <div className="flex space-x-4 mb-6">
              <Link href="https://facebook.com" className="hover:text-gray-300 transition-colors">
                <Facebook size={24} />
              </Link>
              <Link href="https://twitter.com" className="hover:text-gray-300 transition-colors">
                <Twitter size={24} />
              </Link>
              <Link href="https://instagram.com" className="hover:text-gray-300 transition-colors">
                <Instagram size={24} />
              </Link>
              <Link href="https://youtube.com" className="hover:text-gray-300 transition-colors">
                <Youtube size={24} />
              </Link>
            </div>

            <h4 className="font-medium mb-2">{t("footer.newsletterTitle")}</h4>
            <form className="flex">
              <input
                type="email"
                placeholder={t("footer.emailPlaceholder")}
                className="bg-gray-900 border border-gray-700 px-4 py-2 flex-grow"
                required
              />
              <button type="submit" className="bg-white text-black px-4 py-2 hover:bg-gray-200 transition-colors">
                {t("footer.signUp")}
              </button>
            </form>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 pt-8 text-sm text-gray-400">
          <div className="flex flex-col md:flex-row justify-between">
            <p>&copy; {new Date().getFullYear()} {t("footer.rights")}</p>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {["terms", "privacy", "cookies", "accessibility", "contact"].map((link) => (
                <Link key={link} href={`/${lng}/${link}`} className="hover:text-gray-300 transition-colors">
                  {t(`footer.links.${link}`)}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
