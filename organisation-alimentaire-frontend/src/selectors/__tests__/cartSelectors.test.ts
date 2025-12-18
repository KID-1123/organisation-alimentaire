import { describe, it, expect } from "vitest";
import { selectCartTotalItems, selectCartTotalPrice } from "../cartSelectors";

describe("cartSelectors", () => {
  it("selectCartTotalItems calcule le total des quantités", () => {
    const cart = [
      { price: 10, quantity: 2 },
      { price: 5, quantity: 1 },
    ];
    expect(selectCartTotalItems(cart)).toBe(3);
  });

  it("selectCartTotalPrice calcule le total du panier", () => {
    const cart = [
      { price: 10, quantity: 2 },
      { price: 5, quantity: 1 },
    ];
    expect(selectCartTotalPrice(cart)).toBe(25);
  });
});
