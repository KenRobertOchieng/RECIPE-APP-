import React from "react"
import { useNavigate } from "react-router-dom"
import AddRecipe from "./AddRecipe"

function Home({recipes}){

    const navigate=useNavigate()
    const mappedRecipes=recipes.map((recipe)=>{
        const handleViewClick=()=>{
            navigate(`/recipes/${recipe.id}`,{state:recipe})
        }
        return(
            <div key={recipe.id} className="main-section">
                <h1>{recipe.name}</h1>
                <img src={recipe.image} alt={recipe.name}/>
                <p><span>Description: </span>{recipe.description}</p>
                <div className="myBtn">
                <button onClick={handleViewClick}>View Recipe</button>
                <button>Edit Recipe</button>
                <button>Delete Recipe</button>
                <AddRecipe onAddRecipe={handleAddRecipe} />
                </div>
            </div>
        )
    })
    return(
        <div className="my-home">
        {mappedRecipes}
            </div>
    )
}
export default Home