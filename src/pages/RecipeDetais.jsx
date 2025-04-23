import { useLocation } from "react-router-dom"
function RecipeDetails({setRecipes}){
    const location=useLocation()
    const data=location.state
    console.log(location.state)

    return(
        <div className="main-section">
               <h1>{data.name}</h1>
                <img src={data.image} alt={data.name} ></img>
                <p><span>Description: </span>{data.description}</p>
                <p><span>Ingredients: </span>{data.ingredients}</p>
                <p> <span>Instructions: </span>{data.instructions}</p>
        </div>
    )
}
export default RecipeDetails

