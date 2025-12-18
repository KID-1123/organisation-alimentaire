export type MenuCategory = "Perte de poids" | "Prise de masse" | "Équilibré";

export interface Menu {
  id: number;
  title: string;
  category: MenuCategory;
  image: string;
  ingredients: string[];
  price: number;
}

const IMG =
  "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1200&q=60";

export const MENUS: Menu[] = [
  // 🥗 PERTE DE POIDS
  {
    id: 1,
    title: "Bowl poulet & quinoa",
    category: "Perte de poids",
    image: IMG,
    ingredients: ["Poulet", "Quinoa", "Courgettes", "Citron"],
    price: 9.5,
  },
  {
    id: 2,
    title: "Salade thon & œufs",
    category: "Perte de poids",
    image: IMG,
    ingredients: ["Thon", "Œufs", "Salade", "Tomates"],
    price: 8.9,
  },
  {
    id: 3,
    title: "Saumon & légumes vapeur",
    category: "Perte de poids",
    image: IMG,
    ingredients: ["Saumon", "Brocoli", "Carottes"],
    price: 11.0,
  },

  // 💪 PRISE DE MASSE
  {
    id: 10,
    title: "Poulet riz brocoli",
    category: "Prise de masse",
    image: IMG,
    ingredients: ["Poulet", "Riz", "Brocoli", "Huile d’olive"],
    price: 12.5,
  },
  {
    id: 11,
    title: "Steak & patate douce",
    category: "Prise de masse",
    image: IMG,
    ingredients: ["Bœuf", "Patate douce", "Haricots verts"],
    price: 13.9,
  },
  {
    id: 12,
    title: "Pâtes au thon",
    category: "Prise de masse",
    image: IMG,
    ingredients: ["Pâtes", "Thon", "Crème légère"],
    price: 10.9,
  },

  // ⚖️ ÉQUILIBRÉ
  {
    id: 20,
    title: "Bowl méditerranéen",
    category: "Équilibré",
    image: IMG,
    ingredients: ["Riz", "Tomates", "Olives", "Poulet"],
    price: 9.9,
  },
  {
    id: 21,
    title: "Saumon & riz complet",
    category: "Équilibré",
    image: IMG,
    ingredients: ["Saumon", "Riz complet", "Épinards"],
    price: 11.9,
  },
  {
    id: 22,
    title: "Wrap poulet équilibré",
    category: "Équilibré",
    image: IMG,
    ingredients: ["Wrap", "Poulet", "Crudités"],
    price: 8.5,
  },
];
