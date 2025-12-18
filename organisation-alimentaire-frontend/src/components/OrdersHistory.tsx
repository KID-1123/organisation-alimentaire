import { useEffect, useState } from "react";
import api from "../services/api";
import "./Orders.css";

interface OrderItem {
  id: number;
  nom: string;
  quantite: number;
}

interface Order {
  id: number;
  date: string;
  total: number;
  items: OrderItem[];
}

const OrdersHistory = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchOrders = async (): Promise<void> => {
    try {
      const res = await api.get<Order[]>("/orders");
      setOrders(res.data);
    } catch {
      setError("Erreur lors du chargement de l’historique des commandes.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  if (loading) return <p>Chargement...</p>;
  if (error) return <p className="error">{error}</p>;

  return (
    <div className="orders-container">
      <h2>📦 Historique des commandes</h2>

      {orders.length === 0 ? (
        <p>Aucune commande trouvée.</p>
      ) : (
        orders.map((order) => (
          <div key={order.id} className="order-card">
            <h3>Commande #{order.id}</h3>
            <p>Date : {order.date}</p>
            <p>Total : {order.total} €</p>

            <ul>
              {order.items.map((item) => (
                <li key={item.id}>
                  {item.nom} — {item.quantite}
                </li>
              ))}
            </ul>
          </div>
        ))
      )}
    </div>
  );
};

export default OrdersHistory;
