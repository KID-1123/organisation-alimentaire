import { useState } from "react";
import { OrdersService, Order } from "../services/ordersService";
import "./Orders.css";

const Orders = () => {
  const [orders, setOrders] = useState<Order[]>(
    OrdersService.getOrders()
  );

  const handleDelivered = (orderId: number) => {
    OrdersService.markAsDelivered(orderId);
    setOrders(OrdersService.getOrders());
  };

  return (
    <div className="orders-container">
      <h2>📦 Mes commandes</h2>

      {orders.length === 0 ? (
        <p className="empty-orders">
          Vous n’avez aucune commande pour le moment.
        </p>
      ) : (
        orders.map((order) => (
          <div key={order.id} className="order-card">
            <h3>
              Commande #{order.id.toString().slice(-5)}
            </h3>

            <p className="order-date">
              {new Date(order.date).toLocaleDateString()}
            </p>

            <p>
              <strong>Adresse :</strong>{" "}
              {order.deliveryAddress}
            </p>

            <p>
              <strong>Paiement :</strong>{" "}
              {order.paymentMethod}
            </p>

            <p
              className={`order-status ${
                order.status === "LIVRÉE"
                  ? "delivered"
                  : "in-progress"
              }`}
            >
              Statut :{" "}
              {order.status === "LIVRÉE"
                ? "Livrée"
                : "En cours de livraison"}
            </p>

            <ul>
              {order.items.map((item) => (
                <li key={item.id} className="order-item">
                  <img src={item.image} alt={item.title} />
                  <span>
                    {item.title} × {item.quantity}
                  </span>
                </li>
              ))}
            </ul>

            <strong className="order-total">
              Total : {order.total} €
            </strong>

            {order.status !== "LIVRÉE" && (
              <>
                <p className="order-hint">
                  Si vous avez déjà reçu votre commande,
                  veuillez la marquer comme livrée.
                </p>

                <button
                  className="deliver-btn"
                  onClick={() =>
                    handleDelivered(order.id)
                  }
                >
                   Marquer comme livrée
                </button>
              </>
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default Orders;
