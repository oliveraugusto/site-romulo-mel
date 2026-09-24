import { useState } from 'react';
import { CartItem } from '../types';
import { X, Plus, Minus, Trash2, ArrowRight, ShieldCheck, Tag } from 'lucide-react';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (productId: string, delta: number) => void;
  onRemoveItem: (productId: string) => void;
  onProceedToCheckout: () => void;
}

export function CartDrawer({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onProceedToCheckout
}: CartDrawerProps) {
  const [couponCode, setCouponCode] = useState('');
  const [couponApplied, setCouponApplied] = useState(false);
  const [cep, setCep] = useState('');
  const [shippingCalculated, setShippingCalculated] = useState(false);

  if (!isOpen) return null;

  const rawSubtotal = cartItems.reduce((acc, item) => acc + (item.product.price * item.quantity), 0);
  const discount = couponApplied ? rawSubtotal * 0.10 : 0;
  const freeShipping = rawSubtotal >= 250;
  const shippingCost = shippingCalculated ? (freeShipping ? 0 : 24.90) : 0;
  const total = rawSubtotal - discount + shippingCost;

  const handleApplyCoupon = () => {
    if (couponCode.trim().toUpperCase() === 'ABELHA10' || couponCode.trim().toUpperCase() === 'COLMEIA') {
      setCouponApplied(true);
    } else {
      alert('Cupom de teste: use ABELHA10 para 10% de desconto!');
    }
  };

  const handleCalcShipping = () => {
    if (cep.length >= 8) {
      setShippingCalculated(true);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-xs transition-opacity" 
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl border-l border-[#E8E6DF] flex flex-col justify-between">
          {/* Header */}
          <div className="p-5 border-b border-[#E8E6DF] flex items-center justify-between bg-[#FAFAF7]">
            <div className="flex items-center gap-2">
              <h2 className="text-base font-serif font-bold text-[#1E1A14]">
                Sacola de Compras
              </h2>
              <span className="text-xs font-semibold px-2 py-0.5 bg-[#FEF3C7] text-[#92400E] rounded-full tabular-nums">
                {cartItems.reduce((acc, i) => acc + i.quantity, 0)} itens
              </span>
            </div>

            <button
              onClick={onClose}
              aria-label="Fechar sacola"
              className="p-1.5 text-[#6B6355] hover:text-[#1E1A14] rounded-lg transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Item List */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {cartItems.length === 0 ? (
              <div className="text-center py-16 space-y-3">
                <div className="w-12 h-12 rounded-full bg-[#FAF9F5] border border-[#E8E6DF] flex items-center justify-center mx-auto text-[#B45309]">
                  🐝
                </div>
                <h3 className="text-sm font-semibold text-[#1E1A14]">Sua sacola está vazia</h3>
                <p className="text-xs text-[#786E5E] max-w-xs mx-auto">
                  Adicione méis nativos, própolis pura ou cera alveolada direto da nossa colheita.
                </p>
                <button
                  onClick={onClose}
                  className="mt-2 px-4 py-2 text-xs font-semibold text-white bg-[#B45309] hover:bg-[#92400E] rounded-lg"
                >
                  Continuar Explorando
                </button>
              </div>
            ) : (
              cartItems.map((item) => (
                <div 
                  key={item.product.id}
                  className="flex gap-3 p-3 bg-[#FAF9F5] rounded-xl border border-[#EDEAE1]"
                >
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-16 h-16 object-cover rounded-lg shrink-0 bg-white"
                  />

                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-1">
                        <h4 className="text-xs font-semibold text-[#1E1A14] line-clamp-2">
                          {item.product.name}
                        </h4>
                        <button
                          onClick={() => onRemoveItem(item.product.id)}
                          aria-label="Remover item"
                          className="text-[#9C9485] hover:text-red-600 p-1"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <div className="text-[11px] text-[#786E5E] font-medium mt-0.5">
                        {item.product.volumeOrWeight}
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-2">
                      <div className="flex items-center border border-[#DDD7CA] rounded-md bg-white">
                        <button
                          onClick={() => onUpdateQuantity(item.product.id, -1)}
                          className="p-1 text-[#5E5647] hover:text-[#1E1A14]"
                          aria-label="Diminuir quantidade"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2 text-xs font-bold text-[#1E1A14] tabular-nums">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.product.id, 1)}
                          className="p-1 text-[#5E5647] hover:text-[#1E1A14]"
                          aria-label="Aumentar quantidade"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <div className="text-xs font-bold text-[#1E1A14] tabular-nums">
                        R$ {(item.product.price * item.quantity).toFixed(2).replace('.', ',')}
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}

            {/* Freight & Coupon section */}
            {cartItems.length > 0 && (
              <div className="space-y-3 pt-3 border-t border-[#EDEAE1]">
                {/* Coupon */}
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <Tag className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-[#8C8474]" />
                    <input
                      type="text"
                      placeholder="Cupom (ex: ABELHA10)"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                      disabled={couponApplied}
                      className="w-full pl-8 pr-3 py-1.5 text-xs bg-white border border-[#DDD7CA] rounded-lg uppercase"
                    />
                  </div>
                  <button
                    onClick={handleApplyCoupon}
                    disabled={couponApplied || !couponCode}
                    className="px-3 py-1.5 text-xs font-semibold bg-[#2B2317] text-white rounded-lg hover:bg-black disabled:opacity-50"
                  >
                    {couponApplied ? 'Aplicado!' : 'Aplicar'}
                  </button>
                </div>

                {/* Freight CEP */}
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Calcular Frete (CEP)"
                    value={cep}
                    maxLength={9}
                    onChange={(e) => setCep(e.target.value.replace(/\D/g, ''))}
                    className="w-full px-3 py-1.5 text-xs bg-white border border-[#DDD7CA] rounded-lg"
                  />
                  <button
                    onClick={handleCalcShipping}
                    className="px-3 py-1.5 text-xs font-semibold bg-[#F0EEE6] text-[#2B2317] hover:bg-[#E3DFC9] rounded-lg"
                  >
                    Calcular
                  </button>
                </div>

                {shippingCalculated && (
                  <div className="text-[11px] bg-amber-50 p-2 rounded text-[#78350F] flex items-center justify-between">
                    <span>Sedex Refrigerado Especial</span>
                    <span className="font-bold tabular-nums">
                      {freeShipping ? 'GRÁTIS (Pedido > R$ 250)' : 'R$ 24,90'}
                    </span>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Footer & Checkout Trigger */}
          {cartItems.length > 0 && (
            <div className="p-5 border-t border-[#E8E6DF] bg-[#FAFAF7] space-y-3">
              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between text-[#6B6355]">
                  <span>Subtotal dos produtos</span>
                  <span className="font-medium text-[#1E1A14] tabular-nums">
                    R$ {rawSubtotal.toFixed(2).replace('.', ',')}
                  </span>
                </div>

                {couponApplied && (
                  <div className="flex justify-between text-emerald-700 font-medium">
                    <span>Desconto cupom (10%)</span>
                    <span className="tabular-nums">- R$ {discount.toFixed(2).replace('.', ',')}</span>
                  </div>
                )}

                <div className="flex justify-between text-[#6B6355]">
                  <span>Frete estimado</span>
                  <span className="font-medium text-[#1E1A14] tabular-nums">
                    {shippingCalculated 
                      ? (freeShipping ? 'Grátis' : `R$ ${shippingCost.toFixed(2).replace('.', ',')}`) 
                      : 'A calcular'}
                  </span>
                </div>

                <div className="flex justify-between text-sm font-bold text-[#1E1A14] pt-2 border-t border-[#E8E6DF]">
                  <span>Total do Pedido</span>
                  <span className="text-base text-[#B45309] tabular-nums">
                    R$ {total.toFixed(2).replace('.', ',')}
                  </span>
                </div>
              </div>

              <button
                onClick={() => {
                  onClose();
                  onProceedToCheckout();
                }}
                className="w-full py-3 px-4 bg-[#B45309] hover:bg-[#92400E] text-white text-xs font-semibold rounded-lg flex items-center justify-center gap-2 shadow-sm transition-colors"
              >
                <span>Finalizar Pedido com Segurança</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center justify-center gap-1.5 text-[11px] text-[#786E5E]">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Pagamento protegido por criptografia de ponta a ponta</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
