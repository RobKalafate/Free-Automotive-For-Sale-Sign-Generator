import React, { useState } from 'react';
import { Eye, Sun, Car, ShieldAlert, CheckCircle2, ZoomIn, ZoomOut, Maximize2 } from 'lucide-react';

interface WindowSimulatorProps {
  children: React.ReactNode;
  themeName: string;
}

export const WindowSimulator: React.FC<WindowSimulatorProps> = ({ children, themeName }) => {
  const [distance, setDistance] = useState<'10ft' | '25ft' | '50ft'>('10ft');
  const [tintLevel, setTintLevel] = useState<number>(20); // 0, 20, 35, 50
  const [sunGlare, setSunGlare] = useState<boolean>(true);
  const [windowPosition, setWindowPosition] = useState<'quarter' | 'windshield' | 'rear'>('quarter');

  // Distance scale factors
  const scaleMap = {
    '10ft': 1.0,
    '25ft': 0.65,
    '50ft': 0.38,
  };

  const scale = scaleMap[distance];

  return (
    <div className="bg-stone-900 border border-stone-800 rounded-xl overflow-hidden shadow-2xl">
      {/* Simulation Controls Toolbar */}
      <div className="p-4 bg-stone-950/80 border-b border-stone-800 flex flex-wrap items-center justify-between gap-3 text-xs">
        {/* Distance Stepper */}
        <div className="flex items-center gap-1.5 bg-stone-900 p-1 rounded-lg border border-stone-800">
          <Eye className="w-4 h-4 text-amber-400 ml-1.5" />
          <span className="font-bold text-stone-300 mr-1">View Distance:</span>
          {(['10ft', '25ft', '50ft'] as const).map((d) => (
            <button
              key={d}
              onClick={() => setDistance(d)}
              className={`px-2.5 py-1 rounded font-bold transition-all ${
                distance === d
                  ? 'bg-amber-500 text-black shadow'
                  : 'text-stone-400 hover:text-white hover:bg-stone-800'
              }`}
            >
              {d === '10ft' && '10 ft (Sidewalk)'}
              {d === '25ft' && '25 ft (Across Street)'}
              {d === '50ft' && '50 ft (Drive-By)'}
            </button>
          ))}
        </div>

        {/* Tint Level Selector */}
        <div className="flex items-center gap-1.5 bg-stone-900 p-1 rounded-lg border border-stone-800">
          <Car className="w-4 h-4 text-cyan-400 ml-1.5" />
          <span className="font-bold text-stone-300 mr-1">Glass Tint:</span>
          {[0, 20, 35, 50].map((tint) => (
            <button
              key={tint}
              onClick={() => setTintLevel(tint)}
              className={`px-2 py-1 rounded font-semibold transition-all ${
                tintLevel === tint
                  ? 'bg-cyan-600 text-white shadow'
                  : 'text-stone-400 hover:text-white hover:bg-stone-800'
              }`}
            >
              {tint === 0 ? 'Clear (0%)' : `${tint}%`}
            </button>
          ))}
        </div>

        {/* Sun Glare Reflection Toggle */}
        <button
          onClick={() => setSunGlare(!sunGlare)}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border transition-all ${
            sunGlare
              ? 'bg-amber-500/20 text-amber-300 border-amber-500/40'
              : 'bg-stone-900 text-stone-400 border-stone-800 hover:text-white'
          }`}
          title="Toggle daylight reflection simulation"
        >
          <Sun className="w-3.5 h-3.5" />
          <span className="font-semibold">Sun Glare {sunGlare ? 'ON' : 'OFF'}</span>
        </button>
      </div>

      {/* Virtual Glass Viewport */}
      <div className="relative bg-gradient-to-b from-stone-950 via-stone-900 to-stone-950 min-h-[520px] p-6 sm:p-10 flex flex-col items-center justify-center overflow-hidden">
        {/* Car Window Frame Graphic */}
        <div className="relative max-w-full flex items-center justify-center">
          {/* Simulated Classic Car Window Chrome Trim & Rubber Gasket */}
          <div className="relative p-3.5 sm:p-5 rounded-2xl bg-stone-950 border-4 border-stone-700 shadow-[0_20px_50px_rgba(0,0,0,0.9)] ring-2 ring-stone-600/30">
            {/* Rubber Weatherstrip */}
            <div className="relative p-2.5 rounded-xl bg-neutral-900 border border-neutral-800">
              {/* Glass Layer */}
              <div className="relative overflow-hidden rounded-lg flex items-center justify-center">
                {/* Scaled Sign Container */}
                <div
                  className="transition-transform duration-300 ease-out origin-center"
                  style={{
                    transform: `scale(${scale})`,
                    transformOrigin: 'center center',
                  }}
                >
                  {children}
                </div>

                {/* Tint Overlay */}
                {tintLevel > 0 && (
                  <div
                    className="absolute inset-0 pointer-events-none transition-opacity duration-200"
                    style={{
                      backgroundColor: '#0a0d12',
                      opacity: tintLevel / 100 * 0.75, // Scaled realistic tint
                    }}
                  />
                )}

                {/* Simulated Glass Reflection & Sunlight Glare */}
                {sunGlare && (
                  <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-transparent via-white/10 to-white/20 mix-blend-overlay">
                    {/* Diagonal Glare Streaks */}
                    <div className="absolute -inset-full rotate-25 bg-gradient-to-r from-transparent via-white/15 to-transparent blur-md" />
                  </div>
                )}

                {/* Simulated Subtle Cougar Window Glass Logo in Corner */}
                <div className="absolute bottom-2 left-2 pointer-events-none opacity-20 text-[9px] font-mono text-white tracking-widest uppercase">
                  SAFETY GLASS &bull; DOT 18 AS-2
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Distance Indicator Badge */}
        <div className="mt-4 flex items-center gap-3">
          <div className="bg-stone-950/80 px-3 py-1.5 rounded-full border border-stone-800 text-stone-300 text-xs font-semibold flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Simulating {distance === '10ft' ? '10 feet (Walk-up)' : distance === '25ft' ? '25 feet (Across street)' : '50 feet (Passing car)'}
            &bull; Tint: {tintLevel}%
          </div>
        </div>
      </div>

      {/* Distance Readability Scorecard */}
      <div className="p-4 bg-stone-950 border-t border-stone-800 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
        <div className="flex items-start gap-2 p-2.5 rounded-lg bg-stone-900 border border-stone-800">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
          <div>
            <div className="font-bold text-stone-200">50ft Drive-By Legibility</div>
            <div className="text-stone-400 text-[11px] mt-0.5">
              High-impact bold headline &amp; price badge remain readable from passing lane.
            </div>
          </div>
        </div>

        <div className="flex items-start gap-2 p-2.5 rounded-lg bg-stone-900 border border-stone-800">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
          <div>
            <div className="font-bold text-stone-200">QR Code Camera Lock</div>
            <div className="text-stone-400 text-[11px] mt-0.5">
              Level-H error correction (30% redundancy) scans easily despite glass angle &amp; tint.
            </div>
          </div>
        </div>

        <div className="flex items-start gap-2 p-2.5 rounded-lg bg-stone-900 border border-stone-800">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
          <div>
            <div className="font-bold text-stone-200">Anti-Glare Contrast</div>
            <div className="text-stone-400 text-[11px] mt-0.5">
              Heavy block framing &amp; solid color blocks eliminate background interior clutter.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
