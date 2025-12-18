import { NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/logo.png";
import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const { isAuthenticated, logout } = useAuth();
  const { cart } = useCart();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  // Nombre total d’articles dans le panier
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="navbar">
      <div className="navbar-content">
        {/* LEFT */}
        <div className="navbar-left">
          <img src={logo} alt="YUMGUARD Logo" />
          <span className="app-name">YUMGUARD-SHOP</span>
        </div>

        {/* RIGHT */}
        <div className="navbar-right">
          <NavLink
            to="/home"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Accueil
          </NavLink>

          {isAuthenticated && (
            <>
              <NavLink
                to="/courses"
                className={({ isActive }) => (isActive ? "active-link" : "")}
              >
                Menus
              </NavLink>

              {/*  MES COMMANDES */}
              <NavLink
                to="/orders"
                className={({ isActive }) => (isActive ? "active-link" : "")}
              >
                 Vos commandes
              </NavLink>

              {/* 🛒 PANIER */}
              <NavLink
                to="/panier"
                className={({ isActive }) => (isActive ? "active-link" : "")}
              >
                🛒
                {cartCount > 0 && (
                  <span className="cart-badge">{cartCount}</span>
                )}
              </NavLink>

              <button className="logout-button" onClick={handleLogout}>
                Déconnexion
              </button>
            </>
          )}

          {!isAuthenticated && (
            <NavLink
              to="/login"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              Connexion
            </NavLink>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
