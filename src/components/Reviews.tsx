import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

export const Reviews: React.FC = () => {
  const testimonials = [
    {
      name: 'Ravi Teja K.',
      location: 'Hyderabad',
      review: 'The Boneless Chicken Pickle is absolute heaven. It has the perfect level of Godavari spice and the meat is so tender. Tastes exactly like home!',
      rating: 5,
      itemBought: 'Boneless Chicken Pickle',
    },
    {
      name: 'Padma Prasanna Y.',
      location: 'Bangalore',
      review: 'Being away from Bhimavaram, I always missed my mother’s Avakaya. This Bellam Avakaya brought back all those memories. Crisp mango pieces, pure ghee scent.',
      rating: 5,
      itemBought: 'Bellam Avakaya Pickle',
    },
    {
      name: 'Sai Krishna M.',
      location: 'Visakhapatnam',
      review: 'Tried their Atreyapuram Bellam Pootharekulu and Kobbari Karam. Exceeded my expectations! Packaging was excellent and the taste is highly authentic.',
      rating: 5,
      itemBought: 'Bellam Pootharekulu',
    },
    {
      name: 'Venkata Ramana P.',
      location: 'Chennai',
      review: 'The Prawns Pickle has the absolute best texture. Fresh Godavari prawns fried to crispiness and pickled in spicy mustard oil. Ordered twice already.',
      rating: 5,
      itemBought: 'Prawns Pickle',
    },
    {
      name: 'Anjali D.',
      location: 'Mumbai',
      review: 'Extremely hygienic preparation. You can tell they use premium cold-pressed oil because it has a clean taste. Nalla Karam podi goes amazing with idlis.',
      rating: 5,
      itemBought: 'Nalla Karam Podi',
    },
    {
      name: 'Srinivas R.',
      location: 'Vijayawada',
      review: 'Delicious Neyyi Ariselu! They were extremely soft and had the perfect sweetness. The ordering process via WhatsApp is so fast and convenient.',
      rating: 5,
      itemBought: 'Neyyi Ariselu',
    },
  ];

  return (
    <section id="reviews" className="py-24 bg-brand-cream bg-mandala relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-brand-gold font-bold font-sans">
            Verified Customer Love
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold font-serif text-brand-charcoal mt-2 mb-4">
            What Our Family Says
          </h2>
          <div className="h-1 w-20 bg-brand-gold mx-auto rounded-full" />
        </div>

        {/* Masonry-like Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              className="glassmorphism p-8 rounded-2xl flex flex-col justify-between shadow-premium hover:shadow-premium-hover transition-all duration-300 border border-brand-gold/10 hover:border-brand-gold/20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              whileHover={{ y: -3 }}
            >
              <div>
                {/* Stars and verified badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-brand-gold">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" />
                    ))}
                  </div>
                  <span className="text-[9px] uppercase tracking-wider font-bold text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-full">
                    Verified Buyer
                  </span>
                </div>

                {/* Review Text */}
                <p className="font-sans text-sm text-brand-charcoal/80 leading-relaxed font-light mb-6">
                  "{t.review}"
                </p>
              </div>

              {/* Author & Item Info */}
              <div className="border-t border-brand-gold/5 pt-4 flex items-center justify-between">
                <div>
                  <h4 className="font-serif text-sm font-bold text-brand-charcoal">{t.name}</h4>
                  <span className="text-[10px] text-brand-charcoal/40 font-sans">{t.location}</span>
                </div>
                <div className="text-right">
                  <span className="text-[10px] text-brand-gold font-semibold uppercase tracking-wider">Item Ordered</span>
                  <span className="block text-[11px] font-medium text-brand-red font-sans">{t.itemBought}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
