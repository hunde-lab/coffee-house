import { ArrowRight, ChevronDown, Compass, Flame } from 'lucide-react';

interface HeroProps {
  onExploreMenu: () => void;
  onVisitUs: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreMenu, onVisitUs }) => {
  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 flex items-center justify-center overflow-hidden bg-[#FAF7F2]">
      {/* Subtle Background Glows & Texture */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C86D51]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-[#3D2E22]/5 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Text Content Column */}
          <div className="lg:col-span-7 flex flex-col text-left space-y-6 sm:space-y-8">
            
            {/* Heritage Badge */}
            <div className="inline-flex items-center space-x-2.5 bg-[#F2ECE1] border border-[#E6DAC8] px-4 py-1.5 rounded-full text-xs font-body tracking-widest text-[#7A5B44] uppercase w-max">
              <span className="w-2 h-2 rounded-full bg-[#C86D51] animate-ping" />
              <Flame className="w-3.5 h-3.5 text-[#C86D51]" />
              <span>Ethiopian Heritage & Specialty Roastery</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-6xl xl:text-7xl font-display font-normal text-[#1C130E] leading-[1.08] tracking-tight">
                KAFFA <span className="text-[#C86D51] font-light">&</span> EMBER
              </h1>
              <p className="font-display italic text-2xl sm:text-3xl xl:text-4xl text-[#4A3E34] font-normal leading-snug">
                “Coffee rooted in origin. Crafted for today.”
              </p>
            </div>

            {/* Supporting Text */}
            <p className="font-body text-base sm:text-lg text-[#5A4D41] max-w-xl leading-relaxed font-light">
              An Ethiopian-inspired coffee house celebrating exceptional beans, thoughtful roasting, and the sacred ritual of slowing down.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button
                onClick={onExploreMenu}
                className="group flex items-center justify-center space-x-3 bg-[#1C130E] hover:bg-[#32231A] text-[#FAF7F2] px-8 py-4 rounded-full text-sm font-body tracking-widest uppercase font-medium transition-all duration-300 shadow-lg hover:shadow-xl focus:ring-2 focus:ring-[#C86D51]"
              >
                <span>Explore Our Menu</span>
                <ArrowRight className="w-4 h-4 text-[#C86D51] transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <button
                onClick={onVisitUs}
                className="flex items-center justify-center space-x-2 bg-transparent hover:bg-[#F2ECE1] text-[#1C130E] border border-[#4A3E34]/30 hover:border-[#1C130E] px-8 py-4 rounded-full text-sm font-body tracking-widest uppercase font-medium transition-all duration-300"
              >
                <Compass className="w-4 h-4 text-[#C86D51]" />
                <span>Visit the Coffee House</span>
              </button>
            </div>

            {/* Quick Metrics Bar */}
            <div className="pt-6 border-t border-[#E6DAC8]/80 grid grid-cols-3 gap-4 max-w-lg">
              <div>
                <span className="block font-display text-2xl sm:text-3xl font-semibold text-[#1C130E]">100%</span>
                <span className="text-xs text-[#7A6B5D] uppercase tracking-wider font-body">Heirloom Arabica</span>
              </div>
              <div>
                <span className="block font-display text-2xl sm:text-3xl font-semibold text-[#C86D51]">2,200m</span>
                <span className="text-xs text-[#7A6B5D] uppercase tracking-wider font-body">Highland Origin</span>
              </div>
              <div>
                <span className="block font-display text-2xl sm:text-3xl font-semibold text-[#1C130E]">Micro</span>
                <span className="text-xs text-[#7A6B5D] uppercase tracking-wider font-body">Batch Roasted</span>
              </div>
            </div>

          </div>

          {/* Visual Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Atmospheric Main Image Container */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-[#F2ECE1] aspect-[4/5] bg-[#1C130E]">
                <img
                  src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1000&q=80"
                  alt="Artisan Ethiopian Jebena coffee preparation with warm lighting and fresh beans"
                  className="w-full h-full object-cover transform transition-transform duration-1000 hover:scale-105"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1C130E]/80 via-transparent to-transparent" />
                
                {/* Embedded Quote Card */}
                <div className="absolute bottom-6 left-6 right-6 bg-[#1C130E]/90 backdrop-blur-md p-5 rounded-2xl border border-[#C86D51]/30 text-white">
                  <span className="text-xs tracking-widest text-[#C86D51] font-body uppercase block mb-1">
                    Authentic Buna Ritual
                  </span>
                  <p className="font-display italic text-sm text-[#F2ECE1]">
                    “Where ancient beans meet modern precision extractions.”
                  </p>
                </div>
              </div>

              {/* Decorative Accent Element */}
              <div className="absolute -bottom-6 -right-6 hidden sm:flex flex-col items-center justify-center w-28 h-28 bg-[#C86D51] text-white rounded-2xl shadow-xl p-3 text-center border-2 border-[#FAF7F2]">
                <span className="text-[10px] tracking-widest uppercase font-body font-semibold">Origin</span>
                <span className="font-display text-lg font-bold leading-tight">YIRGACHEFFE & GUJI</span>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Subtle Scroll Down Indicator */}
      <button
        onClick={onExploreMenu}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2 text-[#7A6B5D] hover:text-[#C86D51] transition-colors duration-300 focus:outline-none"
        aria-label="Scroll down to explore menu"
      >
        <span className="text-[10px] tracking-[0.2em] font-body uppercase">Scroll to Discover</span>
        <ChevronDown className="w-4 h-4 animate-bounce text-[#C86D51]" />
      </button>
    </section>
  );
};
