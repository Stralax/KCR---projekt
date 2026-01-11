import { CreditCard, Banknote } from 'lucide-react';
import { Screen } from '../App';
import { Header } from './Header';
import { Footer } from './Footer';
import { Language, translations } from '../utils/translations';

interface PaymentTypeSelectionProps {
  navigateTo: (screen: Screen) => void;
  language: Language;
  setLanguage: (lang: Language) => void;
  largeFontEnabled: boolean;
  toggleLargeFont: () => void;
  adjustedDisplayEnabled: boolean;
  toggleAdjustedDisplay: () => void;
}

export function PaymentTypeSelection({ navigateTo, language, setLanguage, largeFontEnabled, toggleLargeFont, adjustedDisplayEnabled, toggleAdjustedDisplay }: PaymentTypeSelectionProps) {
  const t = translations[language];
  
  return (
    <div className="h-full flex flex-col bg-gray-50">
      <Header language={language} setLanguage={setLanguage} />
      
      <div className={`flex-1 flex flex-col items-center p-6 ${largeFontEnabled ? 'overflow-y-auto justify-start pt-8' : 'justify-center'}`}>
        <h2 className="text-2xl font-bold text-gray-900 mb-10">{t.selectPaymentType}</h2>

        <div className="w-full max-w-lg space-y-4">
          <button
            onClick={() => navigateTo('payment-method')}
            className="w-full bg-white border-4 border-gray-800 hover:border-cyan-500 text-gray-900 rounded-2xl p-6 flex items-center gap-5 transition-all"
          >
            <div className="bg-cyan-500 text-white p-3 rounded-xl">
              <CreditCard size={40} strokeWidth={2} />
            </div>
            <span className="text-2xl font-bold">{t.creditCard}</span>
          </button>

          <button
            onClick={() => navigateTo('payment-ready')}
            className="w-full bg-white border-4 border-gray-800 hover:border-cyan-500 text-gray-900 rounded-2xl p-6 flex items-center gap-5 transition-all"
          >
            <div className="bg-green-500 text-white p-3 rounded-xl">
              <Banknote size={40} strokeWidth={2} />
            </div>
            <span className="text-2xl font-bold">{t.cash}</span>
          </button>
        </div>

        <div className="mt-8">
          <button
            onClick={() => navigateTo('terms')}
            className="px-10 py-3 bg-red-600 hover:bg-red-700 text-white rounded-xl font-bold transition-colors"
          >
            {t.back}
          </button>
        </div>
      </div>
      <Footer language={language} largeFontEnabled={largeFontEnabled} toggleLargeFont={toggleLargeFont} adjustedDisplayEnabled={adjustedDisplayEnabled} toggleAdjustedDisplay={toggleAdjustedDisplay} />
    </div>
  );
}