import { useState } from 'react';
import { MONETIZATION_PILLARS } from '../data/monetization';
import { RoiCalculator } from './RoiCalculator';
import { TrendingUp, DollarSign, Clock, ShieldCheck, ChevronRight, CheckCircle2, Award, Sparkles } from 'lucide-react';

export function MonetizationSection() {
  const [selectedPillarId, setSelectedPillarId] = useState<string>('produtos-colmeia');

  const currentPillar = MONETIZATION_PILLARS.find((p) => p.id === selectedPillarId) || MONETIZATION_PILLARS[0];

  return (
    <section id="monetizacao" className="py-16 bg-[#FAFAF7] scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#92400E]">
            Modelos de Negócios & Vias de Alta Lucratividade
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#1E1A14]">
            Guia Completo de Monetização Apícola & Meliponícola
          </h2>
          <p className="text-sm sm:text-base text-[#524B3E] leading-relaxed">
            Como transformar abelhas em um empreendimento de margem elevada: além do mel a granel, explore cosméticos premium, apitoxina farmacêutica e contratos corporativos de polinização de lavouras.
          </p>
        </div>

        {/* 4 Pillars Overview Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {MONETIZATION_PILLARS.map((pillar) => {
            const isSelected = pillar.id === selectedPillarId;
            return (
              <button
                key={pillar.id}
                onClick={() => setSelectedPillarId(pillar.id)}
                className={`text-left p-5 rounded-2xl border transition-all duration-200 flex flex-col justify-between ${
                  isSelected
                    ? 'bg-white border-[#B45309] shadow-md ring-1 ring-[#B45309]'
                    : 'bg-[#FAF9F5] border-[#E8E6DF] hover:bg-white hover:border-[#C59B27]'
                }`}
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                      {pillar.profitPotential}
                    </span>
                    <span className="text-[11px] text-[#8C8474] font-mono">{pillar.paybackPeriod}</span>
                  </div>

                  <h3 className="font-serif font-bold text-base text-[#1E1A14] leading-snug">
                    {pillar.title}
                  </h3>

                  <p className="text-xs text-[#6B6355] line-clamp-2">
                    {pillar.subtitle}
                  </p>
                </div>

                <div className="pt-4 mt-3 border-t border-[#EDEAE1] flex items-center justify-between text-xs">
                  <span className="font-medium text-[#92400E]">Ver detalhes</span>
                  <ChevronRight className={`w-4 h-4 transition-transform ${isSelected ? 'translate-x-1 text-[#B45309]' : 'text-[#8C8474]'}`} />
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Pillar Technical Deep Dive */}
        <div className="bg-white rounded-2xl border border-[#E8E6DF] p-6 sm:p-10 shadow-xs space-y-8">
          <div className="space-y-3 pb-6 border-b border-[#EDEAE1]">
            <div className="flex flex-wrap items-center gap-3 text-xs">
              <span className="font-bold text-[#B45309] uppercase">{currentPillar.title}</span>
              <span aria-hidden="true" className="text-[#CCC8BD]">·</span>
              <span className="text-[#5E5647]">Ticket Médio: <strong className="text-[#1E1A14]">{currentPillar.ticketMedio}</strong></span>
              <span aria-hidden="true" className="text-[#CCC8BD]">·</span>
              <span className="text-[#5E5647]">Potencial de Lucro: <strong className="text-emerald-800">{currentPillar.lucroEstimado}</strong></span>
            </div>

            <h3 className="text-2xl font-serif font-bold text-[#1E1A14]">
              {currentPillar.subtitle}
            </h3>

            <p className="text-sm text-[#524B3E] max-w-4xl leading-relaxed">
              {currentPillar.description}
            </p>
          </div>

          {/* Subcategories Unit Economics Table */}
          <div className="space-y-4">
            <div className="text-xs font-bold uppercase tracking-wider text-[#92400E]">
              Estrutura de Preços & Margens Unitárias de Produção
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {currentPillar.subcategories.map((sub, sIdx) => (
                <div key={sIdx} className="p-4 bg-[#FAF9F5] rounded-xl border border-[#EDEAE1] space-y-2">
                  <div className="flex items-start justify-between gap-2">
                    <h4 className="font-semibold text-xs text-[#1E1A14]">
                      {sub.name}
                    </h4>
                    <span className="text-[11px] font-bold text-emerald-800 bg-emerald-100/70 px-2 py-0.5 rounded shrink-0">
                      Margem {sub.productionMargin}
                    </span>
                  </div>

                  <div className="text-xs font-mono font-medium text-[#92400E]">
                    Preço Praticado: {sub.marketPrice}
                  </div>

                  <p className="text-xs text-[#5E5647] leading-relaxed">
                    {sub.details}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Regulatory & Sanitary Framework */}
          <div className="p-4 bg-amber-50/60 rounded-xl border border-amber-200/70 flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-[#B45309] shrink-0 mt-0.5" />
            <div className="text-xs text-[#78350F] space-y-1">
              <span className="font-bold">Regulamentação e Conformidade Sanitária:</span>
              <p>{currentPillar.regulatoryNotes}</p>
            </div>
          </div>
        </div>

        {/* The ROI Simulator */}
        <RoiCalculator />
      </div>
    </section>
  );
}
