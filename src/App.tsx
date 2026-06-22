import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { LoadingAnimation } from './components/LoadingAnimation';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { WhyChooseUs } from './components/WhyChooseUs';
import { FeaturedProducts } from './components/FeaturedProducts';
import { AboutUs } from './components/AboutUs';
import { Reviews } from './components/Reviews';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Cart } from './components/Cart';
import type { CartItem } from './components/Cart';
import { WhatsAppButton } from './components/WhatsAppButton';
import type { Product } from './data/products';
import { FallingMangoes } from './components/FallingMangoes';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  // Trigger preloader fadeout after 2 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  // Sync scrolling state if cart is open
  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isCartOpen]);

  const handleAddToCart = (product: Product, weight: string, price: number) => {
    setCartItems((prevItems) => {
      // Check if product with this exact weight already exists in cart
      const existingItemIdx = prevItems.findIndex(
        (item) => item.product.id === product.id && item.weight === weight
      );

      if (existingItemIdx > -1) {
        // Increment quantity without mutation
        return prevItems.map((item, idx) =>
          idx === existingItemIdx
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // Add new item
        return [...prevItems, { product, weight, price, quantity: 1 }];
      }
    });
  };

  const handleUpdateQuantity = (productId: string, weight: string, newQty: number) => {
    if (newQty <= 0) {
      handleRemoveItem(productId, weight);
      return;
    }

    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.product.id === productId && item.weight === weight
          ? { ...item, quantity: newQty }
          : item
      )
    );
  };

  const handleRemoveItem = (productId: string, weight: string) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => !(item.product.id === productId && item.weight === weight))
    );
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <>
      {/* Page Preloader */}
      <AnimatePresence>
        {isLoading && <LoadingAnimation />}
      </AnimatePresence>

      {!isLoading && (
        <div className="flex flex-col min-h-screen">
          {/* Ambient Falling Mangoes Effect */}
          <FallingMangoes />

          {/* Header Navigation */}
          <Navbar
            cartCount={cartCount}
            onCartClick={() => setIsCartOpen(true)}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
          />

          {/* Page Sections */}
          <main className="flex-1">
            <Hero />
            <WhyChooseUs />
            <FeaturedProducts
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              onAddToCart={handleAddToCart}
            />
            <AboutUs />
            <Reviews />
            <Contact />
          </main>

          {/* Footer */}
          <Footer />

          {/* Shopping Cart Drawer */}
          <Cart
            isOpen={isCartOpen}
            onClose={() => setIsCartOpen(false)}
            cartItems={cartItems}
            onUpdateQuantity={handleUpdateQuantity}
            onRemoveItem={handleRemoveItem}
            onClearCart={handleClearCart}
          />

          {/* Floating WhatsApp Chat Button */}
          <WhatsAppButton />
        </div>
      )}
    </>
  );
};

export default App;
