// src/state/cart.ts
interface CartItem {
    id: number;
    quantity: number;
    price: number;
    title: string;
  }
  
  interface Cart {
    items: CartItem[];
    total: number;
  }
  
  export const addToCart = (cart: Cart, item: CartItem): Cart => {
    const existingItem = cart.items.find(i => i.id === item.id);
    
    if (existingItem) {
      return {
        ...cart,
        items: cart.items.map(i => 
          i.id === item.id 
            ? { ...i, quantity: i.quantity + 1 }
            : i
        ),
        total: cart.total + item.price
      };
    }
  
    return {
      ...cart,
      items: [...cart.items, { ...item, quantity: 1 }],
      total: cart.total + item.price
    };
  };
  
  export const removeFromCart = (cart: Cart, itemId: number): Cart => {
    const item = cart.items.find(i => i.id === itemId);
    if (!item) return cart;
  
    return {
      ...cart,
      items: cart.items.filter(i => i.id !== itemId),
      total: cart.total - (item.price * item.quantity)
    };
  };
  
  export const initialCart: Cart = {
    items: [],
    total: 0
  };
  