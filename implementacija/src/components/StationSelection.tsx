import { Search, X, MapPin } from 'lucide-react';
import { useState } from 'react';
import { Screen } from '../App';
import { Header } from './Header';
import { Footer } from './Footer';
import { OnScreenKeyboard } from './OnScreenKeyboard';
import { Language, translations } from '../utils/translations';

interface StationSelectionProps {
  selectStation: (station: string) => void;
  navigateTo: (screen: Screen) => void;
  language: Language;
  setLanguage: (lang: Language) => void;
  largeFontEnabled: boolean;
  toggleLargeFont: () => void;
  adjustedDisplayEnabled: boolean;
  toggleAdjustedDisplay: () => void;
}

// 4 most frequent stations
const FREQUENT_STATIONS = [
  'Ljubljana',
  'Maribor',
  'Celje',
  'Koper'
];

const ALL_STATIONS = [
  'Ljubljana',
  'Ljubljana Polje',
  'Ljubljana Tivoli',
  'Ljubljana Zalog',
  'Lesce-Bled',
  'Maribor',
  'Celje',
  'Koper',
  'Novo Mesto',
  'Kranj',
  'Jesenice',
  'Postojna',
  'Divača',
  'Ptuj',
  'Murska Sobota'
];

export function StationSelection({ selectStation, navigateTo, language, setLanguage, largeFontEnabled, toggleLargeFont, adjustedDisplayEnabled, toggleAdjustedDisplay }: StationSelectionProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [showKeyboard, setShowKeyboard] = useState(false);
  const t = translations[language];

  const handleKeyPress = (key: string) => {
    setSearchTerm(prev => prev + key);
  };

  const handleBackspace = () => {
    setSearchTerm(prev => prev.slice(0, -1));
  };

  const handleHideKeyboard = () => {
    setShowKeyboard(false);
  };

  // Show frequent stations if no search term, otherwise show filtered results
  const displayStations = searchTerm.length === 0 
    ? FREQUENT_STATIONS
    : ALL_STATIONS.filter(station =>
        station.toLowerCase().includes(searchTerm.toLowerCase())
      );

  return (
    <div className="h-full flex flex-col bg-gray-50">
      <Header language={language} setLanguage={setLanguage} />
      
      <div className="flex-1 flex flex-col p-4 overflow-y-auto">
        <h2 className="text-xl font-bold text-gray-900 mb-3">{t.selectStation}</h2>

        {/* Search Input */}
        <div className="mb-3">
          <div 
            onClick={() => setShowKeyboard(true)}
            className="flex items-center gap-3 p-3 border-2 border-cyan-500 rounded-xl bg-white cursor-pointer"
          >
            <Search size={18} className="text-cyan-600" />
            <input
              type="text"
              value={searchTerm}
              placeholder={t.search}
              className="flex-1 outline-none bg-transparent font-medium text-lg pointer-events-none"
              readOnly
            />
          </div>
        </div>

        {/* Search Status */}
        {searchTerm.length > 0 && (
          <div className="mb-2 text-sm text-gray-600">
            {displayStations.length} {displayStations.length === 1 ? 'rezultat' : 'rezultatov'}
          </div>
        )}

        {/* Station List */}
        <div className="space-y-2 mb-3">
          {displayStations.map((station) => (
            <button
              key={station}
              onClick={() => selectStation(station)}
              className="w-full flex items-center gap-3 p-3 border-2 border-gray-400 rounded-xl bg-white hover:border-cyan-500 hover:bg-cyan-50 transition-all text-left"
            >
              <MapPin size={18} className="text-gray-600" />
              <span className="font-medium">{station}</span>
            </button>
          ))}
          {displayStations.length === 0 && (
            <div className="text-center py-8 text-gray-500">
              <p className="font-bold">Ni rezultatov</p>
              <p className="text-sm mt-1">Poskusite drugo iskanje</p>
            </div>
          )}
        </div>

        {/* On-Screen Keyboard */}
        {showKeyboard && (
          <div className="mb-3">
            <OnScreenKeyboard
              onKeyPress={handleKeyPress}
              onBackspace={handleBackspace}
              onHide={handleHideKeyboard}
              language={language}
            />
          </div>
        )}

        <div>
          <button
            onClick={() => navigateTo('purchase-form')}
            className="w-full bg-red-600 hover:bg-red-700 text-white rounded-xl py-3 font-bold transition-colors"
          >
            {t.back}
          </button>
        </div>
      </div>
      <Footer language={language} largeFontEnabled={largeFontEnabled} toggleLargeFont={toggleLargeFont} adjustedDisplayEnabled={adjustedDisplayEnabled} toggleAdjustedDisplay={toggleAdjustedDisplay} />
    </div>
  );
}