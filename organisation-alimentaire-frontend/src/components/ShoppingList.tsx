import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import "./ShoppingList.css";
import { MENUS, MenuCategory } from "../data/menusData";

const categories: Array<"Tous" | MenuCategory> = [
  "Tous",
  "Perte de poids",
  "Prise de masse",
  "Équilibré",
];

const ShoppingList = () => {
  const [filter, setFilter] = useState<(typeof categories)[number]>("Tous");
  const [openMenuId, setOpenMenuId] = useState<number | null>(null);

  const filteredMenus = useMemo(() => {
    if (filter === "Tous") return MENUS;
    return MENUS.filter((menu) => menu.category === filter);
  }, [filter]);

  const toggleIngredients = (id: number) => {
    setOpenMenuId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="menus-container">
      <h2 className="menus-title">🍽️ Menus YumGuard</h2>

      <p className="menus-intro">
        Choisis ton objectif, explore nos plats et clique sur un menu pour voir
        le détail.
      </p>

      {/* FILTRES */}
      <div className="menus-filters">
        {categories.map((cat) => (
          <button
            key={cat}
            className={filter === cat ? "active" : ""}
            onClick={() => setFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* GRID MENUS */}
      <div className="menus-grid">
        {filteredMenus.map((menu) => (
          <Link
            to={`/menus/${menu.id}`}
            key={menu.id}
            className="menu-card"
          >
            <img src={menu.image} alt={menu.title} />

            <div className="menu-overlay">
              <h3>{menu.title}</h3>

              <button
                className="ingredients-btn"
                onClick={(e) => {
                  e.preventDefault(); // empêche la navigation
                  toggleIngredients(menu.id);
                }}
              >
                {openMenuId === menu.id
                  ? "Masquer les ingrédients"
                  : `Voir les ingrédients (${menu.ingredients.length})`}
              </button>

              {openMenuId === menu.id && (
                <ul className="ingredients-list">
                  {menu.ingredients.map((ing, index) => (
                    <li key={index}>• {ing}</li>
                  ))}
                </ul>
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ShoppingList;
