import React from 'react';

interface PotLogoProps {
  className?: string;
}

export const PotLogo: React.FC<PotLogoProps> = ({ className = "h-8 w-8" }) => {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Pot Shadow */}
      <ellipse cx="50" cy="88" rx="20" ry="4" fill="rgba(0,0,0,0.15)" />
      {/* Pot Body */}
      <path d="M26 50 C26 72 36 84 50 84 C64 84 74 72 74 50 C74 42 68 34 50 34 C32 34 26 42 26 50 Z" fill="url(#potGrad)" />
      {/* Pot Lid (Red cloth) */}
      <path d="M33 34 C33 26 40 22 50 22 C60 22 67 26 67 34 C67 36 65 38 60 38 C56 38 54 36 50 36 C46 36 44 38 40 38 C35 38 33 36 33 34 Z" fill="#C1272D" stroke="#9E0B0F" strokeWidth="1" />
      {/* Pot Cap */}
      <path d="M42 22 C42 16 46 14 50 14 C54 14 58 16 58 22 Z" fill="#C1272D" />
      {/* Rope */}
      <rect x="34" y="32" width="32" height="3" rx="1.5" fill="#8C6239" />
      {/* Bow loops and hanging strings */}
      <path d="M38 33 C33 25 28 28 35 33 C38 35 38 31 38 33" stroke="#8C6239" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <path d="M38 33 C33 39 30 35 38 33" stroke="#8C6239" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <path d="M38 33 C36 40 32 45 30 45" stroke="#8C6239" strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M38 33 C38 42 35 48 34 46" stroke="#8C6239" strokeWidth="2" fill="none" strokeLinecap="round" />
      <defs>
        <linearGradient id="potGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FDB913" />
          <stop offset="100%" stopColor="#F58220" />
        </linearGradient>
      </defs>
    </svg>
  );
};
