import React from 'react';
import { motion } from 'framer-motion';
import { PotLogo } from './PotLogo';

export const LoadingAnimation: React.FC = () => {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-brand-charcoal text-brand-cream"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
    >
      <div className="relative flex flex-col items-center">
        {/* Animated outer ring */}
        <motion.div
          className="h-28 w-28 rounded-full border-2 border-t-brand-gold border-r-transparent border-b-brand-gold border-l-transparent"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'linear' }}
        />
        
        {/* Inner logo/text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          >
            <PotLogo className="h-12 w-12" />
          </motion.div>
        </div>
        
        {/* Title */}
        <motion.h1
          className="mt-8 text-2xl font-semibold tracking-widest text-brand-gold font-serif"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          PICKLE MART
        </motion.h1>
        
        {/* Subtitle */}
        <motion.p
          className="mt-2 text-xs tracking-wider text-brand-goldLight opacity-70 font-sans"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          భీమవరం ఊరగాయ పచ్చళ్లు
        </motion.p>
      </div>
    </motion.div>
  );
};
