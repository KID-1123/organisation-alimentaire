import { useEffect, useState } from "react";
import { OrdersService } from "../services/ordersService";

const OrdersHistory = () => {
  const [orders, setOrders] = useState<any[]>([]);

  useEffect(() => {
    setOrders(OrdersService.getOrders());
  }, []);

  return (
    <div style={{ padding: "120px", color: "white" }}>
      <h2>📦 Historique des commandes</h2>

      {orders.length === 0 ? (
        <p>Aucune commande.</p>
      ) : (
        orders.map((order) => (
          <div key={order.id}>
            <p>Date : {new Date(order.createdAt).toLocaleString()}</p>
            <p>Total : {order.total.toFixed(2)} €</p>
          </div>
        ))
      )}
    </div>
  );
};

export default OrdersHistory;
