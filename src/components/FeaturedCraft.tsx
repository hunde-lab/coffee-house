import type { ReactNode } from 'react';
import { CRAFT_FEATURES } from '../data/coffeeData';
import { Bean, Flame, Sparkles, Coffee } from 'lucide-react';

const iconMap: Record<string, ReactNode> = {
  Bean: <Bean className="w-6 h-6 text-[#C86D51]" />,
  Flame: <Flame className="w-6 h-6 text-[#C86D51]" />,
  Sparkles: <Sparkles className="w-6 h-6 text-[#C86D51]" />,
  Coffee: <Coffee className="w-6 h-6 text-[#C86D51]" />,
};

export const FeaturedCraft: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-[#F2ECE1] border-y border-[#E6DAC8]/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-body uppercase tracking-[0.25em] text-[#C86D51] font-semibold">
            Our Philosophy
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-normal text-[#1C130E]">
            Crafted With Intention
          </h2>
          <p className="font-body text-base text-[#5A4D41] font-light">
            Every step in our process is guided by respect for origin, mastery of craft, and the art of hospitality.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {CRAFT_FEATURES.map((feature) => (
            <div
              key={feature.id}
              className="group bg-[#FAF7F2] rounded-2xl overflow-hidden border border-[#E6DAC8] shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col justify-between"
            >
              {/* Card Image Header */}
              <div className="relative h-48 overflow-hidden bg-[#1C130E]">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1C130E]/60 via-transparent to-transparent" />
                <div className="absolute top-4 left-4 w-12 h-12 rounded-xl bg-[#FAF7F2]/90 backdrop-blur-md flex items-center justify-center border border-[#E6DAC8] shadow-md">
                  {iconMap[feature.iconName]}
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 flex flex-col flex-grow justify-between space-y-4">
                <div className="space-y-2">
                  <span className="text-[10px] uppercase tracking-widest text-[#7A6B5D] font-body block font-medium">
                    {feature.subtitle}
                  </span>
                  <h3 className="font-display text-xl font-medium text-[#1C130E] group-hover:text-[#C86D51] transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="font-body text-sm text-[#5A4D41] leading-relaxed font-light">
                    “{feature.description}”
                  </p>
                </div>

                <div className="pt-2 border-t border-[#E6DAC8]/40 flex items-center justify-between text-xs text-[#7A6B5D] font-body">
                  <span>Kaffa & Ember</span>
                  <span className="text-[#C86D51] group-hover:translate-x-1 transition-transform duration-300">
                    →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
