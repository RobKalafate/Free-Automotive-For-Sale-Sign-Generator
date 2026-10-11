import { CarSignData } from '../types';

export const INITIAL_COUGAR_DATA: CarSignData = {
  year: '1967',
  make: 'MERCURY',
  model: 'COUGAR',
  trim: 'XR-7',
  subheadline: 'RARE NO VINYL ROOF · PEARL WHITE · TURN-KEY DRIVER',

  price: '$25,000',
  priceNote: 'OBO / TRADES CONSIDERED',

  engine: '289 2V V8',
  transmission: 'Rebuilt C4 Automatic',
  brakes: 'Power Front Discs',
  steering: 'Power Steering',
  exhaust: 'Dual Exhaust',
  roof: 'Factory Hardtop (No Vinyl)',
  wheels: 'One-off Milled · BFGoodrich Radial T/A',
  mileage: '~320,000 mi (Rebuilt 289)',
  owners: 'Only 3 Owners Since New',
  condition: 'Unrestored Driver Quality',
  location: 'SF Bay Area, CA',

  highlights: [
    '289 V8 Engine & Rebuilt C4 Auto',
    'Power Disc Brakes & Power Steering',
    'Former West Coast Classic Cougars "Shop Mule"',
    'Only 3 Owners Since 1967 (1st Owner 47 Yrs)',
    'Rare No Vinyl Top · Pearl White Finish',
    'Sequential Taillamps & Hidden Headlights',
    'Woodgrain Dash, Rallye Clock & Tachometer',
    'New Front Springs, Shocks & Radiator'
  ],

  provenanceBadge: 'FORMER WCCC SHOP MULE "PEARL"',
  storySnippet: 'Solid unrestored driver. Owned 47 years by original engineer, then Don Rush (West Coast Classic Cougars), now Bay Area shop owner. Dependable & ready for the road.',

  phone: '(415) 555-0199', // Editable placeholder that user can customize
  phoneLabel: 'CALL OR TEXT',
  sellerName: 'Roberto',
  email: 'roberto.kalafate@gmail.com',
  websiteUrl: 'https://robkalafate.github.io/cougar-xr7/',
  qrCallout: 'SCAN PHONE CAMERA FOR 30+ PHOTOS & VIDEO',

  template: 'highway',
  theme: 'yellow-black', // Default: Highest distant readability for car windows
  pageSize: 'letter',
  orientation: 'portrait',
  fontScale: 1.0,
  showBorders: true,
  showCropMarks: false,
  includePhoto: false, // For distant signs, pure graphic high-contrast text is #1 readable, but can be enabled!
  carPhotoUrl: 'https://robkalafate.github.io/cougar-xr7/img/v2/b-06.jpg'
};

export const COLOR_THEME_CONFIG: Record<
  CarSignData['theme'],
  {
    name: string;
    description: string;
    bg: string;
    cardBg: string;
    text: string;
    textMuted: string;
    accent: string;
    accentText: string;
    border: string;
    qrBg: string;
    badgeBg: string;
    badgeText: string;
    printHint: string;
  }
> = {
  'yellow-black': {
    name: 'High-Vis Day-Glo Yellow & Black',
    description: 'Gold standard for roadside visibility. Maximum distance readability from 50+ ft.',
    bg: '#FFD700', // Intense safety yellow
    cardBg: '#0A0A0A',
    text: '#0A0A0A',
    textMuted: '#2D2D2D',
    accent: '#000000',
    accentText: '#FFD700',
    border: '#000000',
    qrBg: '#FFFFFF',
    badgeBg: '#000000',
    badgeText: '#FFD700',
    printHint: 'Best printed on bright yellow cardstock or full-color on heavy white cardstock.'
  },
  'tint-buster': {
    name: 'Window Tint Buster (Inverted)',
    description: 'Deep black background with laser-sharp white & amber. Cuts right through tinted glass & glare.',
    bg: '#0F0F0F',
    cardBg: '#1C1C1C',
    text: '#FFFFFF',
    textMuted: '#D4D4D8',
    accent: '#F59E0B',
    accentText: '#000000',
    border: '#F59E0B',
    qrBg: '#FFFFFF',
    badgeBg: '#F59E0B',
    badgeText: '#000000',
    printHint: 'Essential for cars with 35% or darker window tinting to eliminate interior reflection.'
  },
  'classic-red-white': {
    name: 'Classic White & Racing Red',
    description: 'Clean traditional automotive dealer contrast with high-visibility red accents.',
    bg: '#FFFFFF',
    cardBg: '#F4F4F5',
    text: '#09090B',
    textMuted: '#52525B',
    accent: '#DC2626',
    accentText: '#FFFFFF',
    border: '#DC2626',
    qrBg: '#FFFFFF',
    badgeBg: '#DC2626',
    badgeText: '#FFFFFF',
    printHint: 'Works great on any standard laser or inkjet color printer.'
  },
  'mercury-orange': {
    name: 'Mercury Competition Orange',
    description: 'Vibrant 1960s muscle car racing orange with bold black headers.',
    bg: '#FF5722',
    cardBg: '#18181B',
    text: '#FFFFFF',
    textMuted: '#FAFAFA',
    accent: '#000000',
    accentText: '#FFFFFF',
    border: '#000000',
    qrBg: '#FFFFFF',
    badgeBg: '#000000',
    badgeText: '#FF5722',
    printHint: 'High-energy muscle car look that stands out at car shows and cruise nights.'
  },
  'vintage-green': {
    name: 'Mercury Heritage (Emerald & Gold)',
    description: 'Nod to the original factory Mercury Green exterior with XR-7 luxury gold trim.',
    bg: '#064E3B',
    cardBg: '#042F2E',
    text: '#FFFFFF',
    textMuted: '#E2E8F0',
    accent: '#FBBF24',
    accentText: '#064E3B',
    border: '#FBBF24',
    qrBg: '#FFFFFF',
    badgeBg: '#FBBF24',
    badgeText: '#064E3B',
    printHint: 'Sophisticated classic look matching the Cougar personal luxury heritage.'
  },
  'monochrome-bold': {
    name: 'Heavy Monochrome (Black & White)',
    description: 'Zero color required. Maximum stark contrast for any standard black-and-white printer.',
    bg: '#FFFFFF',
    cardBg: '#000000',
    text: '#000000',
    textMuted: '#333333',
    accent: '#000000',
    accentText: '#FFFFFF',
    border: '#000000',
    qrBg: '#FFFFFF',
    badgeBg: '#000000',
    badgeText: '#FFFFFF',
    printHint: 'Budget-friendly, high crispness on standard black-and-white office printers.'
  }
};
