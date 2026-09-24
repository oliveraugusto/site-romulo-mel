import { useState, useMemo } from 'react';
import { Product, ProductCategory } from '../types';
import { ProductCard } from './ProductCard';
import { Search, SlidersHorizontal, ShieldCheck, Truck, Award } from 'lucide-react';

interface EcommerceSectionProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
  onViewDetails: (product: Product) => void;
}

export function EcommerceSection({ products, onAddToCart, onViewDetails }: EcommerceSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories: { id: ProductCategory; label: string }[] = [
    { id: 'all', label: 'Todos os Produtos' },
    { id: 'apis_honey', label: 'Mel com Ferrão (Apis)' },
    { id: 'asf_honey', label: 'Méis Nativos Sem Ferrão (ASF)' },
    { id: 'propolis', label: 'Própolis Verde & Vermelha' },
    { id: 'royal_jelly', label: 'Geleia Real Pura' },
    { id: 'beeswax', label: 'Cera Alveolada 100%' },
    { id: 'equipment', label: 'Equipamentos & Apitoxina' }
  ];

  const filteredProducts = useMemo(() => {
    return products.filter((item) => {
      const matchCategory = selectedCategory === 'all' || item.category === selectedCategory;
      const matchSearch = searchQuery.trim() === '' || 
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.beeSpecies.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCategory && matchSearch;
    });
  }, [products, selectedCategory, searchQuery]);

  return (
    <section id="loja" className="py-16 bg-[#FAFAF7] scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-8 border-b border-[#E8E6DF]">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-[#92400E]">
              Armazém de Padrão Superior
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1E1A14] mt-1">
              Méis com e sem ferrão, própolis, geleia real e cera
            </h2>
            <p className="text-sm text-[#635B4D] mt-1 max-w-xl">
              Produtos 100% autênticos, extraídos com respeito ao ciclo biológico das colmeias e laudo de pureza.
            </p>
          </div>

          {/* Search Bar */}
          <div className="relative min-w-[260px] max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8C8474]" />
            <input
              type="text"
              placeholder="Buscar por mel, Jataí, própolis..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-sm bg-white border border-[#DDD7CA] rounded-lg focus:outline-none focus:border-[#B45309] focus:ring-1 focus:ring-[#B45309]"
            />
          </div>
        </div>

        {/* Category Filter Tabs - Interactive segmented buttons */}
        <div className="py-6 overflow-x-auto">
          <div className="flex items-center gap-1.5 min-w-max p-1 bg-[#F0EEE6] rounded-xl border border-[#E3DFC9]">
            {categories.map((cat) => {
              const active = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap ${
                    active 
                      ? 'bg-white text-[#1E1A14] shadow-xs' 
                      : 'text-[#6B6355] hover:text-[#1E1A14]'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Store Trust Badges */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 p-4 bg-white rounded-xl border border-[#E8E6DF]">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-[#FEF3C7] text-[#92400E] rounded-lg">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-[#1E1A14]">Pureza & Origem Garantida</h4>
              <p className="text-[11px] text-[#6B6355]">Livre de glicose de milho e adulterantes</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-[#FEF3C7] text-[#92400E] rounded-lg">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-[#1E1A14]">Cadeia de Frio para Geleia & ASF</h4>
              <p className="text-[11px] text-[#6B6355]">Embalagens isotérmicas com gelo gel</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-[#FEF3C7] text-[#92400E] rounded-lg">
              <Truck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-[#1E1A14]">Envio Rápido para Todo o Brasil</h4>
              <p className="text-[11px] text-[#6B6355]">Sedex especializado para cargas vivas e biológicas</p>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-xl border border-dashed border-[#DDD7CA]">
            <p className="text-base font-semibold text-[#1E1A14]">Nenhum produto encontrado</p>
            <p className="text-xs text-[#786E5E] mt-1">Tente remover os filtros ou buscar por outro termo.</p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="mt-4 px-4 py-2 text-xs font-semibold text-[#92400E] bg-[#FEF3C7] hover:bg-[#FDE68A] rounded-lg transition-colors"
            >
              Ver todos os produtos
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={onAddToCart}
                onViewDetails={onViewDetails}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
