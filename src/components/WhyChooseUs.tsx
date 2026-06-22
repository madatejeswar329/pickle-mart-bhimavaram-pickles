import React from 'react';
import { motion } from 'framer-motion';

export const WhyChooseUs: React.FC = () => {
  const features = [
    {
      title: 'Homemade Recipes',
      description: 'Passed down through generations, our pickles preserve the original taste of grandmother’s kitchen.',
      icon: (
        <svg className="w-10 h-10 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
    },
    {
      title: 'Fresh Ingredients',
      description: 'Premium Guntur red chilies, hand-selected mangoes, and wood-pressed oils. No chemical preservatives.',
      icon: (
        <svg className="w-10 h-10 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m12.728 12.728l-.707.707M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: 'Traditional Andhra Taste',
      description: 'The authentic fiery, sour, and spiced taste unique to the Godavari delta region of Bhimavaram.',
      icon: (
        <svg className="w-10 h-10 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
    },
    {
      title: 'Hygienically Prepared',
      description: 'Prepared in a clean environment, maintaining zero moisture contact, and packed in glass jars for freshness.',
      icon: (
        <svg className="w-10 h-10 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0h1s3.38-1.08 5 0c1.45.97 2 4 2 4h-5M9 12v3a3 3 0 006 0v-3m-6 0h6m-6-3a3 3 0 016 0" />
        </svg>
      ),
    },
    {
      title: 'Fast Delivery',
      description: 'Carefully wrapped and shipped directly from our kitchen to your doorstep, keeping the flavor intact.',
      icon: (
        <svg className="w-10 h-10 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="why-us" className="py-24 bg-brand-cream bg-mandala relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            className="text-xs uppercase tracking-[0.25em] text-brand-gold font-bold font-sans"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            The Bhimavaram Standard
          </motion.span>
          <motion.h2
            className="text-4xl sm:text-5xl font-bold font-serif text-brand-charcoal mt-2 mb-4"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            Why Choose Our Homemade Pickles?
          </motion.h2>
          <motion.div
            className="h-1 w-20 bg-brand-gold mx-auto rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
          />
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              className="glassmorphism p-8 rounded-2xl flex flex-col items-center text-center shadow-premium hover:shadow-premium-hover transition-all duration-300 border border-brand-gold/10 hover:border-brand-gold/20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              whileHover={{ y: -5 }}
            >
              {/* Icon Container */}
              <div className="p-4 bg-brand-red/5 rounded-full mb-6 text-brand-red">
                {feature.icon}
              </div>
              <h3 className="font-serif text-lg font-bold text-brand-charcoal mb-3">
                {feature.title}
              </h3>
              <p className="font-sans text-sm text-brand-charcoal/70 leading-relaxed font-light">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
