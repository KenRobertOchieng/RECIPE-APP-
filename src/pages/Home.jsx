import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaTrash, FaEdit } from "react-icons/fa";
import Footer from "../components/Footer";
import "./Home.css";

function Home({ recipes, setRecipes }) {
  const [loading, setloading] = useState("");
  const navigate = useNavigate();

  const handleViewClick = (recipe) => {
    setloading(recipe.id);
    setTimeout(() => {
      navigate(`/recipes/${recipe.id}`, { state: recipe });
    }, 1000);
  };

  const handleDeleteClick = (id) => {
    const confirmDelete = window.confirm(
      `Are you sure you want to delete ${
        recipes.find((r) => r.id === id)?.name
      }?`
    );
    if (!confirmDelete) {
      return;
    }
    fetch(`http://localhost:3000/recipes/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
          setRecipes((prevRecipes) =>
            prevRecipes.filter((recipe) => recipe.id !== id)
          );
          console.log(`Recipe with ID ${id} deleted successfully.`);
        } else {
          console.error("Failed to delete recipe.");
        }
      })
      .catch((error) => {
        console.error("Error deleting recipe:", error);
      });
  };

  return (
    <div className="my-home">
      <div className="recipes-grid">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="recipe-card">
            <div
              className="recipe-image-container"
              onClick={() => handleViewClick(recipe)}
              style={{ cursor: "pointer" }}
            >
              <img
                src={recipe.image}
                alt={recipe.name}
                className="recipe-image"
              />
              {recipe.cookingTime && (
                <div className="recipe-time">{recipe.cookingTime}</div>
              )}{" "}
              {/* Assuming 'cookingTime' exists */}
            </div>
            <div className="recipe-details">
              {recipe.category && (
                <p className="recipe-category">
                  {recipe.category?.toUpperCase()}
                </p>
              )}{" "}
              {/* Assuming 'category' exists */}
              <h3 className="recipe-title">{recipe.name}</h3>
              {recipe.author && (
                <p className="recipe-author">Author: {recipe.author}</p>
              )}{" "}
              {/* Assuming 'author' exists */}
              <div className="recipe-actions">
                <div className="admin-actions">
                  <button
                    onClick={() => navigate(`/edit/${recipe.id}`)}
                    aria-label="Edit"
                  >
                    <FaEdit className="edit-icon" />
                  </button>
                  <button
                    onClick={() => handleDeleteClick(recipe.id)}
                    aria-label="Delete"
                  >
                    <FaTrash className="delete-icon" />
                  </button>
                </div>
              </div>
            </div>
            {loading === recipe.id && (
              <p className="loading-data">Just a sec....🤏</p>
            )}
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Home;
