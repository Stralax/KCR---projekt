import { FileText } from 'lucide-react';
import { Screen } from '../App';
import { Header } from './Header';
import { Footer } from './Footer';
import { Language, translations } from '../utils/translations';

interface TermsAgreementProps {
  navigateTo: (screen: Screen) => void;
  language: Language;
  setLanguage: (lang: Language) => void;
  largeFontEnabled: boolean;
  toggleLargeFont: () => void;
  adjustedDisplayEnabled: boolean;
  toggleAdjustedDisplay: () => void;
}

export function TermsAgreement({ navigateTo, language, setLanguage, largeFontEnabled, toggleLargeFont, adjustedDisplayEnabled, toggleAdjustedDisplay }: TermsAgreementProps) {
  const t = translations[language];
  
  return (
    <div className="h-full flex flex-col bg-gray-50">
      <Header language={language} setLanguage={setLanguage} />
      
      <div className={`flex-1 flex flex-col items-center justify-center p-6 ${largeFontEnabled ? 'overflow-y-auto' : ''}`}>
        <div className="mb-6 text-cyan-500">
          <FileText size={60} strokeWidth={1.5} />
        </div>

        <div className="bg-white border-2 border-gray-300 rounded-xl p-6 mb-8 max-w-lg">
          <p className="text-base text-center leading-relaxed font-medium">
            {t.termsTextPrefix}
            <a 
              href="https://potniski.sz.si/splosni-pogoji-uporabe-samopostreznih-prodajnih-mest-kartomatov-sz-potniski-promet-d-o-o/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-600 hover:text-cyan-700 underline"
            >
              {t.termsLink}
            </a>
          </p>
        </div>

        <div className="w-full max-w-lg space-y-3">
          <button
            onClick={() => navigateTo('payment-type')}
            className="w-full bg-green-600 hover:bg-green-700 text-white rounded-xl py-4 text-lg font-bold transition-colors"
          >
            {t.acceptTerms}
          </button>
          <button
            onClick={() => navigateTo('purchase-summary')}
            className="w-full bg-red-600 hover:bg-red-700 text-white rounded-xl py-4 text-lg font-bold transition-colors"
          >
            {t.cancel}
          </button>
        </div>
      </div>
      <Footer language={language} largeFontEnabled={largeFontEnabled} toggleLargeFont={toggleLargeFont} adjustedDisplayEnabled={adjustedDisplayEnabled} toggleAdjustedDisplay={toggleAdjustedDisplay} />
    </div>
  );
}