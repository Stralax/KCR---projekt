import { useState, useEffect } from "react";
import { WelcomeScreen } from "./components/WelcomeScreen";
import { TicketPurchaseForm } from "./components/TicketPurchaseForm";
import { QuickPurchase } from "./components/QuickPurchase";
import { StationSelection } from "./components/StationSelection";
import { PassengerSelection } from "./components/PassengerSelection";
import { TrainResults } from "./components/TrainResults";
import { PurchaseSummary } from "./components/PurchaseSummary";
import { TermsAgreement } from "./components/TermsAgreement";
import { PaymentReady } from "./components/PaymentReady";
import { PaymentMethodSelection } from "./components/PaymentMethodSelection";
import { PaymentTypeSelection } from "./components/PaymentTypeSelection";
import { Language } from "./utils/translations";

export type Screen =
  | "welcome"
  | "purchase-form"
  | "quick-purchase"
  | "station-selection"
  | "passenger-selection"
  | "train-results"
  | "purchase-summary"
  | "terms"
  | "payment-ready"
  | "payment-method"
  | "payment-type";

export type StationType = "departure" | "arrival";

export interface Passenger {
  regular: number;
  child6to15: number;
  childUnder6: number;
}

export interface Extras {
  bicycle: number;
  stroller: number;
  pet: number;
}

export interface TicketData {
  date: string;
  departure: string;
  arrival: string;
  passengers: Passenger;
  extras: Extras;
  returnTrip?: boolean;
  selectedTrain?: Train;
}

export interface Train {
  id: string;
  type: string;
  departure: string;
  arrival: string;
  duration: string;
  transfers: number;
  price: number;
  bicycleAllowed?: boolean;
}

function App() {
  const [currentScreen, setCurrentScreen] =
    useState<Screen>("welcome");
  const [previousScreen, setPreviousScreen] =
    useState<Screen>("welcome");
  const [stationSelectionType, setStationSelectionType] =
    useState<StationType>("departure");
  const [language, setLanguage] = useState<Language>("si");
  const [largeFontEnabled, setLargeFontEnabled] = useState(false);
  const [adjustedDisplayEnabled, setAdjustedDisplayEnabled] = useState(false);

  // Get today's date in YYYY-MM-DD format
  const getTodayDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const [ticketData, setTicketData] = useState<TicketData>({
    date: getTodayDate(),
    departure: "Lesce-Bled",
    arrival: "",
    passengers: {
      regular: 1,
      child6to15: 0,
      childUnder6: 0,
    },
    extras: {
      bicycle: 0,
      stroller: 0,
      pet: 0,
    },
    returnTrip: false,
  });

  const navigateTo = (screen: Screen) => {
    setPreviousScreen(currentScreen);
    setCurrentScreen(screen);
  };

  const openStationSelection = (type: StationType) => {
    setPreviousScreen(currentScreen);
    setStationSelectionType(type);
    setCurrentScreen("station-selection");
  };

  const selectStation = (station: string) => {
    if (stationSelectionType === "departure") {
      setTicketData({ ...ticketData, departure: station });
    } else {
      setTicketData({ ...ticketData, arrival: station });
    }
    // Return to the screen we came from
    if (previousScreen === "quick-purchase") {
      setCurrentScreen("quick-purchase");
    } else {
      setCurrentScreen("purchase-form");
    }
  };

  const updatePassengers = (passengers: Passenger) => {
    setTicketData({ ...ticketData, passengers });
  };

  const updateExtras = (extras: Extras) => {
    setTicketData({ ...ticketData, extras });
  };

  const selectTrain = (train: Train) => {
    setTicketData({ ...ticketData, selectedTrain: train });
    setCurrentScreen("purchase-summary");
  };

  const toggleLargeFont = () => {
    setLargeFontEnabled(!largeFontEnabled);
  };

  const toggleAdjustedDisplay = () => {
    setAdjustedDisplayEnabled(!adjustedDisplayEnabled);
  };

  // Apply large font class to html element globally
  useEffect(() => {
    if (largeFontEnabled) {
      document.documentElement.classList.add('large-font');
    } else {
      document.documentElement.classList.remove('large-font');
    }
  }, [largeFontEnabled]);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-[600px] bg-white rounded-lg shadow-xl overflow-hidden relative" style={{ aspectRatio: '40/59', maxHeight: 'calc(100vh - 2rem)' }}>
        {/* White rectangle overlay for adjusted display mode - top 40% */}
        {adjustedDisplayEnabled && (
          <div className="absolute top-0 left-0 right-0 h-[40%] bg-white z-50 pointer-events-none transition-all duration-300" />
        )}
        
        {/* Main content wrapper with transition */}
        <div 
          className="h-full transition-transform duration-300"
          style={{
            transform: adjustedDisplayEnabled ? 'translateY(40%)' : 'translateY(0)',
          }}
        >
          <div className={adjustedDisplayEnabled ? "h-[60%] overflow-y-auto" : "h-full"}>
            {currentScreen === "welcome" && (
              <WelcomeScreen
                navigateTo={navigateTo}
                setTicketData={setTicketData}
                language={language}
                setLanguage={setLanguage}
                largeFontEnabled={largeFontEnabled}
                toggleLargeFont={toggleLargeFont}
                adjustedDisplayEnabled={adjustedDisplayEnabled}
                toggleAdjustedDisplay={toggleAdjustedDisplay}
              />
            )}
            {currentScreen === "purchase-form" && (
              <TicketPurchaseForm
                ticketData={ticketData}
                setTicketData={setTicketData}
                navigateTo={navigateTo}
                openStationSelection={openStationSelection}
                language={language}
                setLanguage={setLanguage}
                largeFontEnabled={largeFontEnabled}
                toggleLargeFont={toggleLargeFont}
                adjustedDisplayEnabled={adjustedDisplayEnabled}
                toggleAdjustedDisplay={toggleAdjustedDisplay}
              />
            )}
            {currentScreen === "quick-purchase" && (
              <QuickPurchase
                ticketData={ticketData}
                setTicketData={setTicketData}
                navigateTo={navigateTo}
                openStationSelection={openStationSelection}
                language={language}
                setLanguage={setLanguage}
                largeFontEnabled={largeFontEnabled}
                toggleLargeFont={toggleLargeFont}
                adjustedDisplayEnabled={adjustedDisplayEnabled}
                toggleAdjustedDisplay={toggleAdjustedDisplay}
              />
            )}
            {currentScreen === "station-selection" && (
              <StationSelection
                selectStation={selectStation}
                navigateTo={navigateTo}
                language={language}
                setLanguage={setLanguage}
                largeFontEnabled={largeFontEnabled}
                toggleLargeFont={toggleLargeFont}
                adjustedDisplayEnabled={adjustedDisplayEnabled}
                toggleAdjustedDisplay={toggleAdjustedDisplay}
              />
            )}
            {currentScreen === "passenger-selection" && (
              <PassengerSelection
                passengers={ticketData.passengers}
                extras={ticketData.extras}
                updatePassengers={updatePassengers}
                updateExtras={updateExtras}
                navigateTo={navigateTo}
                language={language}
                setLanguage={setLanguage}
                largeFontEnabled={largeFontEnabled}
                toggleLargeFont={toggleLargeFont}
                adjustedDisplayEnabled={adjustedDisplayEnabled}
                toggleAdjustedDisplay={toggleAdjustedDisplay}
              />
            )}
            {currentScreen === "train-results" && (
              <TrainResults
                ticketData={ticketData}
                selectTrain={selectTrain}
                navigateTo={navigateTo}
                language={language}
                setLanguage={setLanguage}
                largeFontEnabled={largeFontEnabled}
                toggleLargeFont={toggleLargeFont}
                adjustedDisplayEnabled={adjustedDisplayEnabled}
                toggleAdjustedDisplay={toggleAdjustedDisplay}
              />
            )}
            {currentScreen === "purchase-summary" && (
              <PurchaseSummary
                ticketData={ticketData}
                navigateTo={navigateTo}
                language={language}
                setLanguage={setLanguage}
                largeFontEnabled={largeFontEnabled}
                toggleLargeFont={toggleLargeFont}
                adjustedDisplayEnabled={adjustedDisplayEnabled}
                toggleAdjustedDisplay={toggleAdjustedDisplay}
              />
            )}
            {currentScreen === "terms" && (
              <TermsAgreement
                navigateTo={navigateTo}
                language={language}
                setLanguage={setLanguage}
                largeFontEnabled={largeFontEnabled}
                toggleLargeFont={toggleLargeFont}
                adjustedDisplayEnabled={adjustedDisplayEnabled}
                toggleAdjustedDisplay={toggleAdjustedDisplay}
              />
            )}
            {currentScreen === "payment-ready" && (
              <PaymentReady
                navigateTo={navigateTo}
                language={language}
                setLanguage={setLanguage}
                largeFontEnabled={largeFontEnabled}
                toggleLargeFont={toggleLargeFont}
                adjustedDisplayEnabled={adjustedDisplayEnabled}
                toggleAdjustedDisplay={toggleAdjustedDisplay}
              />
            )}
            {currentScreen === "payment-method" && (
              <PaymentMethodSelection
                navigateTo={navigateTo}
                language={language}
                setLanguage={setLanguage}
                largeFontEnabled={largeFontEnabled}
                toggleLargeFont={toggleLargeFont}
                adjustedDisplayEnabled={adjustedDisplayEnabled}
                toggleAdjustedDisplay={toggleAdjustedDisplay}
              />
            )}
            {currentScreen === "payment-type" && (
              <PaymentTypeSelection
                navigateTo={navigateTo}
                language={language}
                setLanguage={setLanguage}
                largeFontEnabled={largeFontEnabled}
                toggleLargeFont={toggleLargeFont}
                adjustedDisplayEnabled={adjustedDisplayEnabled}
                toggleAdjustedDisplay={toggleAdjustedDisplay}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;