export const fallbackLng = "en"
export const languages = ["en", "hi", "bn", "mr", "pa", "gu", "ta", "kn", "te"]
export const defaultNS = "common"

export function getOptions(lng = fallbackLng, ns = defaultNS) {
  return {
    // debug: true,
    supportedLngs: languages,
    fallbackLng,
    lng,
    fallbackNS: defaultNS,
    defaultNS,
    ns,
  }
}
