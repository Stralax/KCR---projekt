import { useState, useEffect } from 'react';
import { Language, translations } from '../utils/translations';
import szLogo from 'figma:asset/b47d71bea069c150d830536f3a83f10c2831c189.png';

interface HeaderProps {
  language: Language;
  setLanguage: (lang: Language) => void;
}

export function Header({ language, setLanguage }: HeaderProps) {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const languages = [
    { code: 'si', flag: '🇸🇮', name: 'Slovenščina' },
    { code: 'en', flag: '🇬🇧', name: 'English' },
    { code: 'it', flag: '🇮🇹', name: 'Italiano' },
    { code: 'de', flag: '🇩🇪', name: 'Deutsch' },
  ];

  const formatTime = () => {
    return currentTime.toLocaleTimeString('sl-SI', { hour: '2-digit', minute: '2-digit' });
  };

  const formatDate = () => {
    const days = translations[language].days;
    const day = days[currentTime.getDay()];
    const date = currentTime.toLocaleDateString('sl-SI', { day: '2-digit', month: '2-digit', year: 'numeric' });
    return `${day} ${date}`;
  };

  const t = translations[language];

  return (
    <div className="bg-white border-b-2 border-gray-200">
      <div className="flex items-center justify-between p-3">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src={szLogo} alt="SŽ Logo" className="h-8" />
          <h1 className="text-lg font-bold">Slovenske Železnice</h1>
        </div>

        {/* Time and Date */}
        <div className="text-right">
          <div className="font-bold text-base">{formatTime()}</div>
          <div className="text-xs">{formatDate()}</div>
        </div>
      </div>

      {/* Language Selector */}
      <div className="flex justify-end gap-2 px-3 pb-2">
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => setLanguage(lang.code as Language)}
            className={`w-10 h-10 rounded-full text-xl transition-all ${
              language === lang.code
                ? 'ring-4 ring-cyan-400 scale-110'
                : 'opacity-70 hover:opacity-100'
            }`}
            title={lang.name}
          >
            {lang.flag}
          </button>
        ))}
      </div>
    </div>
  );
}