import { Calendar, LogOut, Users, Minus, Plus } from 'lucide-react';
import { useState } from 'react';
import { Screen, TicketData, StationType } from '../App';
import { Header } from './Header';
import { Footer } from './Footer';
import { Language, translations } from '../utils/translations';

interface QuickPurchaseProps {
  ticketData: TicketData;
  setTicketData: (data: TicketData) => void;
  navigateTo: (screen: Screen) => void;
  openStationSelection: (type: StationType) => void;
  language: Language;
  setLanguage: (lang: Language) => void;
  largeFontEnabled: boolean;
  toggleLargeFont: () => void;
  adjustedDisplayEnabled: boolean;
  toggleAdjustedDisplay: () => void;
}

export function QuickPurchase({
  ticketData,
  setTicketData,
  navigateTo,
  openStationSelection,
  language,
  setLanguage,
  largeFontEnabled,
  toggleLargeFont,
  adjustedDisplayEnabled,
  toggleAdjustedDisplay,
}: QuickPurchaseProps) {
  const t = translations[language];
  const [adultCount, setAdultCount] = useState(1);

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('sl-SI', { day: 'numeric', month: 'numeric', year: 'numeric' });
  };

  const handleIncrement = () => {
    if (adultCount < 10) {
      setAdultCount(adultCount + 1);
    }
  };

  const handleDecrement = () => {
    if (adultCount > 1) {
      setAdultCount(adultCount - 1);
    }
  };

  const handleConfirm = () => {
    if (!ticketData.arrival) return;
    
    // Create a default "first available" train for quick purchase
    const quickTrain = {
      id: 'quick-1',
      type: 'LP',
      departure: '08:15',
      arrival: '10:30',
      duration: '2h 15min',
      transfers: 0,
      price: 12.50
    };
    
    // Update ticket data with passenger count and selected train
    setTicketData({
      ...ticketData,
      passengers: {
        regular: adultCount,
        child6to15: 0,
        childUnder6: 0,
      },
      extras: {
        bicycle: 0,
        stroller: 0,
        pet: 0,
      },
      selectedTrain: quickTrain,
    });
    // Go directly to purchase summary (skipping train results)
    navigateTo('purchase-summary');
  };

  const CounterButton = ({ value, onIncrement, onDecrement }: { 
    value: number; 
    onIncrement: () => void; 
    onDecrement: () => void;
  }) => (
    <div className="flex items-center gap-2">
      <button
        onClick={onDecrement}
        className="w-10 h-10 flex items-center justify-center bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors font-bold text-lg"
      >
        <Minus size={20} strokeWidth={3} />
      </button>
      <span className="text-xl font-bold w-12 text-center">{value}</span>
      <button
        onClick={onIncrement}
        className="w-10 h-10 flex items-center justify-center bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg transition-colors font-bold text-lg"
      >
        <Plus size={20} strokeWidth={3} />
      </button>
    </div>
  );

  return (
    <div className="h-full flex flex-col bg-white">
      <Header language={language} setLanguage={setLanguage} />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <h2 className="text-xl font-bold text-gray-900 text-center py-3 border-b-2 border-gray-300">
          {t.quickPurchaseTitle}
        </h2>

        <div className={`flex-1 px-4 py-4 ${largeFontEnabled ? 'overflow-y-auto' : 'overflow-y-auto'}`}>
          <div className="space-y-3 max-w-full">
            {/* Travel Date */}
            <div className={`flex gap-2 ${largeFontEnabled ? 'flex-col items-start' : 'items-center'}`}>
              <label className={`text-sm font-normal text-gray-900 ${largeFontEnabled ? 'mb-1' : 'w-32 text-right'}`}>
                {t.travelDate}:
              </label>
              <div className="flex-1 w-full">
                <input
                  type="text"
                  value={formatDate(ticketData.date)}
                  readOnly
                  className="w-full px-2 py-2 border-2 border-cyan-500 rounded-lg text-center text-sm bg-white"
                />
              </div>
            </div>

            {/* Entry Station (Fixed) */}
            <div className={`flex gap-2 ${largeFontEnabled ? 'flex-col items-start' : 'items-center'}`}>
              <label className={`text-sm font-normal text-gray-900 ${largeFontEnabled ? 'mb-1' : 'w-32 text-right'}`}>
                {t.entryStation}:
              </label>
              <div className="flex-1 w-full">
                <input
                  type="text"
                  value={ticketData.departure}
                  readOnly
                  className="w-full px-2 py-2 border-2 border-cyan-500 rounded-lg text-center text-sm bg-white"
                />
              </div>
            </div>

            {/* Exit Station */}
            <div className={`flex gap-2 ${largeFontEnabled ? 'flex-col items-start' : 'items-center'}`}>
              <label className={`text-sm font-normal text-gray-900 ${largeFontEnabled ? 'mb-1' : 'w-32 text-right'}`}>
                {t.exitStation}:
              </label>
              <div className="flex-1 flex items-center gap-2 w-full">
                <input
                  type="text"
                  value={ticketData.arrival || '-'}
                  readOnly
                  className="flex-1 px-2 py-2 border-2 border-cyan-500 rounded-lg text-center text-sm bg-white"
                />
                <button
                  onClick={() => openStationSelection('arrival')}
                  className="bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg px-3 py-2 font-bold text-xs transition-colors flex items-center gap-1 whitespace-nowrap"
                >
                  {t.selectButton}
                  <LogOut size={16} />
                </button>
              </div>
            </div>

            {/* Passengers */}
            <div className={`flex gap-2 ${largeFontEnabled ? 'flex-col items-start' : 'items-center'}`}>
              <label className={`text-sm font-normal text-gray-900 ${largeFontEnabled ? 'mb-1' : 'w-32 text-right'}`}>
                {t.passengers}:
              </label>
              <div className="flex-1 w-full">
                <div className="flex items-center justify-between p-3 bg-white border-2 border-gray-300 rounded-xl">
                  <span className="font-medium">{t.regularPassenger}</span>
                  <CounterButton
                    value={adultCount}
                    onIncrement={handleIncrement}
                    onDecrement={handleDecrement}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="px-4 py-3 flex gap-4 border-t-2 border-gray-300">
          <button
            onClick={() => navigateTo('welcome')}
            className="flex-1 bg-red-800 hover:bg-red-900 text-white rounded-2xl py-3 font-bold text-lg transition-colors"
          >
            {t.back.toUpperCase()}
          </button>
          <button
            onClick={handleConfirm}
            className={`flex-1 rounded-2xl py-3 font-bold text-lg transition-colors ${
              ticketData.arrival
                ? 'bg-green-600 hover:bg-green-700 text-white cursor-pointer'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
            disabled={!ticketData.arrival}
          >
            {t.confirmSelection}
          </button>
        </div>
      </div>

      <Footer language={language} largeFontEnabled={largeFontEnabled} toggleLargeFont={toggleLargeFont} adjustedDisplayEnabled={adjustedDisplayEnabled} toggleAdjustedDisplay={toggleAdjustedDisplay} />
    </div>
  );
}