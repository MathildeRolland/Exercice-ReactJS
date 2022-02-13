import React from "react";

// Component
import Comment from "../components/Comment";

// Datas
import datas from "../datas/datas";
import comments from "../datas/comments";

export default function Advanced() {
  return (
    <div className="recipes">
      <h1>Commentaires</h1>
      <p className="recipes__instruct">
        <span className="recipes__span">Exo4: </span>Afficher ci-dessous tous
        les commentaires relatifs à la recette des "Moelleux au chocolat".
      </p>
      <div className="recipe__comments">
        <Comment />
      </div>
    </div>
  );
}
