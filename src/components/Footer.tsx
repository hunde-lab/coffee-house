import { useState } from 'react';
import { Flame, Send, Heart, ArrowUp } from 'lucide-react';
import { CAFÉ_INFO } from '../data/coffeeData';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.trim()) return;
    setSubscribed(true);
    setNewsletterEmail('');
    setTimeout(() => setSubscribed(false), 4000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#12100E] text-[#FAF7F2] border-t border-[#2A1E17] relative pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-12 border-b border-[#2A1E17]">
          
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-full bg-[#C86D51]/20 flex items-center justify-center text-[#C86D51]">
                <Flame className="w-4 h-4 fill-[#C86D51]" />
              </div>
              <span className="font-display font-bold text-xl tracking-[0.18em] uppercase text-[#FAF7F2]">
                Kaffa <span className="text-[#C86D51] font-sans font-light">&</span> Ember
              </span>
            </div>
            <p className="font-display italic text-sm text-[#D5C7B3] font-light">
              “{CAFÉ_INFO.tagline}”
            </p>
            <p className="font-body text-xs text-[#9A8B7D] leading-relaxed max-w-sm">
              {CAFÉ_INFO.subtagline}
            </p>
          </div>

          {/* Quick Navigation */}
          <div className="lg:col-span-2 space-y-3">
            <span className="text-xs font-body uppercase tracking-[0.2em] text-[#C86D51] font-semibold block">
              Navigation
            </span>
            <ul className="space-y-2 text-xs font-body text-[#D5C7B3]">
              {['home', 'menu', 'story', 'coffee', 'visit', 'contact'].map((id) => (
                <li key={id}>
                  <button
                    onClick={() => onNavigate(id)}
                    className="hover:text-[#C86D51] capitalize transition-colors"
                  >
                    {id === 'story' ? 'Our Story' : id === 'visit' ? 'Visit Us' : id}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Opening Hours Summary */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-xs font-body uppercase tracking-[0.2em] text-[#C86D51] font-semibold block">
              Café Hours
            </span>
            <div className="space-y-2 text-xs font-body text-[#D5C7B3]">
              {CAFÉ_INFO.hoursList.map((h) => (
                <div key={h.days}>
                  <span className="block font-medium text-[#FAF7F2]">{h.days}</span>
                  <span className="text-[#9A8B7D]">{h.hours}</span>
                </div>
              ))}
              <div className="pt-2">
                <span className="text-[11px] text-[#7A6B5D] block">Address: {CAFÉ_INFO.addressFormatted.replace('\n', ', ')}</span>
              </div>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-xs font-body uppercase tracking-[0.2em] text-[#C86D51] font-semibold block">
              Join The Ritual
            </span>
            <p className="text-xs font-body text-[#9A8B7D] font-light">
              Subscribe to receive updates on micro-lot coffee releases, roasting notes, and ceremony schedules.
            </p>

            {subscribed ? (
              <div className="p-3 bg-emerald-950/60 border border-emerald-800 text-emerald-400 rounded-xl text-xs font-body">
                ✓ Thank you for joining our coffee newsletter!
              </div>
            ) : (
              <form onSubmit={handleNewsletter} className="flex items-center">
                <input
                  type="email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="w-full bg-[#1C130E] border border-[#3D2E22] rounded-l-full px-4 py-2.5 text-xs font-body text-white placeholder-[#7A6B5D] focus:outline-none focus:border-[#C86D51]"
                />
                <button
                  type="submit"
                  className="bg-[#C86D51] hover:bg-[#B35A3E] text-white px-4 py-2.5 rounded-r-full flex items-center justify-center transition-colors"
                  aria-label="Subscribe to newsletter"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] font-body text-[#7A6B5D] space-y-4 sm:space-y-0">
          <p>© {new Date().getFullYear()} KAFFA & EMBER. All rights reserved. Ethiopian Coffee Culture & Specialty Roastery.</p>
          
          <div className="flex items-center space-x-6">
            <span className="flex items-center space-x-1">
              <span>Crafted with</span>
              <Heart className="w-3 h-3 text-[#C86D51] fill-[#C86D51]" />
              <span>for coffee lovers</span>
            </span>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-[#1C130E] text-[#D5C7B3] hover:text-white hover:bg-[#C86D51] transition-colors"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
