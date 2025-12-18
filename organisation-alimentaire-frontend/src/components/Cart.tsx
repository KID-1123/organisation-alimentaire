import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "./Cart.css";

const Cart = () => {
  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useCart();

  const navigate = useNavigate();

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleGoToPayment = () => {
    navigate("/paiement");
  };

  return (
    <div className="cart-container">
      <h2>🛒 Mon Panier</h2>

      {cart.length === 0 ? (
        <p>Votre panier est vide.</p>
      ) : (
        <>
          <ul className="cart-list">
            {cart.map((item) => (
              <li key={item.id} className="cart-item">
                <img
                  src={item.image}
                  alt={item.title}
                  className="cart-item-image"
                />

                <div className="cart-item-info">
                  <strong>{item.title}</strong>
                  <p className="cart-category">{item.category}</p>
                  <p>{item.price.toFixed(2)} €</p>

                  <div className="quantity-controls">
                    <button onClick={() => decreaseQuantity(item.id)}>
                      −
                    </button>
                    <span>{item.quantity}</span>
                    <button onClick={() => increaseQuantity(item.id)}>
                      +
                    </button>
                  </div>
                </div>

                <button
                  className="remove-btn"
                  onClick={() => removeFromCart(item.id)}
                >
                  Supprimer
                </button>
              </li>
            ))}
          </ul>

          <h3>Total : {total.toFixed(2)} €</h3>

          <button className="clear-cart-btn" onClick={handleGoToPayment}>
            Continuer vers le paiement
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
