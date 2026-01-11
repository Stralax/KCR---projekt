import { Language, translations } from '../utils/translations';
import { getTrainTypeColor } from '../utils/trainColors';

interface TrainTypesModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
}

export function TrainTypesModal({ isOpen, onClose, language }: TrainTypesModalProps) {
  const t = translations[language];
  
  if (!isOpen) return null;

  return (
    <div className="absolute inset-0 bg-gray-50 flex flex-col z-50">
      <div className="flex-1 flex flex-col p-4">
        <h2 className="text-xl font-bold text-gray-900 mb-3">{t.trainTypesTitle}</h2>
        
        <div className="space-y-2 text-gray-900 flex-1">
          <div className="p-3 bg-white rounded-lg border-2 border-gray-200">
            <div className="flex items-center gap-2 mb-1">
              <span className={`px-2 py-0.5 ${getTrainTypeColor('LP').bg} ${getTrainTypeColor('LP').text} rounded font-bold text-xs`}>
                LP
              </span>
              <span className={`px-2 py-0.5 ${getTrainTypeColor('LP').bg} ${getTrainTypeColor('LP').text} rounded font-bold text-xs`}>
                LPV
              </span>
              <span className={`px-2 py-0.5 ${getTrainTypeColor('RG').bg} ${getTrainTypeColor('RG').text} rounded font-bold text-xs`}>
                RG
              </span>
            </div>
            <p className="text-xs leading-snug">{t.trainTypeLPDesc}</p>
          </div>

          <div className="p-3 bg-white rounded-lg border-2 border-gray-200">
            <div className="flex items-center gap-2 mb-1">
              <span className={`px-2 py-0.5 ${getTrainTypeColor('IC').bg} ${getTrainTypeColor('IC').text} rounded font-bold text-xs`}>
                IC*
              </span>
              <span className={`px-2 py-0.5 ${getTrainTypeColor('ICS').bg} ${getTrainTypeColor('ICS').text} rounded font-bold text-xs`}>
                ICS*
              </span>
            </div>
            <p className="text-xs leading-snug">{t.trainTypeICDesc}</p>
          </div>

          <div className="p-3 bg-white rounded-lg border-2 border-gray-200">
            <div className="flex items-center gap-2 mb-1">
              <span className={`px-2 py-0.5 ${getTrainTypeColor('EC').bg} ${getTrainTypeColor('EC').text} rounded font-bold text-xs`}>
                EC*
              </span>
            </div>
            <p className="text-xs leading-snug">{t.trainTypeECDesc}</p>
          </div>

          <div className="p-3 bg-white rounded-lg border-2 border-gray-200">
            <div className="flex items-center gap-2 mb-1">
              <span className={`px-2 py-0.5 ${getTrainTypeColor('MV').bg} ${getTrainTypeColor('MV').text} rounded font-bold text-xs`}>
                MV*
              </span>
            </div>
            <p className="text-xs leading-snug">{t.trainTypeMVDesc}</p>
          </div>

          <div className="p-3 bg-white rounded-lg border-2 border-gray-200">
            <div className="flex items-center gap-2 mb-1">
              <span className={`px-2 py-0.5 ${getTrainTypeColor('EN').bg} ${getTrainTypeColor('EN').text} rounded font-bold text-xs`}>
                EN*
              </span>
            </div>
            <p className="text-xs leading-snug">{t.trainTypeENDesc}</p>
          </div>

          <p className="text-xs text-gray-600 italic pt-1">{t.trainTypeSurcharge}</p>
        </div>

        <div className="mt-3">
          <button
            onClick={onClose}
            className="w-full bg-red-600 hover:bg-red-700 text-white rounded-xl py-3 font-bold transition-colors"
          >
            {t.back.toUpperCase()}
          </button>
        </div>
      </div>
    </div>
  );
}