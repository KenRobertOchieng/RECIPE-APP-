import React from "react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Footer from "../components/Footer"


function Home({recipes}){
    const [loading,setloading]=useState('')
    const navigate=useNavigate()
    const mappedRecipes=recipes.map((recipe)=>{
        const handleViewClick=()=>{
            setloading(recipe.id)
            setTimeout(()=>{
                navigate(`/recipes/${recipe.id}`,{state:recipe})
            },4000)
        }
        return(
            <div key={recipe.id} className="main-section">
                <h1>{recipe.name}</h1>
                <img src={recipe.image} alt={recipe.name}/>
                <p><span>Description: </span>{recipe.description}</p>

               {loading===recipe.id
                &&
                <p className="loading-data">Just a sec....🤏</p>
                }
    
                <div className="myBtn">
                <button onClick={handleViewClick}>View Recipe</button>
                <button>Edit Recipe</button>
                <button>Delete Recipe</button>
            
                </div>
            </div>
        )
    })
    return(
        <>
        <div className="my-home">
        {mappedRecipes}
        <Footer/>
            </div>
            </>    
            )
}
export default Home
