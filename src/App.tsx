import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FeaturedCraft } from './components/FeaturedCraft';
import { MenuSection } from './components/MenuSection';
import { OurStorySection } from './components/OurStorySection';
import { CoffeeOriginsSection } from './components/CoffeeOriginsSection';
import { VisitUsSection } from './components/VisitUsSection';
import { ContactSection } from './components/ContactSection';
import { OrderDrawer } from './components/OrderDrawer';
import { Footer } from './components/Footer';
import type { CartItem, MenuItem } from './types/coffee';

export function App() {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [isOrderDrawerOpen, setIsOrderDrawerOpen] = useState<boolean>(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // Smooth Section Navigation
  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Track Active Section on Scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'menu', 'story', 'coffee', 'visit', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Cart Management
  const handleAddToCart = (item: MenuItem) => {
    setCartItems((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) {
        return prev.map((i) => (i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i));
      }
      return [
        ...prev,
        {
          id: item.id,
          name: item.name,
          price: item.price,
          quantity: 1,
          type: item.category === 'FOOD' ? 'food' : 'drink',
        },
      ];
    });
  };

  const handleOrderBeans = (originName: string) => {
    const beanId = `beans-${originName.toLowerCase()}`;
    setCartItems((prev) => {
      const existing = prev.find((i) => i.id === beanId);
      if (existing) {
        return prev.map((i) => (i.id === beanId ? { ...i, quantity: i.quantity + 1 } : i));
      }
      return [
        ...prev,
        {
          id: beanId,
          name: `${originName} Single-Origin (250g Whole Bean)`,
          price: 18.50,
          quantity: 1,
          type: 'beans',
        },
      ];
    });
    setIsOrderDrawerOpen(true);
  };

  const handleUpdateQuantity = (id: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter((item): item is CartItem => item !== null)
    );
  };

  const handleRemoveItem = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#1C130E] selection:bg-[#C86D51] selection:text-white font-body">
      {/* Navigation Bar */}
      <Navbar
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onOpenOrder={() => setIsOrderDrawerOpen(true)}
        cartItemCount={totalCartCount}
      />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section */}
        <Hero
          onExploreMenu={() => handleNavigate('menu')}
          onVisitUs={() => handleNavigate('visit')}
        />

        {/* Featured Craft Section ("Crafted With Intention") */}
        <FeaturedCraft />

        {/* Café Menu Section */}
        <MenuSection onAddToCart={handleAddToCart} />

        {/* Our Story Section */}
        <OurStorySection />

        {/* Interactive Coffee Origins Section */}
        <CoffeeOriginsSection onOrderBeans={handleOrderBeans} />

        {/* Visit Us Section */}
        <VisitUsSection />

        {/* Contact Section */}
        <ContactSection />
      </main>

      {/* Takeaway & Whole Bean Order Drawer */}
      <OrderDrawer
        isOpen={isOrderDrawerOpen}
        onClose={() => setIsOrderDrawerOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

export default App;
