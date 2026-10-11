import React from 'react';
import { CarSignData } from '../../types';
import { COLOR_THEME_CONFIG } from '../../data/initialCougarData';
import { QRCodeRenderer } from '../QRCodeRenderer';
import { CougarSilhouette } from '../CarIcons';
import { Phone, Globe, FileText, CheckCircle2 } from 'lucide-react';

interface TemplateProps {
  data: CarSignData;
  fontScale?: number;
}

export const HeritageMonroneyTemplate: React.FC<TemplateProps> = ({
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
      {/* Vintage Showroom Double Frame */}
      {data.showBorders && (
        <div
          className="absolute inset-2 sm:inset-3 border-4 border-double pointer-events-none"
          style={{ borderColor: theme.border }}
        />
      )}

      {/* TOP: SHOWROOM WINDOW STICKER MASTHEAD */}
      <div className="relative z-10 border-b-2 pb-2" style={{ borderColor: theme.border }}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <CougarSilhouette className="w-8 h-4 opacity-80" color={theme.text} />
            <span className="font-bebas text-xs sm:text-sm tracking-widest uppercase">
              MERCURY DIVISION &bull; DEARBORN, MICHIGAN
            </span>
          </div>
          <span className="font-bebas text-xs sm:text-sm tracking-widest uppercase bg-black/10 px-2 py-0.5 rounded">
            OFFICIAL WINDOW SPECIFICATION
          </span>
        </div>

        <div className="text-center mt-1">
          <div className="font-bebas text-xs tracking-widest text-amber-500 font-bold uppercase">
            FLAGSHIP PERSONAL LUXURY MUSCLE
          </div>
          <h1 className="font-bebas text-4xl sm:text-6xl font-black uppercase tracking-wide leading-none">
            {data.year} {data.make} {data.model} <span className="text-amber-500">{data.trim}</span>
          </h1>
          <div className="font-condensed text-xs sm:text-sm font-semibold uppercase tracking-wider opacity-90">
            {data.subheadline}
          </div>
        </div>
      </div>

      {/* MONRONEY EQUIPMENT LEDGER & SPECS */}
      <div className="relative z-10 my-auto py-2 space-y-2">
        <div
          className="p-3 rounded border shadow-sm"
          style={{
            backgroundColor: isDark ? '#18181B' : '#FFFFFF',
            borderColor: theme.border,
            color: isDark ? '#FFFFFF' : '#000000',
          }}
        >
          <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-xs border-b pb-2 mb-2 font-mono">
            <div><span className="font-bold opacity-70">ENGINE:</span> {data.engine}</div>
            <div><span className="font-bold opacity-70">TRANS:</span> {data.transmission}</div>
            <div><span className="font-bold opacity-70">BRAKES:</span> {data.brakes}</div>
            <div><span className="font-bold opacity-70">STEERING:</span> {data.steering}</div>
            <div><span className="font-bold opacity-70">ROOF:</span> {data.roof}</div>
            <div><span className="font-bold opacity-70">WHEELS:</span> {data.wheels}</div>
          </div>

          <div className="space-y-1">
            <div className="text-[10px] uppercase font-bold tracking-wider text-amber-600 flex items-center gap-1">
              <FileText className="w-3 h-3" /> VERIFIED PROVENANCE &amp; EQUIPMENT
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 text-[11px] font-medium">
              <div className="flex items-center gap-1.5"><CheckCircle2 className="w-3 h-3 text-amber-500 shrink-0" /> 3 Owners: Orig. Oregon Engineer (47 yrs)</div>
              <div className="flex items-center gap-1.5"><CheckCircle2 className="w-3 h-3 text-amber-500 shrink-0" /> West Coast Classic Cougars "Pearl" Mule</div>
              <div className="flex items-center gap-1.5"><CheckCircle2 className="w-3 h-3 text-amber-500 shrink-0" /> Sequential Rear Turn Signals (Working)</div>
              <div className="flex items-center gap-1.5"><CheckCircle2 className="w-3 h-3 text-amber-500 shrink-0" /> Vacuum Hidden Headlight Doors</div>
              <div className="flex items-center gap-1.5"><CheckCircle2 className="w-3 h-3 text-amber-500 shrink-0" /> Full Rallye Gauges &amp; Clock Restored</div>
              <div className="flex items-center gap-1.5"><CheckCircle2 className="w-3 h-3 text-amber-500 shrink-0" /> Documentation &amp; Shop Manual Included</div>
            </div>
          </div>
        </div>

        {/* Total Price Callout */}
        <div
          className="p-2 sm:p-3 rounded border-2 flex items-center justify-between"
          style={{
            backgroundColor: theme.badgeBg,
            color: theme.badgeText,
            borderColor: theme.border,
          }}
        >
          <div>
            <div className="text-[10px] uppercase font-bold tracking-widest text-amber-300">
              OFFERED DIRECT &bull; PRIVATE PARTY SALE
            </div>
            <div className="font-bebas text-3xl sm:text-5xl font-black text-amber-400 leading-none">
              TOTAL: {data.price}
            </div>
          </div>
          <div className="text-right">
            <span className="bg-amber-400 text-black px-2 py-0.5 rounded font-oswald text-xs sm:text-sm font-bold uppercase block">
              {data.priceNote}
            </span>
            <span className="text-[10px] opacity-75 font-mono">{data.location}</span>
          </div>
        </div>
      </div>

      {/* FOOTER: QR CODE TO DIGITAL ARCHIVE & CONTACT */}
      <div className="relative z-10 pt-2 border-t-2" style={{ borderColor: theme.border }}>
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="bg-white p-1 rounded border-2 border-black">
              <QRCodeRenderer
                value={data.websiteUrl}
                customImage={data.customQrDataUrl}
                size={105}
                centerText="PROMO"
              />
            </div>
            <div>
              <div className="font-bebas text-sm sm:text-base tracking-wide uppercase leading-tight font-bold">
                SCAN FOR VIDEO &amp; 30+ DETAIL PHOTOS
              </div>
              <div className="font-mono text-[10px] opacity-80 flex items-center gap-1">
                <Globe className="w-3 h-3" />
                {data.websiteUrl.replace(/^https?:\/\//, '')}
              </div>
              <div className="text-[10px] opacity-75 mt-0.5">
                Full photo gallery, video tour, undercarriage photos &amp; inquiry form.
              </div>
            </div>
          </div>

          <div className="text-right">
            <div className="text-[10px] uppercase font-bold opacity-80">
              DIRECT INQUIRIES:
            </div>
            <div className="font-bebas text-2xl sm:text-3xl font-black text-amber-400 flex items-center justify-end gap-1">
              <Phone className="w-4 h-4" />
              {data.phone}
            </div>
            <div className="text-[10px] opacity-75">
              Contact: {data.sellerName}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
