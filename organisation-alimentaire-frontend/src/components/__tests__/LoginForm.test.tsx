import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import Login from "../Login";
import { AuthProvider } from "../../context/AuthContext";

describe("Login component", () => {
  it("affiche la page de connexion", () => {
    render(
      <MemoryRouter>
        <AuthProvider>
          <Login />
        </AuthProvider>
      </MemoryRouter>
    );

    expect(screen.getByText(/connexion/i)).toBeInTheDocument();
  });
});
