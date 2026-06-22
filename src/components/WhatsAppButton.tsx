import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

export const WhatsAppButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const whatsappUrl = 'https://wa.me/919948942685?text=Hi%20Pickle%20Mart%20Bhimavaram%2C%20I%20have%20a%20query%20about%20your%20traditional%20foods.';

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      
      {/* Interactive Chat Box Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            transition={{ type: 'spring', damping: 20, stiffness: 180 }}
            className="w-[340px] sm:w-[360px] bg-[#FCFAF6] rounded-3xl overflow-hidden shadow-2xl border border-brand-gold/15 mb-4 flex flex-col"
          >
            {/* Header: Dark Red Gradient with Avatar */}
            <div className="red-gradient p-5 flex items-center justify-between text-brand-cream relative">
              <div className="flex items-center space-x-3.5">
                {/* Custom Avatar with Online status dot */}
                <div className="relative h-12 w-12 rounded-full bg-brand-cream flex items-center justify-center shadow border border-brand-gold/15">
                  <span className="font-serif text-xl font-black text-brand-red">P</span>
                  <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-emerald-500 border-2 border-[#FCFAF6] animate-pulse" />
                </div>
                
                {/* Header text */}
                <div className="flex flex-col">
                  <h4 className="font-serif text-base font-bold tracking-wide">
                    Pickle Mart Kitchen
                  </h4>
                  <span className="text-[10px] text-brand-goldLight opacity-85 font-sans font-medium">
                    Typically replies in under 5 minutes
                  </span>
                </div>
              </div>
              
              {/* Close Button on top-right */}
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-full hover:bg-brand-cream/10 text-brand-cream/80 hover:text-brand-cream transition-colors cursor-pointer"
                aria-label="Close chat window"
              >
                <X size={16} />
              </button>
            </div>

            {/* Chat Body Area (Cream background with grid pattern) */}
            <div className="p-5 bg-[#F5F2EB] bg-mandala space-y-4 max-h-[300px] overflow-y-auto">
              
              {/* Message 1: Welcome from Chef */}
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-brand-cream p-4 rounded-2xl rounded-tl-none shadow-sm border border-brand-gold/5 max-w-[90%]"
              >
                <span className="block text-[10px] font-bold uppercase tracking-wider text-brand-red mb-1 font-sans">
                  Pickle Mart Chef
                </span>
                <p className="font-sans text-xs text-brand-charcoal/95 leading-relaxed font-light">
                  Namaste! Welcome to Pickle Mart Bhimavaram. We are here to help you find pure, homemade pickles and traditional foods. What can we pack for you today? 🏺
                </p>
              </motion.div>

              {/* Message 2: Value proposition */}
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-brand-cream p-4 rounded-2xl rounded-tl-none shadow-sm border border-brand-gold/5 max-w-[90%]"
              >
                <p className="font-sans text-xs text-brand-charcoal/95 leading-relaxed font-light">
                  We prepare every jar fresh using wood-pressed oils and local spices. No preservatives. We customize spice levels upon request!
                </p>
              </motion.div>

            </div>

            {/* Footer Action Area */}
            <div className="p-4 bg-brand-cream border-t border-brand-gold/10">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="w-full py-3.5 rounded-xl bg-[#075E54] hover:bg-[#128C7E] text-brand-cream text-xs font-bold uppercase tracking-widest flex items-center justify-center space-x-2.5 transition-all duration-300 shadow-md hover:shadow-[#075E54]/10 block text-center"
              >
                {/* Mini WhatsApp Icon */}
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.46h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <span>Start Chat on WhatsApp</span>
              </a>
            </div>

          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Toggle Action Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className={`h-14 w-14 rounded-full flex items-center justify-center text-[#FCFAF6] shadow-2xl transition-colors focus:outline-none cursor-pointer relative ${
          isOpen ? 'bg-brand-red hover:bg-brand-redLight' : 'bg-[#25D366] hover:bg-[#20ba5a]'
        }`}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        aria-label={isOpen ? 'Close chat' : 'Open WhatsApp chat'}
      >
        {/* Pulsating ring (only when closed) */}
        {!isOpen && (
          <span className="absolute inset-0 rounded-full bg-[#25D366]/40 animate-ping -z-10" />
        )}

        {/* Dynamic Icon with rotation */}
        <motion.div
          key={isOpen ? 'close' : 'whatsapp'}
          initial={{ rotate: -90, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          exit={{ rotate: 90, opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="flex items-center justify-center"
        >
          {isOpen ? (
            <X size={24} />
          ) : (
            <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.46h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
          )}
        </motion.div>
      </motion.button>

    </div>
  );
};
