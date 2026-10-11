export type SignTemplate = 'highway' | 'muscle' | 'monroney' | 'minimal' | 'rear-banner';

export type ColorTheme =
  | 'yellow-black'      // High-Vis Safety Day-Glo Yellow & Black (Highest distant readability)
  | 'tint-buster'       // Inverted deep black with pure white and neon amber (Cuts through window tint)
  | 'classic-red-white' // Traditional red & black on clean white
  | 'mercury-orange'    // Competition muscle orange & jet black
  | 'vintage-green'     // 1967 Mercury Emerald Green & champagne gold
  | 'monochrome-bold';  // Pure stark black and white high-ink

export type PageSize = 'letter' | 'tabloid' | 'a4';
export type Orientation = 'portrait' | 'landscape';

export interface CarSignData {
  // Vehicle Identity
  year: string;
  make: string;
  model: string;
  trim: string;
  subheadline: string;

  // Price & Terms
  price: string;
  priceNote: string; // e.g. "OBO", "TRADES CONSIDERED", "FIRM"

  // Core Specs (shown in prominent badges)
  engine: string;
  transmission: string;
  brakes: string;
  steering: string;
  exhaust: string;
  roof: string;
  wheels: string;
  mileage: string;
  owners: string;
  condition: string;
  location: string;

  // Selected bullet highlights (up to 6)
  highlights: string[];

  // Provenance / Story snippet
  provenanceBadge: string; // e.g. "WCCC Shop Mule 'Pearl'"
  storySnippet: string;

  // Contact Info
  phone: string;
  phoneLabel: string; // "CALL OR TEXT"
  sellerName: string;
  email: string;
  websiteUrl: string;
  qrCallout: string; // "SCAN FOR FULL STORY, 30+ PHOTOS & CONTACT"
  
  // Custom QR image (if uploaded)
  customQrDataUrl?: string;

  // Sign display preferences
  template: SignTemplate;
  theme: ColorTheme;
  pageSize: PageSize;
  orientation: Orientation;
  fontScale: number; // 0.9 to 1.2
  showBorders: boolean;
  showCropMarks: boolean;
  includePhoto: boolean;
  carPhotoUrl: string;
}
