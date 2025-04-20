
import RecipeForm from "../components/RecipeForm"
function AddRecipe(){

    const taskAdd=(addedRecipe)=>{
        setrecipes((previousTask)=>[...previousTask,addedRecipe])
      }
    return(
        <div>
            <RecipeForm taskAdd={taskAdd}/>
import React, { useState } from "react"


function AddRecipe({onAddRecipe}){
    const [name,setName]=useState('')
    const [description,setDescription]=useState('')
    const [ingredients,setIngredients]=useState('')
    const [instructions,setInstructions]=useState('')
    const [imageUrl, setImageUrl] = useState("");
    function handleSubmit(e){
        e.preventDefault()
        onAddRecipe({name,description,ingredients,instructions})
        setName("")
        setDescription("")
        setIngredients("")
        setInstructions("")
        setImageUrl("");
       
    }
    return(
        <div className="my-add">
            <h1>Add</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Recipe name..." value={name} onChange={e=> setName(e.target.value)}/>
                <input type="text" placeholder="Recipe description..."value={description} onChange={e=>setDescription(e.target.value)} />
                <input type="text" placeholder="Recipe ingredients..." value={ingredients} onChange={e=>setIngredients(e.target.value)} />
                <input type="text" placeholder="Recipe instructions..." value={instructions} onChange={e=>(setInstructions(e.target.value))}/>
                <input type="text" placeholder="Image URL..." value={imageUrl} onChange={e => setImageUrl(e.target.value)}/>
                <button type="submit">Add Recipe</button>
            </form>
        </div>
    )
}
export default AddRecipe




