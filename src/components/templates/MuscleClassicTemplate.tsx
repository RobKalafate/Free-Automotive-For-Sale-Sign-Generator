import React from 'react';
import { CarSignData } from '../../types';
import { COLOR_THEME_CONFIG } from '../../data/initialCougarData';
import { QRCodeRenderer } from '../QRCodeRenderer';
import { CougarSilhouette, CheckBadge } from '../CarIcons';
import { Phone, Globe, ShieldCheck, Wrench, Sparkles } from 'lucide-react';

interface TemplateProps {
  data: CarSignData;
  fontScale?: number;
}

export const MuscleClassicTemplate: React.FC<TemplateProps> = ({
  data,
  fontScale = 1.0,
}) => {
  const theme = COLOR_THEME_CONFIG[data.theme];
  const isDark = data.theme === 'tint-buster' || data.theme === 'vintage-green';

  return (
    <div
      className="w-full h-full flex flex-col justify-between p-6 sm:p-7 select-none transition-colors duration-200 relative overflow-hidden"
      style={{
        backgroundColor: theme.bg,
        color: theme.text,
        transform: `scale(${fontScale})`,
        transformOrigin: 'top center',
      }}
    >
      {/* Outer Border with Vintage Corner Accents */}
      {data.showBorders && (
        <>
          <div
            className="absolute inset-2 sm:inset-3 border-2 pointer-events-none"
            style={{ borderColor: theme.border }}
          />
          <div
            className="absolute inset-4 sm:inset-5 border pointer-events-none opacity-40"
            style={{ borderColor: theme.border }}
          />
        </>
      )}

      {/* TOP HEADER: MUSCLE HERITAGE WITH STRIPES */}
      <div className="relative z-10">
        <div className="flex items-center justify-between border-b-4 pb-2 mb-2" style={{ borderColor: theme.border }}>
          <div className="flex items-center gap-2">
            <div className="w-3 h-8 bg-amber-500" />
            <div className="w-1.5 h-8 bg-amber-500" />
            <div>
              <span className="font-bebas text-xs sm:text-sm tracking-widest uppercase block opacity-80 leading-none">
                MERCURY DIVISION &bull; LUXURY SPORTS SPECIAL
              </span>
              <span className="font-bebas text-2xl sm:text-3xl font-black uppercase leading-none">
                OFFERED DIRECT BY OWNER
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <CougarSilhouette className="w-12 h-6" color={theme.text} />
            <span className="font-bebas text-3xl font-black text-amber-500">XR-7</span>
          </div>
        </div>

        {/* Big Car Title */}
        <div className="text-center py-1">
          <div className="font-bebas text-4xl sm:text-6xl md:text-7xl font-black tracking-wide leading-none uppercase">
            {data.year} {data.make} {data.model} <span className="text-amber-500">{data.trim}</span>
          </div>
          <p className="font-oswald text-xs sm:text-base font-bold uppercase tracking-widest mt-1 opacity-90">
            {data.subheadline}
          </p>
        </div>
      </div>

      {/* MIDDLE: SPEC GRID & HIGHLIGHTS */}
      <div className="relative z-10 my-auto py-2 space-y-3">
        {/* Banner with Price and Provenance */}
        <div className="grid grid-cols-12 gap-2 sm:gap-3 items-stretch">
          <div
            className="col-span-6 p-2 sm:p-3 rounded-lg border-2 text-center flex flex-col justify-center shadow-md"
            style={{
              backgroundColor: theme.badgeBg,
              color: theme.badgeText,
              borderColor: theme.border,
            }}
          >
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest opacity-80">
              ASKING PRICE
            </span>
            <span className="font-bebas text-4xl sm:text-6xl font-black text-amber-400 leading-none">
              {data.price}
            </span>
            <span className="text-[10px] sm:text-xs font-bold uppercase text-amber-300">
              {data.priceNote}
            </span>
          </div>

          <div
            className="col-span-6 p-2 sm:p-3 rounded-lg border-2 flex flex-col justify-center text-left shadow-md"
            style={{
              backgroundColor: theme.cardBg,
              borderColor: theme.accent,
              color: isDark ? '#FFFFFF' : '#FFFFFF',
            }}
          >
            <div className="flex items-center gap-1.5 text-amber-400 font-oswald text-xs font-bold uppercase">
              <ShieldCheck className="w-4 h-4 shrink-0" />
              <span>FAMOUS PROVENANCE</span>
            </div>
            <div className="font-bebas text-xl sm:text-2xl font-black uppercase text-amber-300 leading-tight">
              {data.provenanceBadge}
            </div>
            <p className="text-[10px] sm:text-xs font-sans line-clamp-2 opacity-90 mt-0.5">
              {data.storySnippet}
            </p>
          </div>
        </div>

        {/* Highlights Checklist - 6 High Impact Bullets */}
        <div
          className="p-3 sm:p-4 rounded-lg border-2 shadow-sm"
          style={{
            backgroundColor: isDark ? '#1F2937' : '#FFFFFF',
            borderColor: theme.border,
            color: isDark ? '#FFFFFF' : '#000000',
          }}
        >
          <div className="flex items-center justify-between border-b pb-1.5 mb-2 border-current/20">
            <span className="font-bebas text-sm sm:text-base tracking-wider uppercase font-bold flex items-center gap-1">
              <Wrench className="w-3.5 h-3.5 text-amber-500" />
              AUTHENTIC EQUIPMENT &amp; CONDITION HIGHLIGHTS
            </span>
            <span className="text-[10px] font-bold uppercase text-amber-500">
              TURN-KEY DRIVER
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-3 gap-y-1.5">
            {data.highlights.slice(0, 6).map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm font-semibold">
                <CheckBadge className="w-3.5 h-3.5 text-green-600 shrink-0" />
                <span className="truncate">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* BOTTOM: QR CODE + CONTACT BAR */}
      <div className="relative z-10 pt-2 border-t-2" style={{ borderColor: theme.border }}>
        <div className="flex items-center justify-between gap-3">
          {/* QR Code with Scan Callout */}
          <div className="flex items-center gap-3">
            <div className="bg-white p-1.5 rounded-lg border-2 border-black shadow">
              <QRCodeRenderer
                value={data.websiteUrl}
                customImage={data.customQrDataUrl}
                size={110}
                centerText="SCAN"
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1 text-xs font-bold text-amber-500">
                <Sparkles className="w-3.5 h-3.5" />
                <span>ONLINE PORTFOLIO &amp; VIDEO</span>
              </div>
              <span className="font-bebas text-lg sm:text-xl font-bold uppercase leading-tight">
                {data.qrCallout}
              </span>
              <span className="font-mono text-[10px] sm:text-xs opacity-80 flex items-center gap-1">
                <Globe className="w-3 h-3" />
                {data.websiteUrl.replace(/^https?:\/\//, '')}
              </span>
            </div>
          </div>

          {/* Contact Block */}
          <div
            className="p-2 sm:p-3 rounded-lg border-2 text-right shadow"
            style={{
              backgroundColor: theme.badgeBg,
              color: theme.badgeText,
              borderColor: theme.border,
            }}
          >
            <div className="text-[10px] uppercase font-bold opacity-80">
              {data.phoneLabel} ({data.sellerName}):
            </div>
            <div className="font-bebas text-2xl sm:text-3xl font-black text-amber-400 flex items-center justify-end gap-1">
              <Phone className="w-4 h-4" />
              {data.phone}
            </div>
            <div className="text-[10px] opacity-80 uppercase font-semibold">
              {data.location}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
