import { useState } from 'react';
import { Product } from '../types';
import { X, Star, ShieldCheck, Check, Plus, Minus, ShoppingBag } from 'lucide-react';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, quantity: number) => void;
}

export function ProductDetailModal({ product, onClose, onAddToCart }: ProductDetailModalProps) {
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  if (!product) return null;

  const handleAdd = () => {
    onAddToCart(product, quantity);
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
      onClose();
    }, 900);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6">
      <div 
        className="relative bg-white w-full max-w-3xl rounded-2xl shadow-2xl border border-[#E8E6DF] overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Fechar"
          className="absolute top-4 right-4 z-10 p-2 bg-white/90 hover:bg-white text-[#443D31] hover:text-[#1E1A14] rounded-full shadow-xs transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left: Product Image */}
          <div className="bg-[#F7F6F2] relative aspect-square md:aspect-auto">
            <img
              src={product.image}
              alt={product.name}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4 bg-white/95 px-2.5 py-1 rounded text-xs font-semibold text-[#633A0B] shadow-xs">
              {product.categoryLabel}
            </div>
          </div>

          {/* Right: Info & Purchase Module */}
          <div className="p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <div className="text-xs font-mono text-[#8C8474]">
                Espécie: {product.beeSpecies}
              </div>

              <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#1E1A14] leading-snug">
                {product.name}
              </h2>

              <div className="flex items-center gap-2 text-xs text-[#6B6355]">
                <div className="flex items-center text-[#D97706]">
                  <Star className="w-4 h-4 fill-current" />
                  <span className="ml-1 font-bold text-[#1E1A14] tabular-nums">{product.rating.toFixed(1)}</span>
                </div>
                <span aria-hidden="true">·</span>
                <span>{product.reviewsCount} opiniões verificadas</span>
                <span aria-hidden="true">·</span>
                <span className="font-semibold text-[#1E1A14]">{product.volumeOrWeight}</span>
              </div>

              <div className="pt-2 flex items-baseline gap-2">
                <span className="text-2xl font-bold text-[#1E1A14] tabular-nums">
                  R$ {product.price.toFixed(2).replace('.', ',')}
                </span>
                {product.originalPrice && (
                  <span className="text-sm text-[#9C9485] line-through tabular-nums">
                    R$ {product.originalPrice.toFixed(2).replace('.', ',')}
                  </span>
                )}
              </div>

              <p className="text-xs text-[#524B3E] leading-relaxed">
                {product.description}
              </p>

              {/* Key Features */}
              <div className="space-y-1.5 pt-2">
                <div className="text-xs font-bold text-[#2B2317]">Destaques da colheita:</div>
                <ul className="space-y-1 text-xs text-[#5E5647]">
                  {product.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technical Specifications Table */}
              <div className="pt-3 border-t border-[#F0EFEA]">
                <div className="text-xs font-bold text-[#2B2317] mb-2 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#B45309]" />
                  <span>Ficha Técnica & Rastreabilidade</span>
                </div>
                <dl className="grid grid-cols-2 gap-y-1.5 text-[11px] bg-[#FAF9F5] p-2.5 rounded-lg border border-[#EDEAE1]">
                  <div>
                    <dt className="text-[#8C8474]">Origem Botânica:</dt>
                    <dd className="font-medium text-[#1E1A14]">{product.technicalSpecs.botanicalSource}</dd>
                  </div>
                  <div>
                    <dt className="text-[#8C8474]">Umidade / Pureza:</dt>
                    <dd className="font-medium text-[#1E1A14] tabular-nums">{product.technicalSpecs.moisture}</dd>
                  </div>
                  <div>
                    <dt className="text-[#8C8474]">Região do Apiário:</dt>
                    <dd className="font-medium text-[#1E1A14]">{product.technicalSpecs.apiaryRegion}</dd>
                  </div>
                  <div>
                    <dt className="text-[#8C8474]">Laudo / Registro:</dt>
                    <dd className="font-medium text-[#1E1A14]">{product.technicalSpecs.saspCertificate}</dd>
                  </div>
                </dl>
              </div>
            </div>

            {/* Quantity Stepper & Buy Action */}
            <div className="pt-4 border-t border-[#F0EFEA] flex items-center gap-3">
              <div className="flex items-center border border-[#DDD7CA] rounded-lg bg-white">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-2 text-[#5E5647] hover:text-[#1E1A14] transition-colors"
                  aria-label="Diminuir quantidade"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="px-3 text-xs font-bold text-[#1E1A14] tabular-nums min-w-[32px] text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-2 text-[#5E5647] hover:text-[#1E1A14] transition-colors"
                  aria-label="Aumentar quantidade"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>

              <button
                onClick={handleAdd}
                className={`flex-1 py-2.5 px-4 rounded-lg text-xs font-semibold flex items-center justify-center gap-2 transition-all ${
                  added 
                    ? 'bg-emerald-600 text-white' 
                    : 'bg-[#B45309] hover:bg-[#92400E] text-white shadow-sm'
                }`}
              >
                {added ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Adicionado à Sacola!</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-4 h-4" />
                    <span>Comprar por R$ {(product.price * quantity).toFixed(2).replace('.', ',')}</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
