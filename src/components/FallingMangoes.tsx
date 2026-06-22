import React, { useState, useEffect } from 'react';

interface Mango {
  id: number;
  left: string;
  delay: string;
  duration: string;
  size: number;
  opacity: number;
  rotationStart: number;
  rotationEnd: number;
  sway: string;
}

export const FallingMangoes: React.FC = () => {
  const [mangoes, setMangoes] = useState<Mango[]>([]);

  useEffect(() => {
    // 12 elements for a balanced, premium background feel without crowding
    const generated: Mango[] = Array.from({ length: 12 }).map((_, i) => {
      const size = 40 + Math.random() * 35; // 40px to 75px for legibility of text
      const left = `${Math.random() * 100}%`;
      const delay = `${Math.random() * -20}s`; // Offset start to distribute them on screen instantly
      const duration = `${15 + Math.random() * 15}s`; // 15s to 30s fall speed
      const opacity = 0.12 + Math.random() * 0.16; // Subtle transparency
      const rotationStart = Math.random() * 40 - 20; // Subtle starting tilt
      const rotationEnd = rotationStart + (Math.random() > 0.5 ? 45 : -45); // Gentle rotation during fall
      const sway = `sway-${Math.floor(Math.random() * 3)}`; // Random sway type

      return {
        id: i,
        left,
        delay,
        duration,
        size,
        opacity,
        rotationStart,
        rotationEnd,
        sway
      };
    });
    setMangoes(generated);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden select-none">
      <style>{`
        @keyframes fall-and-sway-0 {
          0% {
            transform: translateY(-120px) translateX(0) rotate(-10deg);
          }
          50% {
            transform: translateY(50vh) translateX(25px) rotate(15deg);
          }
          100% {
            transform: translateY(105vh) translateX(0) rotate(-10deg);
          }
        }
        @keyframes fall-and-sway-1 {
          0% {
            transform: translateY(-120px) translateX(0) rotate(10deg);
          }
          50% {
            transform: translateY(50vh) translateX(-25px) rotate(-15deg);
          }
          100% {
            transform: translateY(105vh) translateX(0) rotate(10deg);
          }
        }
        @keyframes fall-and-sway-2 {
          0% {
            transform: translateY(-120px) translateX(0) rotate(-5deg);
          }
          50% {
            transform: translateY(50vh) translateX(15px) rotate(5deg);
          }
          100% {
            transform: translateY(105vh) translateX(-15px) rotate(-5deg);
          }
        }
      `}</style>
      {mangoes.map((mango) => {
        const animationName =
          mango.sway === 'sway-0'
            ? 'fall-and-sway-0'
            : mango.sway === 'sway-1'
            ? 'fall-and-sway-1'
            : 'fall-and-sway-2';

        return (
          <div
            key={mango.id}
            className="absolute top-0 will-change-transform"
            style={{
              left: mango.left,
              animationName: animationName,
              animationDuration: mango.duration,
              animationDelay: mango.delay,
              animationIterationCount: 'infinite',
              animationTimingFunction: 'linear',
              opacity: mango.opacity,
              width: `${mango.size}px`,
              height: `${mango.size * 1.2}px`, // Adjusted height to fit vertical bunch aspect ratio
            }}
          >
            <svg
              viewBox="0 0 120 140"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
            >
              <defs>
                {/* Mango Gradient */}
                <linearGradient id={`mango-grad-${mango.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#8BE63C" /> {/* Bright Yellow-Green */}
                  <stop offset="60%" stopColor="#4E9F3D" /> {/* Fresh Green */}
                  <stop offset="100%" stopColor="#2c5e0f" /> {/* Deep shadow green */}
                </linearGradient>
                
                {/* Leaf Gradient */}
                <linearGradient id={`leaf-grad-${mango.id}`} x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#A7D129" /> {/* Lime green highlight */}
                  <stop offset="100%" stopColor="#1E5128" /> {/* Dark leaf green */}
                </linearGradient>

                {/* Drop shadow for 3D depth */}
                <filter id={`shadow-${mango.id}`} x="-10%" y="-10%" width="120%" height="120%">
                  <feDropShadow dx="0" dy="2" stdDeviation="1.5" floodOpacity="0.15" />
                </filter>
              </defs>

              {/* Mango Bunch Group with subtle shadow */}
              <g filter={`url(#shadow-${mango.id})`}>
                {/* Leaves peeking from behind the badge */}
                <path d="M 60 45 C 40 30, 25 35, 18 45 C 30 55, 45 50, 60 45 Z" fill={`url(#leaf-grad-${mango.id})`} />
                <path d="M 60 45 C 80 30, 95 35, 102 45 C 90 55, 75 50, 60 45 Z" fill={`url(#leaf-grad-${mango.id})`} />
                <path d="M 60 45 C 60 20, 70 15, 75 10 C 80 25, 70 35, 60 45 Z" fill={`url(#leaf-grad-${mango.id})`} />
                
                {/* Stems */}
                <path d="M 60 45 Q 50 65 45 75" stroke="#5C3D2E" strokeWidth="2.5" strokeLinecap="round" />
                <path d="M 60 45 Q 70 65 75 75" stroke="#5C3D2E" strokeWidth="2.5" strokeLinecap="round" />
                <path d="M 60 45 L 60 85" stroke="#5C3D2E" strokeWidth="2.5" strokeLinecap="round" />

                {/* Mango 1 (Left) */}
                <path d="M 45 75 C 25 75, 20 100, 30 115 C 40 130, 60 120, 55 100 C 50 80, 55 75, 45 75 Z" fill={`url(#mango-grad-${mango.id})`} />
                {/* Highlight Mango 1 */}
                <path d="M 33 85 Q 38 80 43 85" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />

                {/* Mango 2 (Right) */}
                <path d="M 75 75 C 95 75, 100 100, 90 115 C 80 130, 60 120, 65 100 C 70 80, 65 75, 75 75 Z" fill={`url(#mango-grad-${mango.id})`} />
                {/* Highlight Mango 2 */}
                <path d="M 73 85 Q 78 80 83 85" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />

                {/* Mango 3 (Center Front) */}
                <path d="M 60 85 C 43 85, 38 110, 48 125 C 58 140, 78 130, 72 110 C 67 90, 73 85, 60 85 Z" fill={`url(#mango-grad-${mango.id})`} />
                {/* Highlight Mango 3 */}
                <path d="M 53 95 Q 58 90 63 95" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
              </g>

              {/* Cartoon Banner/Badge 'FRESH PICKLES' overlapping the top */}
              <g filter={`url(#shadow-${mango.id})`}>
                {/* Cloud-like rounded badge background */}
                <path 
                  d="M 25 35 C 10 35, 8 20, 25 15 C 20 2, 45 0, 60 10 C 75 0, 100 2, 95 15 C 112 20, 110 35, 95 35 C 105 50, 80 52, 60 45 C 40 52, 15 50, 25 35 Z" 
                  fill="#FCFAF6" 
                  stroke="#2c5e0f" 
                  strokeWidth="2.5" 
                  strokeLinejoin="round" 
                />
                
                {/* Text: FRESH */}
                <text 
                  x="60" 
                  y="22" 
                  textAnchor="middle" 
                  fontFamily="'Impact', 'Arial Black', sans-serif" 
                  fontWeight="900" 
                  fontSize="12.5" 
                  fill="#4E9F3D" 
                  stroke="#1E5128" 
                  strokeWidth="2" 
                  strokeLinejoin="round" 
                  paintOrder="stroke fill"
                >
                  FRESH
                </text>
                
                {/* Text: PICKLES */}
                <text 
                  x="60" 
                  y="36" 
                  textAnchor="middle" 
                  fontFamily="'Impact', 'Arial Black', sans-serif" 
                  fontWeight="900" 
                  fontSize="12.5" 
                  fill="#4E9F3D" 
                  stroke="#1E5128" 
                  strokeWidth="2" 
                  strokeLinejoin="round" 
                  paintOrder="stroke fill"
                >
                  PICKLES
                </text>
              </g>
            </svg>
          </div>
        );
      })}
    </div>
  );
};
