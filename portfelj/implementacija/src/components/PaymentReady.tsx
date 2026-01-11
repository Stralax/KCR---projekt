import { Wallet } from 'lucide-react';
import { Screen } from '../App';
import { Header } from './Header';
import { Footer } from './Footer';
import { useEffect } from 'react';
import { Language, translations } from '../utils/translations';

interface PaymentReadyProps {
  navigateTo: (screen: Screen) => void;
  language: Language;
  setLanguage: (lang: Language) => void;
  largeFontEnabled: boolean;
  toggleLargeFont: () => void;
  adjustedDisplayEnabled: boolean;
  toggleAdjustedDisplay: () => void;
}

export function PaymentReady({ navigateTo, language, setLanguage, largeFontEnabled, toggleLargeFont, adjustedDisplayEnabled, toggleAdjustedDisplay }: PaymentReadyProps) {
  const t = translations[language];
  
  useEffect(() => {
    const timer = setTimeout(() => {
      navigateTo('welcome');
    }, 10000); // 10 seconds

    return () => clearTimeout(timer);
  }, [navigateTo]);

  return (
    <div className="h-full flex flex-col bg-gray-50">
      <Header language={language} setLanguage={setLanguage} />
      
      <div className="flex-1 flex flex-col items-center justify-center p-6">
        <div className="mb-8">
          <div className="bg-green-500 text-white p-5 rounded-2xl relative">
            <Wallet size={70} strokeWidth={1.5} />
            <div className="absolute -bottom-2 -right-2 bg-yellow-500 text-white p-2 rounded-xl">
              <Wallet size={30} strokeWidth={2} />
            </div>
          </div>
        </div>

        <div className="bg-white border-2 border-gray-300 rounded-xl p-6 mb-8 max-w-lg">
          <p className="text-lg text-center font-bold text-gray-800 leading-relaxed">
            {t.insertCash}
          </p>
        </div>

        <div className="mt-8 flex gap-2">
          <div className="w-3 h-3 bg-cyan-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
          <div className="w-3 h-3 bg-cyan-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
          <div className="w-3 h-3 bg-cyan-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
        </div>
      </div>
      <Footer language={language} largeFontEnabled={largeFontEnabled} toggleLargeFont={toggleLargeFont} adjustedDisplayEnabled={adjustedDisplayEnabled} toggleAdjustedDisplay={toggleAdjustedDisplay} />
    </div>
  );
}