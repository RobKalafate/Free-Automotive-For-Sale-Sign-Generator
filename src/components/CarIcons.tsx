import React from 'react';

export const CougarSilhouette: React.FC<{ className?: string; color?: string }> = ({
  className = 'w-10 h-6',
  color = 'currentColor'
}) => (
  <svg
    viewBox="0 0 100 48"
    fill={color}
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Stylized muscular prowling cat / cougar emblem */}
    <path d="M96 22c-3-2-7-1-10 1-4 2-8 3-12 1-5-2-9-7-15-7-8 0-14 4-22 5-6 1-13-1-19 1-5 2-9 6-12 10-3 3-5 7-5 11 0 1 1 2 2 2h4c3 0 5-2 6-4 2-3 5-5 9-6 5-1 10 0 15-2 5-2 9-5 14-6 5-1 10 0 15 2 4 1 8 4 12 5 5 1 10-1 14-4 2-1 4-4 3-6-1-1-3-2-5-1z" />
    <path d="M42 20c-3-2-7-3-11-2-5 1-9 4-13 7-3 2-4 5-3 7 1 2 4 3 6 1 4-3 9-5 14-5 3 0 6 1 8 3 2 1 4 0 5-1 2-2 1-5-1-7-2-2-5-3-8-3z" />
    <circle cx="88" cy="18" r="1.5" />
  </svg>
);

export const CheckBadge: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.74-5.25z"
      clipRule="evenodd"
    />
  </svg>
);
