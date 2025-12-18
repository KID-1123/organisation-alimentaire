import { Menu } from "../data/menusData";

export type OrderStatus =
  | "EN_COURS_DE_LIVRAISON"
  | "LIVRÉE";

export interface OrderItem extends Menu {
  quantity: number;
}

export interface Order {
  id: number;
  date: string;
  items: OrderItem[];
  total: number;
  status: OrderStatus;
  deliveryAddress: string;
  paymentMethod: string;
}

const STORAGE_KEY = "yumguard_orders";

export const OrdersService = {
  createOrder(
    items: OrderItem[],
    deliveryAddress: string,
    paymentMethod: string
  ) {
    const existingOrders: Order[] = JSON.parse(
      localStorage.getItem(STORAGE_KEY) || "[]"
    );

    const total = items.reduce(
      (sum, item) => sum + item.quantity * 10,
      0
    );

    const newOrder: Order = {
      id: Date.now(),
      date: new Date().toISOString(),
      items,
      total,
      status: "EN_COURS_DE_LIVRAISON",
      deliveryAddress,
      paymentMethod,
    };

    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify([...existingOrders, newOrder])
    );
  },

  getOrders(): Order[] {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
  },

  markAsDelivered(orderId: number) {
    const orders: Order[] = JSON.parse(
      localStorage.getItem(STORAGE_KEY) || "[]"
    );

    const updated = orders.map((order) =>
      order.id === orderId
        ? { ...order, status: "LIVRÉE" }
        : order
    );

    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  },

  deleteOrder(orderId: number) {
    const orders: Order[] = JSON.parse(
      localStorage.getItem(STORAGE_KEY) || "[]"
    );

    const filtered = orders.filter(
      (order) => order.id !== orderId
    );

    localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
  },
};
