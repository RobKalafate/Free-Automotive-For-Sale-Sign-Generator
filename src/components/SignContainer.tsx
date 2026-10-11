import React from 'react';
import { CarSignData } from '../types';
import { HighwayHighVisTemplate } from './templates/HighwayHighVisTemplate';
import { MuscleClassicTemplate } from './templates/MuscleClassicTemplate';
import { HeritageMonroneyTemplate } from './templates/HeritageMonroneyTemplate';
import { UltraBoldMinimalistTemplate } from './templates/UltraBoldMinimalistTemplate';
import { LandscapeRearWindowTemplate } from './templates/LandscapeRearWindowTemplate';

interface SignContainerProps {
  data: CarSignData;
  forPrint?: boolean;
}

export const SignContainer: React.FC<SignContainerProps> = ({ data, forPrint = false }) => {
  // Determine dimensions based on paper size & orientation
  const isLandscape = data.orientation === 'landscape' || data.template === 'rear-banner';

  const getDimensions = () => {
    if (data.pageSize === 'tabloid') {
      return isLandscape ? { width: '1020px', height: '660px' } : { width: '660px', height: '1020px' };
    }
    if (data.pageSize === 'a4') {
      return isLandscape ? { width: '900px', height: '636px' } : { width: '636px', height: '900px' };
    }
    // Default US Letter
    return isLandscape ? { width: '880px', height: '680px' } : { width: '680px', height: '880px' };
  };

  const dims = getDimensions();

  const renderActiveTemplate = () => {
    switch (data.template) {
      case 'highway':
        return <HighwayHighVisTemplate data={data} fontScale={data.fontScale} />;
      case 'muscle':
        return <MuscleClassicTemplate data={data} fontScale={data.fontScale} />;
      case 'monroney':
        return <HeritageMonroneyTemplate data={data} fontScale={data.fontScale} />;
      case 'minimal':
        return <UltraBoldMinimalistTemplate data={data} fontScale={data.fontScale} />;
      case 'rear-banner':
        return <LandscapeRearWindowTemplate data={data} fontScale={data.fontScale} />;
      default:
        return <HighwayHighVisTemplate data={data} fontScale={data.fontScale} />;
    }
  };

  return (
    <div
      id="printable-sign-card"
      className={`relative bg-white shadow-2xl transition-all duration-200 overflow-hidden ${
        forPrint ? 'w-full h-full shadow-none' : 'rounded-sm'
      }`}
      style={{
        width: forPrint ? '100%' : dims.width,
        height: forPrint ? '100%' : dims.height,
        maxWidth: '100%',
        aspectRatio: isLandscape ? '11 / 8.5' : '8.5 / 11',
      }}
    >
      {/* Corner Crop / Tape Marks for window mounting */}
      {data.showCropMarks && (
        <div className="absolute inset-0 pointer-events-none z-30">
          {/* Top Left */}
          <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-stone-400" />
          {/* Top Right */}
          <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-stone-400" />
          {/* Bottom Left */}
          <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-stone-400" />
          {/* Bottom Right */}
          <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-stone-400" />
        </div>
      )}

      {/* Actual Template Contents */}
      <div className="w-full h-full">
        {renderActiveTemplate()}
      </div>
    </div>
  );
};
