import { useState, useMemo } from 'react';
import { calculateRoi, RoiSimulationParams } from '../data/monetization';
import { DollarSign, TrendingUp, PieChart, Sparkles, Check, ChevronRight } from 'lucide-react';

export function RoiCalculator() {
  const [params, setParams] = useState<RoiSimulationParams>({
    apisCount: 40,
    asfCount: 25,
    enableHoney: true,
    enablePropolis: true,
    enableApitoxin: true,
    enablePollination: true,
    enableCosmetics: false
  });

  const result = useMemo(() => calculateRoi(params), [params]);

  return (
    <div id="calculadora" className="bg-white rounded-2xl border border-[#E8E6DF] p-6 sm:p-10 shadow-xs space-y-8 scroll-mt-20">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#EDEAE1]">
        <div>
          <div className="text-xs font-semibold uppercase tracking-wider text-[#92400E]">
            Simulador de Viabilidade Econômica
          </div>
          <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#1E1A14] mt-1">
            Calculadora Interativa de Rentabilidade Apícola & ASF
          </h3>
          <p className="text-xs text-[#786E5E] mt-1">
            Configure o tamanho do seu apiário/meliponário e descubra o faturamento projetado e payback.
          </p>
        </div>

        <div className="flex items-center gap-2 p-2 bg-[#FEF9C3] rounded-xl text-[#854D0E] self-start">
          <Sparkles className="w-4 h-4 text-[#B45309]" />
          <span className="text-xs font-semibold">Parâmetros Embrapa / Sebrae</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Inputs (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          {/* Hives Sliders */}
          <div className="space-y-4 bg-[#FAF9F5] p-5 rounded-xl border border-[#EDEAE1]">
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs font-semibold text-[#1E1A14]">
                <span>Colmeias de Apis mellifera (com ferrão):</span>
                <span className="font-mono text-sm font-bold text-[#B45309]">{params.apisCount} colmeias</span>
              </div>
              <input
                type="range"
                min="0"
                max="250"
                step="5"
                value={params.apisCount}
                onChange={(e) => setParams({ ...params, apisCount: Number(e.target.value) })}
                className="w-full accent-[#B45309] cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-[#8C8474]">
                <span>0</span>
                <span>50</span>
                <span>100</span>
                <span>150</span>
                <span>250</span>
              </div>
            </div>

            <div className="space-y-2 pt-3 border-t border-[#E8E6DF]">
              <div className="flex justify-between items-center text-xs font-semibold text-[#1E1A14]">
                <span>Caixas de Abelhas Sem Ferrão ASF (Jataí, Uruçu, Mandaçaia):</span>
                <span className="font-mono text-sm font-bold text-[#B45309]">{params.asfCount} caixas</span>
              </div>
              <input
                type="range"
                min="0"
                max="150"
                step="5"
                value={params.asfCount}
                onChange={(e) => setParams({ ...params, asfCount: Number(e.target.value) })}
                className="w-full accent-[#B45309] cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-[#8C8474]">
                <span>0</span>
                <span>25</span>
                <span>50</span>
                <span>100</span>
                <span>150</span>
              </div>
            </div>
          </div>

          {/* Revenue Stream Toggles */}
          <div className="space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-[#483F31]">
              Ativar Linhas de Produção & Serviços:
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              <label className="flex items-center gap-3 p-3 bg-white border border-[#DDD7CA] rounded-xl cursor-pointer hover:border-[#B45309] transition-colors">
                <input
                  type="checkbox"
                  checked={params.enableHoney}
                  onChange={(e) => setParams({ ...params, enableHoney: e.target.checked })}
                  className="rounded text-[#B45309] focus:ring-[#B45309] w-4 h-4"
                />
                <div>
                  <div className="text-xs font-semibold text-[#1E1A14]">Méis Nobres Fracionados</div>
                  <div className="text-[10px] text-[#786E5E]">Apis (R$ 45/kg) e ASF (R$ 220/kg)</div>
                </div>
              </label>

              <label className="flex items-center gap-3 p-3 bg-white border border-[#DDD7CA] rounded-xl cursor-pointer hover:border-[#B45309] transition-colors">
                <input
                  type="checkbox"
                  checked={params.enablePropolis}
                  onChange={(e) => setParams({ ...params, enablePropolis: e.target.checked })}
                  className="rounded text-[#B45309] focus:ring-[#B45309] w-4 h-4"
                />
                <div>
                  <div className="text-xs font-semibold text-[#1E1A14]">Extratos de Própolis Verde</div>
                  <div className="text-[10px] text-[#786E5E]">30 frascos por kg bruto (R$ 42/un)</div>
                </div>
              </label>

              <label className="flex items-center gap-3 p-3 bg-white border border-[#DDD7CA] rounded-xl cursor-pointer hover:border-[#B45309] transition-colors">
                <input
                  type="checkbox"
                  checked={params.enableApitoxin}
                  onChange={(e) => setParams({ ...params, enableApitoxin: e.target.checked })}
                  className="rounded text-[#B45309] focus:ring-[#B45309] w-4 h-4"
                />
                <div>
                  <div className="text-xs font-semibold text-[#1E1A14]">Apitoxina Cristalizada</div>
                  <div className="text-[10px] text-[#786E5E]">0,8g/colmeia/ano (R$ 320/g puro)</div>
                </div>
              </label>

              <label className="flex items-center gap-3 p-3 bg-white border border-[#DDD7CA] rounded-xl cursor-pointer hover:border-[#B45309] transition-colors">
                <input
                  type="checkbox"
                  checked={params.enablePollination}
                  onChange={(e) => setParams({ ...params, enablePollination: e.target.checked })}
                  className="rounded text-[#B45309] focus:ring-[#B45309] w-4 h-4"
                />
                <div>
                  <div className="text-xs font-semibold text-[#1E1A14]">Serviços de Polinização</div>
                  <div className="text-[10px] text-[#786E5E]">Café, estufas e frutas (R$ 160/contrato)</div>
                </div>
              </label>

              <label className="flex items-center gap-3 p-3 bg-white border border-[#DDD7CA] rounded-xl cursor-pointer hover:border-[#B45309] transition-colors sm:col-span-2">
                <input
                  type="checkbox"
                  checked={params.enableCosmetics}
                  onChange={(e) => setParams({ ...params, enableCosmetics: e.target.checked })}
                  className="rounded text-[#B45309] focus:ring-[#B45309] w-4 h-4"
                />
                <div>
                  <div className="text-xs font-semibold text-[#1E1A14]">Linha de Cosméticos & Pomadas de Própolis (+35% no mel)</div>
                  <div className="text-[10px] text-[#786E5E]">Agregação de valor com ceras e sabonetes artesanais</div>
                </div>
              </label>
            </div>
          </div>
        </div>

        {/* Right Financial Results (5 cols) */}
        <div className="lg:col-span-5 bg-[#FAF9F5] rounded-xl border border-[#EDEAE1] p-6 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="text-xs font-bold uppercase tracking-wider text-[#92400E]">
              Demonstrativo Financeiro Projetado
            </div>

            {/* Big Numbers */}
            <div className="space-y-1">
              <span className="text-xs text-[#786E5E]">Faturamento Bruto Anual:</span>
              <div className="text-2xl sm:text-3xl font-serif font-bold text-[#1E1A14] tabular-nums">
                R$ {result.annualRevenue.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="p-3 bg-white rounded-lg border border-[#EDEAE1]">
                <span className="text-[11px] text-[#8C8474]">Lucro Líquido / Mês</span>
                <div className="text-base font-bold text-emerald-700 tabular-nums">
                  R$ {result.monthlyNetProfit.toLocaleString('pt-BR', { maximumFractionDigits: 0 })}
                </div>
              </div>

              <div className="p-3 bg-white rounded-lg border border-[#EDEAE1]">
                <span className="text-[11px] text-[#8C8474]">Margem Operacional</span>
                <div className="text-base font-bold text-[#B45309] tabular-nums">
                  {result.netMargin.toFixed(1)}%
                </div>
              </div>
            </div>

            {/* Detailed Costs & Payback */}
            <dl className="space-y-2 text-xs pt-3 border-t border-[#EDEAE1]">
              <div className="flex justify-between text-[#6B6355]">
                <span>Custos Operacionais Anuais:</span>
                <span className="font-semibold text-red-700 tabular-nums">
                  - R$ {result.operatingCosts.toLocaleString('pt-BR', { maximumFractionDigits: 0 })}
                </span>
              </div>
              <div className="flex justify-between text-[#6B6355]">
                <span>Investimento Inicial Estimado (CAPEX):</span>
                <span className="font-semibold text-[#1E1A14] tabular-nums">
                  R$ {result.estimatedCapex.toLocaleString('pt-BR', { maximumFractionDigits: 0 })}
                </span>
              </div>
              <div className="flex justify-between text-[#6B6355]">
                <span>Retorno do Investimento (Payback):</span>
                <span className="font-semibold text-emerald-800 tabular-nums">
                  {result.paybackMonths > 0 ? `~${result.paybackMonths} meses` : 'Sob demanda'}
                </span>
              </div>
            </dl>

            {/* Breakdown Visual Bar */}
            {result.breakdown.length > 0 && (
              <div className="space-y-2 pt-2">
                <div className="text-[11px] font-bold text-[#483F31]">Composição da Receita:</div>
                <div className="space-y-1.5">
                  {result.breakdown.map((item, bIdx) => (
                    <div key={bIdx} className="space-y-0.5">
                      <div className="flex justify-between text-[11px] text-[#5E5647]">
                        <span>{item.category}</span>
                        <span className="font-mono font-medium tabular-nums">{item.percentage.toFixed(0)}%</span>
                      </div>
                      <div className="w-full h-1.5 bg-[#E8E6DF] rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-[#B45309] rounded-full" 
                          style={{ width: `${item.percentage}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="p-3 bg-amber-100/50 rounded-lg text-[11px] text-[#78350F] flex items-start gap-2">
            <Sparkles className="w-4 h-4 shrink-0 text-[#B45309] mt-0.5" />
            <span>
              A diversificação com <strong>apitoxina e polinização</strong> estabiliza o fluxo de caixa durante os meses de inverno, eliminando o déficit sazonal.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
