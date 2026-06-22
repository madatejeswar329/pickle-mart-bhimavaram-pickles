import React from 'react';
import { PotLogo } from './PotLogo';

export const Footer: React.FC = () => {
  const handleLinkClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-brand-charcoal text-brand-cream border-t border-brand-gold/10">
      {/* Top Section */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <PotLogo className="h-8 w-8" />
              <div className="flex flex-col">
                <span className="font-serif text-lg font-bold tracking-wide text-brand-gold">
                  Pickle Mart
                </span>
                <span className="text-[10px] font-semibold text-brand-goldLight opacity-80">
                  భీమవరం ఊరగాయ పచ్చళ్లు
                </span>
              </div>
            </div>
            <p className="font-sans text-xs text-brand-cream/65 leading-relaxed font-light">
              Bringing you the authentic, rich taste of traditional Andhra homemade pickles, sweeps, and snacks. Crafted with generational recipes in Bhimavaram.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="https://www.facebook.com/share/1DveciGxaw/" target="_blank" rel="noopener noreferrer" className="p-2 bg-brand-cream/5 rounded-full hover:bg-brand-gold/20 hover:text-brand-gold transition-all duration-300 text-brand-cream/80" aria-label="Facebook">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
              </a>
              <a href="https://www.instagram.com/picklemart.yellandu?igsh=MTVlbHhodWhvNTg0eA==" target="_blank" rel="noopener noreferrer" className="p-2 bg-brand-cream/5 rounded-full hover:bg-brand-gold/20 hover:text-brand-gold transition-all duration-300 text-brand-cream/80" aria-label="Instagram">
                <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
            </div>
          </div>

          {/* Shortcuts */}
          <div>
            <h4 className="font-serif text-sm font-bold text-brand-gold uppercase tracking-wider mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3 font-sans text-xs text-brand-cream/70 font-light">
              {['Home', 'Shop', 'Why Us', 'About', 'Reviews', 'Contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => handleLinkClick(item.toLowerCase().replace(' ', '-'))}
                    className="hover:text-brand-gold hover:underline transition-colors cursor-pointer"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-serif text-sm font-bold text-brand-gold uppercase tracking-wider mb-5">
              Our Specialties
            </h4>
            <ul className="space-y-3 font-sans text-xs text-brand-cream/70 font-light">
              <li>
                <button onClick={() => handleLinkClick('shop')} className="hover:text-brand-gold hover:underline cursor-pointer">
                  Non-Veg Pickles (చికెన్, రొయ్యలు)
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('shop')} className="hover:text-brand-gold hover:underline cursor-pointer">
                  Veg Pickles (ఆవకాయ, ఉసిరికాయ)
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('shop')} className="hover:text-brand-gold hover:underline cursor-pointer">
                  Traditional Karam Podulu
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('shop')} className="hover:text-brand-gold hover:underline cursor-pointer">
                  Homemade Crispy Vadiyalu
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('shop')} className="hover:text-brand-gold hover:underline cursor-pointer">
                  Traditional Sweets (పూతరేకులు)
                </button>
              </li>
            </ul>
          </div>

          {/* Contact info shortcut */}
          <div>
            <h4 className="font-serif text-sm font-bold text-brand-gold uppercase tracking-wider mb-5">
              Store Information
            </h4>
            <p className="font-sans text-xs text-brand-cream/75 leading-relaxed font-light mb-4">
              Masjid Opposite Complex,<br />
              Aam Bazar, Yellandu,<br />
              Telangana, India - 507123
            </p>
            <div className="space-y-2 text-xs font-sans text-brand-gold font-semibold">
              <p>Phone: +91 99489 42685</p>
              <p>Email: madatejeswar329@gmail.com</p>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Copyright Section */}
      <div className="bg-[#141210] py-6 border-t border-brand-gold/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-brand-cream/40 font-sans">
          <span>
            © 2026 Pickle Mart భీమవరం ఊరగాయ పచ్చళ్లు. All Rights Reserved. Made with ❤️ by{' '}
            <a
              href="https://wa.me/917671960993?text=Hi%20VNVR%20Team%2C%20I%20saw%20the%20Pickle%20Mart%20Bhimavaram%20website%20and%20I%20also%20want%20a%20website.%20Please%20contact%20me."
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-gold hover:text-brand-goldLight font-bold transition-colors duration-300"
            >
              VNVR Team
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};
