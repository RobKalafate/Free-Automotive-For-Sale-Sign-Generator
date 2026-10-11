import React, { useState } from 'react';
import { CarSignData, ColorTheme, SignTemplate, PageSize, Orientation } from '../types';
import { COLOR_THEME_CONFIG } from '../data/initialCougarData';
import {
  Palette,
  Sliders,
  QrCode,
  FileSpreadsheet,
  Check,
  Upload,
  RotateCcw,
  Sparkles,
  Layers,
  HelpCircle,
  Car
} from 'lucide-react';

interface SignCustomizerProps {
  data: CarSignData;
  onChange: (newData: CarSignData) => void;
  onOpenTips: () => void;
}

export const SignCustomizer: React.FC<SignCustomizerProps> = ({
  data,
  onChange,
  onOpenTips,
}) => {
  const [activeTab, setActiveTab] = useState<'style' | 'vehicle' | 'contact' | 'highlights'>('style');

  const update = <K extends keyof CarSignData>(key: K, value: CarSignData[K]) => {
    onChange({ ...data, [key]: value });
  };

  const handleCustomQrUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          update('customQrDataUrl', event.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const templates: { id: SignTemplate; name: string; tag: string; desc: string }[] = [
    {
      id: 'highway',
      name: 'Highway High-Vis (50ft+)',
      tag: 'RECOMMENDED',
      desc: 'Engineered for maximum distance readability through tinted car windows and street glare.',
    },
    {
      id: 'muscle',
      name: 'Muscle Classic Spec Sheet',
      tag: 'CAR SHOW',
      desc: 'Dual racing stripes, emblem styling, and authentic equipment scorecard.',
    },
    {
      id: 'monroney',
      name: '1967 Showroom Window Sticker',
      tag: 'HERITAGE',
      desc: 'Vintage Lincoln-Mercury window sticker aesthetic with verified provenance badge.',
    },
    {
      id: 'minimal',
      name: 'Ultra-Bold Billboard',
      tag: 'MAX INK',
      desc: 'Gigantic typography, zero fluff, highest raw visibility from across the street.',
    },
    {
      id: 'rear-banner',
      name: 'Rear Glass Landscape Banner',
      tag: 'WIDE',
      desc: 'Horizontal format tailored for the lower section of the back windshield.',
    },
  ];

  const colorThemes: { id: ColorTheme; label: string; bg: string; text: string; tag?: string }[] = [
    { id: 'yellow-black', label: 'Day-Glo Yellow & Black', bg: '#FFD700', text: '#000000', tag: 'Best Distance' },
    { id: 'tint-buster', label: 'Window Tint Buster (Inverted)', bg: '#0A0A0A', text: '#F59E0B', tag: 'For Tinted Glass' },
    { id: 'classic-red-white', label: 'Classic Red & White', bg: '#FFFFFF', text: '#DC2626' },
    { id: 'mercury-orange', label: 'Mercury Competition Orange', bg: '#FF5722', text: '#FFFFFF' },
    { id: 'vintage-green', label: 'Mercury Emerald & Gold', bg: '#064E3B', text: '#FBBF24' },
    { id: 'monochrome-bold', label: 'Heavy Monochrome (B&W)', bg: '#FFFFFF', text: '#000000' },
  ];

  return (
    <div className="bg-stone-900 border border-stone-800 rounded-xl overflow-hidden shadow-xl flex flex-col h-full">
      {/* Tab Navigation Header */}
      <div className="flex border-b border-stone-800 bg-stone-950 overflow-x-auto">
        <button
          onClick={() => setActiveTab('style')}
          className={`flex items-center gap-1.5 px-3.5 py-3 text-xs font-bold transition-colors whitespace-nowrap border-b-2 ${
            activeTab === 'style'
              ? 'text-amber-400 border-amber-400 bg-stone-900/60'
              : 'text-stone-400 border-transparent hover:text-stone-200'
          }`}
        >
          <Palette className="w-3.5 h-3.5" />
          <span>Style &amp; Layout</span>
        </button>

        <button
          onClick={() => setActiveTab('vehicle')}
          className={`flex items-center gap-1.5 px-3.5 py-3 text-xs font-bold transition-colors whitespace-nowrap border-b-2 ${
            activeTab === 'vehicle'
              ? 'text-amber-400 border-amber-400 bg-stone-900/60'
              : 'text-stone-400 border-transparent hover:text-stone-200'
          }`}
        >
          <Car className="w-3.5 h-3.5" />
          <span>Vehicle &amp; Price</span>
        </button>

        <button
          onClick={() => setActiveTab('contact')}
          className={`flex items-center gap-1.5 px-3.5 py-3 text-xs font-bold transition-colors whitespace-nowrap border-b-2 ${
            activeTab === 'contact'
              ? 'text-amber-400 border-amber-400 bg-stone-900/60'
              : 'text-stone-400 border-transparent hover:text-stone-200'
          }`}
        >
          <QrCode className="w-3.5 h-3.5" />
          <span>QR Code &amp; Contact</span>
        </button>

        <button
          onClick={() => setActiveTab('highlights')}
          className={`flex items-center gap-1.5 px-3.5 py-3 text-xs font-bold transition-colors whitespace-nowrap border-b-2 ${
            activeTab === 'highlights'
              ? 'text-amber-400 border-amber-400 bg-stone-900/60'
              : 'text-stone-400 border-transparent hover:text-stone-200'
          }`}
        >
          <FileSpreadsheet className="w-3.5 h-3.5" />
          <span>Specs &amp; Bullets</span>
        </button>

        <button
          onClick={onOpenTips}
          className="ml-auto flex items-center gap-1 px-3 py-3 text-xs font-semibold text-amber-400/90 hover:text-amber-300 hover:bg-stone-800 transition-colors"
          title="Classic car window sign placement tips"
        >
          <HelpCircle className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Mounting Tips</span>
        </button>
      </div>

      {/* Tab Panels */}
      <div className="p-4 sm:p-5 overflow-y-auto space-y-5 text-stone-200 text-xs">
        {/* TAB 1: STYLE & LAYOUT */}
        {activeTab === 'style' && (
          <div className="space-y-5">
            {/* Template Selector */}
            <div>
              <label className="block text-xs font-bold text-stone-300 uppercase tracking-wider mb-2">
                1. Select Sign Template Design
              </label>
              <div className="grid grid-cols-1 gap-2">
                {templates.map((tpl) => (
                  <button
                    key={tpl.id}
                    onClick={() => {
                      update('template', tpl.id);
                      if (tpl.id === 'rear-banner') {
                        update('orientation', 'landscape');
                      }
                    }}
                    className={`p-2.5 rounded-lg border text-left transition-all flex items-start justify-between gap-2 ${
                      data.template === tpl.id
                        ? 'bg-amber-500/10 border-amber-400 ring-1 ring-amber-400'
                        : 'bg-stone-950 border-stone-800 hover:border-stone-700'
                    }`}
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-stone-100">{tpl.name}</span>
                        <span
                          className={`text-[10px] px-1.5 py-0.2 rounded font-extrabold uppercase ${
                            tpl.id === 'highway'
                              ? 'bg-amber-500 text-black'
                              : 'bg-stone-800 text-stone-300'
                          }`}
                        >
                          {tpl.tag}
                        </span>
                      </div>
                      <p className="text-stone-400 text-[11px] mt-0.5">{tpl.desc}</p>
                    </div>
                    {data.template === tpl.id && (
                      <Check className="w-4 h-4 text-amber-400 shrink-0 mt-1" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* High-Contrast Color Theme */}
            <div>
              <label className="block text-xs font-bold text-stone-300 uppercase tracking-wider mb-2">
                2. Window Contrast Color Theme
              </label>
              <div className="grid grid-cols-2 gap-2">
                {colorThemes.map((th) => (
                  <button
                    key={th.id}
                    onClick={() => update('theme', th.id)}
                    className={`p-2 rounded-lg border text-left transition-all flex items-center gap-2.5 ${
                      data.theme === th.id
                        ? 'border-amber-400 bg-stone-950 ring-1 ring-amber-400'
                        : 'border-stone-800 bg-stone-950 hover:border-stone-700'
                    }`}
                  >
                    <div
                      className="w-6 h-6 rounded-md border border-white/20 flex items-center justify-center font-black text-[10px] shrink-0"
                      style={{ backgroundColor: th.bg, color: th.text }}
                    >
                      XR
                    </div>
                    <div className="overflow-hidden">
                      <div className="font-semibold text-stone-200 truncate">{th.label}</div>
                      {th.tag && (
                        <span className="text-[10px] text-amber-400 font-bold block">{th.tag}</span>
                      )}
                    </div>
                  </button>
                ))}
              </div>
              <p className="text-[11px] text-stone-400 mt-1.5 italic">
                {COLOR_THEME_CONFIG[data.theme].description}
              </p>
            </div>

            {/* Paper Size, Orientation, and Scaling */}
            <div className="pt-2 border-t border-stone-800 grid grid-cols-2 gap-3">
              <div>
                <label className="block font-bold text-stone-300 mb-1">Paper Size</label>
                <select
                  value={data.pageSize}
                  onChange={(e) => update('pageSize', e.target.value as PageSize)}
                  className="w-full bg-stone-950 border border-stone-800 rounded-lg p-2 text-stone-200 focus:outline-none focus:border-amber-400"
                >
                  <option value="letter">US Letter (8.5&quot; x 11&quot;)</option>
                  <option value="tabloid">Tabloid / Poster (11&quot; x 17&quot;)</option>
                  <option value="a4">A4 (210 x 297 mm)</option>
                </select>
              </div>

              <div>
                <label className="block font-bold text-stone-300 mb-1">Orientation</label>
                <select
                  value={data.orientation}
                  onChange={(e) => update('orientation', e.target.value as Orientation)}
                  className="w-full bg-stone-950 border border-stone-800 rounded-lg p-2 text-stone-200 focus:outline-none focus:border-amber-400"
                >
                  <option value="portrait">Portrait (Vertical)</option>
                  <option value="landscape">Landscape (Horizontal)</option>
                </select>
              </div>
            </div>

            {/* Distance Readability Scaling Booster */}
            <div className="pt-2 border-t border-stone-800 space-y-2">
              <div className="flex justify-between items-center">
                <span className="font-bold text-stone-300">Distant Font Scale Multiplier</span>
                <span className="font-mono text-amber-400 font-bold">
                  {Math.round(data.fontScale * 100)}%
                </span>
              </div>
              <input
                type="range"
                min="0.85"
                max="1.2"
                step="0.05"
                value={data.fontScale}
                onChange={(e) => update('fontScale', parseFloat(e.target.value))}
                className="w-full accent-amber-500 cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-stone-500">
                <span>Standard (100%)</span>
                <span>Billboard Distance (120%)</span>
              </div>
            </div>

            {/* Toggles */}
            <div className="pt-2 border-t border-stone-800 space-y-2">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={data.showBorders}
                  onChange={(e) => update('showBorders', e.target.checked)}
                  className="rounded accent-amber-500"
                />
                <span className="text-stone-300">
                  Include Heavy Window Cut Border (Frames the sign through glass)
                </span>
              </label>

              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={data.showCropMarks}
                  onChange={(e) => update('showCropMarks', e.target.checked)}
                  className="rounded accent-amber-500"
                />
                <span className="text-stone-300">
                  Show Corner Tape Alignment Marks (For blue painter&apos;s tape)
                </span>
              </label>
            </div>
          </div>
        )}

        {/* TAB 2: VEHICLE & PRICE */}
        {activeTab === 'vehicle' && (
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block font-bold text-stone-300 mb-1">Year</label>
                <input
                  type="text"
                  value={data.year}
                  onChange={(e) => update('year', e.target.value)}
                  className="w-full bg-stone-950 border border-stone-800 rounded-lg p-2 text-stone-100 font-bold"
                />
              </div>
              <div>
                <label className="block font-bold text-stone-300 mb-1">Make</label>
                <input
                  type="text"
                  value={data.make}
                  onChange={(e) => update('make', e.target.value)}
                  className="w-full bg-stone-950 border border-stone-800 rounded-lg p-2 text-stone-100 font-bold"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block font-bold text-stone-300 mb-1">Model</label>
                <input
                  type="text"
                  value={data.model}
                  onChange={(e) => update('model', e.target.value)}
                  className="w-full bg-stone-950 border border-stone-800 rounded-lg p-2 text-stone-100 font-bold"
                />
              </div>
              <div>
                <label className="block font-bold text-stone-300 mb-1">Trim / Badge</label>
                <input
                  type="text"
                  value={data.trim}
                  onChange={(e) => update('trim', e.target.value)}
                  className="w-full bg-stone-950 border border-stone-800 rounded-lg p-2 text-amber-400 font-bold"
                />
              </div>
            </div>

            <div>
              <label className="block font-bold text-stone-300 mb-1">Subheadline</label>
              <input
                type="text"
                value={data.subheadline}
                onChange={(e) => update('subheadline', e.target.value)}
                className="w-full bg-stone-950 border border-stone-800 rounded-lg p-2 text-stone-100"
              />
            </div>

            {/* Price & Terms */}
            <div className="p-3 rounded-lg bg-stone-950 border border-stone-800 space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-amber-400 mb-1">Asking Price</label>
                  <input
                    type="text"
                    value={data.price}
                    onChange={(e) => update('price', e.target.value)}
                    className="w-full bg-stone-900 border border-stone-700 rounded-lg p-2 text-amber-300 font-black text-lg"
                  />
                </div>
                <div>
                  <label className="block font-bold text-stone-300 mb-1">Price Terms / Note</label>
                  <input
                    type="text"
                    value={data.priceNote}
                    onChange={(e) => update('priceNote', e.target.value)}
                    placeholder="e.g. OBO / TRADES CONSIDERED"
                    className="w-full bg-stone-900 border border-stone-700 rounded-lg p-2 text-stone-100 font-bold"
                  />
                </div>
              </div>

              {/* Quick price presets */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {['$25,000 OBO', '$25,000 FIRM', 'TRADES CONSIDERED', 'INQUIRE'].map((preset) => (
                  <button
                    key={preset}
                    onClick={() => {
                      if (preset === 'TRADES CONSIDERED') {
                        update('priceNote', 'TRADES CONSIDERED');
                      } else if (preset === 'INQUIRE') {
                        update('price', 'INQUIRE');
                        update('priceNote', 'SERIOUS BUYERS');
                      } else {
                        const [p, n] = preset.split(' ');
                        update('price', p);
                        update('priceNote', n || '');
                      }
                    }}
                    className="px-2 py-0.5 bg-stone-800 hover:bg-stone-700 text-[10px] text-stone-300 rounded font-semibold transition-colors"
                  >
                    {preset}
                  </button>
                ))}
              </div>
            </div>

            {/* Provenance Badge */}
            <div>
              <label className="block font-bold text-stone-300 mb-1">
                Historic Provenance Badge (Cougar XR-7 Pedigree)
              </label>
              <input
                type="text"
                value={data.provenanceBadge}
                onChange={(e) => update('provenanceBadge', e.target.value)}
                className="w-full bg-stone-950 border border-stone-800 rounded-lg p-2 text-stone-100 font-semibold"
              />
              <span className="text-[10px] text-stone-500 mt-0.5 block">
                Recognized car from Don Rush&apos;s West Coast Classic Cougars YouTube videos &amp; shop history.
              </span>
            </div>
          </div>
        )}

        {/* TAB 3: QR CODE & CONTACT */}
        {activeTab === 'contact' && (
          <div className="space-y-4">
            {/* Website URL */}
            <div className="p-3 rounded-lg bg-stone-950 border border-stone-800 space-y-2">
              <label className="block font-bold text-amber-400">
                Destination Website URL (Linked by QR Code)
              </label>
              <input
                type="url"
                value={data.websiteUrl}
                onChange={(e) => update('websiteUrl', e.target.value)}
                className="w-full bg-stone-900 border border-stone-700 rounded-lg p-2 text-cyan-300 font-mono text-xs"
              />
              <p className="text-[11px] text-stone-400">
                Default: <code>https://robkalafate.github.io/cougar-xr7/</code>. Smartphone cameras scanning the window sign will open this page directly!
              </p>
            </div>

            {/* QR Callout phrase */}
            <div>
              <label className="block font-bold text-stone-300 mb-1">
                QR Code Scanning Callout
              </label>
              <input
                type="text"
                value={data.qrCallout}
                onChange={(e) => update('qrCallout', e.target.value)}
                className="w-full bg-stone-950 border border-stone-800 rounded-lg p-2 text-stone-100"
              />
            </div>

            {/* Custom QR Code Upload (e.g. user qr-code.png) */}
            <div className="p-3 rounded-lg bg-stone-950 border border-stone-800 space-y-2">
              <label className="block font-bold text-stone-300">
                Custom QR Code Image (Optional)
              </label>
              <p className="text-[11px] text-stone-400">
                By default, this tool generates a vector-crisp Level-H QR code for <code>{data.websiteUrl}</code>. You can also upload your own image file (such as the uploaded <code>qr-code.png</code>):
              </p>
              <div className="flex items-center gap-3">
                <label className="cursor-pointer px-3 py-1.5 bg-stone-800 hover:bg-stone-700 text-stone-200 rounded-lg font-bold flex items-center gap-1.5 transition-colors">
                  <Upload className="w-3.5 h-3.5" />
                  <span>Upload QR PNG</span>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleCustomQrUpload}
                    className="hidden"
                  />
                </label>
                {data.customQrDataUrl && (
                  <button
                    onClick={() => update('customQrDataUrl', undefined)}
                    className="text-red-400 hover:text-red-300 flex items-center gap-1 text-[11px]"
                  >
                    <RotateCcw className="w-3 h-3" />
                    <span>Reset to Dynamic Vector QR</span>
                  </button>
                )}
              </div>
            </div>

            {/* Direct Contact */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block font-bold text-stone-300 mb-1">Phone Number</label>
                <input
                  type="text"
                  value={data.phone}
                  onChange={(e) => update('phone', e.target.value)}
                  className="w-full bg-stone-950 border border-stone-800 rounded-lg p-2 text-amber-300 font-bold text-sm"
                  placeholder="(415) 555-0199"
                />
              </div>
              <div>
                <label className="block font-bold text-stone-300 mb-1">Phone Action Label</label>
                <input
                  type="text"
                  value={data.phoneLabel}
                  onChange={(e) => update('phoneLabel', e.target.value)}
                  className="w-full bg-stone-950 border border-stone-800 rounded-lg p-2 text-stone-100"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block font-bold text-stone-300 mb-1">Seller Name</label>
                <input
                  type="text"
                  value={data.sellerName}
                  onChange={(e) => update('sellerName', e.target.value)}
                  className="w-full bg-stone-950 border border-stone-800 rounded-lg p-2 text-stone-100"
                />
              </div>
              <div>
                <label className="block font-bold text-stone-300 mb-1">Car Location</label>
                <input
                  type="text"
                  value={data.location}
                  onChange={(e) => update('location', e.target.value)}
                  className="w-full bg-stone-950 border border-stone-800 rounded-lg p-2 text-stone-100"
                />
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: HIGHLIGHTS & SPECS */}
        {activeTab === 'highlights' && (
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block font-bold text-stone-300 mb-1">Engine</label>
                <input
                  type="text"
                  value={data.engine}
                  onChange={(e) => update('engine', e.target.value)}
                  className="w-full bg-stone-950 border border-stone-800 rounded-lg p-2 text-stone-100"
                />
              </div>
              <div>
                <label className="block font-bold text-stone-300 mb-1">Transmission</label>
                <input
                  type="text"
                  value={data.transmission}
                  onChange={(e) => update('transmission', e.target.value)}
                  className="w-full bg-stone-950 border border-stone-800 rounded-lg p-2 text-stone-100"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block font-bold text-stone-300 mb-1">Brakes</label>
                <input
                  type="text"
                  value={data.brakes}
                  onChange={(e) => update('brakes', e.target.value)}
                  className="w-full bg-stone-950 border border-stone-800 rounded-lg p-2 text-stone-100"
                />
              </div>
              <div>
                <label className="block font-bold text-stone-300 mb-1">Ownership History</label>
                <input
                  type="text"
                  value={data.owners}
                  onChange={(e) => update('owners', e.target.value)}
                  className="w-full bg-stone-950 border border-stone-800 rounded-lg p-2 text-stone-100"
                />
              </div>
            </div>

            <div>
              <label className="block font-bold text-stone-300 mb-1.5">
                Bullet Highlights (Displayed on Spec Sheet &amp; Showroom templates)
              </label>
              <div className="space-y-2">
                {data.highlights.map((h, i) => (
                  <div key={i} className="flex gap-2">
                    <input
                      type="text"
                      value={h}
                      onChange={(e) => {
                        const newH = [...data.highlights];
                        newH[i] = e.target.value;
                        update('highlights', newH);
                      }}
                      className="w-full bg-stone-950 border border-stone-800 rounded-lg p-2 text-stone-100 text-xs"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
