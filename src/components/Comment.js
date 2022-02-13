import React from "react";

// Styles
import "../styles/comment.css";

export default function Comment() {
  return (
    <div className="comment">
      <p className="comment__author">L'auteur du commentaire</p>
      <div className="comment__content">Le contenu du commentaire</div>
    </div>
  );
}
