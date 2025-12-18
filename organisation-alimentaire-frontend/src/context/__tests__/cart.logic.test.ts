import { describe, it, expect } from "vitest";
import { selectCartTotalItems, selectCartTotalPrice } from "../../selectors/cartSelectors";

describe("Cart logic (pure)", () => {
  it("calcule total items + total price", () => {
    const cart = [
      { price: 12.5, quantity: 2 },
      { price: 8, quantity: 1 },
    ];

    expect(selectCartTotalItems(cart)).toBe(3);
    expect(selectCartTotalPrice(cart)).toBe(33);
  });
});
