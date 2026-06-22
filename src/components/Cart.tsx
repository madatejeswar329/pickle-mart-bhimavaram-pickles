import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus, Minus, Trash2, ShoppingBag } from 'lucide-react';
import type { Product } from '../data/products';

export interface CartItem {
  product: Product;
  weight: string;
  price: number;
  quantity: number;
}

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (productId: string, weight: string, newQty: number) => void;
  onRemoveItem: (productId: string, weight: string) => void;
  onClearCart: () => void;
}

export const Cart: React.FC<CartProps> = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) => {
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [customerAddress, setCustomerAddress] = useState('');
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  const totalAmount = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const validateForm = (): boolean => {
    const errors: Record<string, string> = {};
    if (!customerName.trim()) errors.name = 'Please enter your name';
    if (!customerPhone.trim()) errors.phone = 'Please enter your phone number';
    if (customerPhone.trim() && !/^\+?[0-9]{10,14}$/.test(customerPhone.trim().replace(/[\s-]/g, ''))) {
      errors.phone = 'Please enter a valid phone number';
    }
    if (!customerAddress.trim()) errors.address = 'Please enter your delivery address';
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    // Define business WhatsApp number (can be replaced by user later)
    const businessNumber = '919948942685';

    // Build the products section of the message
    let productLines = '';
    cartItems.forEach((item) => {
      productLines += `- ${item.product.name} (${item.weight}) x ${item.quantity} - ₹${item.price * item.quantity}\n`;
    });

    // Construct the formatted WhatsApp message
    const message = 
`Hello Pickle Mart Bhimavaram,
I would like to place an order.

Products:
${productLines}
Total: ₹${totalAmount}

Customer Name: ${customerName.trim()}
Phone: ${customerPhone.trim()}
Address: ${customerAddress.trim()}

Please confirm my order.`;

    const encodedText = encodeURIComponent(message);
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${businessNumber}&text=${encodedText}`;

    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');
    
    // Clear cart upon successful order redirect
    onClearCart();
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-brand-charcoal/60 backdrop-blur-xs"
          />

          {/* Sidebar Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 bottom-0 z-50 w-full max-w-md bg-brand-cream shadow-2xl flex flex-col border-l border-brand-gold/10"
          >
            {/* Header */}
            <div className="p-6 border-b border-brand-gold/10 flex items-center justify-between">
              <div className="flex items-center space-x-2.5">
                <ShoppingBag className="text-brand-red" size={22} />
                <h2 className="font-serif text-xl font-bold text-brand-charcoal">Your Basket</h2>
                <span className="bg-brand-red/10 text-brand-red text-xs px-2.5 py-0.5 rounded-full font-sans font-bold">
                  {cartItems.reduce((acc, i) => acc + i.quantity, 0)}
                </span>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-full hover:bg-brand-gold/10 text-brand-charcoal transition-colors cursor-pointer"
                aria-label="Close cart"
              >
                <X size={20} />
              </button>
            </div>

            {/* Content Area */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {cartItems.length === 0 ? (
                /* Empty Cart State */
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                  <span className="text-5xl">🛒</span>
                  <h3 className="font-serif text-lg font-bold text-brand-charcoal">Your basket is empty</h3>
                  <p className="text-xs text-brand-charcoal/60 max-w-[200px] leading-relaxed font-sans">
                    Browse our Andhra pickle catalog and add delicious traditional foods to order.
                  </p>
                  <button
                    onClick={onClose}
                    className="px-6 py-2.5 text-xs font-bold rounded-full bg-brand-red hover:bg-brand-redLight text-brand-cream tracking-wide uppercase transition-all duration-300 font-sans cursor-pointer"
                  >
                    Start Shopping
                  </button>
                </div>
              ) : (
                /* Cart Items List */
                <div className="space-y-4">
                  {cartItems.map((item) => (
                    <motion.div
                      key={`${item.product.id}-${item.weight}`}
                      layout
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="flex items-center justify-between p-3.5 rounded-xl border border-brand-gold/10 bg-[#FCFAF6] shadow-premium"
                    >
                      <div className="flex items-center space-x-3.5 flex-1">
                        <img
                          src={item.product.image}
                          alt={item.product.name}
                          className="h-14 w-14 rounded-lg object-cover bg-brand-red/5"
                        />
                        <div className="flex-1 min-w-0">
                          <h4 className="font-serif text-sm font-bold text-brand-charcoal truncate">
                            {item.product.name}
                          </h4>
                          <span className="text-[11px] font-sans text-brand-red block font-medium">
                            {item.product.nameTelugu}
                          </span>
                          <span className="text-[10px] uppercase font-bold text-brand-gold mt-1 block">
                            Weight: {item.weight}
                          </span>
                        </div>
                      </div>

                      <div className="flex flex-col items-end justify-between h-14 pl-2">
                        {/* Remove item */}
                        <button
                          onClick={() => onRemoveItem(item.product.id, item.weight)}
                          className="text-brand-charcoal/40 hover:text-brand-red transition-colors cursor-pointer"
                          aria-label="Remove item"
                        >
                          <Trash2 size={14} />
                        </button>

                        <div className="flex items-center space-x-3">
                          {/* Quantity control */}
                          <div className="flex items-center border border-brand-gold/20 rounded-full py-0.5 px-1.5 bg-brand-cream scale-90">
                            <button
                              onClick={() => onUpdateQuantity(item.product.id, item.weight, item.quantity - 1)}
                              className="p-1 text-brand-charcoal/60 hover:text-brand-red transition-colors cursor-pointer"
                            >
                              <Minus size={10} />
                            </button>
                            <span className="px-2.5 text-xs font-bold font-sans text-brand-charcoal">{item.quantity}</span>
                            <button
                              onClick={() => onUpdateQuantity(item.product.id, item.weight, item.quantity + 1)}
                              className="p-1 text-brand-charcoal/60 hover:text-brand-red transition-colors cursor-pointer"
                            >
                              <Plus size={10} />
                            </button>
                          </div>
                          {/* Subtotal */}
                          <span className="font-serif text-sm font-bold text-brand-charcoal">
                            ₹{item.price * item.quantity}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  ))}

                  {/* Summary Total */}
                  <div className="border-t border-brand-gold/10 pt-4 flex justify-between items-center">
                    <span className="font-sans text-sm font-semibold text-brand-charcoal/60">Cart Subtotal</span>
                    <span className="font-serif text-xl font-bold text-brand-charcoal">₹{totalAmount}</span>
                  </div>

                  {/* Customer Information Form */}
                  <form onSubmit={handleOrder} className="border-t border-brand-gold/10 pt-6 space-y-4">
                    <h4 className="font-serif text-base font-bold text-brand-charcoal">Delivery Details</h4>
                    
                    {/* Name */}
                    <div>
                      <label htmlFor="c-name" className="block text-[10px] font-bold uppercase tracking-wider text-brand-charcoal/60 mb-1">
                        Full Name
                      </label>
                      <input
                        id="c-name"
                        type="text"
                        placeholder="e.g. Vishnu Vardhan"
                        value={customerName}
                        onChange={(e) => {
                          setCustomerName(e.target.value);
                          if (formErrors.name) setFormErrors((prev) => ({ ...prev, name: '' }));
                        }}
                        className={`w-full px-3.5 py-2 text-sm rounded-lg border bg-[#FCFAF6] text-brand-charcoal focus:outline-none focus:border-brand-red transition-colors ${
                          formErrors.name ? 'border-brand-red' : 'border-brand-gold/25'
                        }`}
                      />
                      {formErrors.name && (
                        <span className="text-[10px] text-brand-red font-medium mt-1 block">{formErrors.name}</span>
                      )}
                    </div>

                    {/* Phone */}
                    <div>
                      <label htmlFor="c-phone" className="block text-[10px] font-bold uppercase tracking-wider text-brand-charcoal/60 mb-1">
                        Mobile Number
                      </label>
                      <input
                        id="c-phone"
                        type="tel"
                        placeholder="e.g. 9876543210"
                        value={customerPhone}
                        onChange={(e) => {
                          setCustomerPhone(e.target.value);
                          if (formErrors.phone) setFormErrors((prev) => ({ ...prev, phone: '' }));
                        }}
                        className={`w-full px-3.5 py-2 text-sm rounded-lg border bg-[#FCFAF6] text-brand-charcoal focus:outline-none focus:border-brand-red transition-colors ${
                          formErrors.phone ? 'border-brand-red' : 'border-brand-gold/25'
                        }`}
                      />
                      {formErrors.phone && (
                        <span className="text-[10px] text-brand-red font-medium mt-1 block">{formErrors.phone}</span>
                      )}
                    </div>

                    {/* Address */}
                    <div>
                      <label htmlFor="c-address" className="block text-[10px] font-bold uppercase tracking-wider text-brand-charcoal/60 mb-1">
                        Delivery Address
                      </label>
                      <textarea
                        id="c-address"
                        rows={3}
                        placeholder="Enter full address with door number and pincode..."
                        value={customerAddress}
                        onChange={(e) => {
                          setCustomerAddress(e.target.value);
                          if (formErrors.address) setFormErrors((prev) => ({ ...prev, address: '' }));
                        }}
                        className={`w-full px-3.5 py-2 text-sm rounded-lg border bg-[#FCFAF6] text-brand-charcoal focus:outline-none focus:border-brand-red transition-colors resize-none ${
                          formErrors.address ? 'border-brand-red' : 'border-brand-gold/25'
                        }`}
                      />
                      {formErrors.address && (
                        <span className="text-[10px] text-brand-red font-medium mt-1 block">{formErrors.address}</span>
                      )}
                    </div>

                    {/* Order Button */}
                    <button
                      type="submit"
                      className="w-full mt-4 py-3.5 rounded-full red-gradient text-brand-cream text-xs font-bold uppercase tracking-widest hover:opacity-95 transition-all duration-300 shadow-md hover:shadow-brand-red/10 cursor-pointer"
                    >
                      Order via WhatsApp
                    </button>
                  </form>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
