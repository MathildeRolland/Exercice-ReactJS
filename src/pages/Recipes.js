import React from "react";

// Datas
import datas from "../datas/datas";

// Components
import Card from "../components/Card";

// Styles
import "../styles/recipes.css";

// Router
import { useLocation } from "react-router-dom";

export default function Recipes() {
  const location = useLocation();

  return (
    <div className="recipes">
      <h1 className="recipes__title">Recettes</h1>
      {location.pathname === "/recipes/exo1" ? (
        <p className="recipes__instruct">
          <span className="recipes__span">Exo1: </span>Afficher ci-dessous
          toutes les recettes du fichier datas.js sous forme de cartes en
          utilisant le composant Card. Afficher seulement le titre ainsi que
          l'image de la recette.
        </p>
      ) : (
        <p className="recipes__instruct">
          <span className="recipes__span">Exo2: </span>Au clic sur "voir
          plus..." de chaque carte, rediriger vers une page affichant tous les
          détails de la recette sélectionnée.
        </p>
      )}
      <div className="recipes__cards">
        <Card />
      </div>
    </div>
  );
}
