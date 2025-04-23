import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function RecipeForm({ taskAdd }) {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [instructions, setInstructions] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        const addedRecipe = {
            name: name,
            description: description,
            ingredients: ingredients,
            instructions: instructions,
            image: imageUrl
        };
        fetch('http://localhost:3000/recipes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(addedRecipe)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setName("");
            setDescription("");
            setIngredients("");
            setInstructions("");
            setImageUrl("");
            navigate('/'); // Redirect after adding
        })
        .catch(err => {
            console.log(err);
        });
    }

    return (
        <div className="my-add-container"> 
            <h2>Add Your Recipe</h2>
            <form onSubmit={handleSubmit} className="add-recipe-form">
                <div className="form-group">
                    <label htmlFor="name">Recipe Name:</label>
                    <input
                        type="text"
                        id="name"
                        placeholder="Recipe name..."
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description:</label>
                    <textarea
                        type="text"
                        id="description"
                        placeholder="Recipe description..."
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="ingredients">Ingredients:</label>
                    <input
                        type="text"
                        id="ingredients"
                        placeholder="Recipe ingredients..."
                        value={ingredients}
                        onChange={e => setIngredients(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="instructions">Instructions:</label>
                    <textarea
                        type="text"
                        id="instructions"
                        placeholder="Recipe instructions..."
                        value={instructions}
                        onChange={e => (setInstructions(e.target.value))}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="imageUrl">Image URL:</label>
                    <input
                        type="text"
                        id="imageUrl"
                        placeholder="Image URL..."
                        value={imageUrl}
                        onChange={e => setImageUrl(e.target.value)}
                    />
                </div>
                <button type="submit" className="add-button">Add Recipe</button>
            </form>
        </div>
    );
}

export default RecipeForm;


