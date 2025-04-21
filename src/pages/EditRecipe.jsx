import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function EditRecipe({ onEditRecipe }) {
  const { id } = useParams(); 
  const navigate = useNavigate(); 
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  
  useEffect(() => {
    fetch(`http://localhost:3000/recipes/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setName(data.name);
        setDescription(data.description);
        setIngredients(data.ingredients);
        setInstructions(data.instructions);
        setImageUrl(data.imageUrl);
      })
      .catch((err) => console.error("Error loading recipe:", err));
  }, [id]);

  
  function handleSubmit(e) {
    e.preventDefault();

    
    const updatedRecipe = {
      name,
      description,
      ingredients,
      instructions,
      imageUrl,
    };

    onEditRecipe(updatedRecipe);

    
    setName("");
    setDescription("");
    setIngredients("");
    setInstructions("");
    setImageUrl("");

    
    navigate("/");
  }

  return (
    <div className="edit-recipe">
      <h1>Edit Recipe</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Recipe name..."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Recipe description..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="text"
          placeholder="Recipe ingredients..."
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
        />
        <input
          type="text"
          placeholder="Recipe instructions..."
          value={instructions}
          onChange={(e) => setInstructions(e.target.value)}
        />
        <input
          type="text"
          placeholder="Image URL..."
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
}

export default EditRecipe;
