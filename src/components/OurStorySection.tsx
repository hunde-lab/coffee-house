import { useState } from 'react';
import { STORY_PHASES } from '../data/coffeeData';
import { Flame, Compass, HeartHandshake } from 'lucide-react';

export const OurStorySection: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const activePhase = STORY_PHASES[activeStepIndex];

  return (
    <section id="story" className="py-20 lg:py-32 bg-[#1C130E] text-[#FAF7F2] relative overflow-hidden">
      {/* Subtle Glowing Embers Effect */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C86D51]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#4A3728]/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Editorial Section Header */}
        <div className="max-w-3xl space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 text-[#C86D51] text-xs font-body tracking-[0.25em] uppercase font-semibold">
            <Flame className="w-3.5 h-3.5" />
            <span>Heritage & Craft</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-normal leading-[1.1] text-[#FAF7F2]">
            From the birthplace of coffee to your daily ritual.
          </h2>
          <p className="font-body text-base sm:text-lg text-[#D5C7B3] font-light leading-relaxed pt-2">
            In the lush southwestern highlands of Ethiopia lies Kaffa, where wild Arabica coffee was first discovered. At KAFFA & EMBER, we honor this ancient lineage through direct farmer partnerships, meticulous roasting, and the warmth of traditional hospitality.
          </p>
        </div>

        {/* Timeline Navigator Banner */}
        <div className="mb-16 border-y border-[#3D2E22] py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {STORY_PHASES.map((phase, idx) => {
              const isActive = idx === activeStepIndex;
              return (
                <button
                  key={phase.step}
                  onClick={() => setActiveStepIndex(idx)}
                  className={`flex flex-col text-left p-4 rounded-xl transition-all duration-300 ${
                    isActive
                      ? 'bg-[#2A1E17] border border-[#C86D51]/50 shadow-lg'
                      : 'hover:bg-[#231812] border border-transparent opacity-70 hover:opacity-100'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-display font-bold text-xs tracking-widest text-[#C86D51]">
                      {phase.step}
                    </span>
                    {isActive && <span className="w-2 h-2 rounded-full bg-[#C86D51]" />}
                  </div>
                  <span className="font-display text-lg font-semibold text-[#FAF7F2]">
                    {phase.title}
                  </span>
                  <span className="text-[11px] font-body text-[#B8A692] truncate mt-0.5">
                    {phase.subtitle}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Story Focus Feature */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Active Phase Image */}
          <div className="lg:col-span-7">
            <div className="relative rounded-3xl overflow-hidden aspect-[16/10] sm:aspect-[16/9] border border-[#3D2E22] shadow-2xl bg-[#2A1E17]">
              <img
                src={activePhase.image}
                alt={activePhase.title}
                className="w-full h-full object-cover transition-all duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1C130E] via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-xs text-[#D5C7B3] font-body">
                <span className="bg-[#1C130E]/80 backdrop-blur-md px-3 py-1 rounded-full border border-[#C86D51]/30 uppercase tracking-widest">
                  Step {activePhase.step} of 04 — {activePhase.title}
                </span>
                <span className="hidden sm:inline italic font-display">Kaffa & Ember Archives</span>
              </div>
            </div>
          </div>

          {/* Active Phase Narrative */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-body tracking-[0.2em] text-[#C86D51] uppercase font-semibold block">
              {activePhase.subtitle}
            </span>
            <h3 className="font-display text-3xl sm:text-4xl text-[#FAF7F2]">
              {activePhase.title}
            </h3>
            <p className="font-body text-base text-[#D5C7B3] font-light leading-relaxed">
              {activePhase.description}
            </p>

            {/* Sub-quote & Principles */}
            <div className="pt-4 border-t border-[#3D2E22] space-y-4">
              <div className="flex items-start space-x-3">
                <Compass className="w-5 h-5 text-[#C86D51] shrink-0 mt-0.5" />
                <p className="text-xs font-body text-[#B8A692] leading-normal">
                  <strong className="text-[#FAF7F2] font-medium">Direct Producer Equity:</strong> We ensure long-term premium pricing for farming cooperatives in Yirgacheffe, Guji, and Limu.
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <HeartHandshake className="w-5 h-5 text-[#C86D51] shrink-0 mt-0.5" />
                <p className="text-xs font-body text-[#B8A692] leading-normal">
                  <strong className="text-[#FAF7F2] font-medium">Sacred Hospitality:</strong> Embodying the spirit of Abol, Tona, and Baraka in every cup we serve.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
