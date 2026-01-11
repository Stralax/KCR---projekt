export type Language = 'si' | 'en' | 'it' | 'de';

export const translations = {
  si: {
    // Header
    companyName: 'Slovenske Železnice',
    days: ['Nedelja', 'Ponedeljek', 'Torek', 'Sreda', 'Četrtek', 'Petek', 'Sobota'],
    months: ['Januar', 'Februar', 'Marec', 'April', 'Maj', 'Junij', 'Julij', 'Avgust', 'September', 'Oktober', 'November', 'December'],
    
    // Footer
    audioFeedback: 'Zvočni odziv',
    adjustDisplay: 'Prilagodi prikaz',
    increaseFont: 'Povečaj pisavo',
    
    // Welcome Screen
    welcomeTitle: 'IZBERITE NAČIN NAKUPA',
    purchaseTicket: 'Nakup vozovnice',
    quickPurchase: 'Hitri nakup',
    scanQR: 'Skeniraj QR kodo',
    
    // Quick Purchase
    quickPurchaseTitle: 'HITRI NAKUP VOZOVNICE',
    travelDate: 'Datum potovanja',
    entryStation: 'Vstopna postaja',
    exitStation: 'Izstopna postaja',
    confirmSelection: 'POTRDI IZBIRO',
    without: 'Brez',
    adult: 'odrasel',
    adults: 'odrasli',
    adultsPlural: 'odraslih',
    
    // Ticket Purchase Form
    purchaseTitle: 'NAKUP VOZOVNICE',
    date: 'Datum',
    from: 'Od',
    to: 'Do',
    passengers: 'Potniki',
    returnTrip: 'Povratna vozovnica',
    back: 'Nazaj',
    continue: 'Naprej',
    selectDate: 'Izberite datum',
    departureStation: 'Vstopna postaja',
    arrivalStation: 'Izstopna postaja',
    extras: 'Dodatki',
    returnLabel: 'Povratna',
    yes: 'DA',
    no: 'NE',
    selectButton: 'IZBERI',
    selectPassengersAndExtras: 'IZBERI POTNIKE IN DODATKE',
    searchTrains: 'IŠČI VLAKE',
    
    // Station Selection
    selectStation: 'IZBERI POSTAJO',
    search: 'Iskanje postaje',
    frequentStations: 'Pogoste postaje',
    allStations: 'Vse postaje',
    
    // Passenger Selection
    selectPassengers: 'IZBERI POTNIKE',
    regularPassenger: 'Redni potnik',
    child6to15: 'Otrok 6-15 let',
    childUnder6: 'Otrok do 6 let',
    bicycle: 'Kolo',
    stroller: 'Voziček',
    pet: 'Hišni ljubljenček',
    bicycleAllowed: 'Prevoz koles dovoljen',
    
    // Train Results
    trainResults: 'IZBERITE VOZOVNICO',
    trainType: 'Tip vlaka',
    departure: 'Odhod',
    arrival: 'Prihod',
    duration: 'Trajanje',
    transfers: 'Prestopi',
    price: 'Cena',
    select: 'Izberi',
    noTransfers: 'Brez prestopov',
    transfer: 'prestop',
    selectTicket: 'Izberite vozovnico',
    class1: '1. razred',
    class2: '2. razred',
    allTrains: 'Vsi vlaki',
    noTrainsFound: 'Ni vlakov, ki ustrezajo izbranim filtrom',
    
    // Train Types Modal
    trainTypesTitle: 'Vrste vlakov:',
    trainTypeLPDesc: 'Vlaki, ki povezujejo slovenske kraje na krajših in daljših relacijah.',
    trainTypeICDesc: 'Vlaki, ki vozijo na daljših relacijah.',
    trainTypeECDesc: 'Vlaki, ki vozijo v mednarodnem prometu po glavnih progah ter povezujejo pomembna središča v Sloveniji in Evropi.',
    trainTypeMVDesc: 'Vlaki, ki vozijo tudi v mednarodnem prometu in povezujejo bližnje destinacije v tujini.',
    trainTypeENDesc: 'Nočni mednarodni vlaki (vključujejo tudi vagone spalnike in ležalnike).',
    trainTypeSurcharge: '* potrebno plačilo dodatka za vlak višje vrste',
    
    // Purchase Summary
    summaryTitle: 'POVZETEK NAKUPA',
    route: 'Relacija',
    tripDate: 'Datum potovanja',
    train: 'Vlak',
    passengerCount: 'Število potnikov',
    passengerType: 'Tip potnika',
    regular: 'Redni',
    child615: 'Otrok 6-15',
    childU6: 'Otrok <6',
    total: 'Skupaj',
    free: 'Brezplačno',
    confirm: 'Potrdi',
    regularPrice: 'Redna cena',
    class2nd: '2. razred',
    costBreakdown: 'Strošek',
    addons: 'DODATKI',
    totalWithTax: 'Skupaj z DDV',
    buy: 'KUPI',
    
    // Terms Agreement
    termsTitle: 'SPLOŠNI POGOJI',
    termsTextPrefix: 'Sprejemam ',
    termsLink: 'splošne pogoje in pravilnik o zasebnosti Slovenske železnice d.o.o.',
    acceptTerms: 'Sprejemam pogoje',
    
    // Payment Screens
    paymentReady: 'PRIPRAVLJENO ZA PLAČILO',
    insertPayment: 'Prosimo, vstavite plačilno sredstvo',
    paymentProcessing: 'Obdelava plačila',
    insertCash: 'Prosimo, vstavite gotovino',
    followPOSInstructions: 'Prosimo, sledite navodilom na POS terminalu',
    selectPaymentMethod: 'IZBERI NAČIN PLAČILA',
    cardPayment: 'Plačilo s kartico',
    mobilePayment: 'Mobilno plačilo',
    selectPaymentType: 'IZBERI TIP PLAČILA',
    creditCard: 'Kreditna kartica',
    cash: 'Gotovina',
    
    // QR Scanner
    scanQRTitle: 'SKENIRAJ QR KODO',
    scanInstruction: 'Poravnajte QR kodo znotraj okvirja',
    scanQRCode: 'SKENIRAJ QR KODO',
    holdQRCode: 'Poravnajte QR kodo znotraj okvirja',
    qrCodeScanned: 'QR KODA USPEŠNO SKENIRANA!',
    dataReceived: 'Podatki so bili uspešno prejeti',
    
    // General
    cancel: 'Prekliči',
    close: 'Zapri',
    space: 'PRESLEDEK',
  },
  en: {
    // Header
    companyName: 'Slovenian Railways',
    days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    
    // Footer
    audioFeedback: 'Audio feedback',
    adjustDisplay: 'Adjust display',
    increaseFont: 'Increase font',
    
    // Welcome Screen
    welcomeTitle: 'SELECT PURCHASE METHOD',
    purchaseTicket: 'Purchase ticket',
    quickPurchase: 'Quick purchase',
    scanQR: 'Scan QR code',
    
    // Quick Purchase
    quickPurchaseTitle: 'QUICK TICKET PURCHASE',
    travelDate: 'Travel date',
    entryStation: 'Entry station',
    exitStation: 'Exit station',
    confirmSelection: 'CONFIRM SELECTION',
    without: 'Without',
    adult: 'adult',
    adults: 'adults',
    adultsPlural: 'adults',
    
    // Ticket Purchase Form
    purchaseTitle: 'PURCHASE TICKET',
    date: 'Date',
    from: 'From',
    to: 'To',
    passengers: 'Passengers',
    returnTrip: 'Return ticket',
    back: 'Back',
    continue: 'Continue',
    selectDate: 'Select date',
    departureStation: 'Departure station',
    arrivalStation: 'Arrival station',
    extras: 'Extras',
    returnLabel: 'Return',
    yes: 'YES',
    no: 'NO',
    selectButton: 'SELECT',
    selectPassengersAndExtras: 'SELECT PASSENGERS AND EXTRAS',
    searchTrains: 'SEARCH TRAINS',
    
    // Station Selection
    selectStation: 'SELECT STATION',
    search: 'Search station',
    frequentStations: 'Frequent stations',
    allStations: 'All stations',
    
    // Passenger Selection
    selectPassengers: 'SELECT PASSENGERS',
    regularPassenger: 'Regular passenger',
    child6to15: 'Child 6-15 years',
    childUnder6: 'Child under 6',
    bicycle: 'Bicycle',
    stroller: 'Stroller',
    pet: 'Pet',
    bicycleAllowed: 'Bicycle transport allowed',
    
    // Train Results
    trainResults: 'SELECT TICKET',
    trainType: 'Train type',
    departure: 'Departure',
    arrival: 'Arrival',
    duration: 'Duration',
    transfers: 'Transfers',
    price: 'Price',
    select: 'Select',
    noTransfers: 'No transfers',
    transfer: 'transfer',
    selectTicket: 'Select ticket',
    class1: '1st class',
    class2: '2nd class',
    allTrains: 'All trains',
    noTrainsFound: 'No trains found matching the selected filters',
    
    // Train Types Modal
    trainTypesTitle: 'Train types:',
    trainTypeLPDesc: 'Trains connecting Slovenian towns on short and long routes.',
    trainTypeICDesc: 'Trains running on long routes.',
    trainTypeECDesc: 'Trains running in international traffic on main lines and connecting important hubs in Slovenia and Europe.',
    trainTypeMVDesc: 'Trains also running in international traffic and connecting nearby destinations abroad.',
    trainTypeENDesc: 'night international trains (including sleeping and couchette cars).',
    trainTypeSurcharge: '* additional charge for higher class train',
    
    // Purchase Summary
    summaryTitle: 'PURCHASE SUMMARY',
    route: 'Route',
    tripDate: 'Travel date',
    train: 'Train',
    passengerCount: 'Number of passengers',
    passengerType: 'Passenger type',
    regular: 'Regular',
    child615: 'Child 6-15',
    childU6: 'Child <6',
    total: 'Total',
    free: 'Free',
    confirm: 'Confirm',
    regularPrice: 'Regular price',
    class2nd: '2nd class',
    costBreakdown: 'Cost breakdown',
    addons: 'ADD-ONS',
    totalWithTax: 'Total with tax',
    buy: 'BUY',
    
    // Terms Agreement
    termsTitle: 'TERMS AND CONDITIONS',
    termsTextPrefix: 'I accept the ',
    termsLink: 'general terms and conditions for purchasing Slovenian Railways tickets.',
    acceptTerms: 'I accept the terms',
    
    // Payment Screens
    paymentReady: 'READY FOR PAYMENT',
    insertPayment: 'Please insert payment method',
    paymentProcessing: 'Processing payment',
    insertCash: 'Please insert cash',
    followPOSInstructions: 'Please follow the instructions on the POS terminal',
    selectPaymentMethod: 'SELECT PAYMENT METHOD',
    cardPayment: 'Card payment',
    mobilePayment: 'Mobile payment',
    selectPaymentType: 'SELECT PAYMENT TYPE',
    creditCard: 'Credit card',
    cash: 'Cash',
    
    // QR Scanner
    scanQRTitle: 'SCAN QR CODE',
    scanInstruction: 'Align the QR code within the frame',
    scanQRCode: 'SCAN QR CODE',
    holdQRCode: 'Align the QR code within the frame',
    qrCodeScanned: 'QR CODE SUCCESSFULLY SCANNED!',
    dataReceived: 'Data successfully received',
    
    // General
    cancel: 'Cancel',
    close: 'Close',
    space: 'SPACE',
  },
  it: {
    // Header
    companyName: 'Ferrovie Slovene',
    days: ['Domenica', 'Lunedì', 'Martedì', 'Mercoledì', 'Giovedì', 'Venerdì', 'Sabato'],
    months: ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'],
    
    // Footer
    audioFeedback: 'Risposta audio',
    adjustDisplay: 'Regola schermo',
    increaseFont: 'Aumenta carattere',
    
    // Welcome Screen
    welcomeTitle: 'SELEZIONA METODO DI ACQUISTO',
    purchaseTicket: 'Acquista biglietto',
    quickPurchase: 'Acquisto rapido',
    scanQR: 'Scansiona QR',
    
    // Quick Purchase
    quickPurchaseTitle: 'ACQUISTO RAPIDO DEL BIGLIETTO',
    travelDate: 'Data di viaggio',
    entryStation: 'Stazione di ingresso',
    exitStation: 'Stazione di uscita',
    confirmSelection: 'CONFERMA SELEZIONE',
    without: 'Senza',
    adult: 'adulto',
    adults: 'adulti',
    adultsPlural: 'adulti',
    
    // Ticket Purchase Form
    purchaseTitle: 'ACQUISTA BIGLIETTO',
    date: 'Data',
    from: 'Da',
    to: 'A',
    passengers: 'Passeggeri',
    returnTrip: 'Biglietto di ritorno',
    back: 'Indietro',
    continue: 'Continua',
    selectDate: 'Seleziona data',
    departureStation: 'Stazione di partenza',
    arrivalStation: 'Stazione di arrivo',
    extras: 'Extra',
    returnLabel: 'Ritorno',
    yes: 'SÌ',
    no: 'NO',
    selectButton: 'SELEZIONA',
    selectPassengersAndExtras: 'SELEZIONA PASSEGGERI E EXTRA',
    searchTrains: 'CERCA TRENI',
    
    // Station Selection
    selectStation: 'SELEZIONA STAZIONE',
    search: 'Cerca stazione',
    frequentStations: 'Stazioni frequenti',
    allStations: 'Tutte le stazioni',
    
    // Passenger Selection
    selectPassengers: 'SELEZIONA PASSEGGERI',
    regularPassenger: 'Passeggero regolare',
    child6to15: 'Bambino 6-15 anni',
    childUnder6: 'Bambino sotto 6',
    bicycle: 'Bicicletta',
    stroller: 'Passeggino',
    pet: 'Animale domestico',
    bicycleAllowed: 'Trasporto bicicletta consentito',
    
    // Train Results
    trainResults: 'SELEZIONA BIGLIETTO',
    trainType: 'Tipo di treno',
    departure: 'Partenza',
    arrival: 'Arrivo',
    duration: 'Durata',
    transfers: 'Cambi',
    price: 'Prezzo',
    select: 'Seleziona',
    noTransfers: 'Senza cambi',
    transfer: 'cambio',
    selectTicket: 'Seleziona biglietto',
    class1: '1ª classe',
    class2: '2ª classe',
    allTrains: 'Tutti i treni',
    noTrainsFound: 'Nessun treno trovato che corrisponda ai filtri selezionati',
    
    // Train Types Modal
    trainTypesTitle: 'Tipi di treno:',
    trainTypeLPDesc: 'Treni che collegano i paesi sloveni su rotte brevi e lunghe.',
    trainTypeICDesc: 'Treni che viaggiano su rotte lunghe.',
    trainTypeECDesc: 'Treni che viaggiano nel traffico internazionale su linee principali e collegano importanti centri in Slovenia e Europa.',
    trainTypeMVDesc: 'Treni che viaggiano anche nel traffico internazionale e collegano destinazioni vicine all\'estero.',
    trainTypeENDesc: 'Treni internazionali notturni (inclusi vagoni letti e lettini).',
    trainTypeSurcharge: '* addebito aggiuntivo per treno di classe superiore',
    
    // Purchase Summary
    summaryTitle: 'RIEPILOGO ACQUISTO',
    route: 'Percorso',
    tripDate: 'Data di viaggio',
    train: 'Treno',
    passengerCount: 'Numero di passeggeri',
    passengerType: 'Tipo passeggero',
    regular: 'Regolare',
    child615: 'Bambino 6-15',
    childU6: 'Bambino <6',
    total: 'Totale',
    free: 'Gratuito',
    confirm: 'Conferma',
    regularPrice: 'Prezzo regolare',
    class2nd: '2ª classe',
    costBreakdown: 'Costo',
    addons: 'ADD-ONS',
    totalWithTax: 'Totale con tasse',
    buy: 'ACQUISTA',
    
    // Terms Agreement
    termsTitle: 'TERMINI E CONDIZIONI',
    termsTextPrefix: 'Accetto i ',
    termsLink: 'termini e le condizioni generali per l\'acquisto di biglietti delle Ferrovie Slovene.',
    acceptTerms: 'Accetto i termini',
    
    // Payment Screens
    paymentReady: 'PRONTO PER IL PAGAMENTO',
    insertPayment: 'Si prega di inserire il metodo di pagamento',
    paymentProcessing: 'Elaborazione pagamento',
    insertCash: 'Si prega di inserire i contanti',
    followPOSInstructions: 'Si prega di seguire le istruzioni sul terminale POS',
    selectPaymentMethod: 'SELEZIONA METODO DI PAGAMENTO',
    cardPayment: 'Pagamento con carta',
    mobilePayment: 'Pagamento mobile',
    selectPaymentType: 'SELEZIONA TIPO DI PAGAMENTO',
    creditCard: 'Carta di credito',
    cash: 'Contanti',
    
    // QR Scanner
    scanQRTitle: 'SCANSIONA CODICE QR',
    scanInstruction: 'Allinea il codice QR all\'interno della cornice',
    scanQRCode: 'SCANSIONA CODICE QR',
    holdQRCode: 'Allinea il codice QR all\'interno della cornice',
    qrCodeScanned: 'CODICE QR SCANSIONATO CON SUCCESSO!',
    dataReceived: 'Dati ricevuti con successo',
    
    // General
    cancel: 'Annulla',
    close: 'Chiudi',
    space: 'SPAZIO',
  },
  de: {
    // Header
    companyName: 'Slowenische Eisenbahnen',
    days: ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'],
    months: ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'],
    
    // Footer
    audioFeedback: 'Audio-Feedback',
    adjustDisplay: 'Anzeige anpassen',
    increaseFont: 'Schrift vergrößern',
    
    // Welcome Screen
    welcomeTitle: 'KAUFMETHODE WÄHLEN',
    purchaseTicket: 'Fahrkarte kaufen',
    quickPurchase: 'Schnellkauf',
    scanQR: 'QR-Code scannen',
    
    // Quick Purchase
    quickPurchaseTitle: 'SCHNELLKAUF DER FAHRKARTE',
    travelDate: 'Reisedatum',
    entryStation: 'Einstationsplatz',
    exitStation: 'Ausstationsplatz',
    confirmSelection: 'WÄHLUNG BESTÄTIGEN',
    without: 'Ohne',
    adult: 'Erwachsener',
    adults: 'Erwachsene',
    adultsPlural: 'Erwachsene',
    
    // Ticket Purchase Form
    purchaseTitle: 'FAHRKARTE KAUFEN',
    date: 'Datum',
    from: 'Von',
    to: 'Nach',
    passengers: 'Fahrgäste',
    returnTrip: 'Rückfahrkarte',
    back: 'Zurück',
    continue: 'Weiter',
    selectDate: 'Datum auswählen',
    departureStation: 'Abfahrtsstation',
    arrivalStation: 'Ankunftsstation',
    extras: 'Extras',
    returnLabel: 'Rückfahrt',
    yes: 'JA',
    no: 'NEIN',
    selectButton: 'WÄHLEN',
    selectPassengersAndExtras: 'FAHRGÄSTE UND EXTRAS WÄHLEN',
    searchTrains: 'ZÜGE SUCHEN',
    
    // Station Selection
    selectStation: 'STATION WÄHLEN',
    search: 'Station suchen',
    frequentStations: 'Häufige Stationen',
    allStations: 'Alle Stationen',
    
    // Passenger Selection
    selectPassengers: 'FAHRGÄSTE WÄHLEN',
    regularPassenger: 'Regulärer Fahrgast',
    child6to15: 'Kind 6-15 Jahre',
    childUnder6: 'Kind unter 6',
    bicycle: 'Fahrrad',
    stroller: 'Kinderwagen',
    pet: 'Haustier',
    bicycleAllowed: 'Fahrradtransport erlaubt',
    
    // Train Results
    trainResults: 'FAHRKARTE WÄHLEN',
    trainType: 'Zugtyp',
    departure: 'Abfahrt',
    arrival: 'Ankunft',
    duration: 'Dauer',
    transfers: 'Umstiege',
    price: 'Preis',
    select: 'Wählen',
    noTransfers: 'Ohne Umstieg',
    transfer: 'Umstieg',
    selectTicket: 'Fahrkarte wählen',
    class1: '1. Klasse',
    class2: '2. Klasse',
    allTrains: 'Alle Züge',
    noTrainsFound: 'Keine Züge gefunden, die den ausgewählten Filtern entsprechen',
    
    // Train Types Modal
    trainTypesTitle: 'Zugarten:',
    trainTypeLPDesc: 'Züge, die slowenische Orte auf kurzen und langen Strecken verbinden.',
    trainTypeICDesc: 'Züge, die auf langen Strecken fahren.',
    trainTypeECDesc: 'Züge, die im internationalen Verkehr auf Hauptlinien fahren und wichtige Knotenpunkte in Slowenien und Europa verbinden.',
    trainTypeMVDesc: 'Züge, die auch im internationalen Verkehr fahren und nahegelegene Ziele im Ausland verbinden.',
    trainTypeENDesc: 'Nächtliche internationale Züge (einschließlich Schlaf- und Couchette-Wagen).',
    trainTypeSurcharge: '* zusätzliche Gebühr für höhere Klasse-Zug',
    
    // Purchase Summary
    summaryTitle: 'KAUFZUSAMMENFASSUNG',
    route: 'Strecke',
    tripDate: 'Reisedatum',
    train: 'Zug',
    passengerCount: 'Anzahl Fahrgäste',
    passengerType: 'Fahrgasttyp',
    regular: 'Regulär',
    child615: 'Kind 6-15',
    childU6: 'Kind <6',
    total: 'Gesamt',
    free: 'Kostenlos',
    confirm: 'Bestätigen',
    regularPrice: 'Regulärer Preis',
    class2nd: '2. Klasse',
    costBreakdown: 'Kosten',
    addons: 'ZUSÄTZLICH',
    totalWithTax: 'Gesamt mit Steuern',
    buy: 'KAUFEN',
    
    // Terms Agreement
    termsTitle: 'ALLGEMEINE GESCHÄFTSBEDINGUNGEN',
    termsTextPrefix: 'Ich akzeptiere die ',
    termsLink: 'allgemeinen Geschäftsbedingungen für den Kauf von Fahrkarten der Slowenischen Eisenbahnen.',
    acceptTerms: 'Ich akzeptiere die Bedingungen',
    
    // Payment Screens
    paymentReady: 'BEREIT FÜR ZAHLUNG',
    insertPayment: 'Bitte Zahlungsmittel einfügen',
    paymentProcessing: 'Zahlung wird verarbeitet',
    insertCash: 'Bitte Bargeld einfügen',
    followPOSInstructions: 'Bitte folgen Sie den Anweisungen am POS-Terminal',
    selectPaymentMethod: 'ZAHLUNGSMETHODE WÄHLEN',
    cardPayment: 'Kartenzahlung',
    mobilePayment: 'Mobile Zahlung',
    selectPaymentType: 'ZAHLUNGSART WÄHLEN',
    creditCard: 'Kreditkarte',
    cash: 'Bargeld',
    
    // QR Scanner
    scanQRTitle: 'QR-CODE SCANNEN',
    scanInstruction: 'QR-Code im Rahmen ausrichten',
    scanQRCode: 'QR-CODE SCANNEN',
    holdQRCode: 'QR-Code im Rahmen ausrichten',
    qrCodeScanned: 'QR-CODE ERFOLGREICH GESCANNT!',
    dataReceived: 'Daten erfolgreich empfangen',
    
    // General
    cancel: 'Abbrechen',
    close: 'Schließen',
    space: 'LEERZEICHEN',
  },
};