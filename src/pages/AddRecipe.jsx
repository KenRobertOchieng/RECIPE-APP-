import RecipeForm from "../components/RecipeForm";

function AddRecipe({ setRecipes }) {
  const taskAdd = (addedRecipe) => {
    setRecipes((previousTask) => [...previousTask, addedRecipe]);
  };

  return (
    <div>
      <RecipeForm taskAdd={taskAdd} />
    </div>
  );
}

export default AddRecipe;