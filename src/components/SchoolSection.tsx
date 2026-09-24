import { useState } from 'react';
import { TUTORIAL_TRACKS } from '../data/tutorials';
import { HiveSimulator } from './HiveSimulator';
import { BeekeeperQuiz } from './BeekeeperQuiz';
import { BookOpen, Clock, ShieldAlert, Wrench, HelpCircle, Check, Zap } from 'lucide-react';

export function SchoolSection() {
  const [selectedTrackId, setSelectedTrackId] = useState<string>('manejo-estacional');
  const [activeTab, setActiveTab] = useState<'tutorials' | 'simulator' | 'quiz'>('tutorials');

  const currentTrack = TUTORIAL_TRACKS.find((t) => t.id === selectedTrackId) || TUTORIAL_TRACKS[0];

  return (
    <section id="escola" className="py-16 bg-[#F5F4EE] border-t border-b border-[#E8E6DF] scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#DFDBD0]">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-[#92400E]">
              Capacitação Técnica & Protocolos de Campo
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1E1A14] mt-1">
              Escola da Abelha: Manejo, Captura, Multiplicação & Apitoxina
            </h2>
            <p className="text-sm text-[#635B4D] mt-1 max-w-2xl">
              Metodologia prática validada por mestres meliponicultores e apicultores comerciais. Aprenda sem perdas biológicas.
            </p>
          </div>

          {/* School Feature Mode Tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-white rounded-xl border border-[#DDD7CA] self-start md:self-auto">
            <button
              onClick={() => setActiveTab('tutorials')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                activeTab === 'tutorials'
                  ? 'bg-[#B45309] text-white shadow-xs'
                  : 'text-[#6B6355] hover:text-[#1E1A14]'
              }`}
            >
              Tutoriais Práticos
            </button>
            <button
              onClick={() => setActiveTab('simulator')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                activeTab === 'simulator'
                  ? 'bg-[#B45309] text-white shadow-xs'
                  : 'text-[#6B6355] hover:text-[#1E1A14]'
              }`}
            >
              Simulador de Inspeção
            </button>
            <button
              onClick={() => setActiveTab('quiz')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                activeTab === 'quiz'
                  ? 'bg-[#B45309] text-white shadow-xs'
                  : 'text-[#6B6355] hover:text-[#1E1A14]'
              }`}
            >
              Quiz & Certificado
            </button>
          </div>
        </div>

        {/* Content based on activeTab */}
        {activeTab === 'simulator' && <HiveSimulator />}
        {activeTab === 'quiz' && <BeekeeperQuiz />}

        {activeTab === 'tutorials' && (
          <div className="space-y-8">
            {/* Track Selector Horizontal Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {TUTORIAL_TRACKS.map((track) => {
                const isActive = track.id === selectedTrackId;
                return (
                  <button
                    key={track.id}
                    onClick={() => setSelectedTrackId(track.id)}
                    className={`text-left p-4 rounded-xl border transition-all ${
                      isActive
                        ? 'bg-white border-[#B45309] shadow-md ring-1 ring-[#B45309]'
                        : 'bg-[#FAF9F5] border-[#DDD7CA] hover:bg-white hover:border-[#C59B27]'
                    }`}
                  >
                    <div className="flex items-center justify-between text-[11px] mb-1.5">
                      <span className="font-semibold text-[#92400E] uppercase">{track.level}</span>
                      <span className="text-[#8C8474] flex items-center gap-1 font-mono">
                        <Clock className="w-3 h-3" />
                        {track.estimatedTime.split(' ')[0]} min
                      </span>
                    </div>

                    <h3 className="font-serif font-bold text-sm text-[#1E1A14] leading-snug line-clamp-2">
                      {track.title}
                    </h3>

                    <p className="text-[11px] text-[#6B6355] line-clamp-2 mt-1">
                      {track.subtitle}
                    </p>
                  </button>
                );
              })}
            </div>

            {/* Selected Track Detailed Guide */}
            <div className="bg-white rounded-2xl border border-[#E8E6DF] p-6 sm:p-10 shadow-xs space-y-8">
              {/* Header Box */}
              <div className="space-y-3 pb-6 border-b border-[#EDEAE1]">
                <div className="flex flex-wrap items-center gap-2 text-xs text-[#786E5E]">
                  <span className="font-semibold text-[#B45309]">{currentTrack.level}</span>
                  <span aria-hidden="true">·</span>
                  <span>{currentTrack.estimatedTime}</span>
                  <span aria-hidden="true">·</span>
                  <span className="font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded">
                    Meta: {currentTrack.practicalOutcome}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#1E1A14]">
                  {currentTrack.title}
                </h3>

                <p className="text-sm text-[#524B3E] max-w-3xl leading-relaxed">
                  {currentTrack.summary}
                </p>
              </div>

              {/* Steps Timeline */}
              <div className="space-y-8">
                <div className="text-xs font-bold uppercase tracking-wider text-[#92400E]">
                  Passo a Passo Técnico de Execução
                </div>

                <div className="space-y-6">
                  {currentTrack.steps.map((step, idx) => (
                    <div 
                      key={idx}
                      className="p-5 bg-[#FAF9F5] rounded-xl border border-[#EDEAE1] space-y-4"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        <div className="flex items-center gap-3">
                          <span className="w-7 h-7 rounded-lg bg-[#2B2317] text-white flex items-center justify-center font-bold text-xs shrink-0">
                            {idx + 1}
                          </span>
                          <h4 className="font-serif font-bold text-base text-[#1E1A14]">
                            {step.title}
                          </h4>
                        </div>
                        <span className="text-xs text-[#786E5E] font-mono flex items-center gap-1 self-start sm:self-auto">
                          <Clock className="w-3.5 h-3.5" />
                          {step.duration}
                        </span>
                      </div>

                      <p className="text-xs sm:text-sm text-[#3E382E] leading-relaxed">
                        {step.description}
                      </p>

                      {/* Technical Tips */}
                      <div className="space-y-1.5 pt-1">
                        <div className="text-xs font-bold text-[#483F31]">Recomendações de Campo:</div>
                        <ul className="space-y-1 text-xs text-[#5E5647]">
                          {step.technicalTips.map((tip, tipIdx) => (
                            <li key={tipIdx} className="flex items-start gap-2">
                              <Check className="w-3.5 h-3.5 text-[#B45309] shrink-0 mt-0.5" />
                              <span>{tip}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Safety Warning */}
                      {step.safetyWarning && (
                        <div className="p-3 bg-red-50/70 border border-red-200/80 rounded-lg flex items-start gap-2 text-xs text-red-900">
                          <ShieldAlert className="w-4 h-4 text-red-700 shrink-0 mt-0.5" />
                          <div>
                            <span className="font-bold">Aviso Crítico de Segurança: </span>
                            <span>{step.safetyWarning}</span>
                          </div>
                        </div>
                      )}

                      {/* Tools & Materials Needed */}
                      <div className="pt-2 border-t border-[#EDEAE1] flex flex-wrap items-center gap-2 text-[11px] text-[#6B6355]">
                        <span className="font-semibold text-[#1E1A14] flex items-center gap-1">
                          <Wrench className="w-3 h-3 text-[#8C8474]" />
                          Insumos & Ferramentas:
                        </span>
                        {step.toolsNeeded.map((tool, toolIdx) => (
                          <span 
                            key={toolIdx}
                            className="bg-white border border-[#DDD7CA] px-2 py-0.5 rounded text-[#483F31]"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Frequently Asked Questions */}
              {currentTrack.faq.length > 0 && (
                <div className="pt-6 border-t border-[#EDEAE1] space-y-4">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#92400E] flex items-center gap-1.5">
                    <HelpCircle className="w-4 h-4" />
                    <span>Dúvidas Técnicas Frequentes</span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {currentTrack.faq.map((faq, fIdx) => (
                      <div key={fIdx} className="p-4 bg-[#FAF9F5] rounded-xl border border-[#EDEAE1] space-y-1.5">
                        <h5 className="text-xs font-bold text-[#1E1A14]">
                          {faq.question}
                        </h5>
                        <p className="text-xs text-[#5E5647] leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
