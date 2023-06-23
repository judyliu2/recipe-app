import { useState } from "react";
import "./Recipe.css";
import RecipeInfo from "./RecipeInfo";

function RecipeCard({ data }) {
  const [opened, setOpen] = useState(false);

  return (
    <div>
      <div
        className="recipe-card"
        id={data.id}
        onClick={() => setOpen(!opened)}
      >
        <div className="card-header">
          <h3>{data.name}</h3>
        </div>
        {opened && (
          <RecipeInfo
            data={data}
            onClose={() => setOpen(false)}
            opened={opened}
          />
        )}
      </div>
    </div>
  );
}

export default RecipeCard;
