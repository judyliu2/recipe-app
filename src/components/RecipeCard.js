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
        <div className="card-header">{data.name}</div>
      </div>
      {opened && (
        <RecipeInfo
          data={data}
          onClose={() => setOpen(false)}
          opened={opened}
        />
      )}
    </div>
  );
}

export default RecipeCard;
