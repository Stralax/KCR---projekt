import { Delete, ChevronDown } from 'lucide-react';
import { Language, translations } from '../utils/translations';

interface OnScreenKeyboardProps {
  onKeyPress: (key: string) => void;
  onBackspace: () => void;
  onHide: () => void;
  language: Language;
}

export function OnScreenKeyboard({ onKeyPress, onBackspace, onHide, language }: OnScreenKeyboardProps) {
  const t = translations[language];
  const keys = [
    ['Q', 'W', 'E', 'R', 'T', 'Z', 'U', 'I', 'O', 'P'],
    ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
    ['Y', 'X', 'C', 'V', 'B', 'N', 'M']
  ];

  return (
    <div className="bg-white border-2 border-gray-300 rounded-xl p-3">
      <div className="space-y-2">
        {keys.map((row, rowIndex) => (
          <div key={rowIndex} className="flex justify-center gap-1">
            {row.map((key) => (
              <button
                key={key}
                type="button"
                onClick={() => onKeyPress(key)}
                className="w-9 h-9 flex items-center justify-center bg-white border-2 border-gray-400 hover:border-cyan-500 hover:bg-cyan-50 rounded-lg font-bold text-sm transition-all active:bg-cyan-100"
              >
                {key}
              </button>
            ))}
          </div>
        ))}
        
        {/* Bottom row with special keys */}
        <div className="flex justify-center gap-2 mt-2">
          <button
            type="button"
            onClick={onHide}
            className="px-4 h-9 flex items-center justify-center bg-gray-600 hover:bg-gray-700 text-white rounded-lg font-bold transition-colors active:bg-gray-800"
          >
            <ChevronDown size={18} />
          </button>
          <button
            type="button"
            onClick={() => onKeyPress(' ')}
            className="flex-1 max-w-[200px] h-9 flex items-center justify-center bg-white border-2 border-gray-400 hover:border-cyan-500 hover:bg-cyan-50 rounded-lg font-bold text-sm transition-all active:bg-cyan-100"
          >
            {t.space}
          </button>
          <button
            type="button"
            onClick={onBackspace}
            className="px-4 h-9 flex items-center justify-center bg-gray-600 hover:bg-gray-700 text-white rounded-lg font-bold transition-colors active:bg-gray-800"
          >
            <Delete size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}