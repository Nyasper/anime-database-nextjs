'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'es';

interface LanguageContextType {
  lang: Language;
  switchLang: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Language>('en');

  useEffect(() => {
    // Load language from localStorage on initial render
    const savedLang = localStorage.getItem('app-language') as Language;
    if (savedLang) {
      setLang(savedLang);
    }
  }, []);

  const switchLang = () => {
    setLang((prev) => {
      const newLang = prev === 'en' ? 'es' : 'en';
      localStorage.setItem('app-language', newLang);
      return newLang;
    });
  };

  return (
    <LanguageContext.Provider value={{ lang, switchLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
