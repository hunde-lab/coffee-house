import { useState } from 'react';
import { COFFEE_ORIGINS } from '../data/coffeeData';
import type { CoffeeOrigin } from '../types/coffee';
import { Flame, Droplet, Mountain, CheckCircle2 } from 'lucide-react';

interface CoffeeOriginsSectionProps {
  onOrderBeans: (originName: string) => void;
}

export const CoffeeOriginsSection: React.FC<CoffeeOriginsSectionProps> = ({ onOrderBeans }) => {
  const [selectedOrigin, setSelectedOrigin] = useState<CoffeeOrigin>(COFFEE_ORIGINS[0]);

  return (
    <section id="coffee" className="py-20 lg:py-32 bg-[#FAF7F2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-body uppercase tracking-[0.25em] text-[#C86D51] font-semibold">
            Single-Origin Exploration
          </span>
          <h2 className="text-4xl sm:text-5xl font-display font-normal text-[#1C130E]">
            Ethiopian Micro-Lots
          </h2>
          <p className="font-body text-base text-[#5A4D41] font-light">
            Discover the distinct terroir, elevation, and flavor characteristics of Ethiopia’s most celebrated coffee growing regions.
          </p>
        </div>

        {/* Origin Selector Tabs / Selector Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {COFFEE_ORIGINS.map((origin) => {
            const isSelected = selectedOrigin.id === origin.id;
            return (
              <button
                key={origin.id}
                onClick={() => setSelectedOrigin(origin)}
                className={`p-6 rounded-2xl border text-left transition-all duration-300 flex flex-col justify-between space-y-4 ${
                  isSelected
                    ? 'bg-[#1C130E] text-[#FAF7F2] border-[#1C130E] shadow-xl scale-[1.02]'
                    : 'bg-[#F2ECE1] text-[#1C130E] border-[#E6DAC8] hover:border-[#C86D51]/50'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span
                      className={`text-[10px] uppercase tracking-widest font-body ${
                        isSelected ? 'text-[#C86D51]' : 'text-[#7A6B5D]'
                      }`}
                    >
                      Micro-Lot
                    </span>
                    {isSelected && <CheckCircle2 className="w-4 h-4 text-[#C86D51]" />}
                  </div>
                  <h3 className="font-display text-xl font-medium">{origin.name}</h3>
                </div>

                <p
                  className={`text-xs font-body tracking-wider ${
                    isSelected ? 'text-[#D5C7B3]' : 'text-[#5A4D41]'
                  }`}
                >
                  {origin.notesSummary}
                </p>
              </button>
            );
          })}
        </div>

        {/* Detailed Origin Card Spotlight */}
        <div className="bg-[#FAF7F2] border border-[#E6DAC8] rounded-3xl p-6 sm:p-10 lg:p-12 shadow-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Origin Image Showcase */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-[#1C130E] border-2 border-[#E6DAC8] shadow-lg">
                <img
                  src={selectedOrigin.image}
                  alt={selectedOrigin.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1C130E]/80 via-transparent to-transparent" />
                
                <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                  <span className="text-[10px] uppercase tracking-widest font-body text-[#C86D51] font-semibold">
                    Terrroir & Origin
                  </span>
                  <h4 className="font-display text-2xl font-bold">{selectedOrigin.name}</h4>
                  <p className="text-xs font-body text-[#D5C7B3]">{selectedOrigin.region}</p>
                </div>
              </div>
            </div>

            {/* Technical Specifications & Sensory Attributes */}
            <div className="lg:col-span-7 space-y-8">
              <div>
                <div className="inline-block bg-[#C86D51]/10 text-[#C86D51] text-xs font-body uppercase tracking-widest px-3 py-1 rounded-full font-semibold mb-3">
                  {selectedOrigin.notesSummary}
                </div>
                <h3 className="font-display text-3xl font-normal text-[#1C130E]">
                  {selectedOrigin.name} Heritage Harvest
                </h3>
                <p className="font-body text-sm text-[#5A4D41] leading-relaxed mt-2 font-light">
                  {selectedOrigin.description}
                </p>
              </div>

              {/* Specs Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 p-5 rounded-2xl bg-[#F2ECE1] border border-[#E6DAC8]/80 text-xs font-body">
                <div>
                  <span className="text-[#7A6B5D] uppercase tracking-wider block mb-1 flex items-center gap-1">
                    <Mountain className="w-3.5 h-3.5 text-[#C86D51]" /> Elevation
                  </span>
                  <span className="font-bold text-[#1C130E] text-sm">{selectedOrigin.elevation}</span>
                </div>
                <div>
                  <span className="text-[#7A6B5D] uppercase tracking-wider block mb-1 flex items-center gap-1">
                    <Flame className="w-3.5 h-3.5 text-[#C86D51]" /> Roast Level
                  </span>
                  <span className="font-bold text-[#1C130E] text-sm">{selectedOrigin.roastLevel}</span>
                </div>
                <div>
                  <span className="text-[#7A6B5D] uppercase tracking-wider block mb-1 flex items-center gap-1">
                    <Droplet className="w-3.5 h-3.5 text-[#C86D51]" /> Process
                  </span>
                  <span className="font-bold text-[#1C130E] text-sm">{selectedOrigin.process}</span>
                </div>
              </div>

              {/* Flavor Profile Ratings */}
              <div className="space-y-3">
                <span className="text-xs font-body uppercase tracking-wider text-[#7A6B5D] font-medium block">
                  Sensory Attributes Meter
                </span>
                
                <div className="grid grid-cols-2 gap-x-8 gap-y-3">
                  {Object.entries(selectedOrigin.flavorScores).map(([key, score]) => (
                    <div key={key} className="space-y-1">
                      <div className="flex justify-between text-xs font-body capitalize">
                        <span className="text-[#4A3E34]">{key}</span>
                        <span className="font-semibold text-[#1C130E]">{score}%</span>
                      </div>
                      <div className="h-1.5 w-full bg-[#E6DAC8] rounded-full overflow-hidden">
                        <div
                          className="h-full bg-[#C86D51] rounded-full transition-all duration-700"
                          style={{ width: `${score}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tasting Notes Tags & Brew Rec */}
              <div className="pt-4 border-t border-[#E6DAC8] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-body uppercase tracking-wider text-[#7A6B5D] block mb-2 font-medium">
                    Tasting Notes:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {selectedOrigin.tastingNotes.map((note) => (
                      <span
                        key={note}
                        className="bg-[#FAF7F2] border border-[#C86D51]/30 text-[#1C130E] text-xs font-body px-3 py-1 rounded-full shadow-xs"
                      >
                        {note}
                      </span>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => onOrderBeans(selectedOrigin.name)}
                  className="bg-[#1C130E] hover:bg-[#32231A] text-[#FAF7F2] px-6 py-3 rounded-full text-xs font-body tracking-widest uppercase font-medium transition-all duration-300 shrink-0 shadow-md"
                >
                  Order 250g Bag
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
