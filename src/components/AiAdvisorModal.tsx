import { useState } from 'react';
import { GoogleGenAI } from '@google/genai';
import { X, Sparkles, Send, Bot, User, Loader2 } from 'lucide-react';

interface AiAdvisorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Message {
  sender: 'user' | 'assistant';
  text: string;
}

const QUICK_PROMPTS = [
  'Qual a dosagem correta de xarope 1:1 e bife proteico na entressafra?',
  'Como evitar o ataque de forídeos logo após dividir uma colmeia de Jataí?',
  'Quantas colmeias de Apis são recomendadas por hectare para polinizar café?',
  'Qual a voltagem e tempo seguro para extração de apitoxina sem matar as abelhas?'
];

export function AiAdvisorModal({ isOpen, onClose }: AiAdvisorModalProps) {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: 'assistant',
      text: 'Olá! Sou o Consultor Técnico da Colmeia Imperial. Sou especialista em Apicultura (Apis mellifera) e Meliponicultura (abelhas nativas sem ferrão como Jataí, Uruçu e Mandaçaia), além de viabilidade econômica e extração de apitoxina. Em que posso te orientar hoje?'
    }
  ]);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSend = async (queryText?: string) => {
    const textToSend = queryText || input;
    if (!textToSend.trim() || loading) return;

    const userMsg: Message = { sender: 'user', text: textToSend };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    try {
      const apiKey = (typeof process !== 'undefined' && process.env?.GEMINI_API_KEY) || 
                     (import.meta as any).env?.VITE_GEMINI_API_KEY || '';

      if (apiKey) {
        const ai = new GoogleGenAI({ apiKey });
        const systemPrompt = `Você é o mestre consultor técnico da "Colmeia Imperial", referência brasileira em apicultura e meliponicultura.
Responda sempre em português brasileiro de forma técnica, prática e precisa.
Foque em: biologia de abelhas nativas sem ferrão (Jataí, Uruçu, Mandaçaia, Tiúba), manejo sazonal de Apis mellifera, dosagem de alimentação artificial (xarope de açúcar invertido 1:1 ou 2:1, bife proteico), captura por ninhos-isca com atrativo hidroalcoólico, controle biológico do forídeo (Pseudohypocera kerteszi), extração de apitoxina por pulso seguro em placas de vidro (12-18V, 20-30Hz) sem matar operárias, e precificação de serviços de polinização agrícola (café, melão, morango). Mantenha as respostas concisas e estruturadas em tópicos.`;

        const response = await ai.models.generateContent({
          model: 'gemini-2.5-flash',
          contents: [
            { role: 'user', parts: [{ text: `${systemPrompt}\n\nPergunta do apicultor/meliponicultor: ${textToSend}` }] }
          ]
        });

        const reply = response.text || 'Não consegui obter resposta técnica no momento.';
        setMessages((prev) => [...prev, { sender: 'assistant', text: reply }]);
      } else {
        // Fallback with rich field-proven answers
        await new Promise((r) => setTimeout(r, 600));
        let fallbackReply = '';
        const qLower = textToSend.toLowerCase();

        if (qLower.includes('xarope') || qLower.includes('aliment') || qLower.includes('bife') || qLower.includes('entressafra')) {
          fallbackReply = `**Protocolo Nutricional Recomendado:**
1. **Xarope Energético (1:1)**: Para estímulo pré-safra (45 dias antes da florada), misture 1kg de açúcar cristal para 1L de água fervida morna + 1g de ácido cítrico. Forneça 500ml a cada 3 dias no entardecer.
2. **Xarope de Manutenção (2:1)**: Para escassez crítica ou inverno, 2kg de açúcar para 1L de água. Menos água exige menos evaporação pelas abelhas.
3. **Bife Proteico**: 40% de levedura de cerveja/cana + 20% de farinha de soja micronizada desengordurada + 40% de xarope concentrado. Ofereça porções de 100g sobre os quadros centrais de cria embrulhadas em papel manteiga com cortes.`;
        } else if (qLower.includes('forídeo') || qLower.includes('jatai') || qLower.includes('divis')) {
          fallbackReply = `**Controle Imediato de Forídeos (*Pseudohypocera kerteszi*):**
1. **Zero derramamento**: Nunca rompa potes de mel ou pólen durante a divisão. Qualquer cheiro de fermentação atrai fêmeas a quilômetros.
2. **Fita de vedação**: Imediatamente após fechar a caixa INPA, passe fita crepe larga em TODAS as frestas horizontais entre ninho, sobre-ninho e tampa.
3. **Armadilha com vinagre**: Instale dentro da tampa um potinho furado com 10ml de vinagre de maçã e duas gotas de detergente neutro (atrai e afoga os forídeos adultos sem afetar as abelhas).
4. **Cera mista de reforço**: Deixe uma bolinha de cera para as operárias blindarem a entrada mais rápido.`;
        } else if (qLower.includes('poliniz') || qLower.includes('café') || qLower.includes('contrato')) {
          fallbackReply = `**Serviço de Polinização em Cafezais:**
1. **Densidade**: 2 a 4 colmeias fortes de *Apis mellifera* por hectare no início da florada (abertura de 10% a 15% das flores).
2. **Ganhos comprovados**: Redução de até 25% de grãos chochos (moca) e incremento de 18% a 28% no volume final de café beneficiado, com elevação da bebida para cafés especiais (Specialty Coffee).
3. **Preço de mercado**: R$ 140,00 a R$ 190,00 por colmeia por ciclo de 15 a 20 dias.
4. **Cláusula de ouro**: Contrato formal obrigando a fazenda a suspender inseticidas sistêmicos (neonicotinoides) durante a permanência das colmeias.`;
        } else if (qLower.includes('apitox') || qLower.includes('veneno') || qLower.includes('coletor')) {
          fallbackReply = `**Parâmetros Seguros de Extração de Apitoxina:**
1. **Eletroestimulação Não-Letal**: Utilize pulsos de 12V a 15V contínuos, com amperagem de 30-50mA e frequência de 20 a 30Hz na placa de vidro liso.
2. **Ciclo**: 3 segundos de pulso por 2 segundos de repouso. Tempo máximo de 20 a 25 minutos por colmeia.
3. **Por que a abelha sobrevive?**: A superfície lisa do vidro não permite que os ganchos do ferrão fiquem presos; a operária descarrega a gota de veneno e se desprende viva sem romper o abdômen.
4. **Intervalo**: Respeite no mínimo 15 a 21 dias de descanso para reposição da melitina pela mesma colmeia.`;
        } else {
          fallbackReply = `**Orientação do Especialista Colmeia Imperial:**
As boas práticas apícolas e meliponícolas dependem de três pilares:
- **Sanidade e ambiência**: Caixas modulares térmicas (madeira com espessura ≥ 2,5cm) e ausência de umidade interna.
- **Calendário floral regional**: Reconhecer a florada de manutenção versus florada de produção para programar a colocação de melgueiras no momento exato.
- **Valor agregado**: Priorizar méis monoflorais crus, própolis verde com alta Artepillina-C e cera virgem pura para alcançar margens superiores a 70%.`;
        }

        setMessages((prev) => [...prev, { sender: 'assistant', text: fallbackReply }]);
      }
    } catch (err: any) {
      setMessages((prev) => [
        ...prev,
        {
          sender: 'assistant',
          text: 'Ocorreu uma instabilidade na consulta. Para suporte direto com nossos técnicos apícolas, consulte os tutoriais detalhados na Escola da Abelha.'
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/50 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6">
      <div 
        className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl border border-[#E8E6DF] flex flex-col h-[85vh] max-h-[640px] overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-[#E8E6DF] bg-[#FAFAF7] flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="p-2 bg-[#FEF9C3] text-[#B45309] rounded-lg">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-serif font-bold text-[#1E1A14]">
                Consultor Técnico Apícola & ASF
              </h3>
              <p className="text-[11px] text-[#786E5E]">
                Orientação em tempo real para manejo de campo, floradas e negócios
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            aria-label="Fechar consultor"
            className="p-1.5 text-[#6B6355] hover:text-[#1E1A14] rounded-lg"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Message Log */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4 bg-[#FAF9F5]">
          {messages.map((m, idx) => (
            <div
              key={idx}
              className={`flex gap-3 text-xs sm:text-sm ${
                m.sender === 'user' ? 'justify-end' : 'justify-start'
              }`}
            >
              {m.sender === 'assistant' && (
                <div className="w-7 h-7 rounded-lg bg-[#2B2317] text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Bot className="w-4 h-4" />
                </div>
              )}

              <div
                className={`max-w-[85%] rounded-xl p-3.5 leading-relaxed whitespace-pre-line ${
                  m.sender === 'user'
                    ? 'bg-[#B45309] text-white rounded-br-none'
                    : 'bg-white border border-[#EDEAE1] text-[#2B2317] rounded-bl-none shadow-xs'
                }`}
              >
                {m.text}
              </div>

              {m.sender === 'user' && (
                <div className="w-7 h-7 rounded-lg bg-[#B45309] text-white flex items-center justify-center shrink-0 mt-0.5">
                  <User className="w-4 h-4" />
                </div>
              )}
            </div>
          ))}

          {loading && (
            <div className="flex gap-3 text-xs text-[#786E5E] items-center">
              <div className="w-7 h-7 rounded-lg bg-[#2B2317] text-amber-400 flex items-center justify-center shrink-0">
                <Bot className="w-4 h-4" />
              </div>
              <div className="bg-white border border-[#EDEAE1] rounded-xl p-3 flex items-center gap-2">
                <Loader2 className="w-4 h-4 animate-spin text-[#B45309]" />
                <span>Consultando protocolos agronômicos e sanitários...</span>
              </div>
            </div>
          )}
        </div>

        {/* Quick prompt suggestions */}
        <div className="p-2.5 bg-white border-t border-[#EDEAE1] overflow-x-auto flex gap-2">
          {QUICK_PROMPTS.map((prompt, qIdx) => (
            <button
              key={qIdx}
              onClick={() => handleSend(prompt)}
              className="px-2.5 py-1 text-[11px] bg-[#FAF9F5] hover:bg-[#F0EEE6] text-[#633A0B] border border-[#E3DFC9] rounded-lg whitespace-nowrap transition-colors"
            >
              {prompt}
            </button>
          ))}
        </div>

        {/* Input Bar */}
        <div className="p-3 sm:p-4 bg-white border-t border-[#E8E6DF] flex gap-2">
          <input
            type="text"
            placeholder="Digite sua dúvida sobre abelhas, dosagens, caixas ou apitoxina..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            className="flex-1 px-3.5 py-2 text-xs sm:text-sm bg-[#FAF9F5] border border-[#DDD7CA] rounded-xl focus:outline-none focus:border-[#B45309]"
          />
          <button
            onClick={() => handleSend()}
            disabled={!input.trim() || loading}
            aria-label="Enviar pergunta"
            className="px-4 py-2 bg-[#B45309] hover:bg-[#92400E] text-white rounded-xl flex items-center justify-center transition-colors disabled:opacity-50"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
