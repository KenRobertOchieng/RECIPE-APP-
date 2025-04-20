import React from "react"

 function RecipeList({ recipes }) {
  if (recipes.length === 0) {
    return <p>No recipes yet,add one!</p>
  }

  return (
    <div className="recipe-list">
      {recipes.map((r, i) => (
        <div key={i} className="recipe-card">
          <h2>{r.name}</h2>
          <p>{r.description}</p>
          {r.imageUrl && (
            <img
              src={r.imageUrl}
              alt={r.name}
              style={{ maxWidth: "100%", height: "auto" }}
            />
          )}
          <h4>Ingredients:</h4>
          <p>{r.ingredients}</p>
          <h4>Instructions:</h4>
          <p>{r.instructions}</p>
        </div>
      ))}
    </div>
  )
}
export default RecipeList