import { Clock, ArrowRight, Info, ChevronDown, ChevronUp, Bike } from 'lucide-react';
import { useState, useMemo } from 'react';
import { Screen, TicketData, Train } from '../App';
import { Header } from './Header';
import { Footer } from './Footer';
import { TrainTypesModal } from './TrainTypesModal';
import { Language, translations } from '../utils/translations';
import { getTrainTypeColor } from '../utils/trainColors';

interface TrainResultsProps {
  ticketData: TicketData;
  selectTrain: (train: Train) => void;
  navigateTo: (screen: Screen) => void;
  language: Language;
  setLanguage: (lang: Language) => void;
  largeFontEnabled: boolean;
  toggleLargeFont: () => void;
  adjustedDisplayEnabled: boolean;
  toggleAdjustedDisplay: () => void;
}

const MOCK_TRAINS: Train[] = [
  {
    id: '1',
    type: 'EC',
    departure: '18:23',
    arrival: '19:19',
    duration: '46 min',
    transfers: 0,
    price: 6.50,
    bicycleAllowed: false
  },
  {
    id: '2',
    type: 'LP',
    departure: '19:41',
    arrival: '20:43',
    duration: '1h 2 min',
    transfers: 0,
    price: 5.00,
    bicycleAllowed: true
  },
  {
    id: '3',
    type: 'MV',
    departure: '19:51',
    arrival: '20:35',
    duration: '44 min',
    transfers: 0,
    price: 5.00,
    bicycleAllowed: false
  },
  {
    id: '4',
    type: 'LP',
    departure: '20:56',
    arrival: '21:53',
    duration: '57 min',
    transfers: 0,
    price: 5.00,
    bicycleAllowed: true
  },
  {
    id: '8',
    type: 'ICS',
    departure: '16:45',
    arrival: '17:35',
    duration: '50 min',
    transfers: 0,
    price: 7.00,
    bicycleAllowed: false
  },
  {
    id: '9',
    type: 'IC',
    departure: '17:15',
    arrival: '18:10',
    duration: '55 min',
    transfers: 0,
    price: 6.50,
    bicycleAllowed: false
  },
  {
    id: '10',
    type: 'LP',
    departure: '18:00',
    arrival: '19:30',
    duration: '1h 30 min',
    transfers: 1,
    price: 4.50,
    bicycleAllowed: true
  },
  {
    id: '11',
    type: 'RG',
    departure: '22:15',
    arrival: '23:45',
    duration: '1h 30 min',
    transfers: 1,
    price: 4.00,
    bicycleAllowed: true
  },
];

// Additional bicycle-friendly trains that appear when bicycles are selected
const BICYCLE_FRIENDLY_TRAINS: Train[] = [
  {
    id: '5',
    type: 'LP',
    departure: '17:30',
    arrival: '18:32',
    duration: '1h 2 min',
    transfers: 0,
    price: 5.00,
    bicycleAllowed: true
  },
  {
    id: '6',
    type: 'RG',
    departure: '18:45',
    arrival: '19:50',
    duration: '1h 5 min',
    transfers: 0,
    price: 4.50,
    bicycleAllowed: true
  },
  {
    id: '7',
    type: 'LP',
    departure: '21:30',
    arrival: '22:35',
    duration: '1h 5 min',
    transfers: 0,
    price: 5.00,
    bicycleAllowed: true
  },
];

export function TrainResults({ ticketData, selectTrain, navigateTo, language, setLanguage, largeFontEnabled, toggleLargeFont, adjustedDisplayEnabled, toggleAdjustedDisplay }: TrainResultsProps) {
  const [selectedClass, setSelectedClass] = useState<'1' | '2'>('2');
  const [selectedFilter, setSelectedFilter] = useState<string>('vsi');
  const [expandedTrain, setExpandedTrain] = useState<string | null>(null);
  const [showTrainTypesModal, setShowTrainTypesModal] = useState(false);
  const [directOnly, setDirectOnly] = useState(false);
  const t = translations[language];

  // Determine which trains to show based on bicycle selection
  const availableTrains = useMemo(() => {
    const hasBicycles = ticketData.extras.bicycle > 0;
    
    if (hasBicycles) {
      // Show only bicycle-compatible trains from both lists
      const standardBikeTrains = MOCK_TRAINS.filter(train => train.bicycleAllowed);
      const allBikeTrains = [...standardBikeTrains, ...BICYCLE_FRIENDLY_TRAINS];
      // Sort by departure time
      return allBikeTrains.sort((a, b) => a.departure.localeCompare(b.departure));
    } else {
      // Show all trains when no bicycles selected
      return MOCK_TRAINS;
    }
  }, [ticketData.extras.bicycle]);

  // Apply filters to available trains
  const filteredTrains = useMemo(() => {
    let filtered = availableTrains;

    // Apply train type filter
    if (selectedFilter === 'lp') {
      filtered = filtered.filter(train => train.type === 'LP' || train.type === 'RG');
    } else if (selectedFilter === 'ic') {
      filtered = filtered.filter(train => 
        train.type === 'IC' || train.type === 'MV' || train.type === 'EN' || train.type === 'EC'
      );
    } else if (selectedFilter === 'ics') {
      filtered = filtered.filter(train => train.type === 'ICS');
    }
    // 'vsi' shows all trains, no filtering needed

    // Apply direct trains filter
    if (directOnly) {
      filtered = filtered.filter(train => train.transfers === 0);
    }

    // Sort by departure time (earliest departure first)
    return filtered.sort((a, b) => a.departure.localeCompare(b.departure));
  }, [availableTrains, selectedFilter, directOnly]);

  const toggleDetails = (trainId: string) => {
    setExpandedTrain(expandedTrain === trainId ? null : trainId);
  };

  return (
    <div className="h-full flex flex-col bg-gray-50 relative">
      <Header language={language} setLanguage={setLanguage} />
      
      <div className="flex-1 flex flex-col p-4 overflow-y-auto">
        <h2 className="text-xl font-bold text-gray-900 mb-4">{t.trainResults}</h2>

        {/* Class Selection and Filters */}
        <div className="flex gap-2 mb-3 flex-wrap">
          {/* Class Selection - Toggle Style */}
          <div className="flex border-2 border-cyan-500 rounded-lg overflow-hidden">
            <button
              onClick={() => setSelectedClass('1')}
              className={`px-4 py-2 font-bold text-sm transition-colors ${
                selectedClass === '1'
                  ? 'bg-cyan-500 text-white'
                  : 'bg-white text-gray-700'
              }`}
            >
              <span className="train-filter-text">{t.class1}</span>
            </button>
            <button
              onClick={() => setSelectedClass('2')}
              className={`px-4 py-2 font-bold text-sm transition-colors ${
                selectedClass === '2'
                  ? 'bg-cyan-500 text-white'
                  : 'bg-white text-gray-700'
              }`}
            >
              <span className="train-filter-text">{t.class2}</span>
            </button>
          </div>

          {/* Filter Buttons */}
          <button 
            onClick={() => setSelectedFilter('vsi')}
            className={`px-4 py-2 rounded-lg text-sm font-bold transition-colors ${
              selectedFilter === 'vsi'
                ? 'bg-cyan-500 text-white'
                : 'bg-white border-2 border-gray-400 text-gray-700 hover:border-cyan-500'
            }`}
          >
            <span className="train-filter-text">{t.allTrains}</span>
          </button>
          <button 
            onClick={() => setSelectedFilter('lp')}
            className={`px-4 py-2 rounded-lg text-sm font-bold transition-colors ${
              selectedFilter === 'lp'
                ? 'bg-cyan-500 text-white'
                : 'bg-white border-2 border-gray-400 text-gray-700 hover:border-cyan-500'
            }`}
          >
            <span className="train-filter-text">LP/RG</span>
          </button>
          <button 
            onClick={() => setSelectedFilter('ic')}
            className={`px-4 py-2 rounded-lg text-sm font-bold transition-colors ${
              selectedFilter === 'ic'
                ? 'bg-cyan-500 text-white'
                : 'bg-white border-2 border-gray-400 text-gray-700 hover:border-cyan-500'
            }`}
          >
            <span className="train-filter-text">IC/MV/EN/EC</span>
          </button>
          <button 
            onClick={() => setSelectedFilter('ics')}
            className={`px-4 py-2 rounded-lg text-sm font-bold transition-colors ${
              selectedFilter === 'ics'
                ? 'bg-cyan-500 text-white'
                : 'bg-white border-2 border-gray-400 text-gray-700 hover:border-cyan-500'
            }`}
          >
            <span className="train-filter-text">ICS</span>
          </button>
          <button 
            onClick={() => setDirectOnly(!directOnly)}
            className={`px-4 py-2 rounded-lg text-sm font-bold transition-colors ${
              directOnly
                ? 'bg-cyan-500 text-white'
                : 'bg-white border-2 border-gray-400 text-gray-700 hover:border-cyan-500'
            }`}
          >
            <span className="train-filter-text">{t.noTransfers}</span>
          </button>
          
          {/* Info Button - Separate */}
          <button 
            onClick={() => setShowTrainTypesModal(true)}
            className="w-10 h-10 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg flex items-center justify-center transition-colors"
            aria-label="Vrste vlakov"
          >
            <Info size={20} />
          </button>
        </div>

        {/* Train List */}
        <div className="space-y-2 mb-3">
          {filteredTrains.length === 0 ? (
            <div className="flex items-center justify-center py-12">
              <p className="text-gray-500 text-lg text-center px-4">{t.noTrainsFound}</p>
            </div>
          ) : (
            filteredTrains.map((train) => (
              <div key={train.id} className="border-2 border-cyan-500 rounded-xl overflow-hidden bg-white">
                <div className="p-3 flex items-center gap-3">
                  {/* Time Column */}
                  <div className="flex flex-col items-center justify-center min-w-[60px]">
                    <div className="text-xl font-bold text-gray-900">{train.departure}</div>
                    <div className="w-px h-4 bg-cyan-500 my-0.5"></div>
                    <div className="text-xl font-bold text-gray-900">{train.arrival}</div>
                  </div>

                  {/* Train Info Column */}
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className={`px-3 py-0.5 ${getTrainTypeColor(train.type).bg} ${getTrainTypeColor(train.type).text} rounded font-bold text-sm inline-flex items-center gap-1`}>
                        {train.type}
                        {train.type !== 'LP' && train.type !== 'RG' && <span className="text-xs">🚄</span>}
                      </span>
                      {train.bicycleAllowed && (
                        <span className="px-2 py-0.5 bg-green-600 text-white rounded font-bold text-xs inline-flex items-center gap-1">
                          <Bike size={14} />
                        </span>
                      )}
                    </div>
                    <div className="text-sm text-gray-700 font-medium">
                      {train.duration} - {train.transfers === 0 ? t.noTransfers : `${train.transfers} ${train.transfers === 1 ? t.transfer : t.transfers}`}
                    </div>
                    <button
                      onClick={() => toggleDetails(train.id)}
                      className="text-cyan-500 text-sm font-bold mt-1 flex items-center gap-1 hover:text-cyan-600"
                    >
                      {t.details}
                      {expandedTrain === train.id ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                    </button>
                  </div>

                  {/* Price Column */}
                  <div className="flex flex-col items-end gap-2 min-w-[120px]">
                    <div className="text-2xl font-bold text-gray-900">
                      {train.price.toFixed(2)} €
                    </div>
                    <button
                      onClick={() => selectTrain(train)}
                      className="w-full bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg py-2 px-4 font-bold text-sm transition-colors"
                    >
                      {t.select.toUpperCase()}
                    </button>
                  </div>
                </div>

                {expandedTrain === train.id && (
                  <div className="px-3 pb-3 bg-gray-50 border-t-2 border-gray-200">
                    <div className="pt-2">
                      <p className="text-sm font-bold text-gray-700 mb-2">{t.travelDetails}:</p>
                      <ul className="text-sm space-y-1 text-gray-700">
                        <li>• {t.departureAt}: {ticketData.departure} {t.departure.toLowerCase()} {train.departure}</li>
                        <li>• {t.arrivalAt}: {ticketData.arrival} {t.arrival.toLowerCase()} {train.arrival}</li>
                        <li>• {t.trainTypeLabel}: {train.type}</li>
                        <li>• {t.duration}: {train.duration}</li>
                        <li>• {t.transfers}: {train.transfers === 0 ? t.noTransfer : train.transfers}</li>
                        {train.bicycleAllowed && <li>• {t.bicycleAllowed}</li>}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            ))
          )}
        </div>

        <div className="mt-3">
          <button
            onClick={() => navigateTo('purchase-form')}
            className="w-full bg-red-600 hover:bg-red-700 text-white rounded-xl py-3 font-bold transition-colors"
          >
            {t.back.toUpperCase()}
          </button>
        </div>
      </div>

      {/* Train Types Modal */}
      <TrainTypesModal
        isOpen={showTrainTypesModal}
        onClose={() => setShowTrainTypesModal(false)}
        language={language}
      />
      
      <Footer language={language} largeFontEnabled={largeFontEnabled} toggleLargeFont={toggleLargeFont} adjustedDisplayEnabled={adjustedDisplayEnabled} toggleAdjustedDisplay={toggleAdjustedDisplay} />
    </div>
  );
}