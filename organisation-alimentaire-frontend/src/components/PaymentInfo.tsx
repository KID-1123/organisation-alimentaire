import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./PaymentInfo.css";

const PaymentInfo = () => {
  const navigate = useNavigate();

  const [address, setAddress] = useState({
    name: "",
    street: "",
    city: "",
    zip: "",
    phone: "",
  });

  const [paymentMethod, setPaymentMethod] = useState<string>("card");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // 👉 Stockage mock (localStorage)
    localStorage.setItem(
      "yumguard_payment",
      JSON.stringify({ address, paymentMethod })
    );

    navigate("/confirmation");
  };

  return (
    <div className="payment-container">
      <h2>💳 Informations de paiement</h2>

      <form onSubmit={handleSubmit} className="payment-form">
        {/* 📦 Adresse */}
        <h3>📦 Adresse de livraison</h3>

        <input
          placeholder="Nom et prénom"
          value={address.name}
          onChange={(e) =>
            setAddress({ ...address, name: e.target.value })
          }
          required
        />

        <input
          placeholder="Adresse"
          value={address.street}
          onChange={(e) =>
            setAddress({ ...address, street: e.target.value })
          }
          required
        />

        <div className="row">
          <input
            placeholder="Ville"
            value={address.city}
            onChange={(e) =>
              setAddress({ ...address, city: e.target.value })
            }
            required
          />
          <input
            placeholder="Code postal"
            value={address.zip}
            onChange={(e) =>
              setAddress({ ...address, zip: e.target.value })
            }
            required
          />
        </div>

        <input
          placeholder="Téléphone"
          value={address.phone}
          onChange={(e) =>
            setAddress({ ...address, phone: e.target.value })
          }
          required
        />

        {/* 💳 Paiement */}
        <h3>💳 Moyen de paiement</h3>

        <div className="payment-options">
          <label>
            <input
              type="radio"
              checked={paymentMethod === "card"}
              onChange={() => setPaymentMethod("card")}
            />
            Carte bancaire
          </label>

          <label>
            <input
              type="radio"
              checked={paymentMethod === "paypal"}
              onChange={() => setPaymentMethod("paypal")}
            />
            PayPal
          </label>

          <label>
            <input
              type="radio"
              checked={paymentMethod === "delivery"}
              onChange={() => setPaymentMethod("delivery")}
            />
            Paiement à la livraison
          </label>
        </div>

        <button type="submit" className="confirm-btn">
          ✅ Confirmer et payer
        </button>
      </form>
    </div>
  );
};

export default PaymentInfo;
