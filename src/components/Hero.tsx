import { ArrowRight, BookOpen, ShieldCheck, Sparkles, TrendingUp } from 'lucide-react';

interface HeroProps {
  onExploreStore: () => void;
  onExploreSchool: () => void;
  onExploreMonetization: () => void;
}

export function Hero({ onExploreStore, onExploreSchool, onExploreMonetization }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#F7F5EE] to-[#FAFAF7] border-b border-[#E8E6DF] py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Editorial Value Proposition */}
          <div className="lg:col-span-7 space-y-6">
            <div className="text-xs font-semibold tracking-wider text-[#92400E] uppercase">
              Apicultura de Precisão · Meliponicultura Nativa · Biotecnologia
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1E1A14] tracking-tight leading-[1.15] text-balance">
              O ecossistema completo das abelhas: da colmeia à monetização avançada.
            </h1>

            <p className="text-base sm:text-lg text-[#524B3E] max-w-2xl leading-relaxed">
              Méis puros e raros com e sem ferrão, própolis verde e vermelha, geleia real fresca e cera virgem alveolada. Conecte-se à <strong className="font-semibold text-[#1E1A14]">Escola da Abelha</strong> para dominar capturas, divisões seguras e extração de apitoxina, com um modelo comprovado de lucro apícola sustentável.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={onExploreStore}
                className="px-5 py-3 text-sm font-semibold text-white bg-[#B45309] hover:bg-[#92400E] rounded-lg transition-colors shadow-sm flex items-center gap-2"
              >
                <span>Explorar E-commerce</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onExploreSchool}
                className="px-5 py-3 text-sm font-semibold text-[#2B2317] bg-[#EFECE3] hover:bg-[#E5E0D3] rounded-lg transition-colors border border-[#D9D4C7] flex items-center gap-2"
              >
                <BookOpen className="w-4 h-4 text-[#B45309]" />
                <span>Tutoriais da Escola</span>
              </button>

              <button
                onClick={onExploreMonetization}
                className="px-4 py-3 text-sm font-semibold text-[#78350F] hover:text-[#B45309] transition-colors flex items-center gap-1.5"
              >
                <TrendingUp className="w-4 h-4" />
                <span>Vias de Lucro & ROI</span>
              </button>
            </div>

            {/* Trust and domain credentials - clean text with separators */}
            <div className="pt-6 border-t border-[#E8E6DF] flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-[#6B6355]">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#B45309]" />
                <span>Inspeção SIF / SIM Oficial</span>
              </div>
              <span aria-hidden="true" className="text-[#CCC8BD]">·</span>
              <div>
                <span>ASF de Meliponários Rastreáveis</span>
              </div>
              <span aria-hidden="true" className="text-[#CCC8BD]">·</span>
              <div>
                <span>Apitoxina com Eletroestimulação Segura</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Asset */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-[#DCD7C9] shadow-lg aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] bg-[#EBE7DC]">
              <img
                src="/src/assets/images/hero_apiculture_natural_1790206871626.jpg"
                alt="Favos de mel dourado e potes de mel artesanal cru no apiário"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 text-white pointer-events-none">
                <span className="text-xs uppercase tracking-wider text-amber-300 font-medium">Safra Fresca Direta do Produtor</span>
                <p className="text-sm font-serif font-semibold leading-tight text-white/95">Floradas Nativas do Cerrado & Mata Atlântica</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
