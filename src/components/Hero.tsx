import React from 'react';
import { motion } from 'framer-motion';
import { PotLogo } from './PotLogo';

export const Hero: React.FC = () => {
  const handleScrollToShop = () => {
    const shopElement = document.getElementById('shop');
    if (shopElement) {
      const yOffset = -80;
      const y = shopElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen flex items-center overflow-hidden bg-brand-charcoal">
      {/* Background Banner with zoom animation */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('/images/hero_bg_clean.png')` }}
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.6 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
      />

      {/* Luxury Red & Black Vignette Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-charcoal via-brand-charcoal/80 to-transparent md:bg-gradient-to-r" />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal via-transparent to-brand-charcoal/30" />

      {/* Hero Content Container */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full z-10 text-brand-cream">
        <div className="max-w-2xl">
          {/* Logo and Tag */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6"
          >
            <PotLogo className="h-16 w-16 sm:h-20 sm:w-20 filter drop-shadow-md text-brand-gold" />
            <div className="hidden sm:block h-12 w-[1px] bg-brand-gold/30" />
            <div className="flex flex-col justify-center">
              <span className="text-xs sm:text-sm tracking-wider font-semibold text-brand-gold font-sans uppercase">
                Est. 1998
              </span>
              <span className="text-xs sm:text-sm tracking-wider font-semibold text-brand-goldLight opacity-85 font-sans">
                Godavari Traditional
              </span>
            </div>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="font-serif text-5xl sm:text-7xl font-bold tracking-tight mb-2 leading-tight"
          >
            Pickle <span className="gold-text-gradient">Mart</span>
          </motion.h1>

          {/* Telugu Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-lg sm:text-2xl font-semibold tracking-wider text-brand-goldLight mb-6 font-sans"
          >
            భీమవరం ఊరగాయ పచ్చళ్లు
          </motion.p>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="font-sans text-base sm:text-xl text-brand-cream/80 mb-8 max-w-lg leading-relaxed font-light"
          >
            Authentic Homemade Andhra Flavors Delivered Fresh. Experience the rich, traditional heritage of Godavari spices and pickles crafted with love.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="flex flex-wrap gap-4"
          >
            <button
              onClick={handleScrollToShop}
              className="px-8 py-3.5 rounded-full red-gradient text-sm font-semibold tracking-wider hover:opacity-95 transition-all duration-300 shadow-lg hover:shadow-brand-red/20 font-sans cursor-pointer"
            >
              Shop Now
            </button>
            <button
              onClick={() => {
                const aboutElement = document.getElementById('about');
                if (aboutElement) {
                  const y = aboutElement.getBoundingClientRect().top + window.pageYOffset - 80;
                  window.scrollTo({ top: y, behavior: 'smooth' });
                }
              }}
              className="px-8 py-3.5 rounded-full border border-brand-gold/30 bg-brand-cream/5 text-brand-cream hover:bg-brand-cream/10 text-sm font-semibold tracking-wider transition-all duration-300 font-sans cursor-pointer"
            >
              Our Story
            </button>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center cursor-pointer z-10"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        onClick={handleScrollToShop}
      >
        <span className="text-[10px] uppercase tracking-widest text-brand-gold opacity-60 font-semibold mb-2">
          Scroll Down
        </span>
        <div className="w-5 h-9 rounded-full border border-brand-gold/30 flex justify-center pt-1.5">
          <div className="w-1 h-2 bg-brand-gold rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};
