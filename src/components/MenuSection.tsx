import { useState } from 'react';
import { MENU_ITEMS } from '../data/coffeeData';
import type { MenuCategory, MenuItem } from '../types/coffee';
import { Sparkles, Plus, Check } from 'lucide-react';

interface MenuSectionProps {
  onAddToCart: (item: MenuItem) => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({ onAddToCart }) => {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>('ALL');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [addedItemIds, setAddedItemIds] = useState<Set<string>>(new Set());

  const categories: MenuCategory[] = [
    'ALL',
    'ESPRESSO',
    'MILK COFFEE',
    'ETHIOPIAN COFFEE',
    'COLD COFFEE',
    'TEA & OTHER',
    'FOOD',
  ];

  const filteredItems = MENU_ITEMS.filter((item) => {
    const matchesCategory = activeCategory === 'ALL' || item.category === activeCategory;
    const matchesTag = !selectedTag || (item.dietary && item.dietary.includes(selectedTag as any));
    return matchesCategory && matchesTag;
  });

  const handleAdd = (item: MenuItem) => {
    onAddToCart(item);
    setAddedItemIds((prev) => new Set(prev).add(item.id));
    setTimeout(() => {
      setAddedItemIds((prev) => {
        const next = new Set(prev);
        next.delete(item.id);
        return next;
      });
    }, 1500);
  };

  return (
    <section id="menu" className="py-20 lg:py-28 bg-[#FAF7F2] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-body uppercase tracking-[0.25em] text-[#C86D51] font-semibold">
            Specialty Offerings
          </span>
          <h2 className="text-4xl sm:text-5xl font-display font-normal text-[#1C130E]">
            Café Menu
          </h2>
          <p className="font-body text-base text-[#5A4D41] font-light">
            Crafted daily using micro-lot Ethiopian Arabica, organic milks, and seasonal artisan botanicals.
          </p>
        </div>

        {/* Categories Tabs */}
        <div className="flex items-center justify-center overflow-x-auto pb-4 mb-8 no-scrollbar space-x-2 sm:space-x-3">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setSelectedTag(null);
                }}
                className={`px-4 py-2 rounded-full text-xs font-body uppercase tracking-wider whitespace-nowrap transition-all duration-300 ${
                  isActive
                    ? 'bg-[#1C130E] text-[#FAF7F2] font-medium shadow-md'
                    : 'bg-[#F2ECE1] text-[#5A4D41] hover:bg-[#E6DAC8] hover:text-[#1C130E]'
                }`}
              >
                {cat === 'ALL' ? 'Full Menu' : cat}
              </button>
            );
          })}
        </div>

        {/* Filter Tags */}
        <div className="flex items-center justify-center space-x-2 mb-12 text-xs font-body">
          <span className="text-[#7A6B5D] mr-2 hidden sm:inline">Filter by:</span>
          {['Signature', 'Single-Origin', 'Vegan', 'Gluten-Free'].map((tag) => {
            const isSelected = selectedTag === tag;
            return (
              <button
                key={tag}
                onClick={() => setSelectedTag(isSelected ? null : tag)}
                className={`px-3 py-1 rounded-full border transition-colors ${
                  isSelected
                    ? 'bg-[#C86D51] text-white border-[#C86D51]'
                    : 'bg-transparent text-[#7A6B5D] border-[#E6DAC8] hover:border-[#C86D51]'
                }`}
              >
                {tag}
              </button>
            );
          })}
        </div>

        {/* Editorial Menu Grid / Layout */}
        <div className="bg-[#FAF7F2] border border-[#E6DAC8] rounded-3xl p-6 sm:p-10 lg:p-12 shadow-sm">
          {filteredItems.length === 0 ? (
            <div className="text-center py-12 text-[#7A6B5D]">
              <p className="font-display italic text-lg">No menu items match your filter criteria.</p>
              <button
                onClick={() => {
                  setActiveCategory('ALL');
                  setSelectedTag(null);
                }}
                className="mt-4 text-xs uppercase tracking-widest text-[#C86D51] underline"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
              {filteredItems.map((item) => {
                const isJustAdded = addedItemIds.has(item.id);
                return (
                  <div
                    key={item.id}
                    className="group border-b border-[#E6DAC8]/60 pb-6 flex flex-col justify-between space-y-3 transition-colors duration-300 hover:border-[#C86D51]/50"
                  >
                    <div className="flex items-baseline justify-between">
                      <div className="flex items-center space-x-2">
                        <h3 className="font-display text-xl font-medium text-[#1C130E] group-hover:text-[#C86D51] transition-colors">
                          {item.name}
                        </h3>
                        {item.isPopular && (
                          <span className="inline-flex items-center space-x-1 bg-[#C86D51]/10 text-[#C86D51] text-[10px] uppercase tracking-widest px-2 py-0.5 rounded-full font-body font-semibold">
                            <Sparkles className="w-3 h-3" />
                            <span>House Favorite</span>
                          </span>
                        )}
                      </div>
                      
                      {/* Dotted Leader & Price */}
                      <div className="flex items-center space-x-3 ml-2">
                        <span className="font-display text-lg font-bold text-[#1C130E]">
                          ${item.price.toFixed(2)}
                        </span>
                        
                        <button
                          onClick={() => handleAdd(item)}
                          className={`w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 ${
                            isJustAdded
                              ? 'bg-emerald-600 text-white scale-110'
                              : 'bg-[#F2ECE1] hover:bg-[#1C130E] text-[#1C130E] hover:text-[#FAF7F2]'
                          }`}
                          aria-label={`Add ${item.name} to order`}
                          title="Add to takeaway order"
                        >
                          {isJustAdded ? (
                            <Check className="w-3.5 h-3.5" />
                          ) : (
                            <Plus className="w-3.5 h-3.5" />
                          )}
                        </button>
                      </div>
                    </div>

                    <p className="font-body text-sm text-[#5A4D41] leading-relaxed font-light">
                      {item.description}
                    </p>

                    {item.dietary && item.dietary.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {item.dietary.map((d) => (
                          <span
                            key={d}
                            className="text-[9px] uppercase tracking-wider font-body text-[#7A6B5D] bg-[#F2ECE1]/80 px-2 py-0.5 rounded"
                          >
                            {d}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}

          {/* Menu Footnote */}
          <div className="mt-12 pt-8 border-t border-[#E6DAC8] text-center text-xs text-[#7A6B5D] font-body flex flex-col sm:flex-row items-center justify-between gap-4">
            <p> Oat, Almond, and Organic Whole Milk options available upon request.</p>
            <p className="italic font-display text-sm text-[#4A3E34]">
              “All prices in USD. Tax applied at checkout.”
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
