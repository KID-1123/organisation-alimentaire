import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { CartProvider } from "../../context/CartContext";
import Cart from "../Cart";

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
