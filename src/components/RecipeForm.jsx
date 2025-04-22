import React, { useState } from "react";

function RecipeForm({ taskAdd }) {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [instructions, setInstructions] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        const addedRecipe = {
            name,
            description,
            ingredients,
            instructions,
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
            if (taskAdd) {
                taskAdd(data); // 
            }
            setName("");
            setDescription("");
            setIngredients("");
            setInstructions("");
            setImageUrl("");
        })
        .catch(err => {
            console.log(err);
        });
    }

    return (
        <div className="my-add">
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Recipe name..." value={name} onChange={e => setName(e.target.value)} />
                <input type="text" placeholder="Recipe description..." value={description} onChange={e => setDescription(e.target.value)} />
                <input type="text" placeholder="Recipe ingredients..." value={ingredients} onChange={e => setIngredients(e.target.value)} />
                <input type="text" placeholder="Recipe instructions..." value={instructions} onChange={e => setInstructions(e.target.value)} />
                <input type="text" placeholder="Image URL..." value={imageUrl} onChange={e => setImageUrl(e.target.value)} />
                <button type="submit">Add Recipe</button>
            </form>
        </div>
    );
}

export default RecipeForm;
