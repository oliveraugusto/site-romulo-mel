import { useState } from 'react';
import { ShoppingBag, Menu, X, Sparkles } from 'lucide-react';
import { CartItem } from '../types';

interface NavbarProps {
  cartItems: CartItem[];
  onOpenCart: () => void;
  onOpenAdvisor: () => void;
  activeSection: string;
}

export function Navbar({ cartItems, onOpenCart, onOpenAdvisor, activeSection }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const totalItemsCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const navLinks = [
    { label: 'Loja & Insumos', href: '#loja' },
    { label: 'Escola da Abelha', href: '#escola' },
    { label: 'Vias de Lucro', href: '#monetizacao' },
    { label: 'Calculadora ROI', href: '#calculadora' }
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#FAFAF7]/95 backdrop-blur-md border-b border-[#E8E6DF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Zone 1: Single element brand wordmark */}
        <a 
          href="#" 
          className="text-2xl font-serif font-bold tracking-tight text-[#2B2317] hover:text-[#B45309] transition-colors"
        >
          Colmeia Imperial
        </a>

        {/* Zone 2: Clean text navigation links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#5F594D]">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`hover:text-[#B45309] transition-colors py-1 ${
                activeSection === link.href.substring(1) ? 'text-[#B45309] font-semibold border-b-2 border-[#B45309]' : ''
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Primary actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenAdvisor}
            className="hidden sm:flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-[#854D0E] bg-[#FEF9C3] hover:bg-[#FEF08A] rounded-lg border border-[#FACC15]/40 transition-colors whitespace-nowrap"
            title="Consulte o Especialista Apícola com Inteligência Artificial"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#B45309]" />
            <span>Consultor Apícola</span>
          </button>

          <button
            onClick={onOpenCart}
            aria-label="Ver sacola de compras"
            className="relative flex items-center gap-2.5 px-4 py-2 text-xs font-semibold text-white bg-[#2B2317] hover:bg-[#1A140D] rounded-lg transition-colors shadow-sm whitespace-nowrap"
          >
            <ShoppingBag className="w-4 h-4" />
            <span className="hidden sm:inline">Sacola</span>
            {totalItemsCount > 0 && (
              <span className="px-1.5 py-0.5 text-[11px] font-bold bg-[#D97706] text-white rounded-full tabular-nums">
                {totalItemsCount}
              </span>
            )}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#5F594D] hover:text-[#2B2317]"
            aria-label="Abrir menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile nav dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#E8E6DF] bg-[#FAFAF7] px-4 py-3 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-medium text-[#5F594D] hover:text-[#B45309]"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2 border-t border-[#E8E6DF]">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAdvisor();
              }}
              className="w-full flex items-center justify-center gap-2 py-2 text-xs font-semibold text-[#854D0E] bg-[#FEF9C3] rounded-lg"
            >
              <Sparkles className="w-4 h-4 text-[#B45309]" />
              Consultor Técnico Apícola
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
