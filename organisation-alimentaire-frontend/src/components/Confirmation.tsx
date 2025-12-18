import { useNavigate } from "react-router-dom";
import "./Confirmation.css";

const Confirmation = () => {
  const navigate = useNavigate();

  return (
    <div className="confirmation-page">
      <div className="confirmation-card">
        <div className="confirmation-icon">✅</div>

        <h2>Commande confirmée</h2>

        <p className="confirmation-text">
          Merci pour votre commande 🎉 <br />
          Elle a bien été enregistrée et est en cours de traitement.
        </p>

        <div className="confirmation-actions">
          <button
            className="primary-btn"
            onClick={() => navigate("/orders")}
          >
             Voir mes commandes
          </button>

          <button
            className="secondary-btn"
            onClick={() => navigate("/home")}
          >
             Retour à l’accueil
          </button>
        </div>
      </div>
    </div>
  );
};

export default Confirmation;
