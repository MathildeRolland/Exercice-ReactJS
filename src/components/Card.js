import React from "react";

// Router
import { NavLink } from "react-router-dom";

export default function Card() {
  return (
    <div className="card">
      <div
        className="card__image"
        style={{
          backgroundImage: `url(https://www.galbani.fr/wp-content/uploads/2020/03/AdobeStock_299792726.jpeg)`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      ></div>
      <div className="card__content">
        <h2 className="card__title">Le titre de la recipes__title</h2>
        {/* Trouver la bonne manière de rediriger vers la page de la recette... La moitié est déjà fait! */}
        <NavLink className="card__link" to="#">
          Voir plus...
        </NavLink>
      </div>
    </div>
  );
}
