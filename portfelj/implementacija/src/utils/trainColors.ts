// Color-coding system for train types
// Uses accessible colors with good contrast for readability

export const trainTypeColors = {
  // Local/Regional trains - Green
  'LP': { bg: 'bg-green-600', text: 'text-white', hex: '#16a34a' },
  'LPV': { bg: 'bg-green-600', text: 'text-white', hex: '#16a34a' },
  'RG': { bg: 'bg-green-600', text: 'text-white', hex: '#16a34a' },
  
  // InterCity Slovenian - Red
  'ICS': { bg: 'bg-red-600', text: 'text-white', hex: '#dc2626' },
  
  // InterCity - Blue
  'IC': { bg: 'bg-blue-600', text: 'text-white', hex: '#2563eb' },
  
  // EuroCity - Purple
  'EC': { bg: 'bg-purple-600', text: 'text-white', hex: '#9333ea' },
  
  // International - Orange
  'MV': { bg: 'bg-orange-600', text: 'text-white', hex: '#ea580c' },
  
  // Night trains - Navy/Dark Blue
  'EN': { bg: 'bg-indigo-900', text: 'text-white', hex: '#312e81' },
} as const;

export type TrainType = keyof typeof trainTypeColors;

export function getTrainTypeColor(trainType: string) {
  const normalizedType = trainType.toUpperCase() as TrainType;
  return trainTypeColors[normalizedType] || { bg: 'bg-cyan-500', text: 'text-white', hex: '#06b6d4' };
}
