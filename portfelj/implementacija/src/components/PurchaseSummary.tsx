import { Calendar, MapPin, Clock, Users } from 'lucide-react';
import { Screen, TicketData } from '../App';
import { Header } from './Header';
import { Footer } from './Footer';
import { Language, translations } from '../utils/translations';

interface PurchaseSummaryProps {
  ticketData: TicketData;
  navigateTo: (screen: Screen) => void;
  language: Language;
  setLanguage: (lang: Language) => void;
  largeFontEnabled: boolean;
  toggleLargeFont: () => void;
  adjustedDisplayEnabled: boolean;
  toggleAdjustedDisplay: () => void;
}

export function PurchaseSummary({ ticketData, navigateTo, language, setLanguage, largeFontEnabled, toggleLargeFont, adjustedDisplayEnabled, toggleAdjustedDisplay }: PurchaseSummaryProps) {
  const t = translations[language];
  
  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    const days = t.days;
    return `${days[date.getDay()]}, ${date.toLocaleDateString('sl-SI', { day: '2-digit', month: '2-digit', year: 'numeric' })}`;
  };

  const train = ticketData.selectedTrain;
  if (!train) return null;
  
  // Check if this came from quick purchase
  const isQuickPurchase = train.id.startsWith('quick-');

  const totalPassengers = ticketData.passengers.regular + 
                          ticketData.passengers.child6to15 + 
                          ticketData.passengers.childUnder6;

  // Calculate costs
  // Base price per ticket
  const basePricePerTicket = train.price;
  
  // Calculate ticket costs for each passenger type
  const regularTicketsCost = ticketData.passengers.regular * basePricePerTicket;
  const child6to15Cost = ticketData.passengers.child6to15 * basePricePerTicket * 0.5; // 50% discount for children 6-15
  const childUnder6Cost = 0; // Free for children under 6
  
  const ticketPrice = regularTicketsCost + child6to15Cost + childUnder6Cost;
  const bicycleCost = ticketData.extras.bicycle * 1.50;
  const strollerCost = ticketData.extras.stroller * 1.00;
  const petCost = ticketData.extras.pet * 2.00;
  const extrasCost = bicycleCost + strollerCost + petCost;
  const totalCost = ticketPrice + extrasCost;

  return (
    <div className="h-full flex flex-col bg-gray-50">
      <Header language={language} setLanguage={setLanguage} />
      
      <div className="flex-1 flex flex-col p-4 overflow-hidden">
        <h2 className="text-lg font-bold text-gray-900 mb-1.5">{t.summaryTitle}</h2>

        <div className="flex-1 overflow-y-auto space-y-1.5">
          {/* Trip Details */}
          <div className="bg-white border-2 border-gray-300 rounded-lg p-2 space-y-1">
            <div className="flex items-start gap-2">
              <Calendar size={14} className="text-gray-600 mt-0.5" />
              <div>
                <p className="text-xs text-gray-600 font-semibold">{t.tripDate}</p>
                <p className="font-bold text-sm">{formatDate(ticketData.date)}</p>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <MapPin size={14} className="text-gray-600 mt-0.5" />
              <div>
                <p className="text-xs text-gray-600 font-semibold">{t.route}</p>
                <p className="font-bold text-sm">{ticketData.departure} → {ticketData.arrival}</p>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <Clock size={14} className="text-gray-600 mt-0.5" />
              <div>
                <p className="text-xs text-gray-600 font-semibold">{t.departure} - {t.arrival}</p>
                <p className="font-bold text-sm">{train.departure} - {train.arrival}</p>
              </div>
            </div>

            <div className="pt-1 border-t border-gray-200 space-y-0.5">
              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-600 font-semibold">{t.trainTypeLabel}:</span>
                <span className="px-2 py-0.5 bg-cyan-500 text-white rounded font-bold text-xs">
                  {train.type}
                </span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-gray-600 font-semibold">{t.duration}:</span>
                <span className="font-bold">{train.duration}</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-gray-600 font-semibold">{t.transfers}:</span>
                <span className="font-bold">
                  {train.transfers === 0 ? t.noTransfers : train.transfers}
                </span>
              </div>
            </div>
          </div>

          {/* Passengers */}
          <div className="bg-white border-2 border-gray-300 rounded-lg p-2">
            <div className="flex items-start gap-2">
              <Users size={14} className="text-gray-600 mt-0.5" />
              <div className="flex-1">
                <p className="text-xs text-gray-600 font-semibold mb-0.5">{t.passengers}</p>
                {ticketData.passengers.regular > 0 && (
                  <p className="font-bold text-sm">{t.regularPrice}: {ticketData.passengers.regular}</p>
                )}
                {ticketData.passengers.child6to15 > 0 && (
                  <p className="font-bold text-sm">{t.child6to15}: {ticketData.passengers.child6to15}</p>
                )}
                {ticketData.passengers.childUnder6 > 0 && (
                  <p className="font-bold text-sm">{t.childUnder6}: {ticketData.passengers.childUnder6}</p>
                )}
              </div>
            </div>
          </div>

          {/* Cost Breakdown */}
          <div className="bg-white border-2 border-gray-300 rounded-lg p-2">
            <h3 className="font-bold text-sm mb-1">{t.costBreakdown}</h3>
            
            <div className="space-y-0.5">
              <div className="flex justify-between text-sm">
                <span className="text-gray-700 font-semibold">{t.regularPrice.toUpperCase()} {t.class2nd.toUpperCase()}</span>
                <span className="font-bold">{ticketPrice.toFixed(2)}€</span>
              </div>

              {extrasCost > 0 && (
                <>
                  <div className="pt-0.5 border-t border-gray-200">
                    <p className="text-xs font-bold text-gray-700 mb-0.5">{t.addons}</p>
                    {ticketData.extras.bicycle > 0 && (
                      <div className="flex justify-between text-xs">
                        <span className="text-gray-600 font-semibold">{t.bicycle} ({ticketData.extras.bicycle}x)</span>
                        <span className="font-bold">{bicycleCost.toFixed(2)}€</span>
                      </div>
                    )}
                    {ticketData.extras.stroller > 0 && (
                      <div className="flex justify-between text-xs">
                        <span className="text-gray-600 font-semibold">{t.stroller} ({ticketData.extras.stroller}x)</span>
                        <span className="font-bold">{strollerCost.toFixed(2)}€</span>
                      </div>
                    )}
                    {ticketData.extras.pet > 0 && (
                      <div className="flex justify-between text-xs">
                        <span className="text-gray-600 font-semibold">{t.pet} ({ticketData.extras.pet}x)</span>
                        <span className="font-bold">{petCost.toFixed(2)}€</span>
                      </div>
                    )}
                  </div>
                </>
              )}

              <div className="pt-1 border-t-2 border-gray-400 flex justify-between items-center">
                <span className="font-bold text-sm">{t.totalWithTax}</span>
                <span className="font-bold text-lg text-cyan-600">{totalCost.toFixed(2)}€</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-4 mt-1.5">
          <button
            onClick={() => navigateTo(isQuickPurchase ? 'quick-purchase' : 'train-results')}
            className="flex-1 bg-red-600 hover:bg-red-700 text-white rounded-xl py-3 font-bold transition-colors"
          >
            {t.back.toUpperCase()}
          </button>
          <button
            onClick={() => navigateTo('terms')}
            className="flex-1 bg-green-600 hover:bg-green-700 text-white rounded-xl py-3 font-bold transition-colors"
          >
            {t.buy}
          </button>
        </div>
      </div>
      <Footer language={language} largeFontEnabled={largeFontEnabled} toggleLargeFont={toggleLargeFont} adjustedDisplayEnabled={adjustedDisplayEnabled} toggleAdjustedDisplay={toggleAdjustedDisplay} />
    </div>
  );
}