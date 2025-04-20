import React, { useState } from "react"
import { useNavigate } from "react-router-dom"


function AddRecipe({ onAddRecipe }) {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [ingredients, setIngredients] = useState('')
    const [instructions, setInstructions] = useState('')
    const [imageUrl, setImageUrl] = useState("");
    const navigate = useNavigate()
    function handleSubmit(e) {
        e.preventDefault()
        onAddRecipe({ name, description, ingredients, instructions, image: imageUrl })
        setName("")
        setDescription("")
        setIngredients("")
        setInstructions("")
        setImageUrl("");
        navigate("/")

    }
    return (
        <div className="my-add">
            <h1>Add</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Recipe name..." value={name} onChange={e => setName(e.target.value)} />
                <input type="text" placeholder="Recipe description..." value={description} onChange={e => setDescription(e.target.value)} />
                <input type="text" placeholder="Recipe ingredients..." value={ingredients} onChange={e => setIngredients(e.target.value)} />
                <input type="text" placeholder="Recipe instructions..." value={instructions} onChange={e => (setInstructions(e.target.value))} />
                <input type="text" placeholder="Image URL..." value={imageUrl} onChange={e => setImageUrl(e.target.value)} />
                <button type="submit">Add Recipe</button>
            </form>
        </div>
    )
}
export default AddRecipe





