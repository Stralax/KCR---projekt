import { Calendar, LogIn, LogOut } from 'lucide-react';
import { Screen, TicketData, StationType } from '../App';
import { Header } from './Header';
import { Footer } from './Footer';
import { DatePicker } from './DatePicker';
import { useState } from 'react';
import { Language, translations } from '../utils/translations';

interface TicketPurchaseFormProps {
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

export function TicketPurchaseForm({
  ticketData,
  setTicketData,
  navigateTo,
  openStationSelection,
  language,
  setLanguage,
  largeFontEnabled,
  toggleLargeFont,
  adjustedDisplayEnabled,
  toggleAdjustedDisplay
}: TicketPurchaseFormProps) {
  const [showDatePicker, setShowDatePicker] = useState(false);
  const t = translations[language];
  
  const totalPassengers = ticketData.passengers.regular + 
                          ticketData.passengers.child6to15 + 
                          ticketData.passengers.childUnder6;

  const totalExtras = ticketData.extras.bicycle + 
                      ticketData.extras.stroller + 
                      ticketData.extras.pet;

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('sl-SI', { day: 'numeric', month: 'numeric', year: 'numeric' });
  };

  const handleDateSelect = (date: string) => {
    setTicketData({ ...ticketData, date });
  };

  const canProceed = ticketData.departure && ticketData.arrival;

  return (
    <div className="h-full relative">
      <div className="h-full flex flex-col bg-white">
        <Header language={language} setLanguage={setLanguage} />
        
        <div className="flex-1 flex flex-col overflow-hidden">
          <h2 className="text-xl font-bold text-gray-900 text-center py-3 border-b-2 border-gray-300">
            {t.purchaseTitle}
          </h2>

          <div className={`flex-1 px-4 py-4 ${largeFontEnabled ? 'overflow-y-auto' : 'overflow-y-auto'}`}>
            <div className="space-y-3 max-w-full">
              {/* Date */}
              <div className={`flex gap-2 ${largeFontEnabled ? 'flex-col items-start' : 'items-center'}`}>
                <label className={`text-sm font-normal text-gray-900 ${largeFontEnabled ? 'mb-1' : 'w-32 text-right'}`}>
                  {t.date}:
                </label>
                <div className="flex-1 flex items-center gap-2 w-full">
                  <input
                    type="text"
                    value={formatDate(ticketData.date)}
                    readOnly
                    className="flex-1 px-2 py-2 border-2 border-cyan-500 rounded-lg text-center text-sm bg-white"
                  />
                  <button
                    onClick={() => setShowDatePicker(true)}
                    className="bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg px-3 py-2 font-bold text-xs transition-colors flex items-center gap-1 whitespace-nowrap"
                  >
                    {t.selectButton}
                    <Calendar size={16} />
                  </button>
                </div>
              </div>

              {/* Departure Station */}
              <div className={`flex gap-2 ${largeFontEnabled ? 'flex-col items-start' : 'items-center'}`}>
                <label className={`text-sm font-normal text-gray-900 ${largeFontEnabled ? 'mb-1' : 'w-32 text-right'}`}>
                  {t.departureStation}:
                </label>
                <div className="flex-1 flex items-center gap-2 w-full">
                  <input
                    type="text"
                    value={ticketData.departure || '-'}
                    readOnly
                    className="flex-1 px-2 py-2 border-2 border-cyan-500 rounded-lg text-center text-sm bg-white"
                  />
                  <button
                    onClick={() => openStationSelection('departure')}
                    className="bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg px-3 py-2 font-bold text-xs transition-colors flex items-center gap-1 whitespace-nowrap"
                  >
                    {t.selectButton}
                    <LogIn size={16} />
                  </button>
                </div>
              </div>

              {/* Arrival Station */}
              <div className={`flex gap-2 ${largeFontEnabled ? 'flex-col items-start' : 'items-center'}`}>
                <label className={`text-sm font-normal text-gray-900 ${largeFontEnabled ? 'mb-1' : 'w-32 text-right'}`}>
                  {t.arrivalStation}:
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
              <div className="flex items-center gap-2">
                <label className="text-sm font-normal text-gray-900 w-32 text-right">
                  {t.passengers}:
                </label>
                <div className="flex-1 flex items-center gap-2">
                  <input
                    type="text"
                    value={totalPassengers}
                    readOnly
                    className="w-16 px-2 py-2 border-2 border-cyan-500 rounded-lg text-center text-sm bg-white"
                  />
                  <button
                    onClick={() => navigateTo('passenger-selection')}
                    className="flex-1 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg px-3 py-2 font-bold text-xs transition-colors leading-tight"
                  >
                    {t.selectPassengersAndExtras}
                  </button>
                </div>
              </div>

              {/* Extras */}
              <div className="flex items-center gap-2">
                <label className="text-sm font-normal text-gray-900 w-32 text-right">
                  {t.extras}:
                </label>
                <div className="flex-1 flex items-center gap-2">
                  <input
                    type="text"
                    value={totalExtras > 0 ? totalExtras : '-'}
                    readOnly
                    className="w-16 px-2 py-2 border-2 border-cyan-500 rounded-lg text-center text-sm bg-white"
                  />
                  <div className="flex-1"></div>
                </div>
              </div>

              {/* Return Trip */}
              <div className="flex items-center gap-2">
                <label className="text-sm font-normal text-gray-900 w-32 text-right">
                  {t.returnLabel}:
                </label>
                <div className="flex-1 flex gap-2">
                  <button
                    onClick={() => setTicketData({ ...ticketData, returnTrip: true })}
                    className={`flex-1 px-4 py-2 border-2 border-cyan-500 font-bold text-sm transition-all rounded-lg ${
                      ticketData.returnTrip
                        ? 'bg-cyan-500 text-white'
                        : 'bg-white text-gray-900'
                    }`}
                  >
                    {t.yes}
                  </button>
                  <button
                    onClick={() => setTicketData({ ...ticketData, returnTrip: false })}
                    className={`flex-1 px-4 py-2 border-2 border-cyan-500 font-bold text-sm transition-all rounded-lg ${
                      !ticketData.returnTrip
                        ? 'bg-cyan-500 text-white'
                        : 'bg-white text-gray-900'
                    }`}
                  >
                    {t.no}
                  </button>
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
              onClick={() => canProceed && navigateTo('train-results')}
              disabled={!canProceed}
              className={`flex-1 rounded-2xl py-3 font-bold text-lg transition-colors ${
                canProceed
                  ? 'bg-green-600 hover:bg-green-700 text-white cursor-pointer'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              {t.searchTrains}
            </button>
          </div>
        </div>

        <Footer language={language} largeFontEnabled={largeFontEnabled} toggleLargeFont={toggleLargeFont} adjustedDisplayEnabled={adjustedDisplayEnabled} toggleAdjustedDisplay={toggleAdjustedDisplay} />
      </div>

      {showDatePicker && (
        <DatePicker
          selectedDate={ticketData.date}
          onSelect={handleDateSelect}
          onClose={() => setShowDatePicker(false)}
          language={language}
          setLanguage={setLanguage}
          largeFontEnabled={largeFontEnabled}
          toggleLargeFont={toggleLargeFont}
        />
      )}
    </div>
  );
}