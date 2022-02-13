import React from "react";

// Datas
import datas from "../datas/datas.js";

// Router
// import { useParams } from "react-router-dom";

// Styles
import "../styles/recipe.css";

export default function Recipe() {
  return (
    <div className="recipe">
      <h1 className="recipe__title">Le titre de la recette</h1>
      <div
        className="recipe__image"
        style={{
          backgroundImage: `url(https://www.galbani.fr/wp-content/uploads/2020/03/AdobeStock_299792726.jpeg)`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      ></div>
      <p className="recipe__text">
        Nombre de personnes: <span className="recipe__number">10</span>
      </p>
      <div className="recipe__content">
        <p className="recipe__subtitle">Ingrédients:</p>
        <ul className="recipe__list">
          <li className="recipe__list-item">Un ingrédient</li>
          <li className="recipe__list-item">Deux ingrédients</li>
          <li className="recipe__list-item">Trois ingrédients</li>
        </ul>
      </div>
      <p className="recipe__subtitle">Etapes:</p>
      <p className="recipe__steps">Les tépaes de la recette</p>
    </div>
  );
}
