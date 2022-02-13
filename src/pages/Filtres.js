import React, { useEffect, useState } from "react";

// Styles
import "../styles/filtres.css";

// Datas
import datas from "../datas/datas";

// Components
import Card from "../components/Card";

export default function Filtres() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedRecipes, setSelectedRecipes] = useState(null);

  const onChange = (e) => {
    console.log(e.target.value);
  };

  return (
    <div className="recipes">
      <h1>Filtres</h1>
      <p className="recipes__instruct">
        <span className="recipes__span">Exo3: </span>Selon la catégorie
        sélectionnée, utiliser le composant Card pour afficher seulement les
        recettes correspondantes.
      </p>
      <form className="form">
        <div className="form__group">
          <label>Entrées</label>
          <input
            type="radio"
            id="1"
            name="category"
            value="1"
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className="form__group">
          <label>Plats</label>
          <input
            type="radio"
            id="2"
            name="category"
            value="2"
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className="form__group">
          <label>Desserts</label>
          <input
            type="radio"
            id="3"
            name="category"
            value="3"
            onChange={(e) => onChange(e)}
          />
        </div>
      </form>
      <div className="recipes__cards">
        <Card />
      </div>
    </div>
  );
}
