import {
    createContext,
    useContext,
    useEffect,
    useState,
    ReactNode,
  } from "react";
  import { Menu } from "../data/menusData";
  
  interface CartItem extends Menu {
    quantity: number;
  }
  
  interface CartContextType {
    cart: CartItem[];
    addToCart: (menu: Menu) => void;
    increaseQuantity: (id: number) => void;
    decreaseQuantity: (id: number) => void;
    removeFromCart: (id: number) => void; // ✅ AJOUT
    clearCart: () => void;
  }
  
  const CartContext = createContext<CartContextType | undefined>(undefined);
  const STORAGE_KEY = "yumguard_cart";
  
  export const CartProvider = ({ children }: { children: ReactNode }) => {
    const [cart, setCart] = useState<CartItem[]>(() => {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored) : [];
    });
  
    useEffect(() => {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
    }, [cart]);
  
    const addToCart = (menu: Menu) => {
      setCart((prev) => {
        const existing = prev.find((i) => i.id === menu.id);
        if (existing) {
          return prev.map((i) =>
            i.id === menu.id
              ? { ...i, quantity: i.quantity + 1 }
              : i
          );
        }
        return [...prev, { ...menu, quantity: 1 }];
      });
    };
  
    const increaseQuantity = (id: number) => {
      setCart((prev) =>
        prev.map((i) =>
          i.id === id ? { ...i, quantity: i.quantity + 1 } : i
        )
      );
    };
  
    const decreaseQuantity = (id: number) => {
      setCart((prev) =>
        prev
          .map((i) =>
            i.id === id ? { ...i, quantity: i.quantity - 1 } : i
          )
          .filter((i) => i.quantity > 0)
      );
    };
  
    const removeFromCart = (id: number) => {
      setCart((prev) => prev.filter((i) => i.id !== id));
    };
  
    const clearCart = () => {
      setCart([]);
      localStorage.removeItem(STORAGE_KEY);
    };
  
    return (
      <CartContext.Provider
        value={{
          cart,
          addToCart,
          increaseQuantity,
          decreaseQuantity,
          removeFromCart,
          clearCart,
        }}
      >
        {children}
      </CartContext.Provider>
    );
  };
  
  export const useCart = () => {
    const ctx = useContext(CartContext);
    if (!ctx) {
      throw new Error("useCart must be used within CartProvider");
    }
    return ctx;
  };
  