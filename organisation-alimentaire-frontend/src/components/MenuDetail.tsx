import { useParams, useNavigate } from "react-router-dom";
import { MENUS } from "../data/menusData";
import { useCart } from "../context/CartContext";
import "./MenuDetail.css";

const MenuDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  // Récupération du menu depuis la data centrale
  const menu = MENUS.find((m) => m.id === Number(id));

  // Sécurité : menu inexistant
  if (!menu) {
    return (
      <div className="menu-detail-container">
        <h2>Menu introuvable</h2>
        <button
          className="back-btn"
          onClick={() => navigate("/courses")}
        >
          Retour aux menus
        </button>
      </div>
    );
  }

  return (
    <div className="menu-detail-container">
      {/* Image */}
      <img
        src={menu.image}
        alt={menu.title}
        className="menu-detail-image"
      />

      {/* Contenu */}
      <div className="menu-detail-content">
        <h1>{menu.title}</h1>

        <span className="menu-category">{menu.category}</span>

        <h3>Ingrédients</h3>
        <ul className="ingredients-list">
          {menu.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>

        {/* Actions */}
        <div className="menu-detail-actions">
          <button
            className="add-to-cart-btn"
            onClick={() => addToCart(menu)}
          >
            Ajouter au panier
          </button>

          <button
            className="back-btn"
            onClick={() => navigate("/courses")}
          >
            Retour aux menus
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuDetail;
