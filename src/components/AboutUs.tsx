import React from 'react';
import { motion } from 'framer-motion';

export const AboutUs: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-[#FCFAF6] relative overflow-hidden">
      {/* Decorative background circle */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 rounded-full bg-brand-gold/3 blur-3xl" />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left Column: Story Images */}
          <motion.div
            className="w-full lg:w-1/2 flex gap-4"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Main large image */}
            <div className="w-2/3 aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl relative bg-brand-red/5">
              <img
                src="/images/avakaya_pickle.png"
                alt="Traditional Andhra Pickle Jar"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-brand-charcoal/10" />
            </div>
            
            {/* Small stacked image and decorative stamp */}
            <div className="w-1/3 flex flex-col gap-4 justify-between">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-xl bg-brand-red/5">
                <img
                  src="/images/chicken_pickle.png"
                  alt="Traditional Cooking Spices"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Year badge */}
              <div className="p-6 bg-brand-red text-brand-cream rounded-2xl flex flex-col items-center justify-center text-center shadow-lg border border-brand-gold/15">
                <span className="font-serif text-3xl font-bold text-brand-gold">25+</span>
                <span className="text-[10px] uppercase font-bold tracking-widest text-brand-cream/80 mt-1">
                  Years of Flavor
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Story Text */}
          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs uppercase tracking-[0.25em] text-brand-gold font-bold font-sans">
              Our Legacy
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold font-serif text-brand-charcoal mt-2 mb-6">
              The Story of Pickle Mart Bhimavaram
            </h2>
            
            <div className="space-y-6 font-sans text-brand-charcoal/80 leading-relaxed font-light text-base">
              <p>
                Nestled in the heart of the fertile Godavari delta, the town of <strong className="font-medium text-brand-charcoal">Bhimavaram</strong> has long been celebrated as the culinary capital of Andhra Pradesh, famous for its rich non-vegetarian delicacies and bold traditional food preparation.
              </p>
              <p>
                Our journey began over two decades ago in a humble home kitchen. Driven by a passion to keep traditional tastes alive, we started preparing small-batch pickles using heirloom family recipes passed down by our grandmothers. Every recipe relies on time-tested ratios of ingredients, pounded by hand using stone grinders.
              </p>
              <p>
                We do not believe in shortcuts. Our mangoes are plucked from local orchards, sliced cleanly, and pickled in pure wood-pressed peanut oil. Our non-vegetarian pickles feature hand-selected meats marinated in freshly roasted masalas. We strictly use zero preservatives, chemicals, or artificial colorings—each jar is preserved naturally through salt, spices, and oil.
              </p>
              <p className="border-l-2 border-brand-gold pl-4 italic text-brand-charcoal/90 text-sm">
                "Our promise is simple: we pack the warmth of an Andhra home and the authentic taste of tradition into every single jar we deliver."
              </p>
            </div>

            {/* Icons row */}
            <div className="mt-8 pt-8 border-t border-brand-gold/15 flex gap-8">
              <div className="flex items-center space-x-3">
                <span className="text-2xl">🌱</span>
                <div className="flex flex-col">
                  <span className="font-serif text-sm font-bold text-brand-charcoal">100% Organic</span>
                  <span className="text-[10px] text-brand-charcoal/50">Handpicked ingredients</span>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <span className="text-2xl">🏺</span>
                <div className="flex flex-col">
                  <span className="font-serif text-sm font-bold text-brand-charcoal">Clay-Pot Cured</span>
                  <span className="text-[10px] text-brand-charcoal/50">Slow curing process</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
