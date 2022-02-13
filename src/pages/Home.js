import React from "react";

// Router
import { NavLink } from "react-router-dom";

// Styles
import "../styles/home.css";

export default function Home() {
  return (
    <div className="home">
      <div className="home__first">
        <h1 className="home__title">Exercices made by Mathilde</h1>
        <p
          style={{
            fontStyle: "italic",
            fontWeight: "bold",
            marginBottom: "2rem",
          }}
        >
          Sujets traités: map, filter, find, react-router-dom, et un peu de
          hooks React.
        </p>
        <p>
          L'ensemble des exercices 1, 2 et 3 se basent sur le fichier datas.js
        </p>
        <ul className="home__list">
          <li className="home__list-item">
            <NavLink className="home__link" to="/recipes/exo1">
              Exo 1
            </NavLink>
          </li>
          <li className="home__list-item">
            <NavLink className="home__link" to="/recipes/exo2">
              Exo 2
            </NavLink>
          </li>
          <li className="home__list-item">
            <NavLink className="home__link" to="/filters">
              Exo 3
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="home__second">
        <p className="home__instruct">
          L'exercice 4 se base sur les fichiers datas.js et comments.js
        </p>
        <div className="home__list">
          <NavLink className="home__link" to="/advanced">
            Exo4
          </NavLink>
        </div>
      </div>
      <h3 style={{ marginTop: "5rem" }}>Bonne chance!!</h3>
    </div>
  );
}
