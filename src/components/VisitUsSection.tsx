import { useState } from 'react';
import { CAFÉ_INFO } from '../data/coffeeData';
import { MapPin, Clock, Phone, Mail, Navigation, ExternalLink } from 'lucide-react';

export const VisitUsSection: React.FC = () => {
  const [showDirectionsModal, setShowDirectionsModal] = useState(false);

  return (
    <section id="visit" className="py-20 lg:py-32 bg-[#F2ECE1] border-t border-[#E6DAC8] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-body uppercase tracking-[0.25em] text-[#C86D51] font-semibold">
            Café Experience
          </span>
          <h2 className="text-4xl sm:text-5xl font-display font-normal text-[#1C130E]">
            Visit The Coffee House
          </h2>
          <p className="font-body text-base text-[#5A4D41] font-light">
            We look forward to welcoming you into our space for fresh pours, warm pastries, and quiet contemplation.
          </p>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Atmospheric Image & Quote */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-[#FAF7F2] flex-grow min-h-[400px] bg-[#1C130E]">
              <img
                src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1000&q=80"
                alt="Atmospheric interior of Kaffa and Ember coffee house with warm natural light and wooden surfaces"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1C130E]/90 via-[#1C130E]/40 to-transparent" />
              
              <div className="absolute bottom-8 left-8 right-8 text-[#FAF7F2] space-y-3">
                <span className="text-xs font-body uppercase tracking-[0.2em] text-[#C86D51] font-semibold">
                  Hospitality Sanctuary
                </span>
                <blockquote className="font-display italic text-2xl sm:text-3xl leading-snug">
                  “Come for the coffee. Stay for the ritual.”
                </blockquote>
                <p className="font-body text-xs text-[#D5C7B3] font-light">
                  Designed around natural oak wood, raw ceramics, subtle incense notes, and acoustic warmth.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Location Details & Hours */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-8 bg-[#FAF7F2] rounded-3xl p-8 sm:p-10 border border-[#E6DAC8] shadow-sm">
            
            <div className="space-y-6">
              <h3 className="font-display text-2xl font-medium text-[#1C130E] border-b border-[#E6DAC8] pb-4">
                Location & Hours
              </h3>

              {/* Address */}
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-[#F2ECE1] flex items-center justify-center text-[#C86D51] shrink-0 border border-[#E6DAC8]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-body uppercase tracking-wider text-[#7A6B5D] font-semibold block">
                    Address
                  </span>
                  <p className="font-body text-base text-[#1C130E] font-medium mt-0.5 whitespace-pre-line">
                    {CAFÉ_INFO.addressFormatted}
                  </p>
                  <span className="text-xs text-[#7A6B5D] font-mono mt-1 block">
                    Placeholder Tag: {CAFÉ_INFO.addressPlaceholder}
                  </span>
                </div>
              </div>

              {/* Opening Hours */}
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-[#F2ECE1] flex items-center justify-center text-[#C86D51] shrink-0 border border-[#E6DAC8]">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="flex-grow">
                  <span className="text-xs font-body uppercase tracking-wider text-[#7A6B5D] font-semibold block">
                    Opening Hours
                  </span>
                  <div className="space-y-1 mt-1 font-body text-sm text-[#1C130E]">
                    {CAFÉ_INFO.hoursList.map((h) => (
                      <div key={h.days} className="flex justify-between border-b border-dashed border-[#E6DAC8] pb-1">
                        <span className="font-medium">{h.days}</span>
                        <span className="text-[#4A3E34]">{h.hours}</span>
                      </div>
                    ))}
                  </div>
                  <span className="text-xs text-[#7A6B5D] font-mono mt-1 block">
                    Placeholder Tag: {CAFÉ_INFO.hoursPlaceholder}
                  </span>
                </div>
              </div>

              {/* Phone & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="flex items-center space-x-3 p-3 bg-[#F2ECE1]/60 rounded-xl border border-[#E6DAC8]/60">
                  <Phone className="w-4 h-4 text-[#C86D51]" />
                  <div>
                    <span className="text-[10px] uppercase font-body text-[#7A6B5D] block">Phone</span>
                    <a href={`tel:${CAFÉ_INFO.phoneFormatted}`} className="text-xs font-body font-semibold text-[#1C130E] hover:text-[#C86D51]">
                      {CAFÉ_INFO.phoneFormatted}
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-3 p-3 bg-[#F2ECE1]/60 rounded-xl border border-[#E6DAC8]/60">
                  <Mail className="w-4 h-4 text-[#C86D51]" />
                  <div>
                    <span className="text-[10px] uppercase font-body text-[#7A6B5D] block">Email</span>
                    <a href={`mailto:${CAFÉ_INFO.emailFormatted}`} className="text-xs font-body font-semibold text-[#1C130E] hover:text-[#C86D51]">
                      {CAFÉ_INFO.emailFormatted}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps Visual Box & Get Directions CTA */}
            <div className="space-y-4">
              <div className="relative rounded-2xl overflow-hidden border border-[#E6DAC8] h-36 bg-[#EFE6D5] flex items-center justify-center text-center p-4">
                {/* Decorative Map Grid Styling */}
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#C86D51_1px,transparent_1px)] [background-size:16px_16px]" />
                
                <div className="relative z-10 space-y-2">
                  <div className="inline-flex items-center space-x-2 bg-[#FAF7F2] px-4 py-1.5 rounded-full shadow-sm text-xs font-body font-semibold text-[#1C130E]">
                    <MapPin className="w-3.5 h-3.5 text-[#C86D51]" />
                    <span>Specialty Coffee District, NY</span>
                  </div>
                  <p className="text-[11px] text-[#7A6B5D] font-body">Interactive Google Maps Widget</p>
                </div>
              </div>

              <button
                onClick={() => setShowDirectionsModal(true)}
                className="w-full bg-[#1C130E] hover:bg-[#32231A] text-[#FAF7F2] py-4 rounded-full text-xs font-body uppercase tracking-widest font-semibold flex items-center justify-center space-x-2 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <Navigation className="w-4 h-4 text-[#C86D51]" />
                <span>Get Directions</span>
              </button>
            </div>

          </div>

        </div>

      </div>

      {/* Directions Modal */}
      {showDirectionsModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4">
          <div className="bg-[#FAF7F2] rounded-3xl max-w-md w-full p-6 space-y-4 border border-[#E6DAC8] shadow-2xl animate-fadeIn">
            <div className="flex justify-between items-center border-b border-[#E6DAC8] pb-3">
              <h4 className="font-display text-xl text-[#1C130E]">Get Directions</h4>
              <button
                onClick={() => setShowDirectionsModal(false)}
                className="text-[#7A6B5D] hover:text-[#1C130E] text-sm"
              >
                ✕
              </button>
            </div>
            <p className="text-sm font-body text-[#5A4D41]">
              KAFFA & EMBER is located at 142 Artisan Boulevard, Specialty Coffee District. Accessible via Metro Line A / C at Coffee Square Station.
            </p>
            <div className="pt-2 flex flex-col space-y-2">
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#C86D51] text-white py-3 rounded-xl text-xs font-body uppercase tracking-widest font-semibold flex items-center justify-center space-x-2"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-4 h-4" />
              </a>
              <button
                onClick={() => setShowDirectionsModal(false)}
                className="w-full bg-[#F2ECE1] text-[#1C130E] py-2.5 rounded-xl text-xs font-body uppercase tracking-widest font-medium"
              >
                Close Window
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
