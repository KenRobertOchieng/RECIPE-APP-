import { useLocation } from "react-router-dom";
import "./RecipeDetails.css"; 

function RecipeDetails({ setRecipes }) {
  const location = useLocation();
  const data = location.state;
  console.log(location.state);

  return (
    <div className="recipe-details-container">
      <div className="recipe-header">
        <h1>{data.name}</h1>
        <img src={data.image} alt={data.name} className="recipe-image" />
      </div>

      <div className="recipe-info">
        <div className="details-section">
          <p><span className="info-label">Description:</span> {data.description}</p>
        </div>
        <div className="details-section">
          <p><span className="info-label">Ingredients:</span> {data.ingredients}</p>
        </div>
        <div className="details-section">
          <p><span className="info-label">Instructions:</span> {data.instructions}</p>
        </div>
      </div>
    </div>
  );
}

export default RecipeDetails;