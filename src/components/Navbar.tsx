import { useState, useEffect } from 'react';
import { ShoppingBag, Menu as MenuIcon, X, Flame } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onOpenOrder: () => void;
  cartItemCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  onNavigate,
  onOpenOrder,
  cartItemCount,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'menu', label: 'Menu' },
    { id: 'story', label: 'Our Story' },
    { id: 'coffee', label: 'Coffee' },
    { id: 'visit', label: 'Visit Us' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#FAF7F2]/95 backdrop-blur-md py-3 shadow-sm border-b border-[#E6DAC8]/60'
          : 'bg-transparent py-5 md:py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo Concept */}
        <button
          onClick={() => handleLinkClick('home')}
          className="group flex items-center space-x-3 text-left focus:outline-none"
          aria-label="KAFFA & EMBER Home"
        >
          <div className="w-9 h-9 rounded-full bg-[#1C130E] flex items-center justify-center text-[#C86D51] transition-transform duration-300 group-hover:scale-105 shadow-inner">
            <Flame className="w-5 h-5 fill-[#C86D51]/20 stroke-[#C86D51]" />
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-lg sm:text-xl tracking-[0.18em] text-[#1C130E] uppercase leading-none">
              Kaffa <span className="text-[#C86D51] font-sans font-light">&</span> Ember
            </span>
            <span className="text-[9px] tracking-[0.25em] text-[#7A6B5D] uppercase mt-1 font-body">
              Specialty Coffee House
            </span>
          </div>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8" aria-label="Main Navigation">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`text-sm tracking-widest font-body uppercase transition-colors duration-300 relative py-1 ${
                  isActive
                    ? 'text-[#C86D51] font-semibold'
                    : 'text-[#4A3E34] hover:text-[#1C130E]'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#C86D51] rounded-full animate-pulse" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Right CTA Actions */}
        <div className="flex items-center space-x-4">
          <button
            onClick={onOpenOrder}
            className="group relative flex items-center space-x-2 bg-[#1C130E] hover:bg-[#2F2119] text-[#FAF7F2] px-4 py-2.5 sm:px-5 sm:py-2.5 rounded-full text-xs sm:text-sm tracking-wider uppercase font-body font-medium transition-all duration-300 shadow-md hover:shadow-lg focus:ring-2 focus:ring-[#C86D51]"
            aria-label="Order Coffee Online"
          >
            <ShoppingBag className="w-4 h-4 text-[#C86D51] transition-transform duration-300 group-hover:scale-110" />
            <span>Order Coffee</span>
            {cartItemCount > 0 && (
              <span className="bg-[#C86D51] text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center ml-1">
                {cartItemCount}
              </span>
            )}
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-[#1C130E] hover:text-[#C86D51] focus:outline-none rounded-lg"
            aria-label={isMobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[60px] bg-[#FAF7F2] border-b border-[#E6DAC8] shadow-2xl py-6 px-6 transition-all duration-300 animate-fadeIn">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`text-left py-2.5 text-base tracking-widest uppercase font-display border-b border-[#E6DAC8]/40 ${
                  activeSection === link.id
                    ? 'text-[#C86D51] font-semibold pl-2 border-l-4 border-l-[#C86D51]'
                    : 'text-[#4A3E34] hover:text-[#1C130E]'
                }`}
              >
                {link.label}
              </button>
            ))}
            <div className="pt-4">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenOrder();
                }}
                className="w-full bg-[#1C130E] text-[#FAF7F2] py-3 rounded-full text-xs uppercase tracking-widest font-body font-semibold flex items-center justify-center space-x-2"
              >
                <ShoppingBag className="w-4 h-4 text-[#C86D51]" />
                <span>Order Coffee for Takeaway</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
