import { useState } from 'react';
import { CartItem } from '../types';
import { X, CheckCircle2, QrCode, CreditCard, FileText, ArrowLeft, ShieldCheck, Copy, Check } from 'lucide-react';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onOrderSuccess: () => void;
}

export function CheckoutModal({ isOpen, onClose, cartItems, onOrderSuccess }: CheckoutModalProps) {
  const [step, setStep] = useState<'form' | 'success'>('form');
  const [paymentMethod, setPaymentMethod] = useState<'pix' | 'credit' | 'boleto'>('pix');
  const [copiedPix, setCopiedPix] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    cpf: '',
    cep: '',
    street: '',
    number: '',
    complement: '',
    neighborhood: '',
    city: '',
    state: 'SP',
    cardNumber: '',
    cardHolder: '',
    cardExpiry: '',
    cardCvv: '',
    installments: '1'
  });

  if (!isOpen) return null;

  const rawSubtotal = cartItems.reduce((acc, item) => acc + (item.product.price * item.quantity), 0);
  const shipping = rawSubtotal >= 250 ? 0 : 24.90;
  const pixDiscount = paymentMethod === 'pix' ? rawSubtotal * 0.05 : 0;
  const total = rawSubtotal - pixDiscount + shipping;
  const simulatedOrderNum = 'APIS-' + Math.floor(100000 + Math.random() * 900000);
  const simulatedPixCode = `00020126580014br.gov.bcb.pix0136apis-colmeia-imperial-${Date.now()}520400005303986540${total.toFixed(2)}5802BR5920COLMEIA IMPERIAL LTDA6009SAO PAULO62070503***6304`;

  const handleCopyPix = () => {
    navigator.clipboard.writeText(simulatedPixCode);
    setCopiedPix(true);
    setTimeout(() => setCopiedPix(false), 2000);
  };

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setStep('success');
      onOrderSuccess();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6">
      <div 
        className="relative bg-white w-full max-w-2xl rounded-2xl shadow-2xl border border-[#E8E6DF] overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 border-b border-[#E8E6DF] bg-[#FAFAF7] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <h2 className="text-base font-serif font-bold text-[#1E1A14]">
              {step === 'form' ? 'Checkout Seguro · Colmeia Imperial' : 'Pedido Confirmado!'}
            </h2>
          </div>
          <button
            onClick={onClose}
            aria-label="Fechar checkout"
            className="p-1.5 text-[#6B6355] hover:text-[#1E1A14] rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {step === 'form' ? (
          <form onSubmit={handleSubmitOrder} className="p-6 space-y-6 max-h-[80vh] overflow-y-auto">
            {/* Step 1: Customer Contact & Shipping */}
            <div className="space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#92400E]">
                1. Dados de Envio & Contato
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-medium text-[#483F31] mb-1">Nome Completo *</label>
                  <input
                    required
                    type="text"
                    placeholder="Ex: João da Silva"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3 py-2 text-xs bg-white border border-[#DDD7CA] rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-medium text-[#483F31] mb-1">E-mail para Rastreio *</label>
                  <input
                    required
                    type="email"
                    placeholder="seuemail@exemplo.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3 py-2 text-xs bg-white border border-[#DDD7CA] rounded-lg"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-medium text-[#483F31] mb-1">Telefone / WhatsApp *</label>
                  <input
                    required
                    type="tel"
                    placeholder="(11) 99999-9999"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3 py-2 text-xs bg-white border border-[#DDD7CA] rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-medium text-[#483F31] mb-1">CPF (Nota Fiscal) *</label>
                  <input
                    required
                    type="text"
                    placeholder="000.000.000-00"
                    value={formData.cpf}
                    onChange={(e) => setFormData({ ...formData, cpf: e.target.value })}
                    className="w-full px-3 py-2 text-xs bg-white border border-[#DDD7CA] rounded-lg"
                  />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div className="col-span-2">
                  <label className="block text-[11px] font-medium text-[#483F31] mb-1">Endereço de Entrega *</label>
                  <input
                    required
                    type="text"
                    placeholder="Rua, Avenida, Estrada..."
                    value={formData.street}
                    onChange={(e) => setFormData({ ...formData, street: e.target.value })}
                    className="w-full px-3 py-2 text-xs bg-white border border-[#DDD7CA] rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-medium text-[#483F31] mb-1">Número *</label>
                  <input
                    required
                    type="text"
                    placeholder="123"
                    value={formData.number}
                    onChange={(e) => setFormData({ ...formData, number: e.target.value })}
                    className="w-full px-3 py-2 text-xs bg-white border border-[#DDD7CA] rounded-lg"
                  />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="block text-[11px] font-medium text-[#483F31] mb-1">Bairro *</label>
                  <input
                    required
                    type="text"
                    placeholder="Bairro"
                    value={formData.neighborhood}
                    onChange={(e) => setFormData({ ...formData, neighborhood: e.target.value })}
                    className="w-full px-3 py-2 text-xs bg-white border border-[#DDD7CA] rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-medium text-[#483F31] mb-1">Cidade *</label>
                  <input
                    required
                    type="text"
                    placeholder="São Paulo"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full px-3 py-2 text-xs bg-white border border-[#DDD7CA] rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-medium text-[#483F31] mb-1">CEP *</label>
                  <input
                    required
                    type="text"
                    placeholder="01234-567"
                    value={formData.cep}
                    onChange={(e) => setFormData({ ...formData, cep: e.target.value })}
                    className="w-full px-3 py-2 text-xs bg-white border border-[#DDD7CA] rounded-lg"
                  />
                </div>
              </div>
            </div>

            {/* Step 2: Payment Method */}
            <div className="space-y-3 pt-4 border-t border-[#EDEAE1]">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#92400E]">
                2. Forma de Pagamento
              </h3>

              <div className="grid grid-cols-3 gap-3">
                <button
                  type="button"
                  onClick={() => setPaymentMethod('pix')}
                  className={`p-3 rounded-xl border text-center transition-all flex flex-col items-center gap-1.5 ${
                    paymentMethod === 'pix' 
                      ? 'border-[#B45309] bg-amber-50/70 text-[#92400E] font-semibold' 
                      : 'border-[#DDD7CA] hover:border-[#B45309] text-[#5E5647]'
                  }`}
                >
                  <QrCode className="w-5 h-5 text-[#B45309]" />
                  <span className="text-xs">PIX Imediato</span>
                  <span className="text-[10px] text-emerald-700 font-bold bg-emerald-100 px-1.5 py-0.2 rounded">5% OFF</span>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod('credit')}
                  className={`p-3 rounded-xl border text-center transition-all flex flex-col items-center gap-1.5 ${
                    paymentMethod === 'credit' 
                      ? 'border-[#B45309] bg-amber-50/70 text-[#92400E] font-semibold' 
                      : 'border-[#DDD7CA] hover:border-[#B45309] text-[#5E5647]'
                  }`}
                >
                  <CreditCard className="w-5 h-5 text-[#B45309]" />
                  <span className="text-xs">Cartão Crédito</span>
                  <span className="text-[10px] text-[#786E5E]">Até 6x s/ juros</span>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod('boleto')}
                  className={`p-3 rounded-xl border text-center transition-all flex flex-col items-center gap-1.5 ${
                    paymentMethod === 'boleto' 
                      ? 'border-[#B45309] bg-amber-50/70 text-[#92400E] font-semibold' 
                      : 'border-[#DDD7CA] hover:border-[#B45309] text-[#5E5647]'
                  }`}
                >
                  <FileText className="w-5 h-5 text-[#B45309]" />
                  <span className="text-xs">Boleto Bancário</span>
                  <span className="text-[10px] text-[#786E5E]">Compensação 1d</span>
                </button>
              </div>

              {/* PIX Details */}
              {paymentMethod === 'pix' && (
                <div className="p-4 bg-amber-50/60 rounded-xl border border-amber-200/70 space-y-2 text-xs">
                  <div className="font-semibold text-[#92400E] flex items-center justify-between">
                    <span>Chave PIX e QR Code serão gerados ao confirmar:</span>
                    <span className="text-emerald-700 font-bold">Desconto aplicado: R$ {pixDiscount.toFixed(2).replace('.', ',')}</span>
                  </div>
                  <p className="text-[#786E5E] text-[11px]">
                    Liberação imediata para envio no mesmo dia útil com cadeia de frio atestada.
                  </p>
                </div>
              )}

              {/* Credit Card Details */}
              {paymentMethod === 'credit' && (
                <div className="p-4 bg-[#FAF9F5] rounded-xl border border-[#EDEAE1] space-y-3">
                  <div>
                    <label className="block text-[11px] font-medium text-[#483F31] mb-1">Número do Cartão</label>
                    <input
                      type="text"
                      placeholder="0000 0000 0000 0000"
                      value={formData.cardNumber}
                      onChange={(e) => setFormData({ ...formData, cardNumber: e.target.value })}
                      className="w-full px-3 py-1.5 text-xs bg-white border border-[#DDD7CA] rounded-lg font-mono"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-medium text-[#483F31] mb-1">Validade (MM/AA)</label>
                      <input
                        type="text"
                        placeholder="12/28"
                        value={formData.cardExpiry}
                        onChange={(e) => setFormData({ ...formData, cardExpiry: e.target.value })}
                        className="w-full px-3 py-1.5 text-xs bg-white border border-[#DDD7CA] rounded-lg font-mono"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-medium text-[#483F31] mb-1">CVV</label>
                      <input
                        type="text"
                        placeholder="123"
                        maxLength={4}
                        value={formData.cardCvv}
                        onChange={(e) => setFormData({ ...formData, cardCvv: e.target.value })}
                        className="w-full px-3 py-1.5 text-xs bg-white border border-[#DDD7CA] rounded-lg font-mono"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Order Summary & Submit */}
            <div className="pt-4 border-t border-[#EDEAE1] space-y-3">
              <div className="bg-[#FAF9F5] p-3 rounded-lg text-xs space-y-1">
                <div className="flex justify-between text-[#6B6355]">
                  <span>Subtotal ({cartItems.reduce((acc, i) => acc + i.quantity, 0)} itens):</span>
                  <span className="font-semibold text-[#1E1A14] tabular-nums">R$ {rawSubtotal.toFixed(2).replace('.', ',')}</span>
                </div>
                {paymentMethod === 'pix' && (
                  <div className="flex justify-between text-emerald-700">
                    <span>Desconto 5% PIX:</span>
                    <span className="font-semibold tabular-nums">- R$ {pixDiscount.toFixed(2).replace('.', ',')}</span>
                  </div>
                )}
                <div className="flex justify-between text-[#6B6355]">
                  <span>Frete com Embalagem Térmica:</span>
                  <span className="font-semibold text-[#1E1A14] tabular-nums">{shipping === 0 ? 'Grátis' : `R$ ${shipping.toFixed(2).replace('.', ',')}`}</span>
                </div>
                <div className="flex justify-between text-sm font-bold text-[#1E1A14] pt-1 border-t border-[#E8E6DF]">
                  <span>Total Final:</span>
                  <span className="text-[#B45309] tabular-nums">R$ {total.toFixed(2).replace('.', ',')}</span>
                </div>
              </div>

              <button
                type="submit"
                disabled={isProcessing}
                className="w-full py-3 bg-[#B45309] hover:bg-[#92400E] text-white text-xs font-semibold rounded-lg flex items-center justify-center gap-2 shadow-sm transition-colors disabled:opacity-50"
              >
                {isProcessing ? (
                  <span>Processando pedido com segurança...</span>
                ) : (
                  <span>Confirmar Pedido de R$ {total.toFixed(2).replace('.', ',')}</span>
                )}
              </button>
            </div>
          </form>
        ) : (
          /* Order Confirmed Screen */
          <div className="p-8 text-center space-y-6">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <span className="text-xs uppercase tracking-wider font-semibold text-emerald-700">
                Pedido Realizado com Sucesso
              </span>
              <h3 className="text-2xl font-serif font-bold text-[#1E1A14]">
                Pedido #{simulatedOrderNum}
              </h3>
              <p className="text-xs text-[#6B6355] max-w-md mx-auto">
                Enviamos o comprovante detalhado e código de rastreamento para <strong>{formData.email || 'seu e-mail'}</strong>.
              </p>
            </div>

            {/* If PIX: Show simulated code */}
            {paymentMethod === 'pix' && (
              <div className="bg-[#FAF9F5] p-5 rounded-xl border border-[#EDEAE1] space-y-3 max-w-md mx-auto text-left">
                <div className="text-xs font-bold text-[#92400E] flex items-center justify-between">
                  <span>Pagar com PIX Instantâneo</span>
                  <span className="tabular-nums font-bold">R$ {total.toFixed(2).replace('.', ',')}</span>
                </div>

                <div className="p-3 bg-white border border-[#DDD7CA] rounded-lg font-mono text-[10px] break-all text-[#483F31]">
                  {simulatedPixCode}
                </div>

                <button
                  onClick={handleCopyPix}
                  className="w-full py-2 bg-[#2B2317] hover:bg-black text-white text-xs font-semibold rounded-lg flex items-center justify-center gap-1.5 transition-colors"
                >
                  {copiedPix ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Código Copiado!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copiar Código PIX Copia-e-Cola</span>
                    </>
                  )}
                </button>
              </div>
            )}

            <div className="pt-2">
              <button
                onClick={onClose}
                className="px-6 py-2.5 bg-[#F4EFE6] text-[#633A0B] hover:bg-[#EAE2D3] rounded-lg text-xs font-semibold transition-colors"
              >
                Voltar à Página Inicial
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
