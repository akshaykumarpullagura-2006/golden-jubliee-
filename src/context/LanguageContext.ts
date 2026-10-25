import { createContext, useContext } from 'react';
import { type Language, type InvitationConfig, INVITATION_CONFIGS } from '../data/invitationConfig';

export interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  config: InvitationConfig;
}

export const LanguageContext = createContext<LanguageContextType>({
  language: 'te',
  setLanguage: () => {},
  config: INVITATION_CONFIGS.te,
});

export const useLanguage = (): LanguageContextType => {
  return useContext(LanguageContext);
};
