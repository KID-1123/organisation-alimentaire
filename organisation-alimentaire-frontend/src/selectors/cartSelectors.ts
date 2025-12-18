export type CartLikeItem = { quantity: number; price: number };

export const selectCartTotalItems = (cart: CartLikeItem[]) =>
  cart.reduce((sum, item) => sum + item.quantity, 0);

export const selectCartTotalPrice = (cart: CartLikeItem[]) =>
  cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
