import { useEffect, useState } from "react";
import api from "../services/api";
import "./Inventory.css";

interface Aliment {
  id: number;
  nom: string;
  dateExpiration: string;
  quantite: number;
  categorie: string;
}

const Inventory = () => {
  const [inventory, setInventory] = useState<Aliment[]>([]);
  const [nom, setNom] = useState("");
  const [dateExpiration, setDateExpiration] = useState("");
  const [quantite, setQuantite] = useState(1);
  const [categorie, setCategorie] = useState("default");
  const [editingId, setEditingId] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fetchAliments = async () => {
    try {
      const res = await api.get<Aliment[]>("/inventaire");
      setInventory(res.data);
    } catch (error) {
      console.error("Erreur lors du chargement de l'inventaire", error);
    }
  };

  useEffect(() => {
    fetchAliments();
  }, []);

  const resetForm = () => {
    setNom("");
    setDateExpiration("");
    setQuantite(1);
    setCategorie("default");
    setEditingId(null);
    setIsModalOpen(false);
  };

  const handleSubmit = async () => {
    if (!nom || !dateExpiration || quantite < 1 || categorie === "default") {
      alert("Veuillez remplir tous les champs.");
      return;
    }

    try {
      if (editingId !== null) {
        const res = await api.put<Aliment>(`/inventaire/${editingId}`, {
          nom,
          dateExpiration,
          quantite,
          categorie,
        });

        setInventory((prev) =>
          prev.map((item) => (item.id === editingId ? res.data : item))
        );
      } else {
        const res = await api.post<Aliment>("/inventaire", {
          nom,
          dateExpiration,
          quantite,
          categorie,
        });

        setInventory((prev) => [...prev, res.data]);
      }

      resetForm();
    } catch (error) {
      console.error("Erreur lors de l'enregistrement", error);
    }
  };

  const editItem = (item: Aliment) => {
    setEditingId(item.id);
    setNom(item.nom);
    setDateExpiration(item.dateExpiration);
    setQuantite(item.quantite);
    setCategorie(item.categorie);
    setIsModalOpen(true);
  };

  const deleteItem = async (id: number) => {
    try {
      await api.delete(`/inventaire/${id}`);
      setInventory((prev) => prev.filter((item) => item.id !== id));
    } catch (error) {
      console.error("Erreur lors de la suppression", error);
    }
  };

  return (
    <div className="inventory-container">
      <h2>
        Gère ton frigo comme un pro : ajoute tes aliments, suis leur date
        d'expiration et évite le gaspillage facilement.
      </h2>

      <div className="add-item">
        <input
          type="text"
          placeholder="Nom de l'aliment"
          value={nom}
          onChange={(e) => setNom(e.target.value)}
        />
        <input
          type="date"
          value={dateExpiration}
          onChange={(e) => setDateExpiration(e.target.value)}
        />
        <input
          type="number"
          min={1}
          value={quantite}
          onChange={(e) => setQuantite(Number(e.target.value))}
        />
        <select value={categorie} onChange={(e) => setCategorie(e.target.value)}>
          <option value="default" disabled>
            Sélectionner une catégorie
          </option>
          <option value="Produits laitiers">Produits laitiers</option>
          <option value="Viande">Viande</option>
          <option value="Fruits">Fruits</option>
          <option value="Légumes">Légumes</option>
          <option value="Épicerie">Épicerie</option>
          <option value="Autre">Autre</option>
        </select>
        <button onClick={handleSubmit}>
          {editingId !== null ? "Modifier" : "Ajouter"}
        </button>
      </div>

      <table className="inventory-table">
        <thead>
          <tr>
            <th>Nom</th>
            <th>Quantité</th>
            <th>Date d'expiration</th>
            <th>Catégorie</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {inventory.map((item) => (
            <tr key={item.id}>
              <td>{item.nom}</td>
              <td>{item.quantite}</td>
              <td>{item.dateExpiration}</td>
              <td>{item.categorie}</td>
              <td>
                <button onClick={() => editItem(item)}>Modifier</button>
                <button onClick={() => deleteItem(item.id)}>Supprimer</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h3>Modifier l'aliment</h3>
            <button onClick={handleSubmit}>Enregistrer</button>
            <button onClick={resetForm}>Annuler</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Inventory;
