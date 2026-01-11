import { Volume2, Accessibility, ZoomIn } from 'lucide-react';
import { Language, translations } from '../utils/translations';

interface FooterProps {
  language: Language;
  largeFontEnabled: boolean;
  toggleLargeFont: () => void;
  adjustedDisplayEnabled: boolean;
  toggleAdjustedDisplay: () => void;
}

export function Footer({ language, largeFontEnabled, toggleLargeFont, adjustedDisplayEnabled, toggleAdjustedDisplay }: FooterProps) {
  const t = translations[language];
  
  return (
    <div className="bg-gray-200 border-t-2 border-gray-300 px-4 py-3 flex justify-center gap-3">
      <button className="bg-cyan-500 hover:bg-cyan-600 text-white rounded-2xl px-4 py-2.5 flex items-center gap-2 transition-colors flex-1 max-w-[200px]">
        <Volume2 size={24} strokeWidth={2.5} />
        <span className="font-semibold text-sm">{t.audioFeedback}</span>
      </button>
      <button 
        onClick={toggleAdjustedDisplay}
        className={`rounded-2xl px-4 py-2.5 flex items-center gap-2 transition-colors flex-1 max-w-[200px] ${
          adjustedDisplayEnabled 
            ? 'bg-green-600 hover:bg-green-700 text-white' 
            : 'bg-cyan-500 hover:bg-cyan-600 text-white'
        }`}
      >
        <Accessibility size={24} strokeWidth={2.5} />
        <span className="font-semibold text-sm">{t.adjustDisplay}</span>
      </button>
      <button 
        onClick={toggleLargeFont}
        className={`rounded-2xl px-4 py-2.5 flex items-center gap-2 transition-colors flex-1 max-w-[200px] ${
          largeFontEnabled 
            ? 'bg-green-600 hover:bg-green-700 text-white' 
            : 'bg-cyan-500 hover:bg-cyan-600 text-white'
        }`}
      >
        <ZoomIn size={24} strokeWidth={2.5} />
        <span className="font-semibold text-sm">{t.increaseFont}</span>
      </button>
    </div>
  );
}