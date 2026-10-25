import React, { useState, useEffect } from 'react';
import { type Language, getInvitationConfig } from '../data/invitationConfig';
import { LanguageContext } from './LanguageContext';

const STORAGE_KEY = 'golden_jubilee_lang';

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY) as Language;
      if (saved && (saved === 'te' || saved === 'kn' || saved === 'en')) {
        return saved;
      }
    } catch {
      // ignore
    }
    return 'te';
  });

  const setLanguage = (newLang: Language) => {
    setLanguageState(newLang);
    try {
      localStorage.setItem(STORAGE_KEY, newLang);
    } catch {
      // ignore
    }
  };

  useEffect(() => {
    document.documentElement.lang = language;
    document.body.classList.remove('lang-te', 'lang-kn', 'lang-en');
    document.body.classList.add(`lang-${language}`);
  }, [language]);

  const config = getInvitationConfig(language);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, config }}>
      {children}
    </LanguageContext.Provider>
  );
};
