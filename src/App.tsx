import React, { useState, useRef } from 'react';
import { INITIAL_COUGAR_DATA } from './data/initialCougarData';
import { CarSignData } from './types';
import { SignContainer } from './components/SignContainer';
import { SignCustomizer } from './components/SignCustomizer';
import { WindowSimulator } from './components/WindowSimulator';
import { PlacementTipsModal } from './components/PlacementTipsModal';
import { CougarSilhouette } from './components/CarIcons';
import { toPng } from 'html-to-image';
import {
  Printer,
  Download,
  Eye,
  Sliders,
  Sparkles,
  ExternalLink,
  HelpCircle,
  RotateCcw,
  ZoomIn,
  ZoomOut,
  Maximize2
} from 'lucide-react';

export default function App() {
  const [data, setData] = useState<CarSignData>(INITIAL_COUGAR_DATA);
  const [viewMode, setViewMode] = useState<'sheet' | 'window'>('sheet');
  const [isTipsOpen, setIsTipsOpen] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const [previewZoom, setPreviewZoom] = useState(1.0);

  const signRef = useRef<HTMLDivElement>(null);

  // Trigger high-res browser print
  const handlePrint = () => {
    window.print();
  };

  // Download high-resolution PNG of the sign
  const handleDownload = async () => {
    const el = document.getElementById('printable-sign-card');
    if (!el) return;
    try {
      setIsDownloading(true);
      const dataUrl = await toPng(el, {
        quality: 0.98,
        pixelRatio: 3, // 3x ultra-sharp resolution for printing
      });
      const link = document.createElement('a');
      link.download = `Cougar-XR7-ForSale-Sign-${data.template}.png`;
      link.href = dataUrl;
      link.click();
    } catch (err) {
      console.error('Error generating image', err);
    } finally {
      setIsDownloading(false);
    }
  };

  // Reset to original Cougar XR-7 defaults
  const handleReset = () => {
    if (confirm('Reset all values to the verified 1967 Cougar XR-7 defaults?')) {
      setData(INITIAL_COUGAR_DATA);
    }
  };

  return (
    <div className="min-h-screen bg-stone-950 text-stone-100 flex flex-col font-sans">
      {/* TOP APPLICATION HEADER (Hidden during print) */}
      <header className="no-print bg-stone-900 border-b border-stone-800 sticky top-0 z-40 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex flex-wrap items-center justify-between gap-3">
          {/* Logo & Car Title */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center shadow-lg border border-amber-400/40">
              <CougarSilhouette className="w-7 h-4 text-black" color="#000000" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="font-bebas text-2xl tracking-wider text-white leading-none">
                  CLASSIC CAR WINDOW SIGN STUDIO
                </h1>
                <span className="bg-amber-500/20 text-amber-400 border border-amber-500/30 text-[10px] px-2 py-0.5 rounded font-bold uppercase tracking-wider">
                  1967 Cougar XR-7
                </span>
              </div>
              <p className="text-stone-400 text-xs">
                Distant-view window sign with QR code for{' '}
                <a
                  href="https://robkalafate.github.io/cougar-xr7/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-amber-400 hover:underline inline-flex items-center gap-0.5"
                >
                  robkalafate.github.io/cougar-xr7
                  <ExternalLink className="w-2.5 h-2.5" />
                </a>
              </p>
            </div>
          </div>

          {/* Action Toolbar */}
          <div className="flex items-center gap-2">
            {/* View Mode Toggle */}
            <div className="bg-stone-950 p-1 rounded-xl border border-stone-800 flex items-center text-xs">
              <button
                onClick={() => setViewMode('sheet')}
                className={`px-3 py-1.5 rounded-lg font-bold flex items-center gap-1.5 transition-all ${
                  viewMode === 'sheet'
                    ? 'bg-amber-500 text-black shadow'
                    : 'text-stone-400 hover:text-white'
                }`}
              >
                <Sliders className="w-3.5 h-3.5" />
                <span>Sign Sheet</span>
              </button>
              <button
                onClick={() => setViewMode('window')}
                className={`px-3 py-1.5 rounded-lg font-bold flex items-center gap-1.5 transition-all ${
                  viewMode === 'window'
                    ? 'bg-amber-500 text-black shadow'
                    : 'text-stone-400 hover:text-white'
                }`}
              >
                <Eye className="w-3.5 h-3.5" />
                <span>Car Window Sim</span>
              </button>
            </div>

            {/* Print Sign Button */}
            <button
              onClick={handlePrint}
              className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-extrabold text-xs tracking-wider uppercase flex items-center gap-2 shadow-lg transition-all cursor-pointer"
              title="Print sign directly with exact margin scaling"
            >
              <Printer className="w-4 h-4" />
              <span>Print Sign</span>
            </button>

            {/* Download PNG Button */}
            <button
              onClick={handleDownload}
              disabled={isDownloading}
              className="px-3.5 py-2 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-200 border border-stone-700 font-bold text-xs flex items-center gap-1.5 transition-colors cursor-pointer disabled:opacity-50"
              title="Download high-resolution image file for local printing"
            >
              <Download className="w-4 h-4" />
              <span className="hidden sm:inline">
                {isDownloading ? 'Exporting...' : 'Save PNG'}
              </span>
            </button>

            {/* Mounting Tips */}
            <button
              onClick={() => setIsTipsOpen(true)}
              className="p-2 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-300 border border-stone-700 transition-colors"
              title="Classic car window sign mounting guide"
            >
              <HelpCircle className="w-4 h-4" />
            </button>

            {/* Reset */}
            <button
              onClick={handleReset}
              className="p-2 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-400 hover:text-stone-200 border border-stone-700 transition-colors"
              title="Reset to original Cougar XR-7 defaults"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </div>
      </header>

      {/* MAIN TWO-COLUMN WORKSPACE (Hidden during print) */}
      <main className="no-print flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* LEFT / CENTER COLUMN: PREVIEW WORKSPACE */}
        <div className="lg:col-span-7 flex flex-col items-center">
          {/* Quick Info & Zoom Bar */}
          <div className="w-full flex items-center justify-between bg-stone-900/90 border border-stone-800 px-4 py-2.5 rounded-xl mb-4 text-xs">
            <div className="flex items-center gap-2 text-stone-300">
              <span className="font-bold uppercase tracking-wider text-amber-400">
                {data.pageSize.toUpperCase()} &bull; {data.orientation.toUpperCase()}
              </span>
              <span className="text-stone-500">&bull;</span>
              <span className="text-stone-400 truncate max-w-[200px]">
                Template: {data.template.toUpperCase()}
              </span>
            </div>

            {/* Zoom Controls */}
            {viewMode === 'sheet' && (
              <div className="flex items-center gap-1 bg-stone-950 px-2 py-1 rounded-lg border border-stone-800">
                <button
                  onClick={() => setPreviewZoom(Math.max(0.6, previewZoom - 0.1))}
                  className="p-1 hover:text-white text-stone-400 transition-colors"
                  title="Zoom Out"
                >
                  <ZoomOut className="w-3.5 h-3.5" />
                </button>
                <span className="font-mono text-[11px] text-stone-300 px-1">
                  {Math.round(previewZoom * 100)}%
                </span>
                <button
                  onClick={() => setPreviewZoom(Math.min(1.4, previewZoom + 0.1))}
                  className="p-1 hover:text-white text-stone-400 transition-colors"
                  title="Zoom In"
                >
                  <ZoomIn className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => setPreviewZoom(1.0)}
                  className="p-1 hover:text-white text-stone-400 transition-colors ml-1"
                  title="Reset Zoom"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                </button>
              </div>
            )}
          </div>

          {/* VIEWPORT AREA */}
          {viewMode === 'sheet' ? (
            <div className="w-full bg-stone-900 border border-stone-800 rounded-2xl p-4 sm:p-8 flex items-center justify-center overflow-auto min-h-[580px] shadow-inner">
              <div
                style={{
                  transform: `scale(${previewZoom})`,
                  transformOrigin: 'top center',
                  transition: 'transform 0.15s ease-out',
                }}
              >
                <SignContainer data={data} />
              </div>
            </div>
          ) : (
            <div className="w-full">
              <WindowSimulator themeName={data.theme}>
                <SignContainer data={data} />
              </WindowSimulator>
            </div>
          )}

          {/* Distant Visibility Guidance Banner */}
          <div className="w-full mt-4 p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-200 text-xs flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
              <span>
                <strong>Distant View Pro-Tip:</strong> High-contrast Day-Glo Yellow or Inverted Tint-Buster cards are proven to be readable 3x further than plain white paper through tinted automotive glass.
              </span>
            </div>
            <button
              onClick={() => setIsTipsOpen(true)}
              className="underline font-bold hover:text-white shrink-0 ml-2"
            >
              Read Guide
            </button>
          </div>
        </div>

        {/* RIGHT COLUMN: CONTROL PANEL */}
        <div className="lg:col-span-5 h-full">
          <SignCustomizer
            data={data}
            onChange={setData}
            onOpenTips={() => setIsTipsOpen(true)}
          />
        </div>
      </main>

      {/* DEDICATED PRINT CONTAINER (Active ONLY during browser print) */}
      <div className="hidden print:block print-area">
        <SignContainer data={data} forPrint={true} />
      </div>

      {/* FOOTER */}
      <footer className="no-print border-t border-stone-800 py-4 text-center text-xs text-stone-500">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-between items-center gap-2">
          <span>
            Classic Car Window For Sale Sign Studio &bull; 1967 Mercury Cougar XR-7 &bull; San Francisco Bay Area
          </span>
          <a
            href="https://robkalafate.github.io/cougar-xr7/"
            target="_blank"
            rel="noreferrer"
            className="text-stone-400 hover:text-amber-400 transition-colors flex items-center gap-1"
          >
            Visit Website &amp; Gallery <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </footer>

      {/* Mounting Guidance Modal */}
      <PlacementTipsModal
        isOpen={isTipsOpen}
        onClose={() => setIsTipsOpen(false)}
      />
    </div>
  );
}
