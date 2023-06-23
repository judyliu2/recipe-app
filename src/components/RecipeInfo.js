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
          <h3 className="modal-title">{data.name}</h3>
        </div>
        <div className="modal-body">
          <h4>Ingredients</h4>
          <ol>
            {data.ingredients.map((ingredient) => {
              return <li>{ingredient}</li>;
            })}
          </ol>
          <h4>Instructions</h4>
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
