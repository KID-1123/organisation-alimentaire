import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import Cart from "../Cart";
import { CartProvider } from "../../context/CartContext";

describe("Cart component", () => {
  it("renders cart title", () => {
    render(
      <MemoryRouter>
        <CartProvider>
          <Cart />
        </CartProvider>
      </MemoryRouter>
    );

    expect(screen.getByText(/mon panier/i)).toBeInTheDocument();
  });
});
