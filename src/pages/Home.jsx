// import React from "react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { FaTrash, FaEdit } from "react-icons/fa";
import Footer from "../components/Footer"


function Home({recipes, setRecipes}){
    const [loading,setloading]=useState('')
    const navigate=useNavigate()
    const mappedRecipes=recipes.map((recipe)=>{
        const handleViewClick=()=>{
            setloading(recipe.id)
            setTimeout(()=>{
                navigate(`/recipes/${recipe.id}`,{state:recipe})
            },2000)
        };
        const handleDeleteClick = (id) => {
            const confirmDelete = window.confirm(`Are you sure you want to delete ${recipe.name}?`);
            if(!confirmDelete){
                return;
            }
            fetch(`http://localhost:3000/recipes/${id}`, {
                method: 'DELETE',
            })
            .then(response => {
                if (response.ok) {
                    setRecipes(prevRecipes => prevRecipes.filter(recipe => recipe.id !== id));
                    console.log(`Recipe with ID ${id} deleted successfully.`);
                } else {
                    console.error('Failed to delete recipe.');
                }
            })
            .catch(error => {
                console.error('Error deleting recipe:', error);
            });
        };
        return (
          <div key={recipe.id} className="main-section">
            <h1>{recipe.name}</h1>
            <img src={recipe.image} alt={recipe.name} />
            <p>
              <span>Description: </span>
              {recipe.description}
            </p>

               {loading===recipe.id
                &&
                <p className="loading-data">Just a sec....🤏</p>
                }
    
                <div className="myBtn">
                <button onClick={handleViewClick}>View Recipe</button>
                <button><FaEdit/></button>
                <button onClick={()=> handleDeleteClick(recipe.id)}>  <FaTrash /> </button>
            
                </div>
            </div>
        );
    })
    return(
        <>
        <div className="my-home">
            <div className="card-wrapper">
        {mappedRecipes}
        </div>
        <Footer/>
            </div>
            </>    
            )
}


export default Home;