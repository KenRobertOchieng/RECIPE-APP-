
import RecipeForm from "../components/RecipeForm"
function AddRecipe(){

    const taskAdd=(addedRecipe)=>{
        setrecipes((previousTask)=>[...previousTask,addedRecipe])
      }
      return(
        <div>
            <RecipeForm taskAdd={taskAdd} />
        </div>
      )

    }
    export default AddRecipe

