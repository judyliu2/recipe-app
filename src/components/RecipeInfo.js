import React from "react";
import "./Recipe.css";

function RecipeInfo({ data, onClose, opened }) {
  return (
    <div
      className={`recipe-info-modal ${opened ? "open" : ""}`}
      id={data.id}
      onClick={onClose}
    >
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div className="modal-title">{data.name}</div>
        </div>
        <div className="modal-body">
          <div className="modal-subtitle">Ingredients</div>
          <ol>
            {data.ingredients.map((ingredient) => {
              return <li>{ingredient}</li>;
            })}
          </ol>
          <div className="modal-subtitle">Instructions</div>
          <ol>
            {data.instructions.map((instruction) => {
              return <li>{instruction}</li>;
            })}
          </ol>
        </div>
        <div className="modal-footer">
          <button className="button" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default RecipeInfo;
