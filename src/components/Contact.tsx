import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

export const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;
    
    // Simulate contact form submission
    setIsSubmitted(true);
    setName('');
    setEmail('');
    setMessage('');
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const contactDetails = [
    {
      label: 'Phone Call',
      value: '+91 99489 42685',
      sub: 'Mon - Sun, 7am - 8pm',
      icon: <Phone className="text-brand-red" size={20} />,
      link: 'tel:+919948942685',
    },
    {
      label: 'WhatsApp Chat',
      value: '+91 99489 42685',
      sub: 'Click to start ordering chat',
      icon: (
        <svg className="w-5 h-5 text-brand-red" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.46h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      ),
      link: 'https://wa.me/919948942685',
    },
    {
      label: 'Email Support',
      value: 'madatejeswar329@gmail.com',
      sub: 'Write us anytime',
      icon: <Mail className="text-brand-red" size={20} />,
      link: 'mailto:madatejeswar329@gmail.com',
    },
    {
      label: 'Our Location',
      value: 'Masjid Opposite Complex',
      sub: 'Aam Bazar, Yellandu, Telangana - 507123',
      icon: <MapPin className="text-brand-red" size={20} />,
      link: 'https://www.google.com/maps/search/?api=1&query=Sri+Lakshmi+cloth+%26+readymade+dresses+Yellandu+Telangana+507123',
    },
  ];

  return (
    <section id="contact" className="py-24 bg-brand-cream relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-brand-gold font-bold font-sans">
            Get In Touch
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold font-serif text-brand-charcoal mt-2 mb-4">
            Connect With Our Kitchen
          </h2>
          <div className="h-1 w-20 bg-brand-gold mx-auto rounded-full" />
        </div>

        {/* Contact Layout */}
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Left Column: Details */}
          <motion.div
            className="w-full lg:w-5/12 space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="font-serif text-2xl font-bold text-brand-charcoal mb-4">
              Place Orders & Ask Questions
            </h3>
            <p className="font-sans text-sm text-brand-charcoal/70 leading-relaxed font-light mb-8">
              We prepare fresh batches every week. If you have custom catering requirements, wedding sweet order enquiries, or need custom packaging, reach out directly.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactDetails.map((detail, idx) => (
                <a
                  href={detail.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={idx}
                  className="glassmorphism p-5 rounded-2xl flex items-start space-x-4 shadow-premium hover:shadow-premium-hover transition-all duration-300 border border-brand-gold/10 hover:border-brand-gold/25 block"
                >
                  <div className="p-3 bg-brand-red/5 rounded-xl text-brand-red">
                    {detail.icon}
                  </div>
                  <div>
                    <h4 className="font-serif text-sm font-bold text-brand-charcoal">{detail.label}</h4>
                    <p className="font-sans text-xs font-semibold text-brand-red mt-0.5">{detail.value}</p>
                    <span className="block text-[10px] text-brand-charcoal/50 font-sans mt-0.5">{detail.sub}</span>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Form */}
          <motion.div
            className="w-full lg:w-7/12"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="glassmorphism p-8 rounded-3xl border border-brand-gold/15 shadow-premium space-y-6">
              <h3 className="font-serif text-2xl font-bold text-brand-charcoal">
                Send Us a Message
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Name */}
                <div>
                  <label htmlFor="user-name" className="block text-[10px] font-bold uppercase tracking-wider text-brand-charcoal/60 mb-2">
                    Your Name
                  </label>
                  <input
                    id="user-name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Vishnu Vardhan"
                    className="w-full px-4 py-2.5 text-sm rounded-xl border border-brand-gold/20 bg-[#FCFAF6] text-brand-charcoal focus:outline-none focus:border-brand-red transition-all"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="user-email" className="block text-[10px] font-bold uppercase tracking-wider text-brand-charcoal/60 mb-2">
                    Email Address
                  </label>
                  <input
                    id="user-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="e.g. vishnu@example.com"
                    className="w-full px-4 py-2.5 text-sm rounded-xl border border-brand-gold/20 bg-[#FCFAF6] text-brand-charcoal focus:outline-none focus:border-brand-red transition-all"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="user-message" className="block text-[10px] font-bold uppercase tracking-wider text-brand-charcoal/60 mb-2">
                  Your Message
                </label>
                <textarea
                  id="user-message"
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell us what you would like to know..."
                  className="w-full px-4 py-2.5 text-sm rounded-xl border border-brand-gold/20 bg-[#FCFAF6] text-brand-charcoal focus:outline-none focus:border-brand-red transition-all resize-none"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-3.5 rounded-full red-gradient text-brand-cream text-xs font-bold uppercase tracking-widest hover:opacity-95 transition-all duration-300 shadow-md hover:shadow-brand-red/10 flex items-center justify-center space-x-2 cursor-pointer"
              >
                <span>Send Message</span>
                <Send size={14} />
              </button>

              {/* Success Alert */}
              <AnimatePresence>
                {isSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-sans"
                  >
                    ✨ Thank you! Your message has been sent successfully. We will get back to you shortly.
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>
        </div>

      </div>
    </section>
  );
};
