import { useState } from 'react';
import type { CartItem } from '../types/coffee';
import { X, Trash2, ShoppingBag, CheckCircle2, Clock, Bean } from 'lucide-react';

interface OrderDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onClearCart: () => void;
}

export const OrderDrawer: React.FC<OrderDrawerProps> = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) => {
  const [pickupTime, setPickupTime] = useState('ASAP (~15 mins)');
  const [grindOption, setGrindOption] = useState('Whole Bean');
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);

  if (!isOpen) return null;

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = subtotal * 0.08875; // 8.875% sales tax
  const total = subtotal + tax;

  const handleCheckout = () => {
    if (cartItems.length === 0) return;
    setIsCheckingOut(true);
    setTimeout(() => {
      setIsCheckingOut(false);
      setIsOrderPlaced(true);
    }, 1500);
  };

  const handleCloseAndReset = () => {
    setIsOrderPlaced(false);
    onClearCart();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-xs transition-opacity duration-300">
      <div className="absolute inset-0" onClick={onClose} />
      
      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#FAF7F2] text-[#1C130E] border-l border-[#E6DAC8] shadow-2xl flex flex-col justify-between animate-slideLeft">
          
          {/* Drawer Header */}
          <div className="p-6 border-b border-[#E6DAC8] flex items-center justify-between bg-[#F2ECE1]">
            <div className="flex items-center space-x-2">
              <ShoppingBag className="w-5 h-5 text-[#C86D51]" />
              <h3 className="font-display text-xl font-medium">Your Coffee Bag</h3>
            </div>
            <button
              onClick={onClose}
              className="p-1 rounded-full text-[#7A6B5D] hover:text-[#1C130E] hover:bg-[#E6DAC8] transition-colors"
              aria-label="Close Order Drawer"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Drawer Content */}
          <div className="flex-grow overflow-y-auto p-6 space-y-6">
            {isOrderPlaced ? (
              <div className="text-center py-12 space-y-4 animate-fadeIn">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="font-display text-2xl text-[#1C130E]">Order Confirmed</h4>
                <p className="text-sm font-body text-[#5A4D41]">
                  Your takeaway order has been sent to our barista bar!
                </p>
                <div className="p-4 rounded-2xl bg-[#F2ECE1] border border-[#E6DAC8] text-xs font-body space-y-1 text-left">
                  <p><strong>Order ID:</strong> #KE-{(Math.random() * 8999 + 1000).toFixed(0)}</p>
                  <p><strong>Pickup Time:</strong> {pickupTime}</p>
                  <p><strong>Total Paid:</strong> ${total.toFixed(2)}</p>
                </div>
                <button
                  onClick={handleCloseAndReset}
                  className="w-full bg-[#1C130E] text-white py-3 rounded-full text-xs uppercase tracking-widest font-body font-medium"
                >
                  Done
                </button>
              </div>
            ) : cartItems.length === 0 ? (
              <div className="text-center py-16 space-y-4 text-[#7A6B5D]">
                <Bean className="w-12 h-12 text-[#C86D51]/40 mx-auto" />
                <h4 className="font-display text-xl text-[#1C130E]">Your bag is currently empty</h4>
                <p className="text-xs font-body max-w-xs mx-auto text-[#5A4D41]">
                  Explore our menu or whole-bean origins to add coffee, beverages, or pastries to your order.
                </p>
              </div>
            ) : (
              <>
                {/* Items List */}
                <div className="space-y-4">
                  {cartItems.map((item) => (
                    <div
                      key={item.id}
                      className="p-4 rounded-2xl bg-[#F2ECE1]/60 border border-[#E6DAC8] flex items-center justify-between"
                    >
                      <div className="space-y-1">
                        <h4 className="font-display font-medium text-base text-[#1C130E]">
                          {item.name}
                        </h4>
                        <span className="text-xs font-body text-[#C86D51] font-semibold block">
                          ${item.price.toFixed(2)}
                        </span>
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex items-center space-x-3">
                        <div className="flex items-center space-x-2 bg-[#FAF7F2] border border-[#E6DAC8] rounded-full px-2 py-1">
                          <button
                            onClick={() => onUpdateQuantity(item.id, -1)}
                            className="w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold text-[#4A3E34] hover:bg-[#E6DAC8]"
                          >
                            -
                          </button>
                          <span className="text-xs font-body font-semibold px-1">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => onUpdateQuantity(item.id, 1)}
                            className="w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold text-[#4A3E34] hover:bg-[#E6DAC8]"
                          >
                            +
                          </button>
                        </div>

                        <button
                          onClick={() => onRemoveItem(item.id)}
                          className="text-[#9A8B7D] hover:text-red-600 transition-colors p-1"
                          aria-label={`Remove ${item.name}`}
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Pickup Time Selector */}
                <div className="p-4 rounded-2xl bg-[#F2ECE1]/40 border border-[#E6DAC8] space-y-2">
                  <label className="text-xs font-body uppercase tracking-wider text-[#7A6B5D] font-semibold flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#C86D51]" />
                    <span>Estimated Takeaway Pickup</span>
                  </label>
                  <select
                    value={pickupTime}
                    onChange={(e) => setPickupTime(e.target.value)}
                    className="w-full bg-[#FAF7F2] border border-[#E6DAC8] rounded-xl px-3 py-2 text-xs font-body text-[#1C130E] focus:ring-2 focus:ring-[#C86D51]"
                  >
                    <option value="ASAP (~15 mins)">ASAP (~15 mins)</option>
                    <option value="In 30 minutes">In 30 minutes</option>
                    <option value="In 45 minutes">In 45 minutes</option>
                    <option value="Schedule for later today">Schedule for later today</option>
                  </select>
                </div>

                {/* Bean Grind Option if Whole Beans present */}
                <div className="p-4 rounded-2xl bg-[#F2ECE1]/40 border border-[#E6DAC8] space-y-2">
                  <label className="text-xs font-body uppercase tracking-wider text-[#7A6B5D] font-semibold flex items-center gap-1.5">
                    <Bean className="w-3.5 h-3.5 text-[#C86D51]" />
                    <span>Whole Bean Grind Calibration</span>
                  </label>
                  <select
                    value={grindOption}
                    onChange={(e) => setGrindOption(e.target.value)}
                    className="w-full bg-[#FAF7F2] border border-[#E6DAC8] rounded-xl px-3 py-2 text-xs font-body text-[#1C130E] focus:ring-2 focus:ring-[#C86D51]"
                  >
                    <option value="Whole Bean">Whole Bean (Recommended)</option>
                    <option value="Fine (Espresso / Moka)">Fine (Espresso / Moka)</option>
                    <option value="Medium (V60 / Pour Over)">Medium (V60 / Pour Over)</option>
                    <option value="Coarse (French Press / Cold Brew)">Coarse (French Press / Cold Brew)</option>
                  </select>
                </div>
              </>
            )}
          </div>

          {/* Drawer Footer Checkout */}
          {!isOrderPlaced && cartItems.length > 0 && (
            <div className="p-6 border-t border-[#E6DAC8] bg-[#F2ECE1] space-y-4">
              <div className="space-y-1.5 text-xs font-body">
                <div className="flex justify-between text-[#5A4D41]">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-[#5A4D41]">
                  <span>Estimated Tax</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between font-display text-lg font-bold text-[#1C130E] pt-2 border-t border-[#E6DAC8]">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>

              <button
                onClick={handleCheckout}
                disabled={isCheckingOut}
                className="w-full bg-[#1C130E] hover:bg-[#32231A] text-[#FAF7F2] py-4 rounded-full text-xs font-body uppercase tracking-widest font-semibold transition-all duration-300 shadow-md focus:ring-2 focus:ring-[#C86D51]"
              >
                {isCheckingOut ? 'Processing Order...' : `Pay & Place Order ($${total.toFixed(2)})`}
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
