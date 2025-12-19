import { Routes, Route, Navigate, useLocation } from "react-router-dom";

import Home from "./components/Home";
import ShoppingList from "./components/ShoppingList";
import MenuDetail from "./components/MenuDetail";
import Cart from "./components/Cart";
import PaymentInfo from "./components/PaymentInfo";
import Confirmation from "./components/Confirmation";
import Orders from "./components/Orders";
import Navbar from "./components/Navbar";
import Login from "./components/Login";

function App() {
  const location = useLocation();
  const hideNavbar = location.pathname === "/login";

  return (
    <>
      {!hideNavbar && <Navbar />}

      <Routes>
        {/* Redirection par défaut */}
        <Route path="/" element={<Navigate to="/home" />} />

        {/* Pages publiques */}
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />

        {/* Catalogue */}
        <Route path="/courses" element={<ShoppingList />} />
        <Route path="/menus/:id" element={<MenuDetail />} />

        {/*  Panier */}
        <Route path="/panier" element={<Cart />} />

        {/*  Informations de paiement */}
        <Route path="/paiement" element={<PaymentInfo />} />

        {/*  Confirmation */}
        <Route path="/confirmation" element={<Confirmation />} />

        {/*  Commandes */}
        <Route path="/orders" element={<Orders />} />

        {/* Sécurité */}
        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
    </>
  );
}

export default App;
