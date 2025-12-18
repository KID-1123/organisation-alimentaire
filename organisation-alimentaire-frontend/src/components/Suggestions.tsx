import { useCallback, useEffect, useState } from "react";
import api from "../services/api";
import { getRecipesByIngredients } from "../services/spoonacular";
import "./Suggestions.css";

interface Aliment {
  id: number;
  nom: string;
}

interface Recette {
  id: number;
  title: string;
  image: string;
  usedIngredients: { name: string }[];
  missedIngredients: { name: string }[];
}

const Suggestions = () => {
  const [inventaire, setInventaire] = useState<Aliment[]>([]);
  const [recettes, setRecettes] = useState<Recette[]>([]);
  const [categorie, setCategorie] = useState<"equilibre" | "perte" | "prise">(
    "equilibre"
  );
  const [error, setError] = useState<string | null>(null);

  const fetchInventaire = useCallback(async () => {
    try {
      const res = await api.get<Aliment[]>("/inventaire");
      setInventaire(res.data);
    } catch {
      setError("Erreur lors du chargement de l'inventaire");
    }
  }, []);

  const fetchRecettes = useCallback(async () => {
    try {
      const ingredients = inventaire.map((a) => a.nom);
      const data = await getRecipesByIngredients(ingredients);
      setRecettes(data as Recette[]);
    } catch {
      setError("Erreur lors de la récupération des recettes");
    }
  }, [inventaire]);

  useEffect(() => {
    fetchInventaire();
  }, [fetchInventaire]);

  useEffect(() => {
    if (inventaire.length > 0) {
      fetchRecettes();
    }
  }, [inventaire, fetchRecettes]);

  return (
    <div className="suggestions-container">
      <h2>Suggestions de plats</h2>

      <div className="category-filters">
        <button
          className={categorie === "equilibre" ? "active" : ""}
          onClick={() => setCategorie("equilibre")}
        >
          Équilibré
        </button>
        <button
          className={categorie === "perte" ? "active" : ""}
          onClick={() => setCategorie("perte")}
        >
          Perte de poids
        </button>
        <button
          className={categorie === "prise" ? "active" : ""}
          onClick={() => setCategorie("prise")}
        >
          Prise de masse
        </button>
      </div>

      {error && <p className="error">{error}</p>}

      <div className="recettes-grid">
        {recettes.map((recette) => (
          <div key={recette.id} className="recette-card">
            <img src={recette.image} alt={recette.title} />
            <h3>{recette.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Suggestions;
