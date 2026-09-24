/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, Component, ErrorInfo, ReactNode } from 'react';

class ErrorBoundary extends Component<{ children: ReactNode }, { hasError: boolean; error?: Error }> {
  constructor(props: { children: ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Colmeia Imperial runtime error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center p-6 bg-[#FAFAF7] text-[#1E1A14]">
          <div className="max-w-md w-full p-8 bg-white rounded-2xl shadow-xl border border-[#E8E4D8] text-center">
            <h2 className="text-2xl font-bold text-amber-900 mb-2 font-serif">Colmeia Imperial</h2>
            <p className="text-stone-600 mb-4 text-sm">Ocorreu um erro no carregamento da aplicação.</p>
            <div className="text-xs font-mono bg-stone-100 p-3 rounded-lg mb-6 text-stone-700 text-left overflow-auto max-h-32">
              {this.state.error?.message || 'Erro desconhecido'}
            </div>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-2.5 bg-amber-600 hover:bg-amber-700 text-white rounded-xl text-sm font-semibold transition-colors shadow-sm"
            >
              Recarregar Aplicação
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { EcommerceSection } from './components/EcommerceSection';
import { SchoolSection } from './components/SchoolSection';
import { MonetizationSection } from './components/MonetizationSection';
import { Footer } from './components/Footer';
import { ProductDetailModal } from './components/ProductDetailModal';
import { CartDrawer } from './components/CartDrawer';
import { CheckoutModal } from './components/CheckoutModal';
import { AiAdvisorModal } from './components/AiAdvisorModal';
import { PRODUCTS } from './data/products';
import { Product, CartItem } from './types';
import { Check } from 'lucide-react';

export default function App() {
  const [products] = useState<Product[]>(PRODUCTS);
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    // Optional initial sample item to show cart presence if desired, or start fresh
    return [
      { product: PRODUCTS[2], quantity: 1 } // Mel Jataí
    ];
  });
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isAdvisorOpen, setIsAdvisorOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [activeSection, setActiveSection] = useState('loja');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Cart operations
  const handleAddToCart = (product: Product, quantity: number = 1) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, quantity }];
    });

    setToastMessage(`${quantity}x ${product.name} adicionado à sacola!`);
    setTimeout(() => setToastMessage(null), 2500);
  };

  const handleUpdateQuantity = (productId: string, delta: number) => {
    setCartItems((prev) => {
      return prev
        .map((item) => {
          if (item.product.id === productId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[];
    });
  };

  const handleRemoveItem = (productId: string) => {
    setCartItems((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const handleOrderSuccess = () => {
    setCartItems([]);
  };

  // Track active section for navbar highlight
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['loja', 'escola', 'monetizacao', 'calculadora'];
      const scrollPos = window.scrollY + 200;

      for (const s of sections) {
        const el = document.getElementById(s);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(s);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <ErrorBoundary>
      <div className="min-h-screen flex flex-col bg-[#FAFAF7] text-[#1E1A14]">
        {/* Toast Notification */}
        {toastMessage && (
          <div className="fixed bottom-5 right-5 z-50 bg-[#2B2317] text-white px-4 py-2.5 rounded-xl shadow-lg flex items-center gap-2 text-xs font-medium animate-in fade-in slide-in-from-bottom-3 duration-200">
            <Check className="w-4 h-4 text-amber-400 shrink-0" />
            <span>{toastMessage}</span>
          </div>
        )}

        {/* Main Top Navigation */}
        <Navbar
          cartItems={cartItems}
          onOpenCart={() => setIsCartOpen(true)}
          onOpenAdvisor={() => setIsAdvisorOpen(true)}
          activeSection={activeSection}
        />

        <main className="flex-1">
          {/* Hero */}
          <Hero
            onExploreStore={() => scrollToSection('loja')}
            onExploreSchool={() => scrollToSection('escola')}
            onExploreMonetization={() => scrollToSection('monetizacao')}
          />

          {/* E-commerce Storefront */}
          <EcommerceSection
            products={products}
            onAddToCart={(p) => handleAddToCart(p, 1)}
            onViewDetails={(p) => setSelectedProduct(p)}
          />

          {/* Escola da Abelha (Tutoriais, Simulador & Quiz) */}
          <SchoolSection />

          {/* Guia de Monetização & Calculadora ROI */}
          <MonetizationSection />
        </main>

        {/* Footer */}
        <Footer />

        {/* Overlays and Modals */}
        <ProductDetailModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onAddToCart={handleAddToCart}
        />

        <CartDrawer
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(false)}
          cartItems={cartItems}
          onUpdateQuantity={handleUpdateQuantity}
          onRemoveItem={handleRemoveItem}
          onProceedToCheckout={() => setIsCheckoutOpen(true)}
        />

        <CheckoutModal
          isOpen={isCheckoutOpen}
          onClose={() => setIsCheckoutOpen(false)}
          cartItems={cartItems}
          onOrderSuccess={handleOrderSuccess}
        />

        <AiAdvisorModal
          isOpen={isAdvisorOpen}
          onClose={() => setIsAdvisorOpen(false)}
        />
      </div>
    </ErrorBoundary>
  );
}
