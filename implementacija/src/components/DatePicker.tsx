import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Header } from './Header';
import { Footer } from './Footer';
import { Language, translations } from '../utils/translations';

interface DatePickerProps {
  selectedDate: string;
  onSelect: (date: string) => void;
  onClose: () => void;
  language: Language;
  setLanguage: (lang: Language) => void;
  largeFontEnabled: boolean;
  toggleLargeFont: () => void;
}

export function DatePicker({ selectedDate, onSelect, onClose, language, setLanguage, largeFontEnabled, toggleLargeFont }: DatePickerProps) {
  const [currentDate, setCurrentDate] = useState(() => {
    return selectedDate ? new Date(selectedDate) : new Date();
  });

  const t = translations[language];
  const monthNames = t.months;
  const dayNames = ['P', 'T', 'S', 'Č', 'P', 'S', 'N'];

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = (firstDay.getDay() + 6) % 7; // Adjust to Monday = 0

    const days: (number | null)[] = [];

    // Add previous month's days
    const prevMonthLastDay = new Date(year, month, 0).getDate();
    for (let i = startingDayOfWeek - 1; i >= 0; i--) {
      days.push(-(prevMonthLastDay - i));
    }

    // Add current month's days
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(i);
    }

    // Add next month's days to complete the grid
    const remainingDays = 7 - (days.length % 7);
    if (remainingDays < 7) {
      for (let i = 1; i <= remainingDays; i++) {
        days.push(-(100 + i));
      }
    }

    return days;
  };

  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const handleDateClick = (day: number) => {
    if (day < 0) return; // Don't select previous/next month days

    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    // Format date manually to avoid timezone issues
    const dateString = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    onSelect(dateString);
    onClose();
  };

  const days = getDaysInMonth(currentDate);
  const monthYear = `${monthNames[currentDate.getMonth()]} ${currentDate.getFullYear()}`;

  return (
    <div className="absolute inset-0 bg-white z-50 flex flex-col">
      <Header language={language} setLanguage={setLanguage} />
      
      <h2 className="text-2xl font-bold text-gray-900 text-center py-5 border-b-2 border-gray-300">
        {t.selectDate}
      </h2>

      <div className="flex-1 flex flex-col overflow-y-auto px-6 py-4">
        <div className="flex-1 flex items-center justify-center">
          <div className="w-full max-w-xl bg-white border-4 border-cyan-500 rounded-2xl p-5">
            {/* Month/Year Header with Navigation */}
            <div className="flex items-center justify-between mb-4">
              <button
                onClick={handlePrevMonth}
                className="p-1 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <ChevronLeft size={28} />
              </button>
              <h3 className="text-xl font-bold">{monthYear}</h3>
              <button
                onClick={handleNextMonth}
                className="p-1 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <ChevronRight size={28} />
              </button>
            </div>

            {/* Day Headers */}
            <div className="grid grid-cols-7 gap-1.5 mb-3">
              {dayNames.map((day, index) => (
                <div
                  key={index}
                  className="h-10 flex items-center justify-center font-bold text-base border-2 border-gray-800 rounded-lg bg-white"
                >
                  {day}
                </div>
              ))}
            </div>

            {/* Calendar Grid */}
            <div className="grid grid-cols-7 gap-1.5">
              {days.map((day, index) => {
                const isOtherMonth = day !== null && day < 0;
                const displayDay = day !== null ? (day < 0 ? Math.abs(day) % 100 : day) : '';
                const isToday =
                  day !== null &&
                  day > 0 &&
                  new Date().getDate() === day &&
                  new Date().getMonth() === currentDate.getMonth() &&
                  new Date().getFullYear() === currentDate.getFullYear();

                return (
                  <button
                    key={index}
                    onClick={() => day !== null && day > 0 && handleDateClick(day)}
                    disabled={isOtherMonth || day === null}
                    className={`h-10 flex items-center justify-center text-lg font-medium rounded-lg transition-all ${
                      isOtherMonth
                        ? 'bg-gray-300 text-gray-600 cursor-not-allowed'
                        : day === null
                        ? 'invisible'
                        : isToday
                        ? 'bg-cyan-500 text-white font-bold hover:bg-cyan-600'
                        : 'bg-white hover:bg-cyan-100 hover:border-cyan-500 border-2 border-transparent'
                    }`}
                  >
                    {displayDay}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <Footer language={language} largeFontEnabled={largeFontEnabled} toggleLargeFont={toggleLargeFont} />
    </div>
  );
}