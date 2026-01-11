import { Users, Minus, Plus, Bike, Baby, PawPrint } from 'lucide-react';
import { Screen, Passenger, Extras } from '../App';
import { Header } from './Header';
import { Footer } from './Footer';
import { Language, translations } from '../utils/translations';

interface PassengerSelectionProps {
  passengers: Passenger;
  extras: Extras;
  updatePassengers: (passengers: Passenger) => void;
  updateExtras: (extras: Extras) => void;
  navigateTo: (screen: Screen) => void;
  language: Language;
  setLanguage: (lang: Language) => void;
  largeFontEnabled: boolean;
  toggleLargeFont: () => void;
  adjustedDisplayEnabled: boolean;
  toggleAdjustedDisplay: () => void;
}

export function PassengerSelection({
  passengers,
  extras,
  updatePassengers,
  updateExtras,
  navigateTo,
  language,
  setLanguage,
  largeFontEnabled,
  toggleLargeFont,
  adjustedDisplayEnabled,
  toggleAdjustedDisplay,
}: PassengerSelectionProps) {
  const t = translations[language];
  
  const incrementPassenger = (type: keyof Passenger) => {
    updatePassengers({ ...passengers, [type]: passengers[type] + 1 });
  };

  const decrementPassenger = (type: keyof Passenger) => {
    if (passengers[type] > 0) {
      updatePassengers({ ...passengers, [type]: passengers[type] - 1 });
    }
  };

  const incrementExtra = (type: keyof Extras) => {
    updateExtras({ ...extras, [type]: extras[type] + 1 });
  };

  const decrementExtra = (type: keyof Extras) => {
    if (extras[type] > 0) {
      updateExtras({ ...extras, [type]: extras[type] - 1 });
    }
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
    <div className="h-full flex flex-col bg-gray-50">
      <Header language={language} setLanguage={setLanguage} />
      
      <div className="flex-1 flex flex-col p-4 overflow-hidden">
        <h2 className="text-xl font-bold text-gray-900 mb-3">{t.selectPassengers}</h2>

        <div className="flex-1 overflow-y-auto space-y-4">
          {/* Passengers Section */}
          <div>
            <h3 className="text-base font-bold text-gray-800 mb-2">{t.passengers}</h3>
            <div className="space-y-2">
              <div className="flex items-center justify-between p-3 bg-white border-2 border-gray-300 rounded-xl">
                <span className="font-medium">{t.regularPassenger}</span>
                <CounterButton
                  value={passengers.regular}
                  onIncrement={() => incrementPassenger('regular')}
                  onDecrement={() => decrementPassenger('regular')}
                />
              </div>

              <div className="flex items-center justify-between p-3 bg-white border-2 border-gray-300 rounded-xl">
                <span className="font-medium">{t.child6to15}</span>
                <CounterButton
                  value={passengers.child6to15}
                  onIncrement={() => incrementPassenger('child6to15')}
                  onDecrement={() => decrementPassenger('child6to15')}
                />
              </div>

              <div className="flex items-center justify-between p-3 bg-white border-2 border-gray-300 rounded-xl">
                <span className="font-medium">{t.childUnder6}</span>
                <CounterButton
                  value={passengers.childUnder6}
                  onIncrement={() => incrementPassenger('childUnder6')}
                  onDecrement={() => decrementPassenger('childUnder6')}
                />
              </div>
            </div>
          </div>

          {/* Extras Section */}
          <div>
            <h3 className="text-base font-bold text-gray-800 mb-2">{t.extras}</h3>
            <div className="space-y-2">
              <div className="flex items-center justify-between p-3 bg-white border-2 border-gray-300 rounded-xl">
                <span className="font-medium">{t.bicycle}</span>
                <CounterButton
                  value={extras.bicycle}
                  onIncrement={() => incrementExtra('bicycle')}
                  onDecrement={() => decrementExtra('bicycle')}
                />
              </div>

              <div className="flex items-center justify-between p-3 bg-white border-2 border-gray-300 rounded-xl">
                <span className="font-medium">{t.stroller}</span>
                <CounterButton
                  value={extras.stroller}
                  onIncrement={() => incrementExtra('stroller')}
                  onDecrement={() => decrementExtra('stroller')}
                />
              </div>

              <div className="flex items-center justify-between p-3 bg-white border-2 border-gray-300 rounded-xl">
                <span className="font-medium">{t.pet}</span>
                <CounterButton
                  value={extras.pet}
                  onIncrement={() => incrementExtra('pet')}
                  onDecrement={() => decrementExtra('pet')}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-4 mt-4">
          <button
            onClick={() => navigateTo('purchase-form')}
            className="flex-1 bg-red-600 hover:bg-red-700 text-white rounded-xl py-3 font-bold transition-colors"
          >
            {t.back}
          </button>
          <button
            onClick={() => navigateTo('purchase-form')}
            className="flex-1 bg-green-600 hover:bg-green-700 text-white rounded-xl py-3 font-bold transition-colors"
          >
            {t.confirm}
          </button>
        </div>
      </div>
      <Footer language={language} largeFontEnabled={largeFontEnabled} toggleLargeFont={toggleLargeFont} adjustedDisplayEnabled={adjustedDisplayEnabled} toggleAdjustedDisplay={toggleAdjustedDisplay} />
    </div>
  );
}