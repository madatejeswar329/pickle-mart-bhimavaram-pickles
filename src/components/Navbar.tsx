import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingCart, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { PotLogo } from './PotLogo';

interface NavbarProps {
  cartCount: number;
  onCartClick: () => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  cartCount,
  onCartClick,
  searchQuery,
  onSearchChange,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Shop', id: 'shop' },
    { name: 'Why Us', id: 'why-us' },
    { name: 'About', id: 'about' },
    { name: 'Reviews', id: 'reviews' },
    { name: 'Contact', id: 'contact' },
  ];

  const handleLinkClick = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      // Offset for sticky header
      const yOffset = -80; 
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'glassmorphic shadow-premium py-3 bg-[#FCFAF6]/90 border-b border-brand-gold/10'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div
              className="flex cursor-pointer items-center space-x-2"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <PotLogo className="h-9 w-9 filter drop-shadow-sm" />
              <div className="flex flex-col">
                <span className="font-serif text-xl sm:text-2xl font-bold tracking-wide text-brand-red">
                  Pickle Mart
                </span>
                <span className="text-xs font-semibold text-brand-gold -mt-0.5">
                  భీమవరం ఊరగాయ పచ్చళ్లు
                </span>
              </div>
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`font-sans text-sm font-medium tracking-wide transition-all duration-300 relative py-1 group ${
                    isScrolled
                      ? 'text-brand-charcoal/80 hover:text-brand-red'
                      : 'text-brand-cream/90 hover:text-brand-gold'
                  }`}
                >
                  {link.name}
                  <span className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                    isScrolled ? 'bg-brand-red' : 'bg-brand-gold'
                  }`} />
                </button>
              ))}
            </nav>

            {/* Utilities (Search, Cart, Menu) */}
            <div className="flex items-center space-x-4">
              {/* Search Toggle */}
              <div className="relative flex items-center">
                <AnimatePresence>
                  {isSearchOpen && (
                    <motion.input
                      initial={{ width: 0, opacity: 0 }}
                      animate={{ width: 180, opacity: 1 }}
                      exit={{ width: 0, opacity: 0 }}
                      type="text"
                      placeholder="Search pickles, sweets..."
                      value={searchQuery}
                      onChange={(e) => onSearchChange(e.target.value)}
                      className="hidden sm:block mr-2 px-3 py-1.5 text-xs rounded-full border border-brand-gold/30 bg-[#FCFAF6] text-brand-charcoal focus:outline-none focus:border-brand-red transition-all"
                    />
                  )}
                </AnimatePresence>
                <button
                  onClick={() => setIsSearchOpen(!isSearchOpen)}
                  className={`p-2 transition-colors duration-200 ${
                    isScrolled ? 'text-brand-charcoal hover:text-brand-red' : 'text-brand-cream hover:text-brand-gold'
                  }`}
                  aria-label="Search"
                >
                  <Search size={20} />
                </button>
              </div>

              {/* Shopping Cart Pill Button */}
              <button
                onClick={onCartClick}
                className={`px-4 py-2 rounded-full flex items-center space-x-2 border transition-all duration-300 font-sans cursor-pointer ${
                  isScrolled
                    ? 'bg-[#FCFAF6] border-brand-gold/35 text-brand-charcoal hover:border-brand-red hover:text-brand-red hover:shadow-sm'
                    : 'bg-brand-cream/10 border-brand-cream/30 text-brand-cream hover:bg-brand-cream/25 hover:border-brand-cream/50'
                }`}
                aria-label="Shopping Cart"
              >
                <ShoppingCart size={14} className="flex-shrink-0" />
                <span className="text-[10px] font-bold tracking-widest uppercase">Cart</span>
                <AnimatePresence>
                  {cartCount > 0 && (
                    <motion.div
                      initial={{ width: 0, opacity: 0 }}
                      animate={{ width: 'auto', opacity: 1 }}
                      exit={{ width: 0, opacity: 0 }}
                      className="flex items-center space-x-2 overflow-hidden"
                    >
                      <span className={`h-3.5 w-[1px] ${isScrolled ? 'bg-brand-gold/30' : 'bg-brand-cream/30'}`} />
                      <motion.span
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                        className="flex h-5 w-5 items-center justify-center rounded-full bg-brand-red text-[9px] font-bold text-brand-cream"
                      >
                        {cartCount}
                      </motion.span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`md:hidden p-2 transition-colors duration-200 ${
                  isScrolled ? 'text-brand-charcoal hover:text-brand-red' : 'text-brand-cream hover:text-brand-gold'
                }`}
                aria-label="Toggle Menu"
              >
                {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 z-30 bg-brand-charcoal/40 backdrop-blur-sm"
            />
            {/* Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 bottom-0 z-30 w-72 bg-brand-cream p-6 shadow-2xl flex flex-col justify-between"
            >
              <div className="mt-16 flex flex-col space-y-6">
                {/* Mobile Search */}
                <div className="relative mt-2">
                  <input
                    type="text"
                    placeholder="Search pickles, sweets..."
                    value={searchQuery}
                    onChange={(e) => onSearchChange(e.target.value)}
                    className="w-full pl-9 pr-4 py-2 text-sm rounded-full border border-brand-gold/30 bg-[#FCFAF6] text-brand-charcoal focus:outline-none focus:border-brand-red"
                  />
                  <Search size={16} className="absolute left-3 top-2.5 text-brand-charcoal/40" />
                </div>

                {/* Mobile Links */}
                <nav className="flex flex-col space-y-4">
                  {navLinks.map((link) => (
                    <button
                      key={link.id}
                      onClick={() => handleLinkClick(link.id)}
                      className="text-left font-sans text-base font-semibold tracking-wide text-brand-charcoal hover:text-brand-red transition-colors py-2 border-b border-brand-gold/5"
                    >
                      {link.name}
                    </button>
                  ))}
                </nav>
              </div>

              {/* Mobile Drawer Footer */}
              <div className="border-t border-brand-gold/10 pt-4 flex flex-col items-center">
                <span className="font-serif text-sm font-bold text-brand-red">Pickle Mart</span>
                <span className="text-xs font-semibold text-brand-gold mt-1">
                  భీమవరం ఊరగాయ పచ్చళ్లు
                </span>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
