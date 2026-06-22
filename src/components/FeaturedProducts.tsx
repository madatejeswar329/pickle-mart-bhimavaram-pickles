import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, Search, X, Check } from 'lucide-react';
import { PRODUCTS, CATEGORIES, getPriceForWeight, getAvailableWeights } from '../data/products';
import type { Product } from '../data/products';

interface FeaturedProductsProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onAddToCart: (product: Product, weight: string, price: number) => void;
}

export const FeaturedProducts: React.FC<FeaturedProductsProps> = ({
  searchQuery,
  onSearchChange,
  onAddToCart,
}) => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  
  // Keep track of selected weight per product in the list view
  const [productWeights, setProductWeights] = useState<Record<string, string>>({});
  // Add to cart animation feedback
  const [addedItems, setAddedItems] = useState<Record<string, boolean>>({});

  // Pagination state
  const [visibleCount, setVisibleCount] = useState(12);

  // Reset pagination when category or search changes
  const handleCategoryChange = (catId: string) => {
    setActiveCategory(catId);
    setVisibleCount(12);
  };

  // Filter products based on search and category
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      const matchesCategory = activeCategory === 'all' || product.category === activeCategory;
      const cleanQuery = searchQuery.toLowerCase().trim();
      const matchesSearch =
        cleanQuery === '' ||
        product.name.toLowerCase().includes(cleanQuery) ||
        product.nameTelugu.includes(cleanQuery) ||
        product.description.toLowerCase().includes(cleanQuery);
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  // Paginated products
  const paginatedProducts = useMemo(() => {
    return filteredProducts.slice(0, visibleCount);
  }, [filteredProducts, visibleCount]);

  const getActiveWeight = (product: Product): string => {
    return productWeights[product.id] || product.baseWeight;
  };

  const handleWeightChange = (productId: string, weight: string) => {
    setProductWeights((prev) => ({
      ...prev,
      [productId]: weight,
    }));
  };

  const triggerAddAnimation = (productId: string) => {
    setAddedItems((prev) => ({ ...prev, [productId]: true }));
    setTimeout(() => {
      setAddedItems((prev) => ({ ...prev, [productId]: false }));
    }, 1500);
  };

  // Product Detail Modal state
  const [modalWeight, setModalWeight] = useState<string>('');

  const openModal = (product: Product) => {
    setSelectedProduct(product);
    setModalWeight(productWeights[product.id] || product.baseWeight);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  return (
    <section id="shop" className="py-24 bg-brand-cream relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-[0.25em] text-brand-gold font-bold font-sans">
            Fresh From Godavari
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold font-serif text-brand-charcoal mt-2 mb-4">
            Our Traditional Kitchen Menu
          </h2>
          <div className="h-1 w-20 bg-brand-gold mx-auto rounded-full" />
        </div>

        {/* Search & Category Filter Section */}
        <div className="flex flex-col space-y-6 mb-12">
          {/* Search bar inside container */}
          <div className="relative max-w-lg mx-auto w-full px-4 sm:px-0">
            <input
              type="text"
              placeholder="Search by product name in English or Telugu (e.g. Chicken, Avakaya)..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-full border border-brand-gold/30 bg-[#FCFAF6] text-brand-charcoal focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red text-sm shadow-premium"
            />
            <Search size={18} className="absolute left-8 sm:left-4 top-3.5 text-brand-charcoal/40" />
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 overflow-x-auto py-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleCategoryChange(cat.id)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-all duration-300 font-sans border cursor-pointer ${
                  activeCategory === cat.id
                    ? 'red-gradient text-brand-cream border-transparent shadow-md'
                    : 'border-brand-gold/20 bg-brand-cream text-brand-charcoal/80 hover:border-brand-gold/60'
                }`}
              >
                <div className="flex flex-col items-center">
                  <span>{cat.name}</span>
                  <span className="text-[10px] opacity-80 font-normal mt-0.5">{cat.nameTelugu}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {paginatedProducts.map((product) => {
              const currentWeight = getActiveWeight(product);
              const currentPrice = getPriceForWeight(product.basePrice, product.baseWeight, currentWeight);
              const availableWeights = getAvailableWeights(product.category, product.baseWeight);
              const isAdded = addedItems[product.id] || false;

              return (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="group bg-brand-cream border border-brand-gold/15 hover:border-brand-gold/30 rounded-2xl overflow-hidden shadow-premium hover:shadow-premium-hover transition-all duration-300 flex flex-col justify-between"
                >
                  {/* Image container */}
                  <div
                    className="relative aspect-square overflow-hidden cursor-pointer bg-brand-red/5"
                    onClick={() => openModal(product)}
                  >
                    {product.isBestSeller && (
                      <span className="absolute top-3 left-3 z-10 px-3 py-1 text-[9px] font-bold uppercase tracking-wider text-brand-cream red-gradient rounded-full shadow">
                        Best Seller
                      </span>
                    )}
                    <img
                      src={product.image}
                      alt={product.name}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-brand-charcoal/10 group-hover:bg-brand-charcoal/0 transition-colors duration-300" />
                  </div>

                  {/* Body Info */}
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Category Label */}
                      <span className="text-[10px] uppercase font-bold tracking-widest text-brand-gold">
                        {product.category.replace('-', ' ')}
                      </span>
                      
                      {/* Name */}
                      <h3
                        className="font-serif text-lg font-bold text-brand-charcoal mt-1 cursor-pointer hover:text-brand-red transition-colors"
                        onClick={() => openModal(product)}
                      >
                        {product.name}
                      </h3>
                      {/* Telugu Name */}
                      <span className="text-xs font-sans text-brand-red font-medium block mt-0.5">
                        {product.nameTelugu}
                      </span>
                      {/* Short Description */}
                      <p className="font-sans text-xs text-brand-charcoal/60 leading-relaxed font-light mt-2 line-clamp-2">
                        {product.description}
                      </p>
                    </div>

                    <div className="mt-4">
                      {/* Weight Selector */}
                      <div className="flex gap-1.5 mb-4">
                        {availableWeights.map((w) => (
                          <button
                            key={w}
                            onClick={() => handleWeightChange(product.id, w)}
                            className={`px-2.5 py-1 text-[10px] font-bold rounded-full transition-all border cursor-pointer ${
                              currentWeight === w
                                ? 'bg-brand-gold/10 text-brand-gold border-brand-gold'
                                : 'border-brand-gold/15 text-brand-charcoal/60 hover:border-brand-gold/45'
                            }`}
                          >
                            {w}
                          </button>
                        ))}
                      </div>

                      {/* Price and Add to Cart */}
                      <div className="flex items-center justify-between">
                        <div className="flex flex-col">
                          <span className="text-[10px] text-brand-charcoal/50 font-semibold uppercase tracking-wider">Price</span>
                          <span className="text-xl font-bold text-brand-charcoal font-serif">
                            ₹{currentPrice}
                          </span>
                        </div>
                        
                        <button
                          onClick={() => {
                            onAddToCart(product, currentWeight, currentPrice);
                            triggerAddAnimation(product.id);
                          }}
                          disabled={isAdded}
                          className={`p-3 rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer ${
                            isAdded
                              ? 'bg-emerald-600 text-brand-cream'
                              : 'bg-brand-red hover:bg-brand-redLight text-brand-cream shadow-md hover:shadow-brand-red/10'
                          }`}
                          aria-label="Add to Cart"
                        >
                          {isAdded ? <Check size={16} /> : <ShoppingCart size={16} />}
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <span className="text-5xl">🧐</span>
            <h3 className="font-serif text-lg font-bold text-brand-charcoal mt-4">No pickles or foods found</h3>
            <p className="text-sm text-brand-charcoal/60 mt-1">Try modifying your search query or tab category filter.</p>
          </div>
        )}

        {/* Load More Button */}
        {filteredProducts.length > visibleCount && (
          <div className="text-center mt-16">
            <button
              onClick={() => setVisibleCount((prev) => prev + 12)}
              className="px-8 py-3 rounded-full border border-brand-gold text-brand-gold hover:bg-brand-gold/5 font-semibold text-xs tracking-wider uppercase transition-all duration-300 font-sans cursor-pointer"
            >
              Load More Products
            </button>
          </div>
        )}
      </div>

      {/* Product Detail Modal */}
      <AnimatePresence>
        {selectedProduct && (() => {
          const currentPrice = getPriceForWeight(
            selectedProduct.basePrice,
            selectedProduct.baseWeight,
            modalWeight
          );
          const availableWeights = getAvailableWeights(selectedProduct.category, selectedProduct.baseWeight);
          const isAdded = addedItems[selectedProduct.id] || false;

          return (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={closeModal}
                className="fixed inset-0 z-50 bg-brand-charcoal/60 backdrop-blur-sm"
              />
              {/* Modal Container */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ type: 'spring', damping: 25, stiffness: 250 }}
                className="fixed inset-x-4 bottom-0 top-0 sm:inset-auto sm:top-1/2 sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 z-50 w-full max-w-2xl h-fit max-h-[90vh] bg-brand-cream rounded-3xl overflow-y-auto shadow-2xl flex flex-col md:flex-row border border-brand-gold/20"
              >
                {/* Close Button */}
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 z-10 p-2 rounded-full bg-brand-charcoal/20 text-brand-cream hover:bg-brand-charcoal/40 transition-colors"
                  aria-label="Close modal"
                >
                  <X size={18} />
                </button>

                {/* Left Side: Image */}
                <div className="w-full md:w-1/2 aspect-square md:aspect-auto md:h-full bg-brand-red/5">
                  <img
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Right Side: Info */}
                <div className="w-full md:w-1/2 p-6 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-brand-gold block">
                      {selectedProduct.category.replace('-', ' ')}
                    </span>
                    <h3 className="font-serif text-2xl font-bold text-brand-charcoal mt-1">
                      {selectedProduct.name}
                    </h3>
                    <span className="text-sm font-sans text-brand-red font-medium block mt-0.5">
                      {selectedProduct.nameTelugu}
                    </span>
                    <p className="font-sans text-sm text-brand-charcoal/70 leading-relaxed font-light mt-4">
                      {selectedProduct.description}
                    </p>
                  </div>

                  <div className="mt-8">
                    {/* Weight options */}
                    <span className="text-xs text-brand-charcoal/50 font-bold uppercase tracking-wider block mb-2">
                      Select Package Weight
                    </span>
                    <div className="flex gap-2 mb-6">
                      {availableWeights.map((w) => (
                        <button
                          key={w}
                          onClick={() => setModalWeight(w)}
                          className={`px-3 py-1.5 text-xs font-bold rounded-full transition-all border cursor-pointer ${
                            modalWeight === w
                              ? 'bg-brand-gold/10 text-brand-gold border-brand-gold'
                              : 'border-brand-gold/15 text-brand-charcoal/60 hover:border-brand-gold/45'
                          }`}
                        >
                          {w}
                        </button>
                      ))}
                    </div>

                    {/* Pricing & Add button */}
                    <div className="flex items-center justify-between pt-4 border-t border-brand-gold/10">
                      <div className="flex flex-col">
                        <span className="text-xs text-brand-charcoal/40 font-semibold uppercase tracking-wider">Total Price</span>
                        <span className="text-2xl font-bold text-brand-charcoal font-serif">
                          ₹{currentPrice}
                        </span>
                      </div>

                      <button
                        onClick={() => {
                          onAddToCart(selectedProduct, modalWeight, currentPrice);
                          triggerAddAnimation(selectedProduct.id);
                          closeModal();
                        }}
                        disabled={isAdded}
                        className={`px-6 py-3 rounded-full flex items-center space-x-2 text-sm font-semibold tracking-wider transition-all duration-300 cursor-pointer ${
                          isAdded
                            ? 'bg-emerald-600 text-brand-cream'
                            : 'bg-brand-red hover:bg-brand-redLight text-brand-cream shadow-md hover:shadow-brand-red/10'
                        }`}
                      >
                        {isAdded ? (
                          <>
                            <Check size={16} />
                            <span>Added to Cart</span>
                          </>
                        ) : (
                          <>
                            <ShoppingCart size={16} />
                            <span>Add To Cart</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </>
          );
        })()}
      </AnimatePresence>
    </section>
  );
};
