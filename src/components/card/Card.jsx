import React from "react";
import "./Card.css";

function Card({ title, description, id, deleteTask }) {
  return (
    <article className="card_task">
      <div className="content_card">
        <h1>Hola {title}!</h1>
        <p>Tu color elegido es {description}</p>
      </div>
      <div className="btn_container">
        <button onClick={() => deleteTask(id)} className="btn_delete">
          Eliminar mensaje
        </button>
      </div>
    </article>
  );
}

export default Card;
