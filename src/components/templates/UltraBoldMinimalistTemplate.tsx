import React from 'react';
import { CarSignData } from '../../types';
import { COLOR_THEME_CONFIG } from '../../data/initialCougarData';
import { QRCodeRenderer } from '../QRCodeRenderer';
import { Phone, ArrowDown } from 'lucide-react';

interface TemplateProps {
  data: CarSignData;
  fontScale?: number;
}

export const UltraBoldMinimalistTemplate: React.FC<TemplateProps> = ({
  data,
  fontScale = 1.0,
}) => {
  const theme = COLOR_THEME_CONFIG[data.theme];

  return (
    <div
      className="w-full h-full flex flex-col justify-between p-6 sm:p-8 select-none transition-colors duration-200 relative overflow-hidden text-center"
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
          className="absolute inset-2 sm:inset-4 border-8 pointer-events-none"
          style={{ borderColor: theme.border }}
        />
      )}

      {/* MASSIVE HEADER */}
      <div className="relative z-10">
        <h1 className="font-bebas text-6xl sm:text-8xl md:text-9xl font-black tracking-widest leading-none uppercase">
          FOR SALE
        </h1>
        <div className="font-bebas text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight uppercase leading-none mt-1">
          <span className="text-amber-500 mr-2">{data.year}</span>
          {data.make} {data.model} {data.trim}
        </div>
        <p className="font-condensed text-base sm:text-xl font-black tracking-wider uppercase mt-1 opacity-90">
          {data.subheadline}
        </p>
      </div>

      {/* GIANT PRICE BILLBOARD */}
      <div className="relative z-10 my-auto py-2">
        <div
          className="py-4 px-6 rounded-2xl border-4 inline-block w-full max-w-xl shadow-xl"
          style={{
            backgroundColor: theme.badgeBg,
            borderColor: theme.border,
            color: theme.badgeText,
          }}
        >
          <div className="font-bebas text-6xl sm:text-8xl md:text-9xl font-black tracking-tight leading-none text-amber-400">
            {data.price}
          </div>
          <div className="font-oswald text-base sm:text-2xl font-black tracking-widest uppercase text-white mt-1">
            {data.priceNote}
          </div>
        </div>

        {/* 4 Essential Specs */}
        <div className="mt-3 flex flex-wrap justify-center gap-2 sm:gap-4 font-oswald text-sm sm:text-lg font-black uppercase">
          <span className="bg-black/10 px-3 py-1 rounded border border-current/20">{data.engine}</span>
          <span className="bg-black/10 px-3 py-1 rounded border border-current/20">{data.transmission}</span>
          <span className="bg-black/10 px-3 py-1 rounded border border-current/20">{data.brakes}</span>
          <span className="bg-black/10 px-3 py-1 rounded border border-current/20">3 OWNERS</span>
        </div>
      </div>

      {/* GIANT QR CODE & PHONE NUMBER */}
      <div className="relative z-10 border-t-4 pt-3" style={{ borderColor: theme.border }}>
        <div className="flex items-center justify-around gap-4">
          <div className="flex flex-col items-center">
            <div className="bg-white p-2 rounded-xl border-4 border-black shadow-lg">
              <QRCodeRenderer
                value={data.websiteUrl}
                customImage={data.customQrDataUrl}
                size={130}
                centerText="SCAN"
              />
            </div>
            <div className="font-bebas text-xs sm:text-sm font-bold tracking-wider mt-1 flex items-center gap-1">
              <ArrowDown className="w-3 h-3 text-amber-500" /> SCAN FOR 30+ PHOTOS <ArrowDown className="w-3 h-3 text-amber-500" />
            </div>
          </div>

          <div className="flex flex-col text-left">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider opacity-80">
              {data.phoneLabel}:
            </span>
            <span className="font-bebas text-3xl sm:text-5xl md:text-6xl font-black text-amber-500 leading-none">
              <Phone className="inline w-7 h-7 sm:w-9 sm:h-9 mr-1" />
              {data.phone}
            </span>
            <span className="font-mono text-xs sm:text-sm font-bold opacity-80 mt-1">
              {data.websiteUrl.replace(/^https?:\/\//, '')}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
