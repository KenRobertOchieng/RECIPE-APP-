import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import {  FaEdit } from "react-icons/fa";


function EditRecipe() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:3000/recipes/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setRecipe(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Failed to fetch recipe:", error);
        setLoading(false);
      });
  }, [id]);

  function handleChange(e) {
    const { name, value } = e.target;
    setRecipe((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch(`http://localhost:3000/recipes/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(recipe),
    })
      .then((res) => res.json())
      .then((updated) => {
        console.log("Updated successfully:", updated);
        navigate(`/recipes/${id}`, { state: updated });
      })
      .catch((err) => console.error("Error updating recipe:", err));
  }

    if (loading) return <p>Why in a hurry Tuliz!!!
        ...</p>;
  if (!recipe) return <p>Edit Recipe not found.</p>;

  return (
    <div className="my-edit">
      <h2>Edit Recipe</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Recipe name..."
          value={recipe.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="textArea"
          placeholder="Description..."
          value={recipe.description}
          onChange={handleChange}
        />
        <input
          type="text"
          name="ingredients"
          placeholder="Ingredients..."
          value={recipe.ingredients}
          onChange={handleChange}
        />
        <input
          type="text"
          name="textArea"
          placeholder="Instructions..."
          value={recipe.instructions}
          onChange={handleChange}
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL..."
          value={recipe.image}
          onChange={handleChange}
        />
        <button type="submit"><FaEdit/></button>
      </form>
    </div>
  );
}

export default EditRecipe;
