import React, { useEffect, useState } from 'react';
import QRCode from 'qrcode';

interface QRCodeRendererProps {
  value: string;
  size?: number;
  customImage?: string;
  centerText?: string;
  className?: string;
  quietZone?: boolean;
}

export const QRCodeRenderer: React.FC<QRCodeRendererProps> = ({
  value,
  size = 220,
  customImage,
  centerText = 'SCAN',
  className = '',
  quietZone = true,
}) => {
  const [svgMarkup, setSvgMarkup] = useState<string>('');

  useEffect(() => {
    if (customImage) {
      // Custom image overrides generated SVG
      return;
    }

    try {
      QRCode.toString(
        value,
        {
          type: 'svg',
          errorCorrectionLevel: 'H', // High error correction (30% redundancy) for window glare tolerance
          margin: quietZone ? 2 : 1,
          color: {
            dark: '#000000',
            light: '#FFFFFF',
          },
        },
        (err, string) => {
          if (!err && string) {
            setSvgMarkup(string);
          }
        }
      );
    } catch {
      // Fallback
    }
  }, [value, customImage, quietZone]);

  if (customImage) {
    return (
      <div
        className={`relative flex items-center justify-center bg-white p-2 rounded-lg border-2 border-black/80 shadow-md ${className}`}
        style={{ width: size, height: size }}
      >
        <img
          src={customImage}
          alt="QR Code to website"
          className="w-full h-full object-contain"
        />
      </div>
    );
  }

  return (
    <div
      className={`relative flex items-center justify-center bg-white p-2 rounded-lg border-2 border-black shadow-md ${className}`}
      style={{ width: size, height: size }}
    >
      {svgMarkup ? (
        <div
          className="w-full h-full [&>svg]:w-full [&>svg]:h-full"
          dangerouslySetInnerHTML={{ __html: svgMarkup }}
        />
      ) : (
        <div className="w-full h-full bg-stone-100 flex items-center justify-center text-xs text-stone-500">
          Generating QR...
        </div>
      )}

      {/* Center Callout Badge for Higher Scanning Intuition */}
      {centerText && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="bg-white border-2 border-black px-1.5 py-0.5 rounded shadow-sm">
            <span className="font-bebas text-black text-xs font-bold tracking-wider leading-none">
              {centerText}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};
