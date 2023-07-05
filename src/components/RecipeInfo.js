import React, { useState } from "react";
import "./Recipe.css";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";

function RecipeInfo(props) {
  const [editMode, setEdit] = useState(false);

  const [recipeData, setRecipeData] = useState(props.recipeData);
  const [recipeDiff, setRecipeDiff] = useState(props.recipeData.difficulty);
  const [recipeName, setRecipeName] = useState(props.recipeData.name);
  const [recipeIng, setRecipeIng] = useState(props.recipeData.ingredients);
  const [recipeIns, setRecipeIns] = useState(props.recipeData.instructions);

  let updateWholeRecipe = () => {
    setRecipeData({
      ...recipeData,
      difficulty: recipeDiff,
      name: recipeName,
      ingredients: recipeIng,
      instructions: recipeIns,
    });
    props.updateRecipe({
      ...recipeData,
      difficulty: recipeDiff,
      name: recipeName,
      ingredients: recipeIng,
      instructions: recipeIns,
    });
    setEdit(false);
  };

  return (
    <div
      className={`recipe-info-modal ${props.opened ? "open" : ""}`}
      id={recipeData.id}
      onClick={props.onClose}
    >
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {editMode ? (
          <>
            <div className="modal-header">
              <div className="modal-title">
                Recipe Name:{" "}
                <input
                  type="text"
                  placeholder={recipeName}
                  value={recipeName}
                  onChange={(e) => setRecipeName(e.target.value)}
                ></input>
              </div>
            </div>
            <div className="modal-body">
              <div className="modal-subtitle">
                Difficulty:{" "}
                <select
                  className="difficulty-selector"
                  defaultValue={recipeDiff}
                  onChange={(e) => setRecipeDiff(e.target.value)}
                >
                  <option value="easy">Easy</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="hard">Hard</option>
                </select>
              </div>
              <div className="modal-subtitle">Ingredients</div>
              <textarea
                className="text-body"
                value={recipeIng}
                onChange={(e) => setRecipeIng(e.target.value)}
              ></textarea>
              <div className="modal-subtitle">Instructions</div>
              <textarea
                className="text-body"
                value={recipeIns}
                onChange={(e) => setRecipeIns(e.target.value)}
              ></textarea>
            </div>
            <div className="modal-footer">
              <button
                className="button"
                onClick={(e) => {
                  updateWholeRecipe();
                }}
              >
                Save
              </button>
              <button className="button" onClick={props.onClose}>
                Close
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="modal-header">
              <div className="modal-title">
                <>
                  {recipeData.name}
                  <button
                    className="edit-button"
                    onClick={() => setEdit(!editMode)}
                  >
                    <AiFillEdit />
                  </button>
                </>
              </div>
              <div
                className="delete-button"
                onClick={() => props.deleteRecipe(recipeData)}
              >
                <AiFillDelete />{" "}
              </div>
            </div>
            <div className="modal-body">
              <div className="modal-subtitle">
                Difficulty:{" "}
                <span className="difficulty-tag">{recipeData.difficulty}</span>
              </div>
              <div className="modal-subtitle">Ingredients</div>
              <p className="display-linebreak">{recipeData.ingredients}</p>
              <div className="modal-subtitle">Instructions</div>
              <p className="display-linebreak">{recipeData.instructions}</p>
            </div>
            <div className="modal-footer">
              <button className="button" onClick={props.onClose}>
                Close
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default RecipeInfo;
