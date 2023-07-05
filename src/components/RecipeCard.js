import { useState } from "react";
import "./Recipe.css";
import RecipeInfo from "./RecipeInfo";

function RecipeCard(props) {
  const [opened, setOpen] = useState(false);

  return (
    <div className="recipe-data">
      <div className="recipe-card" onClick={() => setOpen(!opened)}>
        <div className="card-header">{props.recipeData.name}</div>
      </div>
      {opened && (
        <RecipeInfo
          recipeData={props.recipeData}
          updateRecipe={props.updateRecipe}
          deleteRecipe={props.deleteRecipe}
          onClose={() => setOpen(false)}
          opened={opened}
        />
      )}
    </div>
  );
}

export default RecipeCard;
