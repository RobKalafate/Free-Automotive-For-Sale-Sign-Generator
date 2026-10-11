import React from 'react';
import { CarSignData } from '../../types';
import { COLOR_THEME_CONFIG } from '../../data/initialCougarData';
import { QRCodeRenderer } from '../QRCodeRenderer';
import { CougarSilhouette } from '../CarIcons';
import { Phone, Globe, Award, Sparkles, MapPin } from 'lucide-react';

interface TemplateProps {
  data: CarSignData;
  fontScale?: number;
}

export const HighwayHighVisTemplate: React.FC<TemplateProps> = ({
  data,
  fontScale = 1.0,
}) => {
  const theme = COLOR_THEME_CONFIG[data.theme];
  const isDark = data.theme === 'tint-buster' || data.theme === 'vintage-green';

  return (
    <div
      className="w-full h-full flex flex-col justify-between p-6 sm:p-8 select-none transition-colors duration-200 relative overflow-hidden"
      style={{
        backgroundColor: theme.bg,
        color: theme.text,
        transform: `scale(${fontScale})`,
        transformOrigin: 'top center',
      }}
    >
      {/* Heavy Exterior Framing Border for Window Glare Cut */}
      {data.showBorders && (
        <div
          className="absolute inset-3 sm:inset-4 border-4 sm:border-8 pointer-events-none rounded-xl"
          style={{ borderColor: theme.border }}
        />
      )}

      {/* TOP ZONE: ULTRA-DISTANT VISIBILITY (50+ FT) */}
      <div className="relative z-10 space-y-3">
        {/* Main "FOR SALE" Billboard Banner */}
        <div
          className="w-full py-3 sm:py-4 px-4 text-center rounded-lg shadow-md border-2"
          style={{
            backgroundColor: theme.badgeBg,
            color: theme.badgeText,
            borderColor: theme.border,
          }}
        >
          <div className="flex items-center justify-between px-2">
            <CougarSilhouette
              className="w-10 sm:w-14 h-5 sm:h-7 opacity-90 hidden xs:block"
              color={theme.badgeText}
            />
            <h1 className="font-bebas text-5xl sm:text-7xl md:text-8xl tracking-widest font-black leading-none uppercase drop-shadow-sm">
              FOR SALE
            </h1>
            <CougarSilhouette
              className="w-10 sm:w-14 h-5 sm:h-7 opacity-90 -scale-x-100 hidden xs:block"
              color={theme.badgeText}
            />
          </div>
        </div>

        {/* Vehicle Headline */}
        <div className="text-center pt-1">
          <div className="inline-block px-3 py-0.5 rounded font-oswald text-sm sm:text-base font-bold tracking-widest uppercase mb-1 bg-black/10 dark:bg-white/10">
            CLASSIC AMERICAN MUSCLE &middot; {data.location}
          </div>
          <h2 className="font-bebas text-4xl sm:text-6xl md:text-7xl font-bold tracking-wide uppercase leading-tight">
            <span className="text-red-600 dark:text-red-500 mr-2 sm:mr-3 font-black">
              {data.year}
            </span>
            {data.make} {data.model}{' '}
            <span className="underline decoration-4 decoration-amber-500 underline-offset-4">
              {data.trim}
            </span>
          </h2>
          <p className="font-condensed text-base sm:text-xl font-bold tracking-wider uppercase mt-1 opacity-90">
            {data.subheadline}
          </p>
        </div>
      </div>

      {/* MIDDLE ZONE: PROMINENT PRICE & KEY SPEC BADGES */}
      <div className="relative z-10 space-y-3 sm:space-y-4 my-auto py-2">
        {/* Giant Price Box */}
        <div
          className="p-3 sm:p-4 rounded-xl text-center border-4 shadow-lg flex flex-col sm:flex-row items-center justify-around gap-2"
          style={{
            backgroundColor: theme.cardBg,
            borderColor: theme.accent,
            color: isDark ? '#FFFFFF' : '#FFFFFF',
          }}
        >
          <div className="flex items-baseline gap-2">
            <span className="font-condensed text-xs sm:text-sm uppercase tracking-widest text-amber-400 font-bold">
              PRICE:
            </span>
            <span className="font-bebas text-5xl sm:text-7xl md:text-8xl font-black text-amber-400 tracking-tight leading-none">
              {data.price}
            </span>
          </div>
          {data.priceNote && (
            <div className="bg-amber-500 text-black px-3 py-1 rounded font-oswald text-sm sm:text-lg font-black tracking-wider uppercase shadow">
              {data.priceNote}
            </div>
          )}
        </div>

        {/* 4 Big Heavy-Duty Spec Badges */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
          <div
            className="p-2 sm:p-3 rounded-lg border-2 text-center shadow-sm"
            style={{
              backgroundColor: isDark ? '#1F2937' : '#FFFFFF',
              borderColor: theme.border,
              color: isDark ? '#FFFFFF' : '#000000',
            }}
          >
            <div className="text-[10px] sm:text-xs font-bold uppercase opacity-70">
              ENGINE
            </div>
            <div className="font-oswald text-base sm:text-xl font-extrabold uppercase truncate">
              {data.engine}
            </div>
          </div>

          <div
            className="p-2 sm:p-3 rounded-lg border-2 text-center shadow-sm"
            style={{
              backgroundColor: isDark ? '#1F2937' : '#FFFFFF',
              borderColor: theme.border,
              color: isDark ? '#FFFFFF' : '#000000',
            }}
          >
            <div className="text-[10px] sm:text-xs font-bold uppercase opacity-70">
              TRANSMISSION
            </div>
            <div className="font-oswald text-base sm:text-xl font-extrabold uppercase truncate">
              {data.transmission}
            </div>
          </div>

          <div
            className="p-2 sm:p-3 rounded-lg border-2 text-center shadow-sm"
            style={{
              backgroundColor: isDark ? '#1F2937' : '#FFFFFF',
              borderColor: theme.border,
              color: isDark ? '#FFFFFF' : '#000000',
            }}
          >
            <div className="text-[10px] sm:text-xs font-bold uppercase opacity-70">
              BRAKES &amp; STEERING
            </div>
            <div className="font-oswald text-base sm:text-xl font-extrabold uppercase truncate">
              {data.brakes}
            </div>
          </div>

          <div
            className="p-2 sm:p-3 rounded-lg border-2 text-center shadow-sm"
            style={{
              backgroundColor: isDark ? '#1F2937' : '#FFFFFF',
              borderColor: theme.border,
              color: isDark ? '#FFFFFF' : '#000000',
            }}
          >
            <div className="text-[10px] sm:text-xs font-bold uppercase opacity-70">
              OWNERSHIP
            </div>
            <div className="font-oswald text-base sm:text-xl font-extrabold uppercase truncate">
              {data.owners}
            </div>
          </div>
        </div>

        {/* Provenance Badge */}
        {data.provenanceBadge && (
          <div
            className="py-1.5 px-3 rounded-md text-center font-condensed font-extrabold text-xs sm:text-sm tracking-wider uppercase flex items-center justify-center gap-2 border"
            style={{
              backgroundColor: isDark ? '#374151' : 'rgba(0,0,0,0.85)',
              color: '#FBBF24',
              borderColor: '#FBBF24',
            }}
          >
            <Award className="w-4 h-4 text-amber-400 shrink-0" />
            <span>★ {data.provenanceBadge} ★</span>
            <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0" />
          </div>
        )}
      </div>

      {/* BOTTOM ZONE: WALK-UP DETAILS, QR CODE & DIRECT PHONE */}
      <div className="relative z-10 pt-2 border-t-2 border-current/20">
        <div className="grid grid-cols-12 gap-3 sm:gap-4 items-center">
          {/* High-Contrast Large QR Code Block */}
          <div className="col-span-5 sm:col-span-4 flex flex-col items-center justify-center">
            <div className="bg-white p-2 rounded-xl shadow-xl border-4 border-black">
              <QRCodeRenderer
                value={data.websiteUrl}
                customImage={data.customQrDataUrl}
                size={140}
                centerText="XR-7"
              />
            </div>
            <span className="font-oswald text-[10px] sm:text-xs font-black tracking-widest uppercase mt-1 text-center leading-tight">
              ▲ SCAN WITH CAMERA ▲
            </span>
          </div>

          {/* Actionable Information & Direct Contact */}
          <div className="col-span-7 sm:col-span-8 flex flex-col justify-between space-y-2">
            <div>
              <div className="font-bebas text-lg sm:text-2xl font-bold tracking-wide leading-tight">
                {data.qrCallout}
              </div>
              <div className="font-condensed text-xs sm:text-sm font-semibold opacity-80 flex items-center gap-1 mt-0.5">
                <Globe className="w-3.5 h-3.5 shrink-0" />
                <span className="truncate underline font-mono">
                  {data.websiteUrl.replace(/^https?:\/\//, '').replace(/\/$/, '')}
                </span>
              </div>
            </div>

            {/* Direct Phone Number Card */}
            <div
              className="p-2 sm:p-3 rounded-lg border-2 shadow-md flex items-center justify-between"
              style={{
                backgroundColor: theme.badgeBg,
                color: theme.badgeText,
                borderColor: theme.border,
              }}
            >
              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-full bg-amber-400 text-black">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 fill-current" />
                </div>
                <div>
                  <div className="text-[10px] sm:text-xs font-bold uppercase opacity-80 leading-none">
                    {data.phoneLabel} ({data.sellerName}):
                  </div>
                  <div className="font-bebas text-xl sm:text-3xl font-black tracking-wider leading-none mt-0.5">
                    {data.phone}
                  </div>
                </div>
              </div>
              <div className="hidden md:flex flex-col items-end text-right">
                <span className="text-[10px] font-bold uppercase opacity-75 flex items-center gap-1">
                  <MapPin className="w-3 h-3" /> Location
                </span>
                <span className="text-xs font-bold">{data.location}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
