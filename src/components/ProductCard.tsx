import { Product } from '../types';
import { Star, Plus, Eye, Check } from 'lucide-react';
import { useState } from 'react';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  onViewDetails: (product: Product) => void;
}

export function ProductCard({ product, onAddToCart, onViewDetails }: ProductCardProps) {
  const [added, setAdded] = useState(false);

  const handleAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    onAddToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1200);
  };

  return (
    <div 
      onClick={() => onViewDetails(product)}
      className="group bg-white rounded-xl border border-[#E8E6DF] hover:border-[#C59B27] hover:shadow-md transition-all duration-200 cursor-pointer flex flex-col h-full overflow-hidden"
    >
      {/* Product Image Box */}
      <div className="relative aspect-[4/3] bg-[#F7F6F2] overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
        />

        {/* Subtle species tag */}
        <div className="absolute top-2.5 left-2.5 bg-white/90 backdrop-blur-xs px-2 py-1 rounded text-[11px] font-medium text-[#483F31] border border-[#E3DFC9]">
          {product.categoryLabel}
        </div>

        {product.originalPrice && (
          <div className="absolute top-2.5 right-2.5 bg-[#B45309] text-white px-2 py-0.5 rounded text-[11px] font-semibold">
            Oferta
          </div>
        )}

        <button
          onClick={(e) => {
            e.stopPropagation();
            onViewDetails(product);
          }}
          aria-label="Ver especificações técnicas"
          className="absolute bottom-2.5 right-2.5 p-2 bg-white/90 hover:bg-white text-[#2B2317] rounded-lg shadow-sm opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <Eye className="w-4 h-4" />
        </button>
      </div>

      {/* Content */}
      <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
        <div>
          <div className="text-xs text-[#786E5E] line-clamp-1 italic mb-1 font-mono">
            {product.beeSpecies}
          </div>

          <h3 className="font-semibold text-sm text-[#1E1A14] group-hover:text-[#B45309] transition-colors line-clamp-2 leading-snug">
            {product.name}
          </h3>

          <div className="flex items-center gap-1.5 mt-1.5 text-xs text-[#786E5E]">
            <div className="flex items-center text-[#D97706]">
              <Star className="w-3.5 h-3.5 fill-current" />
              <span className="ml-1 font-semibold text-[#1E1A14] tabular-nums">{product.rating.toFixed(1)}</span>
            </div>
            <span aria-hidden="true">·</span>
            <span>({product.reviewsCount} avaliações)</span>
            <span aria-hidden="true">·</span>
            <span className="font-medium text-[#443D31]">{product.volumeOrWeight}</span>
          </div>
        </div>

        {/* Pricing & Add to cart button */}
        <div className="pt-2 border-t border-[#F0EFEA] flex items-center justify-between">
          <div className="flex flex-col">
            {product.originalPrice && (
              <span className="text-xs text-[#9C9485] line-through tabular-nums">
                R$ {product.originalPrice.toFixed(2).replace('.', ',')}
              </span>
            )}
            <span className="text-base font-bold text-[#1E1A14] tabular-nums">
              R$ {product.price.toFixed(2).replace('.', ',')}
            </span>
          </div>

          <button
            onClick={handleAdd}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
              added 
                ? 'bg-emerald-600 text-white' 
                : 'bg-[#F4EFE6] text-[#633A0B] hover:bg-[#B45309] hover:text-white'
            }`}
          >
            {added ? (
              <>
                <Check className="w-3.5 h-3.5" />
                <span>Adicionado</span>
              </>
            ) : (
              <>
                <Plus className="w-3.5 h-3.5" />
                <span>Comprar</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
