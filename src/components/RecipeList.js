import React, { useState } from "react";
import RecipeCard from "./RecipeCard";
import "./Recipe.css";
import { v4 as uuidv4 } from "uuid";

function RecipeList() {
  const [searchWord, setSearchWord] = useState("");
  const [difficulty, setDifficulty] = useState("");
  let recipes = [
    {
      id: 0,
      name: "Roasted Broccoli",
      difficulty: "easy",
      ingredients: `1. broccoli
2. salt
3. pepper
4. oil
5. garlic`,
      instructions: `1. Cut br into florets and wash florets
2. Dry florets 
3. Spread some oil on baking sheet/parchment paper on baking tray 
4. Place florets on oiled sheet and season with salt and pepper and minced garlic and mix well
5. Bake for 10-13 mins`,
    },
    {
      id: 1,
      name: "Hojicha Overnight Oats",
      difficulty: "easy",
      ingredients: `1. milk (any type of milk),
2. oats
3. chia seeds
4. honey
5. hojicha
`,
      instructions: `1. Place dry ingredients (hojicha, chia seeds, oats) into overnight oats container
2. Add milk to container until its almost full
3. Add honey and mix to prefered taste`,
    },
    {
      id: 2,
      name: "Hojicha Chocochip Cookie",
      difficulty: "intermediate",
      ingredients: `1. 4/3 cup all purpose flour
2. 1/2 tsp baking powder
3. 1/2 tsp baking soda
4. pinch of salt
5. 2 tbsp hojicha
6. 1/3 cup granulated sugar (can pt less if prefer less sweet)
7. 2/3 cup brown sugar
8. A little less than 1/2 cup of neutral oil or butter
9. 1 tsp vanilla
10. as much baking chocolate you think you need`,
      instructions: `1. Mix flour, baking powder, baking soda, salt in medium bowl
2. Mix granulated sugar, brown sugar, hojicha in large bowl
3. Add oil (or butter), vanilla to same large bowl and mix
4. Slowly mix in dry stuff (1/3-1/2 of it at a time)
5. Chop chocolate to preferred size and fold in prefered amount of chocolate
6. Place batter fridge to cool for at least 1hr (can be overnight)
7. Scoop out cookies and place scoops ~2in apart (dough should be ball shaped)
8. If scoops are 2 inches in diameter bake ~12 min, if smaller 8-10min`,
    },
    {
      id: 3,
      name: "Hojicha Overnight Oats",
      difficulty: "easy",
      ingredients: `1. milk (any type of milk),
2. oats
3. chia seeds
4. honey
5. hojicha
`,
      instructions: `1. Place dry ingredients (hojicha, chia seeds, oats) into overnight oats container
2. Add milk to container until its almost full
3. Add honey and mix to prefered taste`,
    },
    {
      id: 4,
      name: "Hojicha Chocochip Cookie",
      difficulty: "intermediate",
      ingredients: `1. 4/3 cup all purpose flour
2. 1/2 tsp baking powder
3. 1/2 tsp baking soda
4. pinch of salt
5. 2 tbsp hojicha
6. 1/3 cup granulated sugar (can pt less if prefer less sweet)
7. 2/3 cup brown sugar
8. A little less than 1/2 cup of neutral oil or butter
9. 1 tsp vanilla
10. as much baking chocolate you think you need`,
      instructions: `1. Mix flour, baking powder, baking soda, salt in medium bowl
2. Mix granulated sugar, brown sugar, hojicha in large bowl
3. Add oil (or butter), vanilla to same large bowl and mix
4. Slowly mix in dry stuff (1/3-1/2 of it at a time)
5. Chop chocolate to preferred size and fold in prefered amount of chocolate
6. Place batter fridge to cool for at least 1hr (can be overnight)
7. Scoop out cookies and place scoops ~2in apart (dough should be ball shaped)
8. If scoops are 2 inches in diameter bake ~12 min, if smaller 8-10min`,
    },
  ];
  let [recipeList, setRecipeList] = useState(() => {
    const localRecipes = localStorage.getItem("recipeList");
    return localRecipes !== null ? JSON.parse(localRecipes) : recipes;
  });

  let handleEnterSearch = (e) => {
    if (e.key === "Enter") {
      setSearchWord(e.target.value.toString().toLowerCase());
    }
  };

  let handleDifficultyFilter = (e) => {
    setDifficulty(e.target.value);
  };

  let updateRecipe = (updatedRecipe) => {
    const newRecipeList = recipeList.map((recipe) =>
      recipe.id === updatedRecipe.id ? updatedRecipe : recipe
    );
    setRecipeList(newRecipeList);
    localStorage.setItem("recipeList", JSON.stringify(newRecipeList));
  };

  let addRecipe = () => {
    const newId = uuidv4();
    const newRecipe = {
      id: newId,
      name: "New Recipe Name",
      difficulty: "easy",
      ingredients: ``,
      instructions: ``,
    };
    setRecipeList([...recipeList, newRecipe]);
  };

  let deleteRecipe = (recipeToRemove) => {
    const newRecipeList = recipeList.filter((r) => r.id !== recipeToRemove.id);
    console.log(newRecipeList);
    setRecipeList(newRecipeList);
  };

  let filteredRecipes = recipeList
    .filter((recipe) => {
      if (searchWord !== "") {
        return recipe.name.toString().toLowerCase().includes(searchWord);
      }
      return true;
    })
    .filter((recipe) => {
      if (difficulty !== "") {
        return recipe.difficulty === difficulty;
      }
      return true;
    });

  return (
    <div className="recipe-page">
      <h1> Recipes </h1>
      <input
        type="text"
        placeholder="Search..."
        className="search-bar"
        onKeyDown={(e) => handleEnterSearch(e)}
      ></input>
      <div className="filter-bar">
        Difficulty:{" "}
        <select
          className="difficulty-selector"
          onChange={(e) => handleDifficultyFilter(e)}
          defaultValue={""}
        >
          <option value="">None</option>
          <option value="easy">Easy</option>
          <option value="intermediate">Intermediate</option>
          <option value="hard">Hard</option>
        </select>
      </div>
      {filteredRecipes.length > 0 ? (
        <div className="recipe-list">
          <div className="recipe-card add-button" onClick={addRecipe}>
            +
          </div>
          {filteredRecipes.map((data) => {
            return (
              <RecipeCard
                recipeData={data}
                updateRecipe={updateRecipe}
                deleteRecipe={deleteRecipe}
                key={data.id}
              />
            );
          })}
        </div>
      ) : (
        <span className="no-results">No results found.</span>
      )}
    </div>
  );
}

export default RecipeList;
