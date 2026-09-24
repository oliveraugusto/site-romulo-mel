import { useState } from 'react';
import { QUIZ_QUESTIONS } from '../data/tutorials';
import { Award, CheckCircle2, RefreshCw, Download, Printer } from 'lucide-react';

export function BeekeeperQuiz() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);
  const [studentName, setStudentName] = useState('');
  const [showCertificate, setShowCertificate] = useState(false);

  const question = QUIZ_QUESTIONS[currentIdx];

  const handleSelect = (index: number) => {
    if (selectedAnswer !== null) return;
    setSelectedAnswer(index);
    if (index === question.correctIndex) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (currentIdx < QUIZ_QUESTIONS.length - 1) {
      setCurrentIdx(currentIdx + 1);
      setSelectedAnswer(null);
    } else {
      setQuizFinished(true);
    }
  };

  const handleReset = () => {
    setCurrentIdx(0);
    setSelectedAnswer(null);
    setScore(0);
    setQuizFinished(false);
    setShowCertificate(false);
  };

  const certificateId = 'CI-' + Math.floor(100000 + Math.random() * 900000);
  const todayDate = new Date().toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' });

  return (
    <div className="bg-[#FAF9F5] rounded-2xl border border-[#EDEAE1] p-6 sm:p-8">
      <div className="flex items-center justify-between pb-4 border-b border-[#E3DFC9]">
        <div className="flex items-center gap-2.5">
          <div className="p-2 bg-amber-200/70 text-[#92400E] rounded-lg">
            <Award className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base font-serif font-bold text-[#1E1A14]">
              Avaliação de Domínio Prático & Certificação
            </h3>
            <p className="text-xs text-[#786E5E]">
              5 questões técnicas sobre manejo de ASF, ninhos-isca e extração de apitoxina.
            </p>
          </div>
        </div>

        {!quizFinished && (
          <span className="text-xs font-mono font-semibold text-[#8C8474]">
            Questão {currentIdx + 1} de {QUIZ_QUESTIONS.length}
          </span>
        )}
      </div>

      {!quizFinished ? (
        <div className="mt-6 space-y-5">
          <h4 className="text-sm sm:text-base font-semibold text-[#1E1A14] leading-relaxed">
            {question.question}
          </h4>

          <div className="space-y-2">
            {question.options.map((opt, idx) => {
              const isChosen = selectedAnswer === idx;
              let style = 'bg-white border-[#DDD7CA] hover:border-[#B45309] text-[#2B2317]';

              if (selectedAnswer !== null) {
                if (idx === question.correctIndex) {
                  style = 'bg-emerald-50 border-emerald-500 text-emerald-900 font-semibold';
                } else if (isChosen && idx !== question.correctIndex) {
                  style = 'bg-red-50 border-red-400 text-red-900';
                } else {
                  style = 'bg-white border-[#E8E6DF] opacity-60 text-[#786E5E]';
                }
              }

              return (
                <button
                  key={idx}
                  onClick={() => handleSelect(idx)}
                  disabled={selectedAnswer !== null}
                  className={`w-full text-left p-3 rounded-xl border text-xs sm:text-sm transition-all flex items-start gap-3 ${style}`}
                >
                  <span className="w-5 h-5 rounded-full border border-current flex items-center justify-center shrink-0 text-xs font-bold mt-0.5">
                    {idx + 1}
                  </span>
                  <span>{opt}</span>
                </button>
              );
            })}
          </div>

          {selectedAnswer !== null && (
            <div className="p-3.5 bg-amber-50 rounded-xl border border-amber-200/80 text-xs text-[#78350F] space-y-1">
              <span className="font-bold">Fundamentação Técnica:</span>
              <p>{question.explanation}</p>
            </div>
          )}

          {selectedAnswer !== null && (
            <div className="flex justify-end pt-2">
              <button
                onClick={handleNext}
                className="px-5 py-2.5 bg-[#B45309] hover:bg-[#92400E] text-white text-xs font-semibold rounded-lg transition-colors"
              >
                {currentIdx < QUIZ_QUESTIONS.length - 1 ? 'Próxima Questão' : 'Finalizar e Ver Pontuação'}
              </button>
            </div>
          )}
        </div>
      ) : (
        /* Quiz Finished Screen */
        <div className="py-6 space-y-5">
          <div className="text-center space-y-2">
            <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-serif font-bold text-[#1E1A14]">
              Resultado da Avaliação
            </h4>
            <p className="text-xs text-[#6B6355]">
              Você acertou <strong className="text-[#1E1A14] font-bold text-sm">{score} de {QUIZ_QUESTIONS.length}</strong> questões ({((score / QUIZ_QUESTIONS.length) * 100).toFixed(0)}%).
            </p>
          </div>

          {score >= 3 ? (
            <div className="bg-white p-5 rounded-xl border border-[#DDD7CA] space-y-4 max-w-md mx-auto">
              <div className="text-center space-y-1">
                <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">
                  Parabéns! Você está apto para certificação
                </span>
                <p className="text-xs text-[#6B6355]">
                  Digite seu nome completo como deseja que apareça no certificado digital da Escola da Abelha:
                </p>
              </div>

              <div className="space-y-2">
                <input
                  type="text"
                  placeholder="Nome do(a) Apicultor(a) / Meliponicultor(a)"
                  value={studentName}
                  onChange={(e) => setStudentName(e.target.value)}
                  className="w-full px-3.5 py-2 text-xs bg-[#FAF9F5] border border-[#DDD7CA] rounded-lg"
                />
                <button
                  onClick={() => setShowCertificate(true)}
                  disabled={!studentName.trim()}
                  className="w-full py-2.5 bg-[#B45309] hover:bg-[#92400E] text-white text-xs font-semibold rounded-lg transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  <Award className="w-4 h-4" />
                  <span>Emitir Certificado Digital</span>
                </button>
              </div>
            </div>
          ) : (
            <div className="text-center space-y-3">
              <p className="text-xs text-[#786E5E]">
                É necessário acertar pelo menos 3 questões para obter a certificação.
              </p>
              <button
                onClick={handleReset}
                className="px-4 py-2 text-xs font-semibold bg-[#2B2317] text-white rounded-lg hover:bg-black inline-flex items-center gap-1.5"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Tentar Novamente</span>
              </button>
            </div>
          )}

          {/* Certificate Modal */}
          {showCertificate && (
            <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
              <div className="bg-white w-full max-w-2xl rounded-2xl p-6 sm:p-10 border-4 border-[#C59B27] shadow-2xl relative space-y-6 text-center">
                {/* Gold Seal Header */}
                <div className="space-y-2">
                  <div className="text-xs font-mono tracking-widest text-[#B45309] uppercase">
                    Escola da Abelha · Colmeia Imperial
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1E1A14]">
                    CERTIFICADO DE CAPACITAÇÃO TÉCNICA
                  </h2>
                  <p className="text-xs text-[#786E5E]">
                    Manejo Avançado, Captura por Ninhos-Isca, Multiplicação e Apitoxina
                  </p>
                </div>

                <div className="py-4 border-y border-[#EDEAE1] space-y-3">
                  <p className="text-xs text-[#6B6355]">
                    Certificamos com distinção que
                  </p>
                  <div className="text-xl sm:text-2xl font-serif font-bold text-[#92400E]">
                    {studentName}
                  </div>
                  <p className="text-xs text-[#524B3E] max-w-lg mx-auto leading-relaxed">
                    concluiu com êxito os módulos teóricos e práticos de biologia e manejo de abelhas nativas sem ferrão (ASF), protocolos de multiplicação em caixas INPA e tecnologia de extração não-letal de apitoxina com pureza de melitina.
                  </p>
                </div>

                <div className="flex items-center justify-between text-[11px] text-[#8C8474] pt-2">
                  <div>
                    <span>Registro Oficial: </span>
                    <strong className="font-mono text-[#1E1A14]">{certificateId}</strong>
                  </div>
                  <div>
                    <span>Emitido em: </span>
                    <strong className="text-[#1E1A14]">{todayDate}</strong>
                  </div>
                </div>

                <div className="flex items-center justify-center gap-3 pt-2">
                  <button
                    onClick={() => window.print()}
                    className="px-4 py-2 bg-[#2B2317] hover:bg-black text-white text-xs font-semibold rounded-lg flex items-center gap-1.5"
                  >
                    <Printer className="w-3.5 h-3.5" />
                    <span>Imprimir / Salvar PDF</span>
                  </button>
                  <button
                    onClick={() => setShowCertificate(false)}
                    className="px-4 py-2 bg-[#F0EEE6] hover:bg-[#E3DFC9] text-[#2B2317] text-xs font-semibold rounded-lg"
                  >
                    Fechar
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
