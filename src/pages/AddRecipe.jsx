import RecipeForm from "../components/RecipeForm";
import Footer from "../components/Footer";

function AddRecipe({ setRecipes }) {
  const taskAdd = (addedRecipe) => {
    setRecipes((previousTask) => [...previousTask, addedRecipe]);
  };

  return (
    <>
    <div>
      <RecipeForm taskAdd={taskAdd} />
      </div>
      <Footer />
      </>
  );
}

export default AddRecipe;