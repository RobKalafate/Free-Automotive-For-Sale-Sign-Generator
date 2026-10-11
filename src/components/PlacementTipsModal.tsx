import React from 'react';
import { X, ShieldAlert, CheckCircle2, Car, Sun, AlertTriangle, Printer } from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const PlacementTipsModal: React.FC<Props> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div className="bg-stone-900 border border-stone-700 text-stone-100 rounded-2xl max-w-2xl w-full p-6 shadow-2xl relative max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-stone-800 text-stone-400 hover:text-white transition-colors"
          aria-label="Close tips"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2.5 text-amber-400 font-bebas text-2xl tracking-wide">
          <Car className="w-6 h-6" />
          <span>CLASSIC CAR WINDOW SIGN MOUNTING GUIDE</span>
        </div>
        <p className="text-stone-400 text-xs mt-1">
          Proven techniques to maximize distance readability, prevent glass damage, and stay 100% street legal.
        </p>

        <div className="mt-5 space-y-4 text-xs sm:text-sm">
          {/* Tip 1 */}
          <div className="p-3.5 rounded-xl bg-stone-950 border border-stone-800 flex gap-3">
            <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-stone-200">1. Best Window Locations on a 1967 Cougar</h4>
              <p className="text-stone-400 mt-1 leading-relaxed">
                <strong className="text-stone-300">Passenger Rear Quarter Glass:</strong> The iconic rear quarter window on a 1967 Cougar XR-7 is at eye level for pedestrians on the sidewalk and does not roll down or interfere with door operation.
              </p>
              <p className="text-stone-400 mt-1 leading-relaxed">
                <strong className="text-stone-300">Lower Passenger Windshield (When Parked):</strong> Visible from across the street. Always remove or keep clear of the driver's forward field of view before driving.
              </p>
            </div>
          </div>

          {/* Tip 2 */}
          <div className="p-3.5 rounded-xl bg-stone-950 border border-stone-800 flex gap-3">
            <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-stone-200">2. Tape &amp; Glass Protection (Inside Mounting Only)</h4>
              <p className="text-stone-400 mt-1 leading-relaxed">
                Always tape from the <strong className="text-stone-300">inside</strong> using blue automotive or painter’s masking tape. Standard clear tape or exterior packing tape will melt in the sun, bake adhesive onto the glass, or pull off paint if taped to the car body.
              </p>
            </div>
          </div>

          {/* Tip 3 */}
          <div className="p-3.5 rounded-xl bg-stone-950 border border-stone-800 flex gap-3">
            <Sun className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-stone-200">3. Defeating Window Tint &amp; Heat Curling</h4>
              <p className="text-stone-400 mt-1 leading-relaxed">
                If the glass has tint or reflection, choose the <strong className="text-amber-300">Day-Glo Safety Yellow</strong> or <strong className="text-amber-300">Window Tint Buster (Inverted Black)</strong> theme. White paper creates glare, whereas contrast-framed blocks cut through UV tints.
              </p>
              <p className="text-stone-400 mt-1 leading-relaxed">
                Print on <strong className="text-stone-300">heavy cardstock (65 lb to 110 lb)</strong> or laminate. Thin 20 lb copy paper curls within 2 hours under windshield greenhouse heat.
              </p>
            </div>
          </div>

          {/* Tip 4 */}
          <div className="p-3.5 rounded-xl bg-stone-950 border border-stone-800 flex gap-3">
            <Printer className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-stone-200">4. QR Code Scanning Through Car Glass</h4>
              <p className="text-stone-400 mt-1 leading-relaxed">
                The QR codes generated here use <strong className="text-stone-300">Level-H Error Correction (30% redundancy)</strong>, meaning smartphones can scan the link even through glass reflections, slight road dust, or tint. Keep the camera 12–24 inches from the window.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-black font-bold text-xs uppercase tracking-wider transition-colors shadow"
          >
            Got It &bull; Back to Sign Maker
          </button>
        </div>
      </div>
    </div>
  );
};
