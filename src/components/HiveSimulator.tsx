import { useState } from 'react';
import { AlertTriangle, CheckCircle2, ChevronRight, RefreshCw, ShieldAlert, Sparkles } from 'lucide-react';

interface Scenario {
  id: number;
  title: string;
  season: string;
  observation: string;
  criticalIssue: string;
  options: {
    text: string;
    correct: boolean;
    feedback: string;
  }[];
}

const SCENARIOS: Scenario[] = [
  {
    id: 1,
    title: 'Cenário 1: Inspeção de Caixa INPA de Jataí com Forídeo',
    season: 'Primavera (10 dias após divisão)',
    observation: 'Você nota 2 pequenas moscas ágeis de dorso curvado correndo no visor de acetato e cheiro levemente avinagrado em um pote rompido.',
    criticalIssue: 'Ataque iminente de moscas forídeas (Pseudohypocera kerteszi).',
    options: [
      {
        text: 'Aguardar uma semana para ver se as abelhas sozinhas repelem a mosca.',
        correct: false,
        feedback: 'Incorreto! As larvas do forídeo eclodem em 24h e devoram os potes de pólen e crias em menos de 3 dias, dizimando o enxame.'
      },
      {
        text: 'Intervenção imediata: aspirar moscas adultas, remover potes rompidos, introduzir cera mista nova e vedar frestas externas com fita crepe.',
        correct: true,
        feedback: 'Excelente decisão! A remoção mecânica do atrativo alimentar e a blindagem das junções é o único protocolo eficaz para salvar a divisão.'
      },
      {
        text: 'Pulverizar inseticida comum ao redor da caixa para matar as moscas.',
        correct: false,
        feedback: 'Erro fatal! Qualquer inseticida químico causará morte instantânea de todas as abelhas do meliponário.'
      }
    ]
  },
  {
    id: 2,
    title: 'Cenário 2: Colmeia de Apis no Início do Inverno sem Reserva',
    season: 'Entressafra (Inverno sem florada)',
    observation: 'Ao abrir a tampa, a população está moderada, mas todos os quadros laterais estão vazios sem operculação de mel e o ninho tem pouca cria.',
    criticalIssue: 'Risco de morte por inanição e abandono do enxame.',
    options: [
      {
        text: 'Fornecer xarope denso de açúcar 2:1 no alimentador interno e bife proteico de levedura para manutenção das nutrizes.',
        correct: true,
        feedback: 'Perfeito! O xarope denso 2:1 supre a necessidade calórica sem exigir excessiva desidratação pelas abelhas, e o bife impede a atrofia das glândulas hipofaringeanas.'
      },
      {
        text: 'Adicionar duas melgueiras vazias para dar mais espaço.',
        correct: false,
        feedback: 'Incorreto! Aumentar o volume interno no inverno dispersa o calor do ninho, resfriando as crias e enfraquecendo a colônia.'
      },
      {
        text: 'Colher o pouco mel residual para evitar cristalização.',
        correct: false,
        feedback: 'Totalmente incorreto! Isso condenaria o enxame à fome absoluta.'
      }
    ]
  },
  {
    id: 3,
    title: 'Cenário 3: Extração de Apitoxina e Irritabilidade do Apiário',
    season: 'Outono (Florada Secundária)',
    observation: 'Após 25 minutos de sessão do coletor elétrico na colmeia #08, as operárias estão zunindo alto e cobrindo a frente da colmeia com ferrões expostos.',
    criticalIssue: 'Liberação intensa de feromônio de alarme e tempo limite de extração atingido.',
    options: [
      {
        text: 'Aumentar a voltagem para forçar mais descargas de veneno por mais 30 minutos.',
        correct: false,
        feedback: 'Incorreto! Sessões superiores a 25-30 minutos esgotam a energia do enxame e podem induzir quebra de ferrões ou exaustão de campeiras.'
      },
      {
        text: 'Desligar a central imediatamente, recolher a placa de vidro em caixa escura e lacrada, e dar descanso de 15 a 21 dias para o enxame.',
        correct: true,
        feedback: 'Protocolo de excelência! Respeita a biologia da colônia, previne perdas e garante a regeneração fisiológica do saco de veneno.'
      }
    ]
  }
];

export function HiveSimulator() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [completed, setCompleted] = useState(false);

  const scenario = SCENARIOS[currentIdx];

  const handleSelect = (index: number) => {
    if (selectedOption !== null) return;
    setSelectedOption(index);
    if (scenario.options[index].correct) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (currentIdx < SCENARIOS.length - 1) {
      setCurrentIdx(currentIdx + 1);
      setSelectedOption(null);
    } else {
      setCompleted(true);
    }
  };

  const handleRestart = () => {
    setCurrentIdx(0);
    setSelectedOption(null);
    setScore(0);
    setCompleted(false);
  };

  return (
    <div className="bg-white rounded-2xl border border-[#E8E6DF] p-6 sm:p-8 shadow-xs">
      <div className="flex items-center justify-between pb-4 border-b border-[#EDEAE1]">
        <div className="flex items-center gap-2">
          <div className="p-2 bg-amber-100 text-[#B45309] rounded-lg">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base font-serif font-bold text-[#1E1A14]">
              Simulador Prático de Decisão de Campo
            </h3>
            <p className="text-xs text-[#786E5E]">
              Diagnostique problemas reais do apiário e meliponário e receba feedback imediato.
            </p>
          </div>
        </div>

        {!completed && (
          <span className="text-xs font-mono font-semibold px-2.5 py-1 bg-[#FAF9F5] text-[#524B3E] rounded border border-[#DDD7CA]">
            Cenário {currentIdx + 1} de {SCENARIOS.length}
          </span>
        )}
      </div>

      {!completed ? (
        <div className="mt-6 space-y-5">
          {/* Situation Card */}
          <div className="bg-[#FAF9F5] p-4 sm:p-5 rounded-xl border border-[#EDEAE1] space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="font-semibold text-[#B45309] uppercase tracking-wider">{scenario.season}</span>
              <span className="text-[#8C8474] font-medium">{scenario.title}</span>
            </div>
            <p className="text-sm font-medium text-[#1E1A14] leading-relaxed">
              "{scenario.observation}"
            </p>
            <div className="flex items-center gap-1.5 text-xs text-red-700 pt-1 font-semibold">
              <ShieldAlert className="w-4 h-4 shrink-0" />
              <span>Ponto Crítico: {scenario.criticalIssue}</span>
            </div>
          </div>

          {/* Options */}
          <div className="space-y-2.5">
            <div className="text-xs font-semibold text-[#483F31]">Qual é a sua conduta de manejo?</div>
            {scenario.options.map((opt, idx) => {
              const isChosen = selectedOption === idx;
              let btnStyle = 'border-[#DDD7CA] hover:border-[#B45309] bg-white text-[#2B2317]';

              if (selectedOption !== null) {
                if (opt.correct) {
                  btnStyle = 'border-emerald-500 bg-emerald-50 text-emerald-900 font-semibold';
                } else if (isChosen && !opt.correct) {
                  btnStyle = 'border-red-400 bg-red-50 text-red-900';
                } else {
                  btnStyle = 'border-[#E8E6DF] opacity-60 bg-white text-[#786E5E]';
                }
              }

              return (
                <button
                  key={idx}
                  onClick={() => handleSelect(idx)}
                  disabled={selectedOption !== null}
                  className={`w-full text-left p-3.5 rounded-xl border text-xs sm:text-sm transition-all flex items-start gap-3 ${btnStyle}`}
                >
                  <span className="w-5 h-5 rounded-full border border-current flex items-center justify-center shrink-0 text-xs font-bold mt-0.5">
                    {String.fromCharCode(65 + idx)}
                  </span>
                  <div className="flex-1">
                    <span>{opt.text}</span>
                    {selectedOption !== null && isChosen && (
                      <div className="mt-2 text-xs font-medium pt-2 border-t border-current/20">
                        {opt.feedback}
                      </div>
                    )}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Next Button */}
          {selectedOption !== null && (
            <div className="pt-3 flex justify-end">
              <button
                onClick={handleNext}
                className="px-5 py-2.5 bg-[#B45309] hover:bg-[#92400E] text-white text-xs font-semibold rounded-lg flex items-center gap-1.5 transition-colors"
              >
                <span>{currentIdx < SCENARIOS.length - 1 ? 'Próximo Cenário' : 'Ver Resultado da Simulação'}</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      ) : (
        /* Completed Screen */
        <div className="py-8 text-center space-y-4">
          <div className="w-14 h-14 bg-amber-100 text-[#B45309] rounded-full flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h4 className="text-xl font-serif font-bold text-[#1E1A14]">
            Simulação de Campo Concluída!
          </h4>
          <p className="text-sm text-[#524B3E] max-w-md mx-auto">
            Você acertou <strong>{score} de {SCENARIOS.length}</strong> decisões técnicas.
            {score === SCENARIOS.length
              ? ' Diagnóstico impecável de apiário profissional!'
              : ' Bom aproveitamento. Revise os tutoriais detalhados para aperfeiçoar seu manejo.'}
          </p>
          <button
            onClick={handleRestart}
            className="px-4 py-2 bg-[#F0EEE6] hover:bg-[#E3DFC9] text-[#2B2317] text-xs font-semibold rounded-lg inline-flex items-center gap-1.5"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Repetir Simulação</span>
          </button>
        </div>
      )}
    </div>
  );
}
