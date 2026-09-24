import { ShieldCheck, Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#1E1A14] text-[#C9C4B7] border-t border-[#383226] pt-14 pb-10 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand & Purpose */}
          <div className="md:col-span-1 space-y-3">
            <div className="text-xl font-serif font-bold text-white tracking-tight">
              Colmeia Imperial
            </div>
            <p className="text-[#9C9485] leading-relaxed">
              Ecossistema integrado de apicultura e meliponicultura brasileira. Unindo preservação das abelhas nativas, produção de méis nobres e biotecnologia da apitoxina.
            </p>
            <div className="flex items-center gap-1.5 text-amber-400/90 pt-1">
              <ShieldCheck className="w-4 h-4" />
              <span className="font-semibold text-[11px]">Origem Certificada & Rastreável</span>
            </div>
          </div>

          {/* Nav Store */}
          <div className="space-y-2.5">
            <div className="text-xs font-bold uppercase tracking-wider text-white">
              E-commerce & Insumos
            </div>
            <ul className="space-y-1.5 text-[#9C9485]">
              <li><a href="#loja" className="hover:text-amber-300 transition-colors">Méis Silvestres (Apis)</a></li>
              <li><a href="#loja" className="hover:text-amber-300 transition-colors">Méis de ASF (Jataí, Uruçu)</a></li>
              <li><a href="#loja" className="hover:text-amber-300 transition-colors">Própolis Verde & Vermelha</a></li>
              <li><a href="#loja" className="hover:text-amber-300 transition-colors">Geleia Real Fresca 100%</a></li>
              <li><a href="#loja" className="hover:text-amber-300 transition-colors">Cera de Abelha Alveolada</a></li>
            </ul>
          </div>

          {/* Nav School */}
          <div className="space-y-2.5">
            <div className="text-xs font-bold uppercase tracking-wider text-white">
              Escola da Abelha
            </div>
            <ul className="space-y-1.5 text-[#9C9485]">
              <li><a href="#escola" className="hover:text-amber-300 transition-colors">Manejo & Nutrição na Entressafra</a></li>
              <li><a href="#escola" className="hover:text-amber-300 transition-colors">Ninhos-Isca & Atrativo PET</a></li>
              <li><a href="#escola" className="hover:text-amber-300 transition-colors">Multiplicação em Caixas INPA</a></li>
              <li><a href="#escola" className="hover:text-amber-300 transition-colors">Extração Segura de Apitoxina</a></li>
              <li><a href="#escola" className="hover:text-amber-300 transition-colors">Simulador de Decisão de Campo</a></li>
            </ul>
          </div>

          {/* Nav Monetization & Policies */}
          <div className="space-y-2.5">
            <div className="text-xs font-bold uppercase tracking-wider text-white">
              Vias de Lucro & Normas
            </div>
            <ul className="space-y-1.5 text-[#9C9485]">
              <li><a href="#monetizacao" className="hover:text-amber-300 transition-colors">Contratos de Polinização de Café</a></li>
              <li><a href="#monetizacao" className="hover:text-amber-300 transition-colors">Cosméticos & Efeito Tensor</a></li>
              <li><a href="#calculadora" className="hover:text-amber-300 transition-colors">Simulador de Retorno (ROI)</a></li>
              <li><a href="#monetizacao" className="hover:text-amber-300 transition-colors">Conformidade SIF e MAPA</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#383226] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#786E5E]">
          <div>
            © {new Date().getFullYear()} Colmeia Imperial Agroapícola do Brasil Ltda. Todos os direitos reservados.
          </div>
          <div className="flex items-center gap-4">
            <span>Rastreabilidade por Lote</span>
            <span aria-hidden="true">·</span>
            <span>Meliponicultura Sustentável</span>
            <span aria-hidden="true">·</span>
            <span>Cadastro Técnico Federal IBAMA</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
