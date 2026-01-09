'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useTransition } from 'react';
import { FaGlobe } from 'react-icons/fa'; // 🌐 Globe icon

const languages = [
  { code: 'en', label: 'English' },
  { code: 'bn', label: 'Bengali' },
  { code: 'gu', label: 'Gujarati' },
  { code: 'hi', label: 'Hindi' },
  { code: 'kn', label: 'Kannada' },
  { code: 'mr', label: 'Marathi' },
  { code: 'pa', label: 'Punjabi' },
  { code: 'ta', label: 'Tamil' },
  { code: 'te', label: 'Telugu' }, // typo corrected earlier
];

interface LanguageSwitcherProps {
  lng: string;
}

export default function LanguageSwitcher({ lng }: LanguageSwitcherProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value;
    const segments = pathname.split('/').filter(Boolean);

    if (segments.length > 0) {
      segments[0] = newLocale;
    } else {
      segments.unshift(newLocale);
    }

    const newPath = '/' + segments.join('/');

    startTransition(() => {
      router.push(newPath);
    });
  };

  const currentLang = pathname.split('/')[1] || 'en';

  return (
    <div className="relative p-2">
      <div className="flex items-center gap-2">
        {/* 🌐 Globe Icon */}
        <FaGlobe className="text-white text-2xl transition-transform duration-500 hover:rotate-180" />
        
        {/* Language Dropdown */}
        <select
          onChange={handleChange}
          value={currentLang}
          className="border border-gray-700 bg-black text-white rounded-full px-4 py-2 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        >
          {languages.map((lang) => (
            <option key={lang.code} value={lang.code} className="bg-black text-white">
              {lang.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
