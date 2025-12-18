import { describe, it, expect, beforeEach } from "vitest";
import { OrdersService } from "../ordersService";

beforeEach(() => {
  localStorage.clear();
});

describe("OrdersService", () => {
  it("createOrder ajoute une commande dans le storage", () => {
    OrdersService.createOrder(
      [],
      "10 rue de Paris, 92160 Antony",
      "Carte bancaire"
    );

    const orders = OrdersService.getOrders();
    expect(orders.length).toBe(1);
    expect(orders[0].paymentMethod).toBe("Carte bancaire");
  });

  it("deleteOrder supprime une commande", () => {
    OrdersService.createOrder(
      [],
      "10 rue de Paris, 92160 Antony",
      "Carte bancaire"
    );

    const first = OrdersService.getOrders()[0];
    OrdersService.deleteOrder(first.id);

    expect(OrdersService.getOrders().length).toBe(0);
  });

  it("markAsDelivered met le statut à LIVRÉE", () => {
    OrdersService.createOrder(
      [],
      "10 rue de Paris, 92160 Antony",
      "Carte bancaire"
    );

    const first = OrdersService.getOrders()[0];
    OrdersService.markAsDelivered(first.id);

    const updated = OrdersService.getOrders()[0];
    expect(updated.status).toBe("LIVRÉE");
  });
});
