import { useEffect, useMemo, useState } from 'react';
import { profile } from '../data/profile';
import { LocaleContext } from './locale-context';

const STORAGE_KEY = 'rm-locale';

function readLocale() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'es' || saved === 'en') return saved;
  } catch {
    /* Storage can be unavailable. Spanish stays the default. */
  }
  return 'es';
}

export function LocaleProvider({ children }) {
  const [locale, setLocale] = useState(readLocale);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, locale);
    } catch {
      /* Ignore a blocked write. The selection still applies in memory. */
    }

    const copy = profile[locale];
    document.documentElement.lang = locale;
    document.title = copy.meta.title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', copy.meta.description);
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', copy.meta.title);
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', copy.meta.description);
  }, [locale]);

  const value = useMemo(
    () => ({ locale, setLocale, t: profile[locale] }),
    [locale],
  );

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}
