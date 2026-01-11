import { QrCode, CheckCircle2, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Screen, TicketData } from '../App';
import { Language, translations } from '../utils/translations';

interface QRScannerModalProps {
  isOpen: boolean;
  onClose: () => void;
  navigateTo: (screen: Screen) => void;
  setTicketData: (data: TicketData) => void;
  language: Language;
}

export function QRScannerModal({ isOpen, onClose, navigateTo, setTicketData, language }: QRScannerModalProps) {
  const [scanStatus, setScanStatus] = useState<'scanning' | 'success'>('scanning');
  const t = translations[language];

  useEffect(() => {
    if (isOpen) {
      setScanStatus('scanning');
      
      // Simulate QR code scan after 2 seconds
      const timer = setTimeout(() => {
        setScanStatus('success');
        
        // Set mock ticket data as if it came from the QR code
        const mockTicketData: TicketData = {
          date: new Date().toISOString().split('T')[0],
          departure: 'Ljubljana',
          arrival: 'Maribor',
          passengers: {
            regular: 1,
            child6to15: 0,
            childUnder6: 0
          },
          extras: {
            bicycle: 0,
            stroller: 0,
            pet: 0
          },
          selectedTrain: {
            id: '1',
            departure: '08:30',
            arrival: '10:45',
            duration: '2h 15min',
            type: 'IC',
            transfers: 0,
            price: 12.50
          }
        };
        
        setTicketData(mockTicketData);
        
        // Navigate to purchase summary after showing success
        setTimeout(() => {
          navigateTo('purchase-summary');
          onClose();
        }, 1500);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [isOpen, navigateTo, onClose, setTicketData, language]);

  if (!isOpen) return null;

  return (
    <div className="absolute inset-0 bg-gray-50 flex flex-col z-50">
      <div className="flex-1 flex flex-col items-center justify-center p-6">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-12 h-12 rounded-full bg-red-600 hover:bg-red-700 text-white flex items-center justify-center transition-colors"
        >
          <X size={24} />
        </button>

        {scanStatus === 'scanning' ? (
          <>
            <div className="mb-8 text-cyan-500 animate-pulse">
              <QrCode size={120} strokeWidth={1.5} />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">
              {t.scanQRCode}
            </h2>
            <p className="text-lg text-gray-600 text-center max-w-md">
              {t.holdQRCode}
            </p>
            <div className="mt-8 flex gap-2">
              <div className="w-3 h-3 bg-cyan-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
              <div className="w-3 h-3 bg-cyan-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
              <div className="w-3 h-3 bg-cyan-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
            </div>
          </>
        ) : (
          <>
            <div className="mb-8 text-green-600">
              <CheckCircle2 size={120} strokeWidth={1.5} />
            </div>
            <h2 className="text-2xl font-bold text-green-600 mb-4 text-center">
              {t.qrCodeScanned}
            </h2>
            <p className="text-lg text-gray-600 text-center max-w-md">
              {t.dataReceived}
            </p>
          </>
        )}
      </div>
    </div>
  );
}