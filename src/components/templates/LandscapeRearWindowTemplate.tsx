import React from 'react';
import { CarSignData } from '../../types';
import { COLOR_THEME_CONFIG } from '../../data/initialCougarData';
import { QRCodeRenderer } from '../QRCodeRenderer';
import { CougarSilhouette } from '../CarIcons';
import { Phone, Globe, Award } from 'lucide-react';

interface TemplateProps {
  data: CarSignData;
  fontScale?: number;
}

export const LandscapeRearWindowTemplate: React.FC<TemplateProps> = ({
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
      {/* Heavy Border */}
      {data.showBorders && (
        <div
          className="absolute inset-2 sm:inset-3 border-4 sm:border-8 pointer-events-none rounded-lg"
          style={{ borderColor: theme.border }}
        />
      )}

      {/* TOP BAR: WIDE HEADER */}
      <div className="relative z-10 flex items-center justify-between border-b-4 pb-2" style={{ borderColor: theme.border }}>
        <div className="flex items-center gap-3">
          <CougarSilhouette className="w-12 h-6" color={theme.text} />
          <div>
            <div className="font-bebas text-xs sm:text-sm tracking-widest uppercase opacity-80 leading-none">
              REAR WINDOW FOR SALE SIGN &bull; {data.location}
            </div>
            <div className="font-bebas text-4xl sm:text-5xl font-black uppercase leading-tight">
              {data.year} {data.make} {data.model} <span className="text-amber-500">{data.trim}</span>
            </div>
          </div>
        </div>

        <div className="text-right">
          <div className="font-bebas text-5xl sm:text-6xl font-black tracking-widest text-amber-500 leading-none">
            FOR SALE
          </div>
        </div>
      </div>

      {/* 3-COLUMN WIDE BODY */}
      <div className="relative z-10 my-auto py-2 grid grid-cols-12 gap-3 items-center">
        {/* Left Column: Big Price & Provenance */}
        <div className="col-span-4 space-y-2">
          <div
            className="p-3 rounded-xl border-2 text-center shadow"
            style={{
              backgroundColor: theme.badgeBg,
              color: theme.badgeText,
              borderColor: theme.border,
            }}
          >
            <div className="text-xs uppercase font-bold tracking-wider opacity-80">
              ASKING PRICE:
            </div>
            <div className="font-bebas text-4xl sm:text-6xl font-black text-amber-400 leading-none">
              {data.price}
            </div>
            <div className="text-xs font-bold uppercase text-amber-300">
              {data.priceNote}
            </div>
          </div>

          <div
            className="p-2 rounded-lg border text-center text-xs font-bold uppercase flex items-center justify-center gap-1"
            style={{
              backgroundColor: isDark ? '#1F2937' : '#FFFFFF',
              borderColor: theme.border,
              color: isDark ? '#FFFFFF' : '#000000',
            }}
          >
            <Award className="w-4 h-4 text-amber-500 shrink-0" />
            <span className="truncate">{data.provenanceBadge}</span>
          </div>
        </div>

        {/* Center Column: Key Specs Grid */}
        <div className="col-span-4 space-y-1.5">
          <div
            className="p-3 rounded-xl border-2 shadow space-y-1.5 text-xs sm:text-sm"
            style={{
              backgroundColor: isDark ? '#18181B' : '#FFFFFF',
              borderColor: theme.border,
              color: isDark ? '#FFFFFF' : '#000000',
            }}
          >
            <div className="flex justify-between border-b pb-1 font-semibold">
              <span className="opacity-70">ENGINE:</span>
              <span className="font-bold">{data.engine}</span>
            </div>
            <div className="flex justify-between border-b pb-1 font-semibold">
              <span className="opacity-70">TRANS:</span>
              <span className="font-bold">{data.transmission}</span>
            </div>
            <div className="flex justify-between border-b pb-1 font-semibold">
              <span className="opacity-70">BRAKES:</span>
              <span className="font-bold">{data.brakes}</span>
            </div>
            <div className="flex justify-between font-semibold">
              <span className="opacity-70">OWNERS:</span>
              <span className="font-bold">{data.owners}</span>
            </div>
          </div>
        </div>

        {/* Right Column: Giant QR Code & Direct Scan */}
        <div className="col-span-4 flex flex-col items-center justify-center">
          <div className="bg-white p-2 rounded-xl border-4 border-black shadow-lg">
            <QRCodeRenderer
              value={data.websiteUrl}
              customImage={data.customQrDataUrl}
              size={120}
              centerText="SCAN"
            />
          </div>
          <div className="font-bebas text-xs sm:text-sm font-bold tracking-wider uppercase mt-1 text-center leading-none">
            SCAN FOR 30+ PHOTOS &amp; VIDEO
          </div>
        </div>
      </div>

      {/* BOTTOM STRIP: CONTACT */}
      <div className="relative z-10 pt-2 border-t-2 flex items-center justify-between" style={{ borderColor: theme.border }}>
        <div className="flex items-center gap-2 text-xs font-semibold opacity-90">
          <Globe className="w-4 h-4 text-amber-500" />
          <span className="font-mono">{data.websiteUrl.replace(/^https?:\/\//, '')}</span>
        </div>

        <div
          className="px-4 py-1.5 rounded-lg border-2 flex items-center gap-2 shadow"
          style={{
            backgroundColor: theme.badgeBg,
            color: theme.badgeText,
            borderColor: theme.border,
          }}
        >
          <Phone className="w-4 h-4 text-amber-400" />
          <span className="text-xs uppercase font-bold">{data.phoneLabel}:</span>
          <span className="font-bebas text-2xl font-black text-amber-400 tracking-wider">
            {data.phone}
          </span>
          <span className="text-xs opacity-75">({data.sellerName})</span>
        </div>
      </div>
    </div>
  );
};
