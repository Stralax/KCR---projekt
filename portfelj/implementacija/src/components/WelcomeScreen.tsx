import { ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { Screen, TicketData } from '../App';
import { Header } from './Header';
import { Footer } from './Footer';
import { QRScannerModal } from './QRScannerModal';
import { Language, translations } from '../utils/translations';

interface WelcomeScreenProps {
  navigateTo: (screen: Screen) => void;
  setTicketData: (data: TicketData) => void;
  language: Language;
  setLanguage: (lang: Language) => void;
  largeFontEnabled: boolean;
  toggleLargeFont: () => void;
  adjustedDisplayEnabled: boolean;
  toggleAdjustedDisplay: () => void;
}

export function WelcomeScreen({ navigateTo, setTicketData, language, setLanguage, largeFontEnabled, toggleLargeFont, adjustedDisplayEnabled, toggleAdjustedDisplay }: WelcomeScreenProps) {
  const [showQRScanner, setShowQRScanner] = useState(false);
  const t = translations[language];

  return (
    <div className="h-full flex flex-col bg-gray-50 relative">
      <Header language={language} setLanguage={setLanguage} />
      
      <div className={`flex-1 flex flex-col p-5 ${largeFontEnabled ? 'overflow-y-auto' : ''}`}>
        <div className="text-center mb-8 mt-4">
          <h2 className="text-2xl font-bold text-gray-900">{t.welcomeTitle}</h2>
        </div>

        <div className="flex-1 flex flex-col gap-4 justify-center max-w-xl mx-auto w-full">
          <button
            onClick={() => navigateTo('purchase-form')}
            className="bg-white hover:bg-gray-50 text-gray-900 border-4 border-gray-800 rounded-2xl p-5 flex items-center justify-between transition-all hover:border-cyan-500"
          >
            <span className="text-xl font-semibold">{t.purchaseTicket}</span>
            <div className="w-9 h-9 rounded-full border-2 border-gray-800 flex items-center justify-center">
              <ArrowRight size={20} />
            </div>
          </button>

          <button
            onClick={() => navigateTo('quick-purchase')}
            className="bg-white hover:bg-gray-50 text-gray-900 border-4 border-gray-800 rounded-2xl p-5 flex items-center justify-between transition-all hover:border-cyan-500"
          >
            <span className="text-xl font-semibold">{t.quickPurchase}</span>
            <div className="w-9 h-9 rounded-full border-2 border-gray-800 flex items-center justify-center">
              <ArrowRight size={20} />
            </div>
          </button>

          <button
            onClick={() => setShowQRScanner(true)}
            className="bg-white hover:bg-gray-50 text-gray-900 border-4 border-gray-800 rounded-2xl p-5 flex items-center justify-between transition-all hover:border-cyan-500"
          >
            <span className="text-xl font-semibold">{t.scanQR}</span>
            <div className="w-9 h-9 rounded-full border-2 border-gray-800 flex items-center justify-center">
              <ArrowRight size={20} />
            </div>
          </button>
        </div>
      </div>

      <QRScannerModal
        isOpen={showQRScanner}
        onClose={() => setShowQRScanner(false)}
        navigateTo={navigateTo}
        setTicketData={setTicketData}
        language={language}
      />
      <Footer language={language} largeFontEnabled={largeFontEnabled} toggleLargeFont={toggleLargeFont} adjustedDisplayEnabled={adjustedDisplayEnabled} toggleAdjustedDisplay={toggleAdjustedDisplay} />
    </div>
  );
}