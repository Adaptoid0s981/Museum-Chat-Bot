'use client';

import i18next from 'i18next';
import resourcesToBackend from 'i18next-resources-to-backend';
import { initReactI18next } from 'react-i18next/initReactI18next';
import { getOptions } from './settings';

i18next
  .use(initReactI18next)
  .use(
    resourcesToBackend((language: string, namespace: string) =>
      import(`./locales/${language}/${namespace}.json`).then((res) => res.default)
    )
  )
  .init(getOptions());

// ✅ Now, `useTranslation` is synchronous
export function useTranslation(lng: string, ns = 'common') {
  if (i18next.resolvedLanguage !== lng) {
    i18next.changeLanguage(lng); // no await here!
  }

  return {
    t: i18next.getFixedT(lng, Array.isArray(ns) ? ns[0] : ns),
    i18n: i18next,
  };
}

export { i18next };
